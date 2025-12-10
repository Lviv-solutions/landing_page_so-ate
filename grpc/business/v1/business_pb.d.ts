import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"


export class Business extends jspb.Message {
  getId(): string;
  setId(value: string): Business;

  getCreatedBy(): string;
  setCreatedBy(value: string): Business;

  getArName(): string;
  setArName(value: string): Business;

  getEnName(): string;
  setEnName(value: string): Business;

  getArDescription(): string;
  setArDescription(value: string): Business;

  getEnDescription(): string;
  setEnDescription(value: string): Business;

  getAddress(): string;
  setAddress(value: string): Business;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): Business;

  getStorageQuota(): number;
  setStorageQuota(value: number): Business;

  getKeyWords(): google_protobuf_struct_pb.Struct | undefined;
  setKeyWords(value?: google_protobuf_struct_pb.Struct): Business;
  hasKeyWords(): boolean;
  clearKeyWords(): Business;

  getEmail(): string;
  setEmail(value: string): Business;

  getWorkingHours(): google_protobuf_struct_pb.Struct | undefined;
  setWorkingHours(value?: google_protobuf_struct_pb.Struct): Business;
  hasWorkingHours(): boolean;
  clearWorkingHours(): Business;

  getCategoryId(): number;
  setCategoryId(value: number): Business;

  getIsActive(): boolean;
  setIsActive(value: boolean): Business;

  getVerificationStatus(): VerificationStatus;
  setVerificationStatus(value: VerificationStatus): Business;

  getVerifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVerifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Business;
  hasVerifiedAt(): boolean;
  clearVerifiedAt(): Business;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Business;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Business;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Business;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Business;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Business;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Business;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Business.AsObject;
  static toObject(includeInstance: boolean, msg: Business): Business.AsObject;
  static serializeBinaryToWriter(message: Business, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Business;
  static deserializeBinaryFromReader(message: Business, reader: jspb.BinaryReader): Business;
}

