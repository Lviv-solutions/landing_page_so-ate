/**
 * Web client auth: register/login via Envoy gRPC-Web (lviv.auth.v1.AuthService).
 * Stores access_token and user in localStorage. Protected gRPC calls use
 * authorization: Bearer <access_token> (see services/claimRequestService getAuthMetadata).
 */

import * as authService from "../services/authService";

const AUTH_TOKEN_KEY = "auth_token";
const REFRESH_TOKEN_KEY = "auth_refresh_token";
const AUTH_USER_KEY = "auth_user";

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthResult {
  success: boolean;
  message?: string;
}

function persistAuth(accessToken: string, refreshToken?: string, user?: unknown): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_TOKEN_KEY, accessToken);
  if (refreshToken) localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  if (user != null) localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
}

export const webClientAuthService = {
  /**
   * Register via Envoy (public gRPC). Does not return a token; call login after to get one.
   */
  register: async (payload: RegisterPayload): Promise<AuthResult> => {
    try {
      const username =
        [payload.firstName, payload.lastName].filter(Boolean).join(" ").trim() || payload.email;
      const result = await authService.register({
        username,
        email: payload.email,
        password: payload.password,
      });
      if (!result.success) {
        return { success: false, message: result.message ?? "Registration failed" };
      }
      return { success: true };
    } catch (e) {
      console.error("Register error:", e);
      return { success: false, message: "Network error" };
    }
  },

  /**
   * Login via Envoy (public gRPC). Stores token_info.access_token and user.
   */
  login: async (payload: LoginPayload): Promise<AuthResult> => {
    try {
      const result = await authService.login({
        email: payload.email,
        password: payload.password,
        rememberMe: payload.rememberMe,
      });
      if (!result.success) {
        return { success: false, message: result.message ?? "Login failed" };
      }
      if (!result.accessToken) {
        return { success: false, message: result.message ?? "Invalid response: no token returned" };
      }
      persistAuth(result.accessToken, result.refreshToken, result.user);
      return { success: true };
    } catch (e) {
      console.error("Login error:", e);
      return { success: false, message: "Network error" };
    }
  },

  logout: (): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  },

  getToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  isAuthenticated: (): boolean => {
    return !!webClientAuthService.getToken();
  },
};
