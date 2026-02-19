/**
 * Auth via Envoy gRPC-Web (lviv.auth.v1.AuthService).
 * - Register / Login are public (no token).
 * - GetProfile, Logout require metadata: authorization: "Bearer <access_token>".
 */

import { AuthServiceClient } from "../grpc/auth/v1/AuthServiceClientPb";
import * as auth_pb from "../grpc/auth/v1/auth_pb";

function getBaseUrl(): string {
  const url =
    (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_GRPC_WEB_URL) ||
    "http://localhost:8085";
  return url.replace(/\/$/, "");
}

let client: AuthServiceClient | null = null;

function getClient(): AuthServiceClient {
  if (!client) {
    client = new AuthServiceClient(getBaseUrl(), null, null);
  }
  return client;
}

/** Metadata for protected calls: authorization Bearer <token> */
export function authMetadata(accessToken: string): Record<string, string> {
  return { authorization: `Bearer ${accessToken}` };
}

/** Turn gRPC/grpc-web errors (including deserialization failures) into a user-facing message. */
function toUserMessage(err: unknown, fallback: string): string {
  const msg = (err as { message?: string })?.message ?? "";
  if (/deserializ|Assertion failed|response:\s*undefined|Message parsing ended unexpectedly/i.test(msg)) {
    return "Auth response invalid: backend may be sending a wrong gRPC-Web frame length or truncated body. Ensure the auth service sends the full LoginResponse with correct length prefix (see docs/GRPC_WEB_AUTH_FRAME_FIX.md).";
  }
  if (/UNAUTHENTICATED|401|unauthorized/i.test(msg)) {
    return "Invalid email or password.";
  }
  if (/UNAVAILABLE|502|503|ECONNREFUSED|fetch failed/i.test(msg)) {
    return "Auth service unavailable. Check that Envoy is running at " + getBaseUrl() + ".";
  }
  return msg || fallback;
}