export namespace Business {
  export type AsObject = {
    id: string;
    createdBy: string;
    arName: string;
    enName: string;
    arDescription: string;
    enDescription: string;
    address: string;
    phoneNumber: string;
    storageQuota: number;
    keyWords?: google_protobuf_struct_pb.Struct.AsObject;
    email: string;
    workingHours?: google_protobuf_struct_pb.Struct.AsObject;
    categoryId: number;
    isActive: boolean;
    verificationStatus: VerificationStatus;
    verifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class BusinessLocation extends jspb.Message {
  getId(): string;
  setId(value: string): BusinessLocation;

  getBusinessId(): string;
  setBusinessId(value: string): BusinessLocation;

  getStreet(): string;
  setStreet(value: string): BusinessLocation;

  getCity(): string;
  setCity(value: string): BusinessLocation;

  getState(): string;
  setState(value: string): BusinessLocation;

  getZipCode(): string;
  setZipCode(value: string): BusinessLocation;

  getLanguage(): string;
  setLanguage(value: string): BusinessLocation;

  getLatitude(): number;
  setLatitude(value: number): BusinessLocation;

  getLongitude(): number;
  setLongitude(value: number): BusinessLocation;

  getMapUrl(): string;
  setMapUrl(value: string): BusinessLocation;

  getIsPrimary(): boolean;
  setIsPrimary(value: boolean): BusinessLocation;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessLocation;
  hasCreatedAt(): boolean;
  clearCreatedAt(): BusinessLocation;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessLocation;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): BusinessLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessLocation.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessLocation): BusinessLocation.AsObject;
  static serializeBinaryToWriter(message: BusinessLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessLocation;
  static deserializeBinaryFromReader(message: BusinessLocation, reader: jspb.BinaryReader): BusinessLocation;
}

export namespace BusinessLocation {
  export type AsObject = {
    id: string;
    businessId: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    language: string;
    latitude: number;
    longitude: number;
    mapUrl: string;
    isPrimary: boolean;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class BusinessMedia extends jspb.Message {
  getId(): string;
  setId(value: string): BusinessMedia;

  getBusinessId(): string;
  setBusinessId(value: string): BusinessMedia;

  getMediaUrl(): string;
  setMediaUrl(value: string): BusinessMedia;

  getMediaType(): string;
  setMediaType(value: string): BusinessMedia;

  getName(): string;
  setName(value: string): BusinessMedia;

  getUploadedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUploadedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessMedia;
  hasUploadedAt(): boolean;
  clearUploadedAt(): BusinessMedia;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessMedia;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): BusinessMedia;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessMedia.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessMedia): BusinessMedia.AsObject;
  static serializeBinaryToWriter(message: BusinessMedia, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessMedia;
  static deserializeBinaryFromReader(message: BusinessMedia, reader: jspb.BinaryReader): BusinessMedia;
}

export namespace BusinessMedia {
  export type AsObject = {
    id: string;
    businessId: string;
    mediaUrl: string;
    mediaType: string;
    name: string;
    uploadedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class SocialPlatform extends jspb.Message {
  getId(): string;
  setId(value: string): SocialPlatform;

  getName(): string;
  setName(value: string): SocialPlatform;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SocialPlatform;
  hasCreatedAt(): boolean;
  clearCreatedAt(): SocialPlatform;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SocialPlatform;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): SocialPlatform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SocialPlatform.AsObject;
  static toObject(includeInstance: boolean, msg: SocialPlatform): SocialPlatform.AsObject;
  static serializeBinaryToWriter(message: SocialPlatform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SocialPlatform;
  static deserializeBinaryFromReader(message: SocialPlatform, reader: jspb.BinaryReader): SocialPlatform;
}

export namespace SocialPlatform {
  export type AsObject = {
    id: string;
    name: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class Category extends jspb.Message {
  getId(): number;
  setId(value: number): Category;

  getName(): string;
  setName(value: string): Category;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Category;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Category;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Category;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    id: number;
    name: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class BusinessSocialAccount extends jspb.Message {
  getId(): string;
  setId(value: string): BusinessSocialAccount;

  getBusinessId(): string;
  setBusinessId(value: string): BusinessSocialAccount;

  getPlatformId(): string;
  setPlatformId(value: string): BusinessSocialAccount;

  getUrl(): string;
  setUrl(value: string): BusinessSocialAccount;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessSocialAccount;
  hasCreatedAt(): boolean;
  clearCreatedAt(): BusinessSocialAccount;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessSocialAccount;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): BusinessSocialAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessSocialAccount.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessSocialAccount): BusinessSocialAccount.AsObject;
  static serializeBinaryToWriter(message: BusinessSocialAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessSocialAccount;
  static deserializeBinaryFromReader(message: BusinessSocialAccount, reader: jspb.BinaryReader): BusinessSocialAccount;
}

export namespace BusinessSocialAccount {
  export type AsObject = {
    id: string;
    businessId: string;
    platformId: string;
    url: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class BusinessReview extends jspb.Message {
  getId(): string;
  setId(value: string): BusinessReview;

  getBusinessId(): string;
  setBusinessId(value: string): BusinessReview;

  getUserId(): string;
  setUserId(value: string): BusinessReview;

  getRating(): number;
  setRating(value: number): BusinessReview;

  getComment(): string;
  setComment(value: string): BusinessReview;

  getStatus(): ReviewStatus;
  setStatus(value: ReviewStatus): BusinessReview;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessReview;
  hasCreatedAt(): boolean;
  clearCreatedAt(): BusinessReview;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessReview;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): BusinessReview;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessReview.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessReview): BusinessReview.AsObject;
  static serializeBinaryToWriter(message: BusinessReview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessReview;
  static deserializeBinaryFromReader(message: BusinessReview, reader: jspb.BinaryReader): BusinessReview;
}

export namespace BusinessReview {
  export type AsObject = {
    id: string;
    businessId: string;
    userId: string;
    rating: number;
    comment: string;
    status: ReviewStatus;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class BusinessMembership extends jspb.Message {
  getId(): string;
  setId(value: string): BusinessMembership;

  getBusinessId(): string;
  setBusinessId(value: string): BusinessMembership;

  getRoleId(): number;
  setRoleId(value: number): BusinessMembership;

  getAccountId(): string;
  setAccountId(value: string): BusinessMembership;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessMembership;
  hasCreatedAt(): boolean;
  clearCreatedAt(): BusinessMembership;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessMembership;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): BusinessMembership;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessMembership.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessMembership): BusinessMembership.AsObject;
  static serializeBinaryToWriter(message: BusinessMembership, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessMembership;
  static deserializeBinaryFromReader(message: BusinessMembership, reader: jspb.BinaryReader): BusinessMembership;
}

export namespace BusinessMembership {
  export type AsObject = {
    id: string;
    businessId: string;
    roleId: number;
    accountId: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class Brand extends jspb.Message {
  getId(): string;
  setId(value: string): Brand;

  getName(): string;
  setName(value: string): Brand;

  getSlug(): string;
  setSlug(value: string): Brand;

  getDescription(): string;
  setDescription(value: string): Brand;

  getIsActive(): boolean;
  setIsActive(value: boolean): Brand;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Brand;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Brand;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Brand;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Brand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Brand.AsObject;
  static toObject(includeInstance: boolean, msg: Brand): Brand.AsObject;
  static serializeBinaryToWriter(message: Brand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Brand;
  static deserializeBinaryFromReader(message: Brand, reader: jspb.BinaryReader): Brand;
}

export namespace Brand {
  export type AsObject = {
    id: string;
    name: string;
    slug: string;
    description: string;
    isActive: boolean;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class BusinessBrand extends jspb.Message {
  getId(): string;
  setId(value: string): BusinessBrand;

  getBusinessId(): string;
  setBusinessId(value: string): BusinessBrand;

  getBrandId(): string;
  setBrandId(value: string): BusinessBrand;

  getRelationship(): string;
  setRelationship(value: string): BusinessBrand;

  getIsPrimary(): boolean;
  setIsPrimary(value: boolean): BusinessBrand;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): BusinessBrand;
  hasMetadata(): boolean;
  clearMetadata(): BusinessBrand;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessBrand;
  hasCreatedAt(): boolean;
  clearCreatedAt(): BusinessBrand;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessBrand;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): BusinessBrand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessBrand.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessBrand): BusinessBrand.AsObject;
  static serializeBinaryToWriter(message: BusinessBrand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessBrand;
  static deserializeBinaryFromReader(message: BusinessBrand, reader: jspb.BinaryReader): BusinessBrand;
}

export namespace BusinessBrand {
  export type AsObject = {
    id: string;
    businessId: string;
    brandId: string;
    relationship: string;
    isPrimary: boolean;
    metadata?: google_protobuf_struct_pb.Struct.AsObject;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class BusinessRelation extends jspb.Message {
  getId(): string;
  setId(value: string): BusinessRelation;

  getBusinessIdA(): string;
  setBusinessIdA(value: string): BusinessRelation;

  getBusinessIdB(): string;
  setBusinessIdB(value: string): BusinessRelation;

  getRelationType(): string;
  setRelationType(value: string): BusinessRelation;

  getNotes(): string;
  setNotes(value: string): BusinessRelation;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BusinessRelation;
  hasCreatedAt(): boolean;
  clearCreatedAt(): BusinessRelation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusinessRelation.AsObject;
  static toObject(includeInstance: boolean, msg: BusinessRelation): BusinessRelation.AsObject;
  static serializeBinaryToWriter(message: BusinessRelation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusinessRelation;
  static deserializeBinaryFromReader(message: BusinessRelation, reader: jspb.BinaryReader): BusinessRelation;
}

export namespace BusinessRelation {
  export type AsObject = {
    id: string;
    businessIdA: string;
    businessIdB: string;
    relationType: string;
    notes: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class CreateBusinessRequest extends jspb.Message {
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): CreateBusinessRequest;
  hasBusiness(): boolean;
  clearBusiness(): CreateBusinessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessRequest): CreateBusinessRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessRequest;
  static deserializeBinaryFromReader(message: CreateBusinessRequest, reader: jspb.BinaryReader): CreateBusinessRequest;
}

export namespace CreateBusinessRequest {
  export type AsObject = {
    business?: Business.AsObject;
  };
}

export class CreateBusinessResponse extends jspb.Message {
  getBusinessid(): string;
  setBusinessid(value: string): CreateBusinessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessResponse): CreateBusinessResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessResponse;
  static deserializeBinaryFromReader(message: CreateBusinessResponse, reader: jspb.BinaryReader): CreateBusinessResponse;
}

export namespace CreateBusinessResponse {
  export type AsObject = {
    businessid: string;
  };
}

export class GetBusinessRequest extends jspb.Message {
  getBusinessid(): string;
  setBusinessid(value: string): GetBusinessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessRequest): GetBusinessRequest.AsObject;
  static serializeBinaryToWriter(message: GetBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessRequest;
  static deserializeBinaryFromReader(message: GetBusinessRequest, reader: jspb.BinaryReader): GetBusinessRequest;
}

export namespace GetBusinessRequest {
  export type AsObject = {
    businessid: string;
  };
}

export class GetBusinessResponse extends jspb.Message {
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): GetBusinessResponse;
  hasBusiness(): boolean;
  clearBusiness(): GetBusinessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessResponse): GetBusinessResponse.AsObject;
  static serializeBinaryToWriter(message: GetBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessResponse;
  static deserializeBinaryFromReader(message: GetBusinessResponse, reader: jspb.BinaryReader): GetBusinessResponse;
}

export namespace GetBusinessResponse {
  export type AsObject = {
    business?: Business.AsObject;
  };
}

export class GetBusinessByNameRequest extends jspb.Message {
  getArName(): string;
  setArName(value: string): GetBusinessByNameRequest;

  getEnName(): string;
  setEnName(value: string): GetBusinessByNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessByNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessByNameRequest): GetBusinessByNameRequest.AsObject;
  static serializeBinaryToWriter(message: GetBusinessByNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessByNameRequest;
  static deserializeBinaryFromReader(message: GetBusinessByNameRequest, reader: jspb.BinaryReader): GetBusinessByNameRequest;
}

export namespace GetBusinessByNameRequest {
  export type AsObject = {
    arName: string;
    enName: string;
  };
}

export class GetBusinessByNameResponse extends jspb.Message {
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): GetBusinessByNameResponse;
  hasBusiness(): boolean;
  clearBusiness(): GetBusinessByNameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessByNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessByNameResponse): GetBusinessByNameResponse.AsObject;
  static serializeBinaryToWriter(message: GetBusinessByNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessByNameResponse;
  static deserializeBinaryFromReader(message: GetBusinessByNameResponse, reader: jspb.BinaryReader): GetBusinessByNameResponse;
}

export namespace GetBusinessByNameResponse {
  export type AsObject = {
    business?: Business.AsObject;
  };
}

export class UpdateBusinessRequest extends jspb.Message {
  getBusiness(): Business | undefined;
  setBusiness(value?: Business): UpdateBusinessRequest;
  hasBusiness(): boolean;
  clearBusiness(): UpdateBusinessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessRequest): UpdateBusinessRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessRequest, reader: jspb.BinaryReader): UpdateBusinessRequest;
}

export namespace UpdateBusinessRequest {
  export type AsObject = {
    business?: Business.AsObject;
  };
}

export class UpdateBusinessResponse extends jspb.Message {
  getBusinessid(): string;
  setBusinessid(value: string): UpdateBusinessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessResponse): UpdateBusinessResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessResponse, reader: jspb.BinaryReader): UpdateBusinessResponse;
}

export namespace UpdateBusinessResponse {
  export type AsObject = {
    businessid: string;
  };
}

export class DeleteBusinessRequest extends jspb.Message {
  getBusinessid(): string;
  setBusinessid(value: string): DeleteBusinessRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessRequest): DeleteBusinessRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBusinessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessRequest, reader: jspb.BinaryReader): DeleteBusinessRequest;
}

export namespace DeleteBusinessRequest {
  export type AsObject = {
    businessid: string;
  };
}

export class ListBusinessesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListBusinessesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBusinessesRequest;

  getFilter(): string;
  setFilter(value: string): ListBusinessesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessesRequest): ListBusinessesRequest.AsObject;
  static serializeBinaryToWriter(message: ListBusinessesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessesRequest;
  static deserializeBinaryFromReader(message: ListBusinessesRequest, reader: jspb.BinaryReader): ListBusinessesRequest;
}

export namespace ListBusinessesRequest {
  export type AsObject = {
    pageSize: number;
    pageToken: string;
    filter: string;
  };
}

export class ListBusinessesResponse extends jspb.Message {
  getBusinessesList(): Array<Business>;
  setBusinessesList(value: Array<Business>): ListBusinessesResponse;
  clearBusinessesList(): ListBusinessesResponse;
  addBusinesses(value?: Business, index?: number): Business;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBusinessesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessesResponse): ListBusinessesResponse.AsObject;
  static serializeBinaryToWriter(message: ListBusinessesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessesResponse;
  static deserializeBinaryFromReader(message: ListBusinessesResponse, reader: jspb.BinaryReader): ListBusinessesResponse;
}

export namespace ListBusinessesResponse {
  export type AsObject = {
    businessesList: Array<Business.AsObject>;
    nextPageToken: string;
  };
}

export class CreateBusinessLocationRequest extends jspb.Message {
  getBusinessLocation(): BusinessLocation | undefined;
  setBusinessLocation(value?: BusinessLocation): CreateBusinessLocationRequest;
  hasBusinessLocation(): boolean;
  clearBusinessLocation(): CreateBusinessLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessLocationRequest): CreateBusinessLocationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessLocationRequest;
  static deserializeBinaryFromReader(message: CreateBusinessLocationRequest, reader: jspb.BinaryReader): CreateBusinessLocationRequest;
}

export namespace CreateBusinessLocationRequest {
  export type AsObject = {
    businessLocation?: BusinessLocation.AsObject;
  };
}

export class CreateBusinessLocationResponse extends jspb.Message {
  getLocationid(): string;
  setLocationid(value: string): CreateBusinessLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessLocationResponse): CreateBusinessLocationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessLocationResponse;
  static deserializeBinaryFromReader(message: CreateBusinessLocationResponse, reader: jspb.BinaryReader): CreateBusinessLocationResponse;
}

export namespace CreateBusinessLocationResponse {
  export type AsObject = {
    locationid: string;
  };
}

export class GetBusinessLocationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBusinessLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessLocationRequest): GetBusinessLocationRequest.AsObject;
  static serializeBinaryToWriter(message: GetBusinessLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessLocationRequest;
  static deserializeBinaryFromReader(message: GetBusinessLocationRequest, reader: jspb.BinaryReader): GetBusinessLocationRequest;
}

export namespace GetBusinessLocationRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetBusinessLocationResponse extends jspb.Message {
  getBusinessLocation(): BusinessLocation | undefined;
  setBusinessLocation(value?: BusinessLocation): GetBusinessLocationResponse;
  hasBusinessLocation(): boolean;
  clearBusinessLocation(): GetBusinessLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessLocationResponse): GetBusinessLocationResponse.AsObject;
  static serializeBinaryToWriter(message: GetBusinessLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessLocationResponse;
  static deserializeBinaryFromReader(message: GetBusinessLocationResponse, reader: jspb.BinaryReader): GetBusinessLocationResponse;
}

export namespace GetBusinessLocationResponse {
  export type AsObject = {
    businessLocation?: BusinessLocation.AsObject;
  };
}

export class UpdateBusinessLocationRequest extends jspb.Message {
  getBusinessLocation(): BusinessLocation | undefined;
  setBusinessLocation(value?: BusinessLocation): UpdateBusinessLocationRequest;
  hasBusinessLocation(): boolean;
  clearBusinessLocation(): UpdateBusinessLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessLocationRequest): UpdateBusinessLocationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessLocationRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessLocationRequest, reader: jspb.BinaryReader): UpdateBusinessLocationRequest;
}

