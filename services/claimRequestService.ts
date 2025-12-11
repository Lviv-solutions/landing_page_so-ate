import { ClaimRequestServiceClient } from "../grpc/business/v1/Claim_requestServiceClientPb";
const pb = require("../grpc/business/v1/claim_request_pb.js");
const { Struct } = require("google-protobuf/google/protobuf/struct_pb.js");

export enum ClaimStatus {
  CLAIM_STATUS_UNSPECIFIED = 0,
  CLAIM_STATUS_PENDING = 1,
  CLAIM_STATUS_APPROVED = 2,
  CLAIM_STATUS_REJECTED = 3,
}

export interface ClaimRequest {
  id: string;
  businessId: string;
  requesterId: string;
  status: ClaimStatus;
  evidenceJson: any;
  reviewedBy: string;
  createdAt: Date;
  updatedAt: Date;
  reviewedAt?: Date;
}

export interface CreateClaimRequestParams {
  requesterId: string;
  businessData: {
    ar_name: string;
    en_name: string;
    ar_description?: string;
    en_description?: string;
    address?: string;
    phone_number?: string;
    email?: string;
    category_id?: number;
    working_hours?: any;
    key_words?: any;
  };
  evidenceJson: {
    documents?: string[];
    ownershipProof?: string;
    [key: string]: any;
  };
}

export interface ListClaimRequestsParams {
  pageSize?: number;
  pageToken?: string;
  requesterId?: string;
  status?: ClaimStatus;
  businessId?: string;
}

export interface ListClaimRequestsResponse {
  claimRequests: ClaimRequest[];
  nextPageToken: string;
  totalCount: number;
}

export interface ApproveClaimRequestParams {
  id: string;
  reviewedBy: string;
}

export interface ApproveClaimRequestResponse {
  claimRequestId: string;
  businessId: string;
}

export interface RejectClaimRequestParams {
  id: string;
  reviewedBy: string;
  rejectionReason: string;
}

class ClaimRequestService {
  private client: ClaimRequestServiceClient;

  constructor() {
    const envoyUrl =
      process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    this.client = new ClaimRequestServiceClient(envoyUrl, null, null);
  }

  async createClaimRequest(
    params: CreateClaimRequestParams
  ): Promise<{ claimRequestId: string }> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).CreateClaimRequestRequest();
        request.setRequesterId(params.requesterId);

        const businessDataStruct = Struct.fromJavaScript(params.businessData);
        request.setBusinessData(businessDataStruct);

        const evidenceStruct = Struct.fromJavaScript(params.evidenceJson);
        request.setEvidenceJson(evidenceStruct);

        (this.client as any).createClaimRequest(
          request,
          {},
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              resolve({
                claimRequestId: response.getClaimRequestId(),
              });
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async getClaimRequest(claimRequestId: string): Promise<ClaimRequest> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).GetClaimRequestRequest();
        request.setId(claimRequestId);

        (this.client as any).getClaimRequest(
          request,
          {},
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const claimRequest = response.getClaimRequest();
              resolve(this.parseClaimRequest(claimRequest));
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async listClaimRequests(
    params: ListClaimRequestsParams = {}
  ): Promise<ListClaimRequestsResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).ListClaimRequestsRequest();

        if (params.pageSize) request.setPageSize(params.pageSize);
        if (params.pageToken) request.setPageToken(params.pageToken);
        if (params.requesterId) request.setRequesterId(params.requesterId);
        if (params.status !== undefined) request.setStatus(params.status);
        if (params.businessId) request.setBusinessId(params.businessId);

        (this.client as any).listClaimRequests(
          request,
          {},
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              const claimRequests = response
                .getClaimRequestsList()
                .map((cr: any) => this.parseClaimRequest(cr));

              resolve({
                claimRequests,
                nextPageToken: response.getNextPageToken(),
                totalCount: response.getTotalCount(),
              });
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async approveClaimRequest(
    params: ApproveClaimRequestParams
  ): Promise<ApproveClaimRequestResponse> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).ApproveClaimRequestRequest();
        request.setId(params.id);
        request.setReviewedBy(params.reviewedBy);

        (this.client as any).approveClaimRequest(
          request,
          {},
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              resolve({
                claimRequestId: response.getClaimRequestId(),
                businessId: response.getBusinessId(),
              });
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async rejectClaimRequest(
    params: RejectClaimRequestParams
  ): Promise<{ claimRequestId: string }> {
    return new Promise((resolve, reject) => {
      try {
        const request = new (pb as any).RejectClaimRequestRequest();
        request.setId(params.id);
        request.setReviewedBy(params.reviewedBy);
        request.setRejectionReason(params.rejectionReason);

        (this.client as any).rejectClaimRequest(
          request,
          {},
          (err: any, response: any) => {
            if (err) {
              reject(err);
            } else {
              resolve({
                claimRequestId: response.getClaimRequestId(),
              });
            }
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  private parseClaimRequest(claimRequest: any): ClaimRequest {
    const obj = claimRequest.toObject();
    return {
      id: obj.id,
      businessId: obj.businessId,
      requesterId: obj.requesterId,
      status: obj.status,
      evidenceJson: obj.evidenceJson,
      reviewedBy: obj.reviewedBy,
      createdAt: obj.createdAt
        ? new Date(obj.createdAt.seconds * 1000)
        : new Date(),
      updatedAt: obj.updatedAt
        ? new Date(obj.updatedAt.seconds * 1000)
        : new Date(),
      reviewedAt: obj.reviewedAt
        ? new Date(obj.reviewedAt.seconds * 1000)
        : undefined,
    };
  }
}

export const claimRequestService = new ClaimRequestService();
export default claimRequestService;
