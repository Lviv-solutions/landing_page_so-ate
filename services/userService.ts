// User Service for searching and listing users
// This service connects to lviv.user.v1.UserService

export interface User {
  id: string;
  email: string;
  username: string;
  phoneNumber?: string;
  isActive?: boolean;
}

export interface ListUsersParams {
  pageSize?: number;
  pageToken?: string;
  roleFilter?: string;
  activeOnly?: boolean;
}

export interface ListUsersResponse {
  users: User[];
  nextPageToken: string;
  totalCount: number;
}

export interface AuthMetadata {
  accessToken?: string;
}

class UserService {
  private client: any;

  constructor() {
    const envoyUrl = process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    
    try {
      const { UserServiceClient } = require("../grpc/lviv/user/v1/user_grpc_web_pb.js");
      this.client = new UserServiceClient(envoyUrl, null, null);
    } catch (error) {
      console.error("UserService gRPC client initialization failed:", error);
      this.client = null;
    }
  }

  /**
   * List all users with optional filtering
   */
  async listUsers(
    params: ListUsersParams = {},
    metadata: AuthMetadata = {}
  ): Promise<ListUsersResponse> {
    if (!this.client) {
      throw new Error("UserService client not initialized. Generate proto files first.");
    }

    try {
      const pb = require("../grpc/lviv/user/v1/user_pb.js");
      const { ListUsersRequest } = pb;

      const request = new ListUsersRequest();
      
      if (params.pageSize) request.setPageSize(params.pageSize);
      if (params.pageToken) request.setPageToken(params.pageToken);
      if (params.roleFilter) request.setRoleFilter(params.roleFilter);
      if (params.activeOnly !== undefined) request.setActiveOnly(params.activeOnly);

      const grpcMetadata: any = {};
      if (metadata.accessToken) {
        grpcMetadata.authorization = `Bearer ${metadata.accessToken}`;
      }

      return new Promise((resolve, reject) => {
        this.client.listUsers(request, grpcMetadata, (err: any, response: any) => {
          if (err) {
            console.error("ListUsers error:", err);
            reject(new Error(err.message || "Failed to list users"));
            return;
          }

          const responseObj = response.toObject();
          const users: User[] = (responseObj.usersList || []).map((user: any) => ({
            id: user.id || "",
            email: user.email || "",
            username: user.username || "",
            phoneNumber: user.phoneNumber,
            isActive: user.isActive,
          }));

          resolve({
            users,
            nextPageToken: responseObj.nextPageToken || "",
            totalCount: responseObj.totalCount || users.length,
          });
        });
      });
    } catch (error: any) {
      console.error("Failed to list users:", error);
      throw new Error(error.message || "Failed to list users");
    }
  }

  /**
   * Search users by email (client-side filtering)
   */
  async searchUsersByEmail(
    email: string,
    metadata: AuthMetadata = {}
  ): Promise<User[]> {
    const response = await this.listUsers(
      { pageSize: 100, activeOnly: true },
      metadata
    );

    const searchTerm = email.toLowerCase().trim();
    return response.users.filter((user) =>
      user.email.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Get user by ID
   */
  async getUser(userId: string, metadata: AuthMetadata = {}): Promise<User> {
    if (!this.client) {
      throw new Error("UserService client not initialized. Generate proto files first.");
    }

    try {
      const pb = require("../grpc/lviv/user/v1/user_pb.js");
      const { GetUserRequest } = pb;

      const request = new GetUserRequest();
      request.setId(userId);

      const grpcMetadata: any = {};
      if (metadata.accessToken) {
        grpcMetadata.authorization = `Bearer ${metadata.accessToken}`;
      }

      return new Promise((resolve, reject) => {
        this.client.getUser(request, grpcMetadata, (err: any, response: any) => {
          if (err) {
            console.error("GetUser error:", err);
            reject(new Error(err.message || "Failed to get user"));
            return;
          }

          const user = response.toObject().user;
          resolve({
            id: user.id || "",
            email: user.email || "",
            username: user.username || "",
            phoneNumber: user.phoneNumber,
            isActive: user.isActive,
          });
        });
      });
    } catch (error: any) {
      console.error("Failed to get user:", error);
      throw new Error(error.message || "Failed to get user");
    }
  }
}

export const userService = new UserService();
export default userService;