export namespace UpdateBusinessLocationRequest {
  export type AsObject = {
    businessLocation?: BusinessLocation.AsObject;
  };
}

export class UpdateBusinessLocationResponse extends jspb.Message {
  getLocationid(): string;
  setLocationid(value: string): UpdateBusinessLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessLocationResponse): UpdateBusinessLocationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessLocationResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessLocationResponse, reader: jspb.BinaryReader): UpdateBusinessLocationResponse;
}

export namespace UpdateBusinessLocationResponse {
  export type AsObject = {
    locationid: string;
  };
}

export class DeleteBusinessLocationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteBusinessLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessLocationRequest): DeleteBusinessLocationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBusinessLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessLocationRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessLocationRequest, reader: jspb.BinaryReader): DeleteBusinessLocationRequest;
}

export namespace DeleteBusinessLocationRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListBusinessLocationsRequest extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): ListBusinessLocationsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBusinessLocationsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBusinessLocationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessLocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessLocationsRequest): ListBusinessLocationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBusinessLocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessLocationsRequest;
  static deserializeBinaryFromReader(message: ListBusinessLocationsRequest, reader: jspb.BinaryReader): ListBusinessLocationsRequest;
}

export namespace ListBusinessLocationsRequest {
  export type AsObject = {
    businessId: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListBusinessLocationsResponse extends jspb.Message {
  getBusinessLocationsList(): Array<BusinessLocation>;
  setBusinessLocationsList(value: Array<BusinessLocation>): ListBusinessLocationsResponse;
  clearBusinessLocationsList(): ListBusinessLocationsResponse;
  addBusinessLocations(value?: BusinessLocation, index?: number): BusinessLocation;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBusinessLocationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessLocationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessLocationsResponse): ListBusinessLocationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBusinessLocationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessLocationsResponse;
  static deserializeBinaryFromReader(message: ListBusinessLocationsResponse, reader: jspb.BinaryReader): ListBusinessLocationsResponse;
}

export namespace ListBusinessLocationsResponse {
  export type AsObject = {
    businessLocationsList: Array<BusinessLocation.AsObject>;
    nextPageToken: string;
  };
}

export class CreateBusinessMediaRequest extends jspb.Message {
  getMediaid(): BusinessMedia | undefined;
  setMediaid(value?: BusinessMedia): CreateBusinessMediaRequest;
  hasMediaid(): boolean;
  clearMediaid(): CreateBusinessMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessMediaRequest): CreateBusinessMediaRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessMediaRequest;
  static deserializeBinaryFromReader(message: CreateBusinessMediaRequest, reader: jspb.BinaryReader): CreateBusinessMediaRequest;
}

export namespace CreateBusinessMediaRequest {
  export type AsObject = {
    mediaid?: BusinessMedia.AsObject;
  };
}

export class CreateBusinessMediaResponse extends jspb.Message {
  getMediaid(): string;
  setMediaid(value: string): CreateBusinessMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessMediaResponse): CreateBusinessMediaResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessMediaResponse;
  static deserializeBinaryFromReader(message: CreateBusinessMediaResponse, reader: jspb.BinaryReader): CreateBusinessMediaResponse;
}

export namespace CreateBusinessMediaResponse {
  export type AsObject = {
    mediaid: string;
  };
}

export class GetBusinessMediaRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBusinessMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessMediaRequest): GetBusinessMediaRequest.AsObject;
  static serializeBinaryToWriter(message: GetBusinessMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessMediaRequest;
  static deserializeBinaryFromReader(message: GetBusinessMediaRequest, reader: jspb.BinaryReader): GetBusinessMediaRequest;
}

export namespace GetBusinessMediaRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetBusinessMediaResponse extends jspb.Message {
  getBusinessMedia(): BusinessMedia | undefined;
  setBusinessMedia(value?: BusinessMedia): GetBusinessMediaResponse;
  hasBusinessMedia(): boolean;
  clearBusinessMedia(): GetBusinessMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessMediaResponse): GetBusinessMediaResponse.AsObject;
  static serializeBinaryToWriter(message: GetBusinessMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessMediaResponse;
  static deserializeBinaryFromReader(message: GetBusinessMediaResponse, reader: jspb.BinaryReader): GetBusinessMediaResponse;
}

export namespace GetBusinessMediaResponse {
  export type AsObject = {
    businessMedia?: BusinessMedia.AsObject;
  };
}

export class UpdateBusinessMediaRequest extends jspb.Message {
  getBusinessMedia(): BusinessMedia | undefined;
  setBusinessMedia(value?: BusinessMedia): UpdateBusinessMediaRequest;
  hasBusinessMedia(): boolean;
  clearBusinessMedia(): UpdateBusinessMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessMediaRequest): UpdateBusinessMediaRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessMediaRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessMediaRequest, reader: jspb.BinaryReader): UpdateBusinessMediaRequest;
}

export namespace UpdateBusinessMediaRequest {
  export type AsObject = {
    businessMedia?: BusinessMedia.AsObject;
  };
}

export class UpdateBusinessMediaResponse extends jspb.Message {
  getMediaid(): string;
  setMediaid(value: string): UpdateBusinessMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessMediaResponse): UpdateBusinessMediaResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessMediaResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessMediaResponse, reader: jspb.BinaryReader): UpdateBusinessMediaResponse;
}

export namespace UpdateBusinessMediaResponse {
  export type AsObject = {
    mediaid: string;
  };
}

export class DeleteBusinessMediaRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteBusinessMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessMediaRequest): DeleteBusinessMediaRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBusinessMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessMediaRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessMediaRequest, reader: jspb.BinaryReader): DeleteBusinessMediaRequest;
}

export namespace DeleteBusinessMediaRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListBusinessMediaRequest extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): ListBusinessMediaRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBusinessMediaRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBusinessMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessMediaRequest): ListBusinessMediaRequest.AsObject;
  static serializeBinaryToWriter(message: ListBusinessMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessMediaRequest;
  static deserializeBinaryFromReader(message: ListBusinessMediaRequest, reader: jspb.BinaryReader): ListBusinessMediaRequest;
}

