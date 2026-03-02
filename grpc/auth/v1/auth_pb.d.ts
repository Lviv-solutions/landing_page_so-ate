import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class AuthUser extends jspb.Message {
  getId(): string;
  setId(value: string): AuthUser;

  getEmail(): string;
  setEmail(value: string): AuthUser;

  getUsername(): string;
  setUsername(value: string): AuthUser;

  getMfaEnabled(): boolean;
  setMfaEnabled(value: boolean): AuthUser;

  getCompanyId(): string;
  setCompanyId(value: string): AuthUser;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): AuthUser;
  clearPermissionsList(): AuthUser;
  addPermissions(value: string, index?: number): AuthUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthUser.AsObject;
  static toObject(includeInstance: boolean, msg: AuthUser): AuthUser.AsObject;
  static serializeBinaryToWriter(message: AuthUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthUser;
  static deserializeBinaryFromReader(message: AuthUser, reader: jspb.BinaryReader): AuthUser;
}

export namespace AuthUser {
  export type AsObject = {
    id: string;
    email: string;
    username: string;
    mfaEnabled: boolean;
    companyId: string;
    permissionsList: Array<string>;
  };
}

export class TokenInfo extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): TokenInfo;

  getRefreshToken(): string;
  setRefreshToken(value: string): TokenInfo;

  getExpiresIn(): number;
  setExpiresIn(value: number): TokenInfo;

  getTokenType(): string;
  setTokenType(value: string): TokenInfo;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): TokenInfo;
  hasExpiresAt(): boolean;
  clearExpiresAt(): TokenInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TokenInfo): TokenInfo.AsObject;
  static serializeBinaryToWriter(message: TokenInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenInfo;
  static deserializeBinaryFromReader(message: TokenInfo, reader: jspb.BinaryReader): TokenInfo;
}

export namespace TokenInfo {
  export type AsObject = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    tokenType: string;
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getOtpCode(): string;
  setOtpCode(value: string): LoginRequest;

  getRememberMe(): boolean;
  setRememberMe(value: boolean): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string;
    password: string;
    otpCode: string;
    rememberMe: boolean;
  };
}

export class LoginResponse extends jspb.Message {
  getTokenInfo(): TokenInfo | undefined;
  setTokenInfo(value?: TokenInfo): LoginResponse;
  hasTokenInfo(): boolean;
  clearTokenInfo(): LoginResponse;

  getUser(): AuthUser | undefined;
  setUser(value?: AuthUser): LoginResponse;
  hasUser(): boolean;
  clearUser(): LoginResponse;

  getRequiresMfa(): boolean;
  setRequiresMfa(value: boolean): LoginResponse;

  getMfaChallengeId(): string;
  setMfaChallengeId(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    tokenInfo?: TokenInfo.AsObject;
    user?: AuthUser.AsObject;
    requiresMfa: boolean;
    mfaChallengeId: string;
  };
}

export class LogoutRequest extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): LogoutRequest;

  getRefreshToken(): string;
  setRefreshToken(value: string): LogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
    accessToken: string;
    refreshToken: string;
  };
}

export class LogoutResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LogoutResponse;

  getMessage(): string;
  setMessage(value: string): LogoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

export class RefreshTokenRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenRequest): RefreshTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenRequest;
  static deserializeBinaryFromReader(message: RefreshTokenRequest, reader: jspb.BinaryReader): RefreshTokenRequest;
}

export namespace RefreshTokenRequest {
  export type AsObject = {
    refreshToken: string;
  };
}

export class RefreshTokenResponse extends jspb.Message {
  getTokenInfo(): TokenInfo | undefined;
  setTokenInfo(value?: TokenInfo): RefreshTokenResponse;
  hasTokenInfo(): boolean;
  clearTokenInfo(): RefreshTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenResponse): RefreshTokenResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenResponse;
  static deserializeBinaryFromReader(message: RefreshTokenResponse, reader: jspb.BinaryReader): RefreshTokenResponse;
}

export namespace RefreshTokenResponse {
  export type AsObject = {
    tokenInfo?: TokenInfo.AsObject;
  };
}

