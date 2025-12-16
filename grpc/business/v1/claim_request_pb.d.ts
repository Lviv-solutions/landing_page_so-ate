import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"


export class ClaimRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ClaimRequest;

  getBusinessId(): string;
  setBusinessId(value: string): ClaimRequest;

  getRequesterId(): string;
  setRequesterId(value: string): ClaimRequest;

  getStatus(): ClaimStatus;
  setStatus(value: ClaimStatus): ClaimRequest;

  getEvidenceJson(): google_protobuf_struct_pb.Struct | undefined;
  setEvidenceJson(value?: google_protobuf_struct_pb.Struct): ClaimRequest;
  hasEvidenceJson(): boolean;
  clearEvidenceJson(): ClaimRequest;

  getReviewedBy(): string;
  setReviewedBy(value: string): ClaimRequest;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ClaimRequest;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ClaimRequest;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ClaimRequest;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): ClaimRequest;

  getReviewedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReviewedAt(value?: google_protobuf_timestamp_pb.Timestamp): ClaimRequest;
  hasReviewedAt(): boolean;
  clearReviewedAt(): ClaimRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimRequest): ClaimRequest.AsObject;
  static serializeBinaryToWriter(message: ClaimRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimRequest;
  static deserializeBinaryFromReader(message: ClaimRequest, reader: jspb.BinaryReader): ClaimRequest;
}

export namespace ClaimRequest {
  export type AsObject = {
    id: string;
    businessId: string;
    requesterId: string;
    status: ClaimStatus;
    evidenceJson?: google_protobuf_struct_pb.Struct.AsObject;
    reviewedBy: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    reviewedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class CreateClaimRequestRequest extends jspb.Message {
  getRequesterId(): string;
  setRequesterId(value: string): CreateClaimRequestRequest;

  getBusinessData(): google_protobuf_struct_pb.Struct | undefined;
  setBusinessData(value?: google_protobuf_struct_pb.Struct): CreateClaimRequestRequest;
  hasBusinessData(): boolean;
  clearBusinessData(): CreateClaimRequestRequest;

  getEvidenceJson(): google_protobuf_struct_pb.Struct | undefined;
  setEvidenceJson(value?: google_protobuf_struct_pb.Struct): CreateClaimRequestRequest;
  hasEvidenceJson(): boolean;
  clearEvidenceJson(): CreateClaimRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClaimRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClaimRequestRequest): CreateClaimRequestRequest.AsObject;
  static serializeBinaryToWriter(message: CreateClaimRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClaimRequestRequest;
  static deserializeBinaryFromReader(message: CreateClaimRequestRequest, reader: jspb.BinaryReader): CreateClaimRequestRequest;
}

export namespace CreateClaimRequestRequest {
  export type AsObject = {
    requesterId: string;
    businessData?: google_protobuf_struct_pb.Struct.AsObject;
    evidenceJson?: google_protobuf_struct_pb.Struct.AsObject;
  };
}

export class CreateClaimRequestResponse extends jspb.Message {
  getClaimRequestId(): string;
  setClaimRequestId(value: string): CreateClaimRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateClaimRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateClaimRequestResponse): CreateClaimRequestResponse.AsObject;
  static serializeBinaryToWriter(message: CreateClaimRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateClaimRequestResponse;
  static deserializeBinaryFromReader(message: CreateClaimRequestResponse, reader: jspb.BinaryReader): CreateClaimRequestResponse;
}

export namespace CreateClaimRequestResponse {
  export type AsObject = {
    claimRequestId: string;
  };
}

export class GetClaimRequestRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetClaimRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClaimRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClaimRequestRequest): GetClaimRequestRequest.AsObject;
  static serializeBinaryToWriter(message: GetClaimRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClaimRequestRequest;
  static deserializeBinaryFromReader(message: GetClaimRequestRequest, reader: jspb.BinaryReader): GetClaimRequestRequest;
}

export namespace GetClaimRequestRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetClaimRequestResponse extends jspb.Message {
  getClaimRequest(): ClaimRequest | undefined;
  setClaimRequest(value?: ClaimRequest): GetClaimRequestResponse;
  hasClaimRequest(): boolean;
  clearClaimRequest(): GetClaimRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClaimRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetClaimRequestResponse): GetClaimRequestResponse.AsObject;
  static serializeBinaryToWriter(message: GetClaimRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClaimRequestResponse;
  static deserializeBinaryFromReader(message: GetClaimRequestResponse, reader: jspb.BinaryReader): GetClaimRequestResponse;
}

export namespace GetClaimRequestResponse {
  export type AsObject = {
    claimRequest?: ClaimRequest.AsObject;
  };
}

export class ListClaimRequestsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListClaimRequestsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListClaimRequestsRequest;

  getFilter(): string;
  setFilter(value: string): ListClaimRequestsRequest;