export namespace ListBusinessMediaRequest {
  export type AsObject = {
    businessId: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListBusinessMediaResponse extends jspb.Message {
  getBusinessMediaList(): Array<BusinessMedia>;
  setBusinessMediaList(value: Array<BusinessMedia>): ListBusinessMediaResponse;
  clearBusinessMediaList(): ListBusinessMediaResponse;
  addBusinessMedia(value?: BusinessMedia, index?: number): BusinessMedia;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBusinessMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessMediaResponse): ListBusinessMediaResponse.AsObject;
  static serializeBinaryToWriter(message: ListBusinessMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessMediaResponse;
  static deserializeBinaryFromReader(message: ListBusinessMediaResponse, reader: jspb.BinaryReader): ListBusinessMediaResponse;
}

export namespace ListBusinessMediaResponse {
  export type AsObject = {
    businessMediaList: Array<BusinessMedia.AsObject>;
    nextPageToken: string;
  };
}

export class CreateSocialPlatformRequest extends jspb.Message {
  getSocialPlatform(): SocialPlatform | undefined;
  setSocialPlatform(value?: SocialPlatform): CreateSocialPlatformRequest;
  hasSocialPlatform(): boolean;
  clearSocialPlatform(): CreateSocialPlatformRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSocialPlatformRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSocialPlatformRequest): CreateSocialPlatformRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSocialPlatformRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSocialPlatformRequest;
  static deserializeBinaryFromReader(message: CreateSocialPlatformRequest, reader: jspb.BinaryReader): CreateSocialPlatformRequest;
}

export namespace CreateSocialPlatformRequest {
  export type AsObject = {
    socialPlatform?: SocialPlatform.AsObject;
  };
}

export class CreateSocialPlatformResponse extends jspb.Message {
  getSocialPlatform(): SocialPlatform | undefined;
  setSocialPlatform(value?: SocialPlatform): CreateSocialPlatformResponse;
  hasSocialPlatform(): boolean;
  clearSocialPlatform(): CreateSocialPlatformResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSocialPlatformResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSocialPlatformResponse): CreateSocialPlatformResponse.AsObject;
  static serializeBinaryToWriter(message: CreateSocialPlatformResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSocialPlatformResponse;
  static deserializeBinaryFromReader(message: CreateSocialPlatformResponse, reader: jspb.BinaryReader): CreateSocialPlatformResponse;
}

export namespace CreateSocialPlatformResponse {
  export type AsObject = {
    socialPlatform?: SocialPlatform.AsObject;
  };
}

export class GetSocialPlatformRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetSocialPlatformRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSocialPlatformRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSocialPlatformRequest): GetSocialPlatformRequest.AsObject;
  static serializeBinaryToWriter(message: GetSocialPlatformRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSocialPlatformRequest;
  static deserializeBinaryFromReader(message: GetSocialPlatformRequest, reader: jspb.BinaryReader): GetSocialPlatformRequest;
}

export namespace GetSocialPlatformRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetSocialPlatformResponse extends jspb.Message {
  getSocialPlatform(): SocialPlatform | undefined;
  setSocialPlatform(value?: SocialPlatform): GetSocialPlatformResponse;
  hasSocialPlatform(): boolean;
  clearSocialPlatform(): GetSocialPlatformResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSocialPlatformResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSocialPlatformResponse): GetSocialPlatformResponse.AsObject;
  static serializeBinaryToWriter(message: GetSocialPlatformResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSocialPlatformResponse;
  static deserializeBinaryFromReader(message: GetSocialPlatformResponse, reader: jspb.BinaryReader): GetSocialPlatformResponse;
}

export namespace GetSocialPlatformResponse {
  export type AsObject = {
    socialPlatform?: SocialPlatform.AsObject;
  };
}

export class UpdateSocialPlatformRequest extends jspb.Message {
  getSocialPlatform(): SocialPlatform | undefined;
  setSocialPlatform(value?: SocialPlatform): UpdateSocialPlatformRequest;
  hasSocialPlatform(): boolean;
  clearSocialPlatform(): UpdateSocialPlatformRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSocialPlatformRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSocialPlatformRequest): UpdateSocialPlatformRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSocialPlatformRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSocialPlatformRequest;
  static deserializeBinaryFromReader(message: UpdateSocialPlatformRequest, reader: jspb.BinaryReader): UpdateSocialPlatformRequest;
}

export namespace UpdateSocialPlatformRequest {
  export type AsObject = {
    socialPlatform?: SocialPlatform.AsObject;
  };
}

export class UpdateSocialPlatformResponse extends jspb.Message {
  getSocialPlatform(): SocialPlatform | undefined;
  setSocialPlatform(value?: SocialPlatform): UpdateSocialPlatformResponse;
  hasSocialPlatform(): boolean;
  clearSocialPlatform(): UpdateSocialPlatformResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSocialPlatformResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSocialPlatformResponse): UpdateSocialPlatformResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSocialPlatformResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSocialPlatformResponse;
  static deserializeBinaryFromReader(message: UpdateSocialPlatformResponse, reader: jspb.BinaryReader): UpdateSocialPlatformResponse;
}

export namespace UpdateSocialPlatformResponse {
  export type AsObject = {
    socialPlatform?: SocialPlatform.AsObject;
  };
}

export class DeleteSocialPlatformRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSocialPlatformRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSocialPlatformRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSocialPlatformRequest): DeleteSocialPlatformRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSocialPlatformRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSocialPlatformRequest;
  static deserializeBinaryFromReader(message: DeleteSocialPlatformRequest, reader: jspb.BinaryReader): DeleteSocialPlatformRequest;
}

export namespace DeleteSocialPlatformRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListSocialPlatformsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListSocialPlatformsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSocialPlatformsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSocialPlatformsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSocialPlatformsRequest): ListSocialPlatformsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSocialPlatformsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSocialPlatformsRequest;
  static deserializeBinaryFromReader(message: ListSocialPlatformsRequest, reader: jspb.BinaryReader): ListSocialPlatformsRequest;
}

export namespace ListSocialPlatformsRequest {
  export type AsObject = {
    pageSize: number;
    pageToken: string;
  };
}

export class ListSocialPlatformsResponse extends jspb.Message {
  getSocialPlatformsList(): Array<SocialPlatform>;
  setSocialPlatformsList(value: Array<SocialPlatform>): ListSocialPlatformsResponse;
  clearSocialPlatformsList(): ListSocialPlatformsResponse;
  addSocialPlatforms(value?: SocialPlatform, index?: number): SocialPlatform;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSocialPlatformsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSocialPlatformsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSocialPlatformsResponse): ListSocialPlatformsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSocialPlatformsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSocialPlatformsResponse;
  static deserializeBinaryFromReader(message: ListSocialPlatformsResponse, reader: jspb.BinaryReader): ListSocialPlatformsResponse;
}

export namespace ListSocialPlatformsResponse {
  export type AsObject = {
    socialPlatformsList: Array<SocialPlatform.AsObject>;
    nextPageToken: string;
  };
}

export class CreateCategoryRequest extends jspb.Message {
  getCategory(): Category | undefined;
  setCategory(value?: Category): CreateCategoryRequest;
  hasCategory(): boolean;
  clearCategory(): CreateCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryRequest): CreateCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryRequest;
  static deserializeBinaryFromReader(message: CreateCategoryRequest, reader: jspb.BinaryReader): CreateCategoryRequest;
}

export namespace CreateCategoryRequest {
  export type AsObject = {
    category?: Category.AsObject;
  };
}

export class CreateCategoryResponse extends jspb.Message {
  getCategory(): Category | undefined;
  setCategory(value?: Category): CreateCategoryResponse;
  hasCategory(): boolean;
  clearCategory(): CreateCategoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCategoryResponse): CreateCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCategoryResponse;
  static deserializeBinaryFromReader(message: CreateCategoryResponse, reader: jspb.BinaryReader): CreateCategoryResponse;
}

export namespace CreateCategoryResponse {
  export type AsObject = {
    category?: Category.AsObject;
  };
}

export class GetCategoryRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryRequest): GetCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: GetCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryRequest;
  static deserializeBinaryFromReader(message: GetCategoryRequest, reader: jspb.BinaryReader): GetCategoryRequest;
}

export namespace GetCategoryRequest {
  export type AsObject = {
    id: number;
  };
}

export class GetCategoryResponse extends jspb.Message {
  getCategory(): Category | undefined;
  setCategory(value?: Category): GetCategoryResponse;
  hasCategory(): boolean;
  clearCategory(): GetCategoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryResponse): GetCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: GetCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryResponse;
  static deserializeBinaryFromReader(message: GetCategoryResponse, reader: jspb.BinaryReader): GetCategoryResponse;
}

export namespace GetCategoryResponse {
  export type AsObject = {
    category?: Category.AsObject;
  };
}

export class UpdateCategoryRequest extends jspb.Message {
  getCategory(): Category | undefined;
  setCategory(value?: Category): UpdateCategoryRequest;
  hasCategory(): boolean;
  clearCategory(): UpdateCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryRequest): UpdateCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryRequest;
  static deserializeBinaryFromReader(message: UpdateCategoryRequest, reader: jspb.BinaryReader): UpdateCategoryRequest;
}

export namespace UpdateCategoryRequest {
  export type AsObject = {
    category?: Category.AsObject;
  };
}

export class UpdateCategoryResponse extends jspb.Message {
  getCategory(): Category | undefined;
  setCategory(value?: Category): UpdateCategoryResponse;
  hasCategory(): boolean;
  clearCategory(): UpdateCategoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCategoryResponse): UpdateCategoryResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCategoryResponse;
  static deserializeBinaryFromReader(message: UpdateCategoryResponse, reader: jspb.BinaryReader): UpdateCategoryResponse;
}

export namespace UpdateCategoryResponse {
  export type AsObject = {
    category?: Category.AsObject;
  };
}

export class DeleteCategoryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCategoryRequest): DeleteCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCategoryRequest;
  static deserializeBinaryFromReader(message: DeleteCategoryRequest, reader: jspb.BinaryReader): DeleteCategoryRequest;
}