export interface RegisterParams {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResult {
  success: boolean;
  message?: string;
  user?: { id: string; email: string; username: string };
}

export async function register(params: RegisterParams): Promise<RegisterResult> {
  const req = new auth_pb.RegisterRequest();
  req.setUsername(params.username);
  req.setEmail(params.email);
  req.setPassword(params.password);

  try {
    const res = await getClient().register(req, {});
    const message = res.getMessage();
    const userMsg = res.getUser();
    const user = userMsg
      ? { id: userMsg.getId(), email: userMsg.getEmail(), username: userMsg.getUsername() }
      : undefined;
    return { success: true, message: message || undefined, user };
  } catch (e: unknown) {
    return {
      success: false,
      message: toUserMessage(e, "Registration failed"),
    };
  }
}

export interface LoginParams {
  email: string;
  password: string;
  otpCode?: string;
  rememberMe?: boolean;
}

export interface LoginResult {
  success: boolean;
  message?: string;
  accessToken?: string;
  refreshToken?: string;
  user?: { id: string; email: string; username: string };
  requiresMfa?: boolean;
  mfaChallengeId?: string;
}

export async function login(params: LoginParams): Promise<LoginResult> {
  const req = new auth_pb.LoginRequest();
  req.setEmail(params.email);
  req.setPassword(params.password);
  if (params.otpCode) req.setOtpCode(params.otpCode);
  if (params.rememberMe != null) req.setRememberMe(params.rememberMe);

  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/lviv.auth.v1.AuthService/Login`;
  console.log("[authService.login] request", { url, email: params.email, format: "grpc-web" });

  try {
    const res = await getClient().login(req, {});
    const tokenInfo = res.getTokenInfo();
    const userMsg = res.getUser();
    const user = userMsg
      ? { id: userMsg.getId(), email: userMsg.getEmail(), username: userMsg.getUsername() }
      : undefined;
    const accessToken = tokenInfo?.getAccessToken() || "";
    const refreshToken = tokenInfo?.getRefreshToken() || "";
    console.log("[authService.login] response", {
      hasTokenInfo: !!tokenInfo,
      accessTokenLength: accessToken.length,
      refreshTokenLength: refreshToken?.length ?? 0,
      user,
      requiresMfa: res.getRequiresMfa(),
      mfaChallengeId: res.getMfaChallengeId() || undefined,
    });
    if (!accessToken) {
      return { success: false, message: "Invalid response: no token returned" };
    }
    return {
      success: true,
      accessToken,
      refreshToken: refreshToken || undefined,
      user,
      requiresMfa: res.getRequiresMfa(),
      mfaChallengeId: res.getMfaChallengeId() || undefined,
    };
  } catch (e: unknown) {
    const errMsg = (e as { message?: string })?.message ?? "";
    console.log("[authService.login] error", {
      error: e,
      message: errMsg,
      code: (e as { code?: number })?.code,
    });
    if (/deserializ|Assertion failed|response:\s*undefined/i.test(errMsg)) {
      try {
        const res = await loginViaRawFetch(req, url);
        const tokenInfo = res.getTokenInfo();
        const userMsg = res.getUser();
        const user = userMsg
          ? { id: userMsg.getId(), email: userMsg.getEmail(), username: userMsg.getUsername() }
          : undefined;
        const accessToken = tokenInfo?.getAccessToken() || "";
        const refreshToken = tokenInfo?.getRefreshToken() || "";
        if (accessToken) {
          return {
            success: true,
            accessToken,
            refreshToken: refreshToken || undefined,
            user,
            requiresMfa: res.getRequiresMfa(),
            mfaChallengeId: res.getMfaChallengeId() || undefined,
          };
        }
      } catch (rawErr: unknown) {
        console.log("[authService.login] raw fetch fallback error", rawErr);
      }
    }
    return {
      success: false,
      message: toUserMessage(e, "Login failed"),
    };
  }
}

/**
 * Login via raw fetch (application/grpc-web-text) and manual frame parse.
 * Used when the standard grpc-web client fails to deserialize (e.g. frame length mismatch).
 * Logs frame sizes for debugging.
 */
async function loginViaRawFetch(
  req: auth_pb.LoginRequest,
  url: string
): Promise<auth_pb.LoginResponse> {
  const requestBytes = req.serializeBinary();
  const frame = new Uint8Array(5 + requestBytes.length);
  frame[0] = 0;
  const len = requestBytes.length;
  frame[1] = (len >> 24) & 0xff;
  frame[2] = (len >> 16) & 0xff;
  frame[3] = (len >> 8) & 0xff;
  frame[4] = len & 0xff;
  frame.set(requestBytes, 5);
  const body =
    typeof btoa !== "undefined"
      ? btoa(String.fromCharCode(...frame))
      : Buffer.from(frame).toString("base64");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/grpc-web-text",
      Accept: "application/grpc-web-text",
    },
    body,
  });

  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  const isGrpcWebText = contentType.indexOf("application/grpc-web-text") === 0;

  // Same decode path as grpc-web (used by business/claim request clients): get body as text,
  // trim to multiple of 4, then base64-decode. Matches XHR responseText → $b() flow.
  const raw = await (async (): Promise<Uint8Array> => {
    if (isGrpcWebText) {
      const text = await response.text();
      debugLoginResponse({
        step: "1_response",
        ok: response.ok,
        status: response.status,
        contentType: response.headers.get("content-type"),
        bodyByteLength: text.length,
        bodyAs: "text (grpc-web-text)",
      });
      const trimmed = text.length - (text.length % 4);
      const chunk = trimmed > 0 ? text.slice(0, trimmed) : "";
      const decoded = base64DecodeString(chunk);
      debugLoginResponse({
        step: "2_parse",
        bodyWas: "base64 (decoded from text, trim to mod 4)",
        parsedByteLength: decoded.length,
      });
      return decoded;
    }
    const buffer = await response.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    debugLoginResponse({
      step: "1_response",
      ok: response.ok,
      status: response.status,
      contentType: response.headers.get("content-type"),
      bodyByteLength: buffer.byteLength,
      firstBytes: Array.from(bytes.slice(0, 10)),
    });
    const decoded = parseGrpcWebResponseBody(bytes);
    debugLoginResponse({
      step: "2_parse",
      bodyWas: bytes.length >= 5 && bytes[0] === 0 ? "binary (first byte 0)" : "base64 (decoded to binary)",
      parsedByteLength: decoded.length,
    });
    return decoded;
  })();

  if (raw.length < 5) {
    debugLoginResponse({ step: "3_fail", reason: "response_too_short", rawLength: raw.length });
    throw new Error("Response too short");
  }
  const declaredLength = (raw[1]! << 24) | (raw[2]! << 16) | (raw[3]! << 8) | raw[4]!;
  const payloadStart = 5;
  const payloadAvailable = raw.length - payloadStart;

  debugLoginResponse({
    step: "3_frame",
    declaredLength,
    payloadAvailable,
    problem:
      declaredLength !== payloadAvailable
        ? `Backend says ${declaredLength} bytes but we have ${payloadAvailable}. Will try both lengths.`
        : null,
  });

  // Use only the first frame's payload. If backend sent multiple frames (data + trailers),
  // we must not include the next frame. Pass a copy so the BinaryReader sees exactly len bytes.
  // When declaredLength !== payloadAvailable, try declared length, full available, and every
  // length in between (backend may send wrong length in header).
  const minLen = Math.min(declaredLength, payloadAvailable);
  const maxLen = payloadAvailable;
  const lengthsToTry: number[] =
    payloadAvailable === declaredLength
      ? [payloadAvailable]
      : Array.from({ length: maxLen - minLen + 1 }, (_, i) => minLen + i);
  const seen = new Set<number>();
  for (const len of lengthsToTry) {
    if (len <= 0 || len > payloadAvailable || seen.has(len)) continue;
    seen.add(len);
    const slice = raw.slice(payloadStart, payloadStart + len);
    const payload = new Uint8Array(slice);
    try {
      const res = auth_pb.LoginResponse.deserializeBinary(payload);
      debugLoginResponse({ step: "4_deserialize", success: true, payloadLengthUsed: len });
      return res;
    } catch (_) {
      continue;
    }
  }

  // If backend sent message in a second frame (e.g. empty first frame), try frame 2 payload
  const secondFrameStart = payloadStart + declaredLength;
  if (secondFrameStart + 5 <= raw.length) {
    const len2 = (raw[secondFrameStart + 1]! << 24) | (raw[secondFrameStart + 2]! << 16) | (raw[secondFrameStart + 3]! << 8) | raw[secondFrameStart + 4]!;
    const payload2Start = secondFrameStart + 5;
    if (payload2Start + len2 <= raw.length && len2 > 0 && len2 < 10000) {
      const payload2 = new Uint8Array(raw.slice(payload2Start, payload2Start + len2));
      try {
        const res = auth_pb.LoginResponse.deserializeBinary(payload2);
        debugLoginResponse({ step: "4_deserialize", success: true, payloadLengthUsed: len2, note: "second_frame" });
        return res;
      } catch (_) {
        // ignore
      }
    }
  }

  debugLoginResponse({
    step: "4_deserialize",
    success: false,
    error: "Assertion failed",
    payloadLengthsTried: lengthsToTry.length <= 10 ? lengthsToTry : [minLen, "...", maxLen],
  });
  throw new Error(
    "Login response could not be deserialized (tried payload lengths " +
      minLen +
      ".." +
      maxLen +
      "). Backend may be sending wrong frame length or non–LoginResponse data."
  );
}

/** One-place debug log for login response; grep for "[authService.login] debug" in console. */
function debugLoginResponse(data: Record<string, unknown>): void {
  console.log("[authService.login] debug", JSON.stringify(data, null, 2));
}

/**
 * Base64-decode a string the same way grpc-web does: responseText → trim to len%4 → decode.
 * Supports standard base64 (+,/) and base64url (-,_) to match grpc-web's multi-alphabet decoder.
 */
function base64DecodeString(str: string): Uint8Array {
  if (typeof atob !== "undefined") {
    try {
      const binary = atob(str.replace(/-/g, "+").replace(/_/g, "/"));
      const out = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
      return out;
    } catch {
      // fall through to char-by-char decoder
    }
  }
  const out: number[] = [];
  const lookup = getBase64Lookup();
  let i = 0;
  const next = (eof: number): number => {
    while (i < str.length) {
      const ch = str.charAt(i++);
      const v = lookup[ch];
      if (v !== undefined) return v;
      if (!/^[\s\xa0]*$/.test(ch)) throw new Error("Unknown base64 encoding at char: " + ch);
    }
    return eof;
  };
  for (;;) {
    const a = next(-1);
    const b = next(0);
    const c = next(64);
    const d = next(64);
    if (d === 64 && a === -1) break;
    out.push((a << 2) | (b >> 4));
    if (c !== 64) {
      out.push(((b & 15) << 4) | (c >> 2));
      if (d !== 64) out.push(((c & 3) << 6) | d);
    }
  }
  return new Uint8Array(out);
}

const B64_ALPHABETS = ["+/=", "+/", "-_=", "-_.", "-_"];
let B64_LOOKUP_MAP: Record<string, number> | null = null;

function getBase64Lookup(): Record<string, number> {
  if (B64_LOOKUP_MAP) return B64_LOOKUP_MAP;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
  const map: Record<string, number> = {};
  for (let i = 0; i < B64_ALPHABETS.length; i++) {
    const alphabet = chars.concat(B64_ALPHABETS[i].split(""));
    for (let j = 0; j < alphabet.length; j++) if (map[alphabet[j]] === undefined) map[alphabet[j]] = j;
  }
  B64_LOOKUP_MAP = map;
  return map;
}

/**
 * Parse gRPC-Web response body: either raw binary (first byte 0) or base64-encoded.
 * Decodes base64 from raw bytes (when body was read as arrayBuffer).
 */
function parseGrpcWebResponseBody(bytes: Uint8Array): Uint8Array {
  if (bytes.length >= 5 && bytes[0] === 0) {
    return bytes;
  }
  return base64DecodeBytes(bytes);
}

const B64_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const B64_LOOKUP = new Uint8Array(256);
for (let i = 0; i < B64_CHARS.length; i++) {
  B64_LOOKUP[B64_CHARS.charCodeAt(i)] = i;
}

const PAD = 64;

function base64DecodeBytes(bytes: Uint8Array): Uint8Array {
  const quad: number[] = [];
  const out: number[] = [];
  for (let i = 0; i < bytes.length; i++) {
    const byte = bytes[i]!;
    const v = byte === 61 ? PAD : (B64_LOOKUP[byte] ?? PAD + 1);
    if (v > PAD) continue;
    quad.push(v);
    if (quad.length === 4) {
      const [a, b1, c, d] = quad;
      if (a < 64 && b1 < 64) {
        out.push((a << 2) | (b1 >> 4));
        if (c < 64) {
          out.push(((b1 & 15) << 4) | (c >> 2));
          if (d < 64) out.push(((c & 3) << 6) | d);
        }
      }
      quad.length = 0;
    }
  }
  return new Uint8Array(out);
}

export interface GetProfileResult {
  success: boolean;
  message?: string;
  user?: { id: string; email: string; username: string };
}

export async function getProfile(accessToken: string): Promise<GetProfileResult> {
  const req = new auth_pb.GetProfileRequest();
  try {
    const res = await getClient().getProfile(req, authMetadata(accessToken));
    // GetProfileResponse has id, username, email on the message (per api/proto/auth/v1/auth.proto)
    const user = {
      id: res.getId(),
      email: res.getEmail(),
      username: res.getUsername(),
    };
    return { success: true, user };
  } catch (e: unknown) {
    return {
      success: false,
      message: toUserMessage(e, "GetProfile failed"),
    };
  }
}

export async function logout(accessToken: string): Promise<{ success: boolean; message?: string }> {
  const req = new auth_pb.LogoutRequest();
  try {
    await getClient().logout(req, authMetadata(accessToken));
    return { success: true };
  } catch (e: unknown) {
    return {
      success: false,
      message: toUserMessage(e, "Logout failed"),
    };
  }
}