  getStatus(): ClaimStatus;
  setStatus(value: ClaimStatus): ListClaimRequestsRequest;

  getBusinessId(): string;
  setBusinessId(value: string): ListClaimRequestsRequest;

  getRequesterId(): string;
  setRequesterId(value: string): ListClaimRequestsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClaimRequestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListClaimRequestsRequest): ListClaimRequestsRequest.AsObject;
  static serializeBinaryToWriter(message: ListClaimRequestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClaimRequestsRequest;
  static deserializeBinaryFromReader(message: ListClaimRequestsRequest, reader: jspb.BinaryReader): ListClaimRequestsRequest;
}

export namespace ListClaimRequestsRequest {
  export type AsObject = {
    pageSize: number;
    pageToken: string;
    filter: string;
    status: ClaimStatus;
    businessId: string;
    requesterId: string;
  };
}

export class ListClaimRequestsResponse extends jspb.Message {
  getClaimRequestsList(): Array<ClaimRequest>;
  setClaimRequestsList(value: Array<ClaimRequest>): ListClaimRequestsResponse;
  clearClaimRequestsList(): ListClaimRequestsResponse;
  addClaimRequests(value?: ClaimRequest, index?: number): ClaimRequest;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListClaimRequestsResponse;

  getTotalCount(): number;
  setTotalCount(value: number): ListClaimRequestsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListClaimRequestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListClaimRequestsResponse): ListClaimRequestsResponse.AsObject;
  static serializeBinaryToWriter(message: ListClaimRequestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListClaimRequestsResponse;
  static deserializeBinaryFromReader(message: ListClaimRequestsResponse, reader: jspb.BinaryReader): ListClaimRequestsResponse;
}

export namespace ListClaimRequestsResponse {
  export type AsObject = {
    claimRequestsList: Array<ClaimRequest.AsObject>;
    nextPageToken: string;
    totalCount: number;
  };
}

export class ApproveClaimRequestRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ApproveClaimRequestRequest;

  getReviewedBy(): string;
  setReviewedBy(value: string): ApproveClaimRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveClaimRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveClaimRequestRequest): ApproveClaimRequestRequest.AsObject;
  static serializeBinaryToWriter(message: ApproveClaimRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveClaimRequestRequest;
  static deserializeBinaryFromReader(message: ApproveClaimRequestRequest, reader: jspb.BinaryReader): ApproveClaimRequestRequest;
}

export namespace ApproveClaimRequestRequest {
  export type AsObject = {
    id: string;
    reviewedBy: string;
  };
}

export class ApproveClaimRequestResponse extends jspb.Message {
  getClaimRequestId(): string;
  setClaimRequestId(value: string): ApproveClaimRequestResponse;

  getBusinessId(): string;
  setBusinessId(value: string): ApproveClaimRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveClaimRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveClaimRequestResponse): ApproveClaimRequestResponse.AsObject;
  static serializeBinaryToWriter(message: ApproveClaimRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveClaimRequestResponse;
  static deserializeBinaryFromReader(message: ApproveClaimRequestResponse, reader: jspb.BinaryReader): ApproveClaimRequestResponse;
}

export namespace ApproveClaimRequestResponse {
  export type AsObject = {
    claimRequestId: string;
    businessId: string;
  };
}

export class RejectClaimRequestRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RejectClaimRequestRequest;

  getReviewedBy(): string;
  setReviewedBy(value: string): RejectClaimRequestRequest;

  getRejectionReason(): string;
  setRejectionReason(value: string): RejectClaimRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectClaimRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RejectClaimRequestRequest): RejectClaimRequestRequest.AsObject;
  static serializeBinaryToWriter(message: RejectClaimRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectClaimRequestRequest;
  static deserializeBinaryFromReader(message: RejectClaimRequestRequest, reader: jspb.BinaryReader): RejectClaimRequestRequest;
}

export namespace RejectClaimRequestRequest {
  export type AsObject = {
    id: string;
    reviewedBy: string;
    rejectionReason: string;
  };
}

export class RejectClaimRequestResponse extends jspb.Message {
  getClaimRequestId(): string;
  setClaimRequestId(value: string): RejectClaimRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectClaimRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RejectClaimRequestResponse): RejectClaimRequestResponse.AsObject;
  static serializeBinaryToWriter(message: RejectClaimRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectClaimRequestResponse;
  static deserializeBinaryFromReader(message: RejectClaimRequestResponse, reader: jspb.BinaryReader): RejectClaimRequestResponse;
}

export namespace RejectClaimRequestResponse {
  export type AsObject = {
    claimRequestId: string;
  };
}

export enum ClaimStatus {
  CLAIM_STATUS_UNSPECIFIED = 0,
  CLAIM_STATUS_PENDING = 1,
  CLAIM_STATUS_APPROVED = 2,
  CLAIM_STATUS_REJECTED = 3,
}