export namespace DeleteCategoryRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListCategoriesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListCategoriesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCategoriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCategoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCategoriesRequest): ListCategoriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCategoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCategoriesRequest;
  static deserializeBinaryFromReader(message: ListCategoriesRequest, reader: jspb.BinaryReader): ListCategoriesRequest;
}

export namespace ListCategoriesRequest {
  export type AsObject = {
    pageSize: number;
    pageToken: string;
  };
}

export class ListCategoriesResponse extends jspb.Message {
  getCategoriesList(): Array<Category>;
  setCategoriesList(value: Array<Category>): ListCategoriesResponse;
  clearCategoriesList(): ListCategoriesResponse;
  addCategories(value?: Category, index?: number): Category;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCategoriesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCategoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCategoriesResponse): ListCategoriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCategoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCategoriesResponse;
  static deserializeBinaryFromReader(message: ListCategoriesResponse, reader: jspb.BinaryReader): ListCategoriesResponse;
}

export namespace ListCategoriesResponse {
  export type AsObject = {
    categoriesList: Array<Category.AsObject>;
    nextPageToken: string;
  };
}

export class CreateBusinessSocialAccountRequest extends jspb.Message {
  getBusinessSocialAccount(): BusinessSocialAccount | undefined;
  setBusinessSocialAccount(value?: BusinessSocialAccount): CreateBusinessSocialAccountRequest;
  hasBusinessSocialAccount(): boolean;
  clearBusinessSocialAccount(): CreateBusinessSocialAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessSocialAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessSocialAccountRequest): CreateBusinessSocialAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessSocialAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessSocialAccountRequest;
  static deserializeBinaryFromReader(message: CreateBusinessSocialAccountRequest, reader: jspb.BinaryReader): CreateBusinessSocialAccountRequest;
}

export namespace CreateBusinessSocialAccountRequest {
  export type AsObject = {
    businessSocialAccount?: BusinessSocialAccount.AsObject;
  };
}

export class CreateBusinessSocialAccountResponse extends jspb.Message {
  getBusinessSocialAccount(): BusinessSocialAccount | undefined;
  setBusinessSocialAccount(value?: BusinessSocialAccount): CreateBusinessSocialAccountResponse;
  hasBusinessSocialAccount(): boolean;
  clearBusinessSocialAccount(): CreateBusinessSocialAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessSocialAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessSocialAccountResponse): CreateBusinessSocialAccountResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessSocialAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessSocialAccountResponse;
  static deserializeBinaryFromReader(message: CreateBusinessSocialAccountResponse, reader: jspb.BinaryReader): CreateBusinessSocialAccountResponse;
}

export namespace CreateBusinessSocialAccountResponse {
  export type AsObject = {
    businessSocialAccount?: BusinessSocialAccount.AsObject;
  };
}

export class GetBusinessSocialAccountRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBusinessSocialAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessSocialAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessSocialAccountRequest): GetBusinessSocialAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetBusinessSocialAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessSocialAccountRequest;
  static deserializeBinaryFromReader(message: GetBusinessSocialAccountRequest, reader: jspb.BinaryReader): GetBusinessSocialAccountRequest;
}

export namespace GetBusinessSocialAccountRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetBusinessSocialAccountResponse extends jspb.Message {
  getBusinessSocialAccount(): BusinessSocialAccount | undefined;
  setBusinessSocialAccount(value?: BusinessSocialAccount): GetBusinessSocialAccountResponse;
  hasBusinessSocialAccount(): boolean;
  clearBusinessSocialAccount(): GetBusinessSocialAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessSocialAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessSocialAccountResponse): GetBusinessSocialAccountResponse.AsObject;
  static serializeBinaryToWriter(message: GetBusinessSocialAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessSocialAccountResponse;
  static deserializeBinaryFromReader(message: GetBusinessSocialAccountResponse, reader: jspb.BinaryReader): GetBusinessSocialAccountResponse;
}

export namespace GetBusinessSocialAccountResponse {
  export type AsObject = {
    businessSocialAccount?: BusinessSocialAccount.AsObject;
  };
}

export class UpdateBusinessSocialAccountRequest extends jspb.Message {
  getBusinessSocialAccount(): BusinessSocialAccount | undefined;
  setBusinessSocialAccount(value?: BusinessSocialAccount): UpdateBusinessSocialAccountRequest;
  hasBusinessSocialAccount(): boolean;
  clearBusinessSocialAccount(): UpdateBusinessSocialAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessSocialAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessSocialAccountRequest): UpdateBusinessSocialAccountRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessSocialAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessSocialAccountRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessSocialAccountRequest, reader: jspb.BinaryReader): UpdateBusinessSocialAccountRequest;
}

export namespace UpdateBusinessSocialAccountRequest {
  export type AsObject = {
    businessSocialAccount?: BusinessSocialAccount.AsObject;
  };
}

export class UpdateBusinessSocialAccountResponse extends jspb.Message {
  getBusinessSocialAccount(): BusinessSocialAccount | undefined;
  setBusinessSocialAccount(value?: BusinessSocialAccount): UpdateBusinessSocialAccountResponse;
  hasBusinessSocialAccount(): boolean;
  clearBusinessSocialAccount(): UpdateBusinessSocialAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessSocialAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessSocialAccountResponse): UpdateBusinessSocialAccountResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessSocialAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessSocialAccountResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessSocialAccountResponse, reader: jspb.BinaryReader): UpdateBusinessSocialAccountResponse;
}

export namespace UpdateBusinessSocialAccountResponse {
  export type AsObject = {
    businessSocialAccount?: BusinessSocialAccount.AsObject;
  };
}

export class DeleteBusinessSocialAccountRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteBusinessSocialAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessSocialAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessSocialAccountRequest): DeleteBusinessSocialAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBusinessSocialAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessSocialAccountRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessSocialAccountRequest, reader: jspb.BinaryReader): DeleteBusinessSocialAccountRequest;
}

export namespace DeleteBusinessSocialAccountRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListBusinessSocialAccountsRequest extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): ListBusinessSocialAccountsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBusinessSocialAccountsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBusinessSocialAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessSocialAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessSocialAccountsRequest): ListBusinessSocialAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBusinessSocialAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessSocialAccountsRequest;
  static deserializeBinaryFromReader(message: ListBusinessSocialAccountsRequest, reader: jspb.BinaryReader): ListBusinessSocialAccountsRequest;
}

export namespace ListBusinessSocialAccountsRequest {
  export type AsObject = {
    businessId: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListBusinessSocialAccountsResponse extends jspb.Message {
  getBusinessSocialAccountsList(): Array<BusinessSocialAccount>;
  setBusinessSocialAccountsList(value: Array<BusinessSocialAccount>): ListBusinessSocialAccountsResponse;
  clearBusinessSocialAccountsList(): ListBusinessSocialAccountsResponse;
  addBusinessSocialAccounts(value?: BusinessSocialAccount, index?: number): BusinessSocialAccount;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBusinessSocialAccountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessSocialAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessSocialAccountsResponse): ListBusinessSocialAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBusinessSocialAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessSocialAccountsResponse;
  static deserializeBinaryFromReader(message: ListBusinessSocialAccountsResponse, reader: jspb.BinaryReader): ListBusinessSocialAccountsResponse;
}

export namespace ListBusinessSocialAccountsResponse {
  export type AsObject = {
    businessSocialAccountsList: Array<BusinessSocialAccount.AsObject>;
    nextPageToken: string;
  };
}

export class CreateBusinessReviewRequest extends jspb.Message {
  getBusinessReview(): BusinessReview | undefined;
  setBusinessReview(value?: BusinessReview): CreateBusinessReviewRequest;
  hasBusinessReview(): boolean;
  clearBusinessReview(): CreateBusinessReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessReviewRequest): CreateBusinessReviewRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessReviewRequest;
  static deserializeBinaryFromReader(message: CreateBusinessReviewRequest, reader: jspb.BinaryReader): CreateBusinessReviewRequest;
}

export namespace CreateBusinessReviewRequest {
  export type AsObject = {
    businessReview?: BusinessReview.AsObject;
  };
}

export class CreateBusinessReviewResponse extends jspb.Message {
  getBusinessReview(): BusinessReview | undefined;
  setBusinessReview(value?: BusinessReview): CreateBusinessReviewResponse;
  hasBusinessReview(): boolean;
  clearBusinessReview(): CreateBusinessReviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessReviewResponse): CreateBusinessReviewResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessReviewResponse;
  static deserializeBinaryFromReader(message: CreateBusinessReviewResponse, reader: jspb.BinaryReader): CreateBusinessReviewResponse;
}

export namespace CreateBusinessReviewResponse {
  export type AsObject = {
    businessReview?: BusinessReview.AsObject;
  };
}

export class GetBusinessReviewRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBusinessReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessReviewRequest): GetBusinessReviewRequest.AsObject;
  static serializeBinaryToWriter(message: GetBusinessReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessReviewRequest;
  static deserializeBinaryFromReader(message: GetBusinessReviewRequest, reader: jspb.BinaryReader): GetBusinessReviewRequest;
}