export class ValidateTokenRequest extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): ValidateTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateTokenRequest): ValidateTokenRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateTokenRequest;
  static deserializeBinaryFromReader(message: ValidateTokenRequest, reader: jspb.BinaryReader): ValidateTokenRequest;
}

export namespace ValidateTokenRequest {
  export type AsObject = {
    accessToken: string;
  };
}

export class ValidateTokenResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): ValidateTokenResponse;

  getUser(): AuthUser | undefined;
  setUser(value?: AuthUser): ValidateTokenResponse;
  hasUser(): boolean;
  clearUser(): ValidateTokenResponse;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): ValidateTokenResponse;
  hasExpiresAt(): boolean;
  clearExpiresAt(): ValidateTokenResponse;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): ValidateTokenResponse;
  clearPermissionsList(): ValidateTokenResponse;
  addPermissions(value: string, index?: number): ValidateTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateTokenResponse): ValidateTokenResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateTokenResponse;
  static deserializeBinaryFromReader(message: ValidateTokenResponse, reader: jspb.BinaryReader): ValidateTokenResponse;
}

export namespace ValidateTokenResponse {
  export type AsObject = {
    valid: boolean;
    user?: AuthUser.AsObject;
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    permissionsList: Array<string>;
  };
}

export class EnableMFARequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): EnableMFARequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableMFARequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableMFARequest): EnableMFARequest.AsObject;
  static serializeBinaryToWriter(message: EnableMFARequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableMFARequest;
  static deserializeBinaryFromReader(message: EnableMFARequest, reader: jspb.BinaryReader): EnableMFARequest;
}

export namespace EnableMFARequest {
  export type AsObject = {
    userId: string;
  };
}

export class EnableMFAResponse extends jspb.Message {
  getSecret(): string;
  setSecret(value: string): EnableMFAResponse;

  getQrCodeUrl(): string;
  setQrCodeUrl(value: string): EnableMFAResponse;

  getBackupCodesList(): Array<string>;
  setBackupCodesList(value: Array<string>): EnableMFAResponse;
  clearBackupCodesList(): EnableMFAResponse;
  addBackupCodes(value: string, index?: number): EnableMFAResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableMFAResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnableMFAResponse): EnableMFAResponse.AsObject;
  static serializeBinaryToWriter(message: EnableMFAResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableMFAResponse;
  static deserializeBinaryFromReader(message: EnableMFAResponse, reader: jspb.BinaryReader): EnableMFAResponse;
}

export namespace EnableMFAResponse {
  export type AsObject = {
    secret: string;
    qrCodeUrl: string;
    backupCodesList: Array<string>;
  };
}

export class VerifyMFARequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): VerifyMFARequest;

  getCode(): string;
  setCode(value: string): VerifyMFARequest;

  getChallengeId(): string;
  setChallengeId(value: string): VerifyMFARequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMFARequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMFARequest): VerifyMFARequest.AsObject;
  static serializeBinaryToWriter(message: VerifyMFARequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMFARequest;
  static deserializeBinaryFromReader(message: VerifyMFARequest, reader: jspb.BinaryReader): VerifyMFARequest;
}

export namespace VerifyMFARequest {
  export type AsObject = {
    userId: string;
    code: string;
    challengeId: string;
  };
}

export class VerifyMFAResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): VerifyMFAResponse;

  getTokenInfo(): TokenInfo | undefined;
  setTokenInfo(value?: TokenInfo): VerifyMFAResponse;
  hasTokenInfo(): boolean;
  clearTokenInfo(): VerifyMFAResponse;

  getUser(): AuthUser | undefined;
  setUser(value?: AuthUser): VerifyMFAResponse;
  hasUser(): boolean;
  clearUser(): VerifyMFAResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMFAResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMFAResponse): VerifyMFAResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyMFAResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMFAResponse;
  static deserializeBinaryFromReader(message: VerifyMFAResponse, reader: jspb.BinaryReader): VerifyMFAResponse;
}

export namespace VerifyMFAResponse {
  export type AsObject = {
    valid: boolean;
    tokenInfo?: TokenInfo.AsObject;
    user?: AuthUser.AsObject;
  };
}

export class DisableMFARequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): DisableMFARequest;

  getPassword(): string;
  setPassword(value: string): DisableMFARequest;

  getMfaCode(): string;
  setMfaCode(value: string): DisableMFARequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableMFARequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableMFARequest): DisableMFARequest.AsObject;
  static serializeBinaryToWriter(message: DisableMFARequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableMFARequest;
  static deserializeBinaryFromReader(message: DisableMFARequest, reader: jspb.BinaryReader): DisableMFARequest;
}

export namespace DisableMFARequest {
  export type AsObject = {
    userId: string;
    password: string;
    mfaCode: string;
  };
}

export class ChangePasswordRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ChangePasswordRequest;

  getCurrentPassword(): string;
  setCurrentPassword(value: string): ChangePasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ChangePasswordRequest;

  getMfaCode(): string;
  setMfaCode(value: string): ChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    userId: string;
    currentPassword: string;
    newPassword: string;
    mfaCode: string;
  };
}

export class ChangePasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ChangePasswordResponse;

  getMessage(): string;
  setMessage(value: string): ChangePasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
  static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

export namespace ChangePasswordResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

export class PasswordResetRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): PasswordResetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordResetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordResetRequest): PasswordResetRequest.AsObject;
  static serializeBinaryToWriter(message: PasswordResetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordResetRequest;
  static deserializeBinaryFromReader(message: PasswordResetRequest, reader: jspb.BinaryReader): PasswordResetRequest;
}

export namespace PasswordResetRequest {
  export type AsObject = {
    email: string;
  };
}

export class PasswordResetResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): PasswordResetResponse;

  getMessage(): string;
  setMessage(value: string): PasswordResetResponse;

  getResetToken(): string;
  setResetToken(value: string): PasswordResetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordResetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordResetResponse): PasswordResetResponse.AsObject;
  static serializeBinaryToWriter(message: PasswordResetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordResetResponse;
  static deserializeBinaryFromReader(message: PasswordResetResponse, reader: jspb.BinaryReader): PasswordResetResponse;
}

export namespace PasswordResetResponse {
  export type AsObject = {
    success: boolean;
    message: string;
    resetToken: string;
  };
}

export class ConfirmPasswordResetRequest extends jspb.Message {
  getResetToken(): string;
  setResetToken(value: string): ConfirmPasswordResetRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ConfirmPasswordResetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmPasswordResetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmPasswordResetRequest): ConfirmPasswordResetRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmPasswordResetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmPasswordResetRequest;
  static deserializeBinaryFromReader(message: ConfirmPasswordResetRequest, reader: jspb.BinaryReader): ConfirmPasswordResetRequest;
}

export namespace ConfirmPasswordResetRequest {
  export type AsObject = {
    resetToken: string;
    newPassword: string;
  };
}

export class ConfirmPasswordResetResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ConfirmPasswordResetResponse;

  getMessage(): string;
  setMessage(value: string): ConfirmPasswordResetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmPasswordResetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmPasswordResetResponse): ConfirmPasswordResetResponse.AsObject;
  static serializeBinaryToWriter(message: ConfirmPasswordResetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmPasswordResetResponse;
  static deserializeBinaryFromReader(message: ConfirmPasswordResetResponse, reader: jspb.BinaryReader): ConfirmPasswordResetResponse;
}

export namespace ConfirmPasswordResetResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

export class RegisterRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    username: string;
    email: string;
    password: string;
  };
}

export class RegisterResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): RegisterResponse;

  getUser(): AuthUser | undefined;
  setUser(value?: AuthUser): RegisterResponse;
  hasUser(): boolean;
  clearUser(): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    message: string;
    user?: AuthUser.AsObject;
  };
}

export class VerifyEmailRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): VerifyEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailRequest): VerifyEmailRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailRequest;
  static deserializeBinaryFromReader(message: VerifyEmailRequest, reader: jspb.BinaryReader): VerifyEmailRequest;
}

export namespace VerifyEmailRequest {
  export type AsObject = {
    token: string;
  };
}

export class VerifyEmailResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): VerifyEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailResponse): VerifyEmailResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailResponse;
  static deserializeBinaryFromReader(message: VerifyEmailResponse, reader: jspb.BinaryReader): VerifyEmailResponse;
}