export namespace GetBusinessReviewRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetBusinessReviewResponse extends jspb.Message {
  getBusinessReview(): BusinessReview | undefined;
  setBusinessReview(value?: BusinessReview): GetBusinessReviewResponse;
  hasBusinessReview(): boolean;
  clearBusinessReview(): GetBusinessReviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessReviewResponse): GetBusinessReviewResponse.AsObject;
  static serializeBinaryToWriter(message: GetBusinessReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessReviewResponse;
  static deserializeBinaryFromReader(message: GetBusinessReviewResponse, reader: jspb.BinaryReader): GetBusinessReviewResponse;
}

export namespace GetBusinessReviewResponse {
  export type AsObject = {
    businessReview?: BusinessReview.AsObject;
  };
}

export class UpdateBusinessReviewRequest extends jspb.Message {
  getBusinessReview(): BusinessReview | undefined;
  setBusinessReview(value?: BusinessReview): UpdateBusinessReviewRequest;
  hasBusinessReview(): boolean;
  clearBusinessReview(): UpdateBusinessReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessReviewRequest): UpdateBusinessReviewRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessReviewRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessReviewRequest, reader: jspb.BinaryReader): UpdateBusinessReviewRequest;
}

export namespace UpdateBusinessReviewRequest {
  export type AsObject = {
    businessReview?: BusinessReview.AsObject;
  };
}

export class UpdateBusinessReviewResponse extends jspb.Message {
  getBusinessReview(): BusinessReview | undefined;
  setBusinessReview(value?: BusinessReview): UpdateBusinessReviewResponse;
  hasBusinessReview(): boolean;
  clearBusinessReview(): UpdateBusinessReviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessReviewResponse): UpdateBusinessReviewResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessReviewResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessReviewResponse, reader: jspb.BinaryReader): UpdateBusinessReviewResponse;
}

export namespace UpdateBusinessReviewResponse {
  export type AsObject = {
    businessReview?: BusinessReview.AsObject;
  };
}

export class DeleteBusinessReviewRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteBusinessReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessReviewRequest): DeleteBusinessReviewRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBusinessReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessReviewRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessReviewRequest, reader: jspb.BinaryReader): DeleteBusinessReviewRequest;
}

export namespace DeleteBusinessReviewRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListBusinessReviewsRequest extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): ListBusinessReviewsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBusinessReviewsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBusinessReviewsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessReviewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessReviewsRequest): ListBusinessReviewsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBusinessReviewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessReviewsRequest;
  static deserializeBinaryFromReader(message: ListBusinessReviewsRequest, reader: jspb.BinaryReader): ListBusinessReviewsRequest;
}

export namespace ListBusinessReviewsRequest {
  export type AsObject = {
    businessId: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListBusinessReviewsResponse extends jspb.Message {
  getBusinessReviewsList(): Array<BusinessReview>;
  setBusinessReviewsList(value: Array<BusinessReview>): ListBusinessReviewsResponse;
  clearBusinessReviewsList(): ListBusinessReviewsResponse;
  addBusinessReviews(value?: BusinessReview, index?: number): BusinessReview;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBusinessReviewsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessReviewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessReviewsResponse): ListBusinessReviewsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBusinessReviewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessReviewsResponse;
  static deserializeBinaryFromReader(message: ListBusinessReviewsResponse, reader: jspb.BinaryReader): ListBusinessReviewsResponse;
}

export namespace ListBusinessReviewsResponse {
  export type AsObject = {
    businessReviewsList: Array<BusinessReview.AsObject>;
    nextPageToken: string;
  };
}

export class CreateBusinessMembershipRequest extends jspb.Message {
  getBusinessMembership(): BusinessMembership | undefined;
  setBusinessMembership(value?: BusinessMembership): CreateBusinessMembershipRequest;
  hasBusinessMembership(): boolean;
  clearBusinessMembership(): CreateBusinessMembershipRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessMembershipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessMembershipRequest): CreateBusinessMembershipRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessMembershipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessMembershipRequest;
  static deserializeBinaryFromReader(message: CreateBusinessMembershipRequest, reader: jspb.BinaryReader): CreateBusinessMembershipRequest;
}

export namespace CreateBusinessMembershipRequest {
  export type AsObject = {
    businessMembership?: BusinessMembership.AsObject;
  };
}

export class CreateBusinessMembershipResponse extends jspb.Message {
  getBusinessMembership(): BusinessMembership | undefined;
  setBusinessMembership(value?: BusinessMembership): CreateBusinessMembershipResponse;
  hasBusinessMembership(): boolean;
  clearBusinessMembership(): CreateBusinessMembershipResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessMembershipResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessMembershipResponse): CreateBusinessMembershipResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessMembershipResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessMembershipResponse;
  static deserializeBinaryFromReader(message: CreateBusinessMembershipResponse, reader: jspb.BinaryReader): CreateBusinessMembershipResponse;
}

export namespace CreateBusinessMembershipResponse {
  export type AsObject = {
    businessMembership?: BusinessMembership.AsObject;
  };
}

export class GetBusinessMembershipRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBusinessMembershipRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessMembershipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessMembershipRequest): GetBusinessMembershipRequest.AsObject;
  static serializeBinaryToWriter(message: GetBusinessMembershipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessMembershipRequest;
  static deserializeBinaryFromReader(message: GetBusinessMembershipRequest, reader: jspb.BinaryReader): GetBusinessMembershipRequest;
}

export namespace GetBusinessMembershipRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetBusinessMembershipResponse extends jspb.Message {
  getBusinessMembership(): BusinessMembership | undefined;
  setBusinessMembership(value?: BusinessMembership): GetBusinessMembershipResponse;
  hasBusinessMembership(): boolean;
  clearBusinessMembership(): GetBusinessMembershipResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessMembershipResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessMembershipResponse): GetBusinessMembershipResponse.AsObject;
  static serializeBinaryToWriter(message: GetBusinessMembershipResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessMembershipResponse;
  static deserializeBinaryFromReader(message: GetBusinessMembershipResponse, reader: jspb.BinaryReader): GetBusinessMembershipResponse;
}

export namespace GetBusinessMembershipResponse {
  export type AsObject = {
    businessMembership?: BusinessMembership.AsObject;
  };
}

export class UpdateBusinessMembershipRequest extends jspb.Message {
  getBusinessMembership(): BusinessMembership | undefined;
  setBusinessMembership(value?: BusinessMembership): UpdateBusinessMembershipRequest;
  hasBusinessMembership(): boolean;
  clearBusinessMembership(): UpdateBusinessMembershipRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessMembershipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessMembershipRequest): UpdateBusinessMembershipRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessMembershipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessMembershipRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessMembershipRequest, reader: jspb.BinaryReader): UpdateBusinessMembershipRequest;
}

export namespace UpdateBusinessMembershipRequest {
  export type AsObject = {
    businessMembership?: BusinessMembership.AsObject;
  };
}

export class UpdateBusinessMembershipResponse extends jspb.Message {
  getBusinessMembership(): BusinessMembership | undefined;
  setBusinessMembership(value?: BusinessMembership): UpdateBusinessMembershipResponse;
  hasBusinessMembership(): boolean;
  clearBusinessMembership(): UpdateBusinessMembershipResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessMembershipResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessMembershipResponse): UpdateBusinessMembershipResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessMembershipResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessMembershipResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessMembershipResponse, reader: jspb.BinaryReader): UpdateBusinessMembershipResponse;
}

export namespace UpdateBusinessMembershipResponse {
  export type AsObject = {
    businessMembership?: BusinessMembership.AsObject;
  };
}

export class DeleteBusinessMembershipRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteBusinessMembershipRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessMembershipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessMembershipRequest): DeleteBusinessMembershipRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBusinessMembershipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessMembershipRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessMembershipRequest, reader: jspb.BinaryReader): DeleteBusinessMembershipRequest;
}

export namespace DeleteBusinessMembershipRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListBusinessMembershipsRequest extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): ListBusinessMembershipsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBusinessMembershipsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBusinessMembershipsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessMembershipsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessMembershipsRequest): ListBusinessMembershipsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBusinessMembershipsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessMembershipsRequest;
  static deserializeBinaryFromReader(message: ListBusinessMembershipsRequest, reader: jspb.BinaryReader): ListBusinessMembershipsRequest;
}

export namespace ListBusinessMembershipsRequest {
  export type AsObject = {
    businessId: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListBusinessMembershipsResponse extends jspb.Message {
  getBusinessMembershipsList(): Array<BusinessMembership>;
  setBusinessMembershipsList(value: Array<BusinessMembership>): ListBusinessMembershipsResponse;
  clearBusinessMembershipsList(): ListBusinessMembershipsResponse;
  addBusinessMemberships(value?: BusinessMembership, index?: number): BusinessMembership;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBusinessMembershipsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessMembershipsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessMembershipsResponse): ListBusinessMembershipsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBusinessMembershipsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessMembershipsResponse;
  static deserializeBinaryFromReader(message: ListBusinessMembershipsResponse, reader: jspb.BinaryReader): ListBusinessMembershipsResponse;
}

export namespace ListBusinessMembershipsResponse {
  export type AsObject = {
    businessMembershipsList: Array<BusinessMembership.AsObject>;
    nextPageToken: string;
  };
}

export class CreateBrandRequest extends jspb.Message {
  getBrand(): Brand | undefined;
  setBrand(value?: Brand): CreateBrandRequest;
  hasBrand(): boolean;
  clearBrand(): CreateBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBrandRequest): CreateBrandRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBrandRequest;
  static deserializeBinaryFromReader(message: CreateBrandRequest, reader: jspb.BinaryReader): CreateBrandRequest;
}