export namespace VerifyEmailResponse {
  export type AsObject = {
    message: string;
  };
}

export class ResendVerificationEmailRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendVerificationEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendVerificationEmailRequest): ResendVerificationEmailRequest.AsObject;
  static serializeBinaryToWriter(message: ResendVerificationEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendVerificationEmailRequest;
  static deserializeBinaryFromReader(message: ResendVerificationEmailRequest, reader: jspb.BinaryReader): ResendVerificationEmailRequest;
}

export namespace ResendVerificationEmailRequest {
  export type AsObject = {
  };
}

export class ResendVerificationEmailResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ResendVerificationEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendVerificationEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResendVerificationEmailResponse): ResendVerificationEmailResponse.AsObject;
  static serializeBinaryToWriter(message: ResendVerificationEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendVerificationEmailResponse;
  static deserializeBinaryFromReader(message: ResendVerificationEmailResponse, reader: jspb.BinaryReader): ResendVerificationEmailResponse;
}

export namespace ResendVerificationEmailResponse {
  export type AsObject = {
    message: string;
  };
}

export class GetProfileRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
  static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
  export type AsObject = {
  };
}

export class GetProfileResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetProfileResponse;

  getUsername(): string;
  setUsername(value: string): GetProfileResponse;

  getEmail(): string;
  setEmail(value: string): GetProfileResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetProfileResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): GetProfileResponse;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetProfileResponse;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): GetProfileResponse;

  getProfilePicture(): string;
  setProfilePicture(value: string): GetProfileResponse;

  getActiveAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActiveAt(value?: google_protobuf_timestamp_pb.Timestamp): GetProfileResponse;
  hasActiveAt(): boolean;
  clearActiveAt(): GetProfileResponse;

  getVerifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVerifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetProfileResponse;
  hasVerifiedAt(): boolean;
  clearVerifiedAt(): GetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileResponse): GetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: GetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileResponse;
  static deserializeBinaryFromReader(message: GetProfileResponse, reader: jspb.BinaryReader): GetProfileResponse;
}

export namespace GetProfileResponse {
  export type AsObject = {
    id: string;
    username: string;
    email: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    profilePicture: string;
    activeAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    verifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class UpdateProfileRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UpdateProfileRequest;

  getProfilePicture(): string;
  setProfilePicture(value: string): UpdateProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    username: string;
    profilePicture: string;
  };
}

export class UpdateProfileResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): UpdateProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileResponse): UpdateProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileResponse;
  static deserializeBinaryFromReader(message: UpdateProfileResponse, reader: jspb.BinaryReader): UpdateProfileResponse;
}

export namespace UpdateProfileResponse {
  export type AsObject = {
    message: string;
  };
}

export class ValidateResetTokenRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ValidateResetTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateResetTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateResetTokenRequest): ValidateResetTokenRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateResetTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateResetTokenRequest;
  static deserializeBinaryFromReader(message: ValidateResetTokenRequest, reader: jspb.BinaryReader): ValidateResetTokenRequest;
}

export namespace ValidateResetTokenRequest {
  export type AsObject = {
    token: string;
  };
}

export class ValidateResetTokenResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ValidateResetTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateResetTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateResetTokenResponse): ValidateResetTokenResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateResetTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateResetTokenResponse;
  static deserializeBinaryFromReader(message: ValidateResetTokenResponse, reader: jspb.BinaryReader): ValidateResetTokenResponse;
}

export namespace ValidateResetTokenResponse {
  export type AsObject = {
    message: string;
  };
}

export class GetDevVerificationTokenRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): GetDevVerificationTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevVerificationTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevVerificationTokenRequest): GetDevVerificationTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetDevVerificationTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevVerificationTokenRequest;
  static deserializeBinaryFromReader(message: GetDevVerificationTokenRequest, reader: jspb.BinaryReader): GetDevVerificationTokenRequest;
}

export namespace GetDevVerificationTokenRequest {
  export type AsObject = {
    email: string;
  };
}

export class GetDevVerificationTokenResponse extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): GetDevVerificationTokenResponse;

  getToken(): string;
  setToken(value: string): GetDevVerificationTokenResponse;

  getExpiresAt(): string;
  setExpiresAt(value: string): GetDevVerificationTokenResponse;

  getType(): string;
  setType(value: string): GetDevVerificationTokenResponse;

  getVerificationUrl(): string;
  setVerificationUrl(value: string): GetDevVerificationTokenResponse;

  getNote(): string;
  setNote(value: string): GetDevVerificationTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevVerificationTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevVerificationTokenResponse): GetDevVerificationTokenResponse.AsObject;
  static serializeBinaryToWriter(message: GetDevVerificationTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevVerificationTokenResponse;
  static deserializeBinaryFromReader(message: GetDevVerificationTokenResponse, reader: jspb.BinaryReader): GetDevVerificationTokenResponse;
}

export namespace GetDevVerificationTokenResponse {
  export type AsObject = {
    email: string;
    token: string;
    expiresAt: string;
    type: string;
    verificationUrl: string;
    note: string;
  };
}

export class InitiatePhoneAuthRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): InitiatePhoneAuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiatePhoneAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiatePhoneAuthRequest): InitiatePhoneAuthRequest.AsObject;
  static serializeBinaryToWriter(message: InitiatePhoneAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiatePhoneAuthRequest;
  static deserializeBinaryFromReader(message: InitiatePhoneAuthRequest, reader: jspb.BinaryReader): InitiatePhoneAuthRequest;
}

export namespace InitiatePhoneAuthRequest {
  export type AsObject = {
    phoneNumber: string;
  };
}

export class InitiatePhoneAuthResponse extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): InitiatePhoneAuthResponse;

  getOtpSent(): boolean;
  setOtpSent(value: boolean): InitiatePhoneAuthResponse;

  getIsNewUser(): boolean;
  setIsNewUser(value: boolean): InitiatePhoneAuthResponse;

  getMessage(): string;
  setMessage(value: string): InitiatePhoneAuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiatePhoneAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiatePhoneAuthResponse): InitiatePhoneAuthResponse.AsObject;
  static serializeBinaryToWriter(message: InitiatePhoneAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiatePhoneAuthResponse;
  static deserializeBinaryFromReader(message: InitiatePhoneAuthResponse, reader: jspb.BinaryReader): InitiatePhoneAuthResponse;
}

export namespace InitiatePhoneAuthResponse {
  export type AsObject = {
    phoneNumber: string;
    otpSent: boolean;
    isNewUser: boolean;
    message: string;
  };
}

export class VerifyPhoneAuthRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyPhoneAuthRequest;

  getOtp(): string;
  setOtp(value: string): VerifyPhoneAuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPhoneAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPhoneAuthRequest): VerifyPhoneAuthRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyPhoneAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPhoneAuthRequest;
  static deserializeBinaryFromReader(message: VerifyPhoneAuthRequest, reader: jspb.BinaryReader): VerifyPhoneAuthRequest;
}

export namespace VerifyPhoneAuthRequest {
  export type AsObject = {
    phoneNumber: string;
    otp: string;
  };
}

export class VerifyPhoneAuthResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): VerifyPhoneAuthResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): VerifyPhoneAuthResponse;

  getAccountId(): string;
  setAccountId(value: string): VerifyPhoneAuthResponse;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyPhoneAuthResponse;

  getIsPhoneVerified(): boolean;
  setIsPhoneVerified(value: boolean): VerifyPhoneAuthResponse;

  getExpiresAt(): number;
  setExpiresAt(value: number): VerifyPhoneAuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPhoneAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPhoneAuthResponse): VerifyPhoneAuthResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyPhoneAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPhoneAuthResponse;
  static deserializeBinaryFromReader(message: VerifyPhoneAuthResponse, reader: jspb.BinaryReader): VerifyPhoneAuthResponse;
}

export namespace VerifyPhoneAuthResponse {
  export type AsObject = {
    token: string;
    refreshToken: string;
    accountId: string;
    phoneNumber: string;
    isPhoneVerified: boolean;
    expiresAt: number;
  };
}

export class InitiateWhatsAppAuthRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): InitiateWhatsAppAuthRequest;

  getUsername(): string;
  setUsername(value: string): InitiateWhatsAppAuthRequest;

  getPassword(): string;
  setPassword(value: string): InitiateWhatsAppAuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateWhatsAppAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateWhatsAppAuthRequest): InitiateWhatsAppAuthRequest.AsObject;
  static serializeBinaryToWriter(message: InitiateWhatsAppAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateWhatsAppAuthRequest;
  static deserializeBinaryFromReader(message: InitiateWhatsAppAuthRequest, reader: jspb.BinaryReader): InitiateWhatsAppAuthRequest;
}

export namespace InitiateWhatsAppAuthRequest {
  export type AsObject = {
    phoneNumber: string;
    username: string;
    password: string;
  };
}

export class InitiateWhatsAppAuthResponse extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): InitiateWhatsAppAuthResponse;

  getOtpSent(): boolean;
  setOtpSent(value: boolean): InitiateWhatsAppAuthResponse;

  getIsNewUser(): boolean;
  setIsNewUser(value: boolean): InitiateWhatsAppAuthResponse;

  getMessage(): string;
  setMessage(value: string): InitiateWhatsAppAuthResponse;

  getSessionId(): string;
  setSessionId(value: string): InitiateWhatsAppAuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateWhatsAppAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateWhatsAppAuthResponse): InitiateWhatsAppAuthResponse.AsObject;
  static serializeBinaryToWriter(message: InitiateWhatsAppAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateWhatsAppAuthResponse;
  static deserializeBinaryFromReader(message: InitiateWhatsAppAuthResponse, reader: jspb.BinaryReader): InitiateWhatsAppAuthResponse;
}

export namespace InitiateWhatsAppAuthResponse {
  export type AsObject = {
    phoneNumber: string;
    otpSent: boolean;
    isNewUser: boolean;
    message: string;
    sessionId: string;
  };
}

export class VerifyWhatsAppAuthRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyWhatsAppAuthRequest;

  getOtp(): string;
  setOtp(value: string): VerifyWhatsAppAuthRequest;

  getSessionId(): string;
  setSessionId(value: string): VerifyWhatsAppAuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyWhatsAppAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyWhatsAppAuthRequest): VerifyWhatsAppAuthRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyWhatsAppAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyWhatsAppAuthRequest;
  static deserializeBinaryFromReader(message: VerifyWhatsAppAuthRequest, reader: jspb.BinaryReader): VerifyWhatsAppAuthRequest;
}

export namespace VerifyWhatsAppAuthRequest {
  export type AsObject = {
    phoneNumber: string;
    otp: string;
    sessionId: string;
  };
}

export class VerifyWhatsAppAuthResponse extends jspb.Message {
  getTokenInfo(): TokenInfo | undefined;
  setTokenInfo(value?: TokenInfo): VerifyWhatsAppAuthResponse;
  hasTokenInfo(): boolean;
  clearTokenInfo(): VerifyWhatsAppAuthResponse;

  getAccountId(): string;
  setAccountId(value: string): VerifyWhatsAppAuthResponse;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyWhatsAppAuthResponse;

  getIsPhoneVerified(): boolean;
  setIsPhoneVerified(value: boolean): VerifyWhatsAppAuthResponse;

  getIsNewUser(): boolean;
  setIsNewUser(value: boolean): VerifyWhatsAppAuthResponse;

  getUser(): AuthUser | undefined;
  setUser(value?: AuthUser): VerifyWhatsAppAuthResponse;
  hasUser(): boolean;
  clearUser(): VerifyWhatsAppAuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyWhatsAppAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyWhatsAppAuthResponse): VerifyWhatsAppAuthResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyWhatsAppAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyWhatsAppAuthResponse;
  static deserializeBinaryFromReader(message: VerifyWhatsAppAuthResponse, reader: jspb.BinaryReader): VerifyWhatsAppAuthResponse;
}

export namespace VerifyWhatsAppAuthResponse {
  export type AsObject = {
    tokenInfo?: TokenInfo.AsObject;
    accountId: string;
    phoneNumber: string;
    isPhoneVerified: boolean;
    isNewUser: boolean;
    user?: AuthUser.AsObject;
  };
}