export namespace CreateBrandRequest {
  export type AsObject = {
    brand?: Brand.AsObject;
  };
}

export class CreateBrandResponse extends jspb.Message {
  getBrandId(): string;
  setBrandId(value: string): CreateBrandResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBrandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBrandResponse): CreateBrandResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBrandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBrandResponse;
  static deserializeBinaryFromReader(message: CreateBrandResponse, reader: jspb.BinaryReader): CreateBrandResponse;
}

export namespace CreateBrandResponse {
  export type AsObject = {
    brandId: string;
  };
}

export class GetBrandRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrandRequest): GetBrandRequest.AsObject;
  static serializeBinaryToWriter(message: GetBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrandRequest;
  static deserializeBinaryFromReader(message: GetBrandRequest, reader: jspb.BinaryReader): GetBrandRequest;
}

export namespace GetBrandRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetBrandResponse extends jspb.Message {
  getBrand(): Brand | undefined;
  setBrand(value?: Brand): GetBrandResponse;
  hasBrand(): boolean;
  clearBrand(): GetBrandResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrandResponse): GetBrandResponse.AsObject;
  static serializeBinaryToWriter(message: GetBrandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrandResponse;
  static deserializeBinaryFromReader(message: GetBrandResponse, reader: jspb.BinaryReader): GetBrandResponse;
}

export namespace GetBrandResponse {
  export type AsObject = {
    brand?: Brand.AsObject;
  };
}

export class UpdateBrandRequest extends jspb.Message {
  getBrand(): Brand | undefined;
  setBrand(value?: Brand): UpdateBrandRequest;
  hasBrand(): boolean;
  clearBrand(): UpdateBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBrandRequest): UpdateBrandRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBrandRequest;
  static deserializeBinaryFromReader(message: UpdateBrandRequest, reader: jspb.BinaryReader): UpdateBrandRequest;
}

export namespace UpdateBrandRequest {
  export type AsObject = {
    brand?: Brand.AsObject;
  };
}

export class UpdateBrandResponse extends jspb.Message {
  getBrandId(): string;
  setBrandId(value: string): UpdateBrandResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBrandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBrandResponse): UpdateBrandResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBrandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBrandResponse;
  static deserializeBinaryFromReader(message: UpdateBrandResponse, reader: jspb.BinaryReader): UpdateBrandResponse;
}

export namespace UpdateBrandResponse {
  export type AsObject = {
    brandId: string;
  };
}

export class DeleteBrandRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBrandRequest): DeleteBrandRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBrandRequest;
  static deserializeBinaryFromReader(message: DeleteBrandRequest, reader: jspb.BinaryReader): DeleteBrandRequest;
}

export namespace DeleteBrandRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListBrandsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListBrandsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBrandsRequest;

  getFilter(): string;
  setFilter(value: string): ListBrandsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBrandsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBrandsRequest): ListBrandsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBrandsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBrandsRequest;
  static deserializeBinaryFromReader(message: ListBrandsRequest, reader: jspb.BinaryReader): ListBrandsRequest;
}

export namespace ListBrandsRequest {
  export type AsObject = {
    pageSize: number;
    pageToken: string;
    filter: string;
  };
}

export class ListBrandsResponse extends jspb.Message {
  getBrandsList(): Array<Brand>;
  setBrandsList(value: Array<Brand>): ListBrandsResponse;
  clearBrandsList(): ListBrandsResponse;
  addBrands(value?: Brand, index?: number): Brand;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBrandsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBrandsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBrandsResponse): ListBrandsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBrandsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBrandsResponse;
  static deserializeBinaryFromReader(message: ListBrandsResponse, reader: jspb.BinaryReader): ListBrandsResponse;
}

export namespace ListBrandsResponse {
  export type AsObject = {
    brandsList: Array<Brand.AsObject>;
    nextPageToken: string;
  };
}

export class SearchBrandsRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchBrandsRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchBrandsRequest;

  getPageToken(): string;
  setPageToken(value: string): SearchBrandsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchBrandsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchBrandsRequest): SearchBrandsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchBrandsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchBrandsRequest;
  static deserializeBinaryFromReader(message: SearchBrandsRequest, reader: jspb.BinaryReader): SearchBrandsRequest;
}

export namespace SearchBrandsRequest {
  export type AsObject = {
    query: string;
    pageSize: number;
    pageToken: string;
  };
}

export class SearchBrandsResponse extends jspb.Message {
  getBrandsList(): Array<Brand>;
  setBrandsList(value: Array<Brand>): SearchBrandsResponse;
  clearBrandsList(): SearchBrandsResponse;
  addBrands(value?: Brand, index?: number): Brand;

  getNextPageToken(): string;
  setNextPageToken(value: string): SearchBrandsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchBrandsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchBrandsResponse): SearchBrandsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchBrandsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchBrandsResponse;
  static deserializeBinaryFromReader(message: SearchBrandsResponse, reader: jspb.BinaryReader): SearchBrandsResponse;
}

export namespace SearchBrandsResponse {
  export type AsObject = {
    brandsList: Array<Brand.AsObject>;
    nextPageToken: string;
  };
}

export class CreateBusinessBrandRequest extends jspb.Message {
  getBusinessBrand(): BusinessBrand | undefined;
  setBusinessBrand(value?: BusinessBrand): CreateBusinessBrandRequest;
  hasBusinessBrand(): boolean;
  clearBusinessBrand(): CreateBusinessBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessBrandRequest): CreateBusinessBrandRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessBrandRequest;
  static deserializeBinaryFromReader(message: CreateBusinessBrandRequest, reader: jspb.BinaryReader): CreateBusinessBrandRequest;
}

export namespace CreateBusinessBrandRequest {
  export type AsObject = {
    businessBrand?: BusinessBrand.AsObject;
  };
}

export class CreateBusinessBrandResponse extends jspb.Message {
  getBusinessBrand(): BusinessBrand | undefined;
  setBusinessBrand(value?: BusinessBrand): CreateBusinessBrandResponse;
  hasBusinessBrand(): boolean;
  clearBusinessBrand(): CreateBusinessBrandResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessBrandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessBrandResponse): CreateBusinessBrandResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessBrandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessBrandResponse;
  static deserializeBinaryFromReader(message: CreateBusinessBrandResponse, reader: jspb.BinaryReader): CreateBusinessBrandResponse;
}

export namespace CreateBusinessBrandResponse {
  export type AsObject = {
    businessBrand?: BusinessBrand.AsObject;
  };
}

export class GetBusinessBrandRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBusinessBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessBrandRequest): GetBusinessBrandRequest.AsObject;
  static serializeBinaryToWriter(message: GetBusinessBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessBrandRequest;
  static deserializeBinaryFromReader(message: GetBusinessBrandRequest, reader: jspb.BinaryReader): GetBusinessBrandRequest;
}

export namespace GetBusinessBrandRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetBusinessBrandResponse extends jspb.Message {
  getBusinessBrand(): BusinessBrand | undefined;
  setBusinessBrand(value?: BusinessBrand): GetBusinessBrandResponse;
  hasBusinessBrand(): boolean;
  clearBusinessBrand(): GetBusinessBrandResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessBrandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessBrandResponse): GetBusinessBrandResponse.AsObject;
  static serializeBinaryToWriter(message: GetBusinessBrandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessBrandResponse;
  static deserializeBinaryFromReader(message: GetBusinessBrandResponse, reader: jspb.BinaryReader): GetBusinessBrandResponse;
}

export namespace GetBusinessBrandResponse {
  export type AsObject = {
    businessBrand?: BusinessBrand.AsObject;
  };
}

export class UpdateBusinessBrandRequest extends jspb.Message {
  getBusinessBrand(): BusinessBrand | undefined;
  setBusinessBrand(value?: BusinessBrand): UpdateBusinessBrandRequest;
  hasBusinessBrand(): boolean;
  clearBusinessBrand(): UpdateBusinessBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessBrandRequest): UpdateBusinessBrandRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessBrandRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessBrandRequest, reader: jspb.BinaryReader): UpdateBusinessBrandRequest;
}

export namespace UpdateBusinessBrandRequest {
  export type AsObject = {
    businessBrand?: BusinessBrand.AsObject;
  };
}

export class UpdateBusinessBrandResponse extends jspb.Message {
  getBusinessBrand(): BusinessBrand | undefined;
  setBusinessBrand(value?: BusinessBrand): UpdateBusinessBrandResponse;
  hasBusinessBrand(): boolean;
  clearBusinessBrand(): UpdateBusinessBrandResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessBrandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessBrandResponse): UpdateBusinessBrandResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessBrandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessBrandResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessBrandResponse, reader: jspb.BinaryReader): UpdateBusinessBrandResponse;
}

export namespace UpdateBusinessBrandResponse {
  export type AsObject = {
    businessBrand?: BusinessBrand.AsObject;
  };
}

export class DeleteBusinessBrandRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteBusinessBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessBrandRequest): DeleteBusinessBrandRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBusinessBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessBrandRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessBrandRequest, reader: jspb.BinaryReader): DeleteBusinessBrandRequest;
}

export namespace DeleteBusinessBrandRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListBusinessBrandsRequest extends jspb.Message {
  getBusinessId(): string;
  setBusinessId(value: string): ListBusinessBrandsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBusinessBrandsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBusinessBrandsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessBrandsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessBrandsRequest): ListBusinessBrandsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBusinessBrandsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessBrandsRequest;
  static deserializeBinaryFromReader(message: ListBusinessBrandsRequest, reader: jspb.BinaryReader): ListBusinessBrandsRequest;
}

export namespace ListBusinessBrandsRequest {
  export type AsObject = {
    businessId: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListBusinessBrandsResponse extends jspb.Message {
  getBusinessBrandsList(): Array<BusinessBrand>;
  setBusinessBrandsList(value: Array<BusinessBrand>): ListBusinessBrandsResponse;
  clearBusinessBrandsList(): ListBusinessBrandsResponse;
  addBusinessBrands(value?: BusinessBrand, index?: number): BusinessBrand;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBusinessBrandsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBusinessBrandsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBusinessBrandsResponse): ListBusinessBrandsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBusinessBrandsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBusinessBrandsResponse;
  static deserializeBinaryFromReader(message: ListBusinessBrandsResponse, reader: jspb.BinaryReader): ListBusinessBrandsResponse;
}

export namespace ListBusinessBrandsResponse {
  export type AsObject = {
    businessBrandsList: Array<BusinessBrand.AsObject>;
    nextPageToken: string;
  };
}

export class AddBusinessToBrandRequest extends jspb.Message {
  getBrandId(): string;
  setBrandId(value: string): AddBusinessToBrandRequest;

  getBusinessId(): string;
  setBusinessId(value: string): AddBusinessToBrandRequest;

  getRelationship(): string;
  setRelationship(value: string): AddBusinessToBrandRequest;

  getIsPrimary(): boolean;
  setIsPrimary(value: boolean): AddBusinessToBrandRequest;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): AddBusinessToBrandRequest;
  hasMetadata(): boolean;
  clearMetadata(): AddBusinessToBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBusinessToBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBusinessToBrandRequest): AddBusinessToBrandRequest.AsObject;
  static serializeBinaryToWriter(message: AddBusinessToBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBusinessToBrandRequest;
  static deserializeBinaryFromReader(message: AddBusinessToBrandRequest, reader: jspb.BinaryReader): AddBusinessToBrandRequest;
}

export namespace AddBusinessToBrandRequest {
  export type AsObject = {
    brandId: string;
    businessId: string;
    relationship: string;
    isPrimary: boolean;
    metadata?: google_protobuf_struct_pb.Struct.AsObject;
  };
}

export class AddBusinessToBrandResponse extends jspb.Message {
  getBusinessBrandId(): string;
  setBusinessBrandId(value: string): AddBusinessToBrandResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBusinessToBrandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddBusinessToBrandResponse): AddBusinessToBrandResponse.AsObject;
  static serializeBinaryToWriter(message: AddBusinessToBrandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBusinessToBrandResponse;
  static deserializeBinaryFromReader(message: AddBusinessToBrandResponse, reader: jspb.BinaryReader): AddBusinessToBrandResponse;
}

export namespace AddBusinessToBrandResponse {
  export type AsObject = {
    businessBrandId: string;
  };
}

export class RemoveBusinessFromBrandRequest extends jspb.Message {
  getBusinessBrandId(): string;
  setBusinessBrandId(value: string): RemoveBusinessFromBrandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveBusinessFromBrandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveBusinessFromBrandRequest): RemoveBusinessFromBrandRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveBusinessFromBrandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveBusinessFromBrandRequest;
  static deserializeBinaryFromReader(message: RemoveBusinessFromBrandRequest, reader: jspb.BinaryReader): RemoveBusinessFromBrandRequest;
}

export namespace RemoveBusinessFromBrandRequest {
  export type AsObject = {
    businessBrandId: string;
  };
}

export class CreateBusinessRelationRequest extends jspb.Message {
  getBusinessRelation(): BusinessRelation | undefined;
  setBusinessRelation(value?: BusinessRelation): CreateBusinessRelationRequest;
  hasBusinessRelation(): boolean;
  clearBusinessRelation(): CreateBusinessRelationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessRelationRequest): CreateBusinessRelationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessRelationRequest;
  static deserializeBinaryFromReader(message: CreateBusinessRelationRequest, reader: jspb.BinaryReader): CreateBusinessRelationRequest;
}

export namespace CreateBusinessRelationRequest {
  export type AsObject = {
    businessRelation?: BusinessRelation.AsObject;
  };
}

export class CreateBusinessRelationResponse extends jspb.Message {
  getBusinessRelation(): BusinessRelation | undefined;
  setBusinessRelation(value?: BusinessRelation): CreateBusinessRelationResponse;
  hasBusinessRelation(): boolean;
  clearBusinessRelation(): CreateBusinessRelationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBusinessRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBusinessRelationResponse): CreateBusinessRelationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBusinessRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBusinessRelationResponse;
  static deserializeBinaryFromReader(message: CreateBusinessRelationResponse, reader: jspb.BinaryReader): CreateBusinessRelationResponse;
}

export namespace CreateBusinessRelationResponse {
  export type AsObject = {
    businessRelation?: BusinessRelation.AsObject;
  };
}

export class GetBusinessRelationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBusinessRelationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessRelationRequest): GetBusinessRelationRequest.AsObject;
  static serializeBinaryToWriter(message: GetBusinessRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessRelationRequest;
  static deserializeBinaryFromReader(message: GetBusinessRelationRequest, reader: jspb.BinaryReader): GetBusinessRelationRequest;
}

export namespace GetBusinessRelationRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetBusinessRelationResponse extends jspb.Message {
  getBusinessRelation(): BusinessRelation | undefined;
  setBusinessRelation(value?: BusinessRelation): GetBusinessRelationResponse;
  hasBusinessRelation(): boolean;
  clearBusinessRelation(): GetBusinessRelationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBusinessRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBusinessRelationResponse): GetBusinessRelationResponse.AsObject;
  static serializeBinaryToWriter(message: GetBusinessRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBusinessRelationResponse;
  static deserializeBinaryFromReader(message: GetBusinessRelationResponse, reader: jspb.BinaryReader): GetBusinessRelationResponse;
}

export namespace GetBusinessRelationResponse {
  export type AsObject = {
    businessRelation?: BusinessRelation.AsObject;
  };
}

export class UpdateBusinessRelationRequest extends jspb.Message {
  getBusinessRelation(): BusinessRelation | undefined;
  setBusinessRelation(value?: BusinessRelation): UpdateBusinessRelationRequest;
  hasBusinessRelation(): boolean;
  clearBusinessRelation(): UpdateBusinessRelationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessRelationRequest): UpdateBusinessRelationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessRelationRequest;
  static deserializeBinaryFromReader(message: UpdateBusinessRelationRequest, reader: jspb.BinaryReader): UpdateBusinessRelationRequest;
}

export namespace UpdateBusinessRelationRequest {
  export type AsObject = {
    businessRelation?: BusinessRelation.AsObject;
  };
}

export class UpdateBusinessRelationResponse extends jspb.Message {
  getBusinessRelation(): BusinessRelation | undefined;
  setBusinessRelation(value?: BusinessRelation): UpdateBusinessRelationResponse;
  hasBusinessRelation(): boolean;
  clearBusinessRelation(): UpdateBusinessRelationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBusinessRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBusinessRelationResponse): UpdateBusinessRelationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBusinessRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBusinessRelationResponse;
  static deserializeBinaryFromReader(message: UpdateBusinessRelationResponse, reader: jspb.BinaryReader): UpdateBusinessRelationResponse;
}

export namespace UpdateBusinessRelationResponse {
  export type AsObject = {
    businessRelation?: BusinessRelation.AsObject;
  };
}

export class DeleteBusinessRelationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteBusinessRelationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBusinessRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBusinessRelationRequest): DeleteBusinessRelationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBusinessRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBusinessRelationRequest;
  static deserializeBinaryFromReader(message: DeleteBusinessRelationRequest, reader: jspb.BinaryReader): DeleteBusinessRelationRequest;
}

export namespace DeleteBusinessRelationRequest {
  export type AsObject = {
    id: string;
  };
}

export enum VerificationStatus {
  VERIFICATION_STATUS_UNSPECIFIED = 0,
  DRAFT = 1,
  PENDING = 2,
  VERIFIED = 3,
  SUSPENDED = 4,
}
export enum ReviewStatus {
  REVIEW_STATUS_UNSPECIFIED = 0,
  VISIBLE = 1,
  HIDDEN = 2,
  FLAGGED = 3,
}
