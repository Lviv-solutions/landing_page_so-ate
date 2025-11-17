import * as grpcWeb from 'grpc-web';

import * as business_v1_business_pb from '../../business/v1/business_pb'; // proto import: "business/v1/business.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class BusinessServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createBusiness(
    request: business_v1_business_pb.CreateBusinessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateBusinessResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateBusinessResponse>;

  getBusiness(
    request: business_v1_business_pb.GetBusinessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetBusinessResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetBusinessResponse>;

  getBusinessByName(
    request: business_v1_business_pb.GetBusinessByNameRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetBusinessByNameResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetBusinessByNameResponse>;

  updateBusiness(
    request: business_v1_business_pb.UpdateBusinessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateBusinessResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateBusinessResponse>;

  deleteBusiness(
    request: business_v1_business_pb.DeleteBusinessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBusinesses(
    request: business_v1_business_pb.ListBusinessesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.ListBusinessesResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.ListBusinessesResponse>;

  createBusinessLocation(
    request: business_v1_business_pb.CreateBusinessLocationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateBusinessLocationResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateBusinessLocationResponse>;

  getBusinessLocation(
    request: business_v1_business_pb.GetBusinessLocationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetBusinessLocationResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetBusinessLocationResponse>;

  updateBusinessLocation(
    request: business_v1_business_pb.UpdateBusinessLocationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateBusinessLocationResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateBusinessLocationResponse>;

  deleteBusinessLocation(
    request: business_v1_business_pb.DeleteBusinessLocationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBusinessLocations(
    request: business_v1_business_pb.ListBusinessLocationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.ListBusinessLocationsResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.ListBusinessLocationsResponse>;

  createBusinessMedia(
    request: business_v1_business_pb.CreateBusinessMediaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateBusinessMediaResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateBusinessMediaResponse>;

  getBusinessMedia(
    request: business_v1_business_pb.GetBusinessMediaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetBusinessMediaResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetBusinessMediaResponse>;

  updateBusinessMedia(
    request: business_v1_business_pb.UpdateBusinessMediaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateBusinessMediaResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateBusinessMediaResponse>;

  deleteBusinessMedia(
    request: business_v1_business_pb.DeleteBusinessMediaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBusinessMedia(
    request: business_v1_business_pb.ListBusinessMediaRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.ListBusinessMediaResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.ListBusinessMediaResponse>;

  createSocialPlatform(
    request: business_v1_business_pb.CreateSocialPlatformRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateSocialPlatformResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateSocialPlatformResponse>;

  getSocialPlatform(
    request: business_v1_business_pb.GetSocialPlatformRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetSocialPlatformResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetSocialPlatformResponse>;

  updateSocialPlatform(
    request: business_v1_business_pb.UpdateSocialPlatformRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateSocialPlatformResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateSocialPlatformResponse>;

  deleteSocialPlatform(
    request: business_v1_business_pb.DeleteSocialPlatformRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listSocialPlatforms(
    request: business_v1_business_pb.ListSocialPlatformsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.ListSocialPlatformsResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.ListSocialPlatformsResponse>;

  createCategory(
    request: business_v1_business_pb.CreateCategoryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateCategoryResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateCategoryResponse>;

  getCategory(
    request: business_v1_business_pb.GetCategoryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetCategoryResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetCategoryResponse>;

  updateCategory(
    request: business_v1_business_pb.UpdateCategoryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateCategoryResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateCategoryResponse>;

  deleteCategory(
    request: business_v1_business_pb.DeleteCategoryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listCategories(
    request: business_v1_business_pb.ListCategoriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.ListCategoriesResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.ListCategoriesResponse>;

  createBusinessSocialAccount(
    request: business_v1_business_pb.CreateBusinessSocialAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateBusinessSocialAccountResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateBusinessSocialAccountResponse>;

  getBusinessSocialAccount(
    request: business_v1_business_pb.GetBusinessSocialAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetBusinessSocialAccountResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetBusinessSocialAccountResponse>;

  updateBusinessSocialAccount(
    request: business_v1_business_pb.UpdateBusinessSocialAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateBusinessSocialAccountResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateBusinessSocialAccountResponse>;

  deleteBusinessSocialAccount(
    request: business_v1_business_pb.DeleteBusinessSocialAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBusinessSocialAccounts(
    request: business_v1_business_pb.ListBusinessSocialAccountsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.ListBusinessSocialAccountsResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.ListBusinessSocialAccountsResponse>;

  createBusinessReview(
    request: business_v1_business_pb.CreateBusinessReviewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateBusinessReviewResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateBusinessReviewResponse>;

  getBusinessReview(
    request: business_v1_business_pb.GetBusinessReviewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetBusinessReviewResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetBusinessReviewResponse>;

  updateBusinessReview(
    request: business_v1_business_pb.UpdateBusinessReviewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateBusinessReviewResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateBusinessReviewResponse>;

  deleteBusinessReview(
    request: business_v1_business_pb.DeleteBusinessReviewRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBusinessReviews(
    request: business_v1_business_pb.ListBusinessReviewsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.ListBusinessReviewsResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.ListBusinessReviewsResponse>;

  createBusinessMembership(
    request: business_v1_business_pb.CreateBusinessMembershipRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateBusinessMembershipResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateBusinessMembershipResponse>;

  getBusinessMembership(
    request: business_v1_business_pb.GetBusinessMembershipRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetBusinessMembershipResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetBusinessMembershipResponse>;

  updateBusinessMembership(
    request: business_v1_business_pb.UpdateBusinessMembershipRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateBusinessMembershipResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateBusinessMembershipResponse>;

  deleteBusinessMembership(
    request: business_v1_business_pb.DeleteBusinessMembershipRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBusinessMemberships(
    request: business_v1_business_pb.ListBusinessMembershipsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.ListBusinessMembershipsResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.ListBusinessMembershipsResponse>;

  createBusinessBrand(
    request: business_v1_business_pb.CreateBusinessBrandRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateBusinessBrandResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateBusinessBrandResponse>;

  getBusinessBrand(
    request: business_v1_business_pb.GetBusinessBrandRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetBusinessBrandResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetBusinessBrandResponse>;

  updateBusinessBrand(
    request: business_v1_business_pb.UpdateBusinessBrandRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateBusinessBrandResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateBusinessBrandResponse>;

  deleteBusinessBrand(
    request: business_v1_business_pb.DeleteBusinessBrandRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBusinessBrands(
    request: business_v1_business_pb.ListBusinessBrandsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.ListBusinessBrandsResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.ListBusinessBrandsResponse>;

  createBusinessRelation(
    request: business_v1_business_pb.CreateBusinessRelationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.CreateBusinessRelationResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.CreateBusinessRelationResponse>;

  getBusinessRelation(
    request: business_v1_business_pb.GetBusinessRelationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.GetBusinessRelationResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.GetBusinessRelationResponse>;

  updateBusinessRelation(
    request: business_v1_business_pb.UpdateBusinessRelationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: business_v1_business_pb.UpdateBusinessRelationResponse) => void
  ): grpcWeb.ClientReadableStream<business_v1_business_pb.UpdateBusinessRelationResponse>;

  deleteBusinessRelation(
    request: business_v1_business_pb.DeleteBusinessRelationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class BusinessServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createBusiness(
    request: business_v1_business_pb.CreateBusinessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateBusinessResponse>;

  getBusiness(
    request: business_v1_business_pb.GetBusinessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetBusinessResponse>;

  getBusinessByName(
    request: business_v1_business_pb.GetBusinessByNameRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetBusinessByNameResponse>;

  updateBusiness(
    request: business_v1_business_pb.UpdateBusinessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateBusinessResponse>;

  deleteBusiness(
    request: business_v1_business_pb.DeleteBusinessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBusinesses(
    request: business_v1_business_pb.ListBusinessesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.ListBusinessesResponse>;

  createBusinessLocation(
    request: business_v1_business_pb.CreateBusinessLocationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateBusinessLocationResponse>;

  getBusinessLocation(
    request: business_v1_business_pb.GetBusinessLocationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetBusinessLocationResponse>;

  updateBusinessLocation(
    request: business_v1_business_pb.UpdateBusinessLocationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateBusinessLocationResponse>;

  deleteBusinessLocation(
    request: business_v1_business_pb.DeleteBusinessLocationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBusinessLocations(
    request: business_v1_business_pb.ListBusinessLocationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.ListBusinessLocationsResponse>;

  createBusinessMedia(
    request: business_v1_business_pb.CreateBusinessMediaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateBusinessMediaResponse>;

  getBusinessMedia(
    request: business_v1_business_pb.GetBusinessMediaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetBusinessMediaResponse>;

  updateBusinessMedia(
    request: business_v1_business_pb.UpdateBusinessMediaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateBusinessMediaResponse>;

  deleteBusinessMedia(
    request: business_v1_business_pb.DeleteBusinessMediaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBusinessMedia(
    request: business_v1_business_pb.ListBusinessMediaRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.ListBusinessMediaResponse>;

  createSocialPlatform(
    request: business_v1_business_pb.CreateSocialPlatformRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateSocialPlatformResponse>;

  getSocialPlatform(
    request: business_v1_business_pb.GetSocialPlatformRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetSocialPlatformResponse>;

  updateSocialPlatform(
    request: business_v1_business_pb.UpdateSocialPlatformRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateSocialPlatformResponse>;

  deleteSocialPlatform(
    request: business_v1_business_pb.DeleteSocialPlatformRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listSocialPlatforms(
    request: business_v1_business_pb.ListSocialPlatformsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.ListSocialPlatformsResponse>;

  createCategory(
    request: business_v1_business_pb.CreateCategoryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateCategoryResponse>;

  getCategory(
    request: business_v1_business_pb.GetCategoryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetCategoryResponse>;

  updateCategory(
    request: business_v1_business_pb.UpdateCategoryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateCategoryResponse>;

  deleteCategory(
    request: business_v1_business_pb.DeleteCategoryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listCategories(
    request: business_v1_business_pb.ListCategoriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.ListCategoriesResponse>;

  createBusinessSocialAccount(
    request: business_v1_business_pb.CreateBusinessSocialAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateBusinessSocialAccountResponse>;

  getBusinessSocialAccount(
    request: business_v1_business_pb.GetBusinessSocialAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetBusinessSocialAccountResponse>;

  updateBusinessSocialAccount(
    request: business_v1_business_pb.UpdateBusinessSocialAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateBusinessSocialAccountResponse>;

  deleteBusinessSocialAccount(
    request: business_v1_business_pb.DeleteBusinessSocialAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBusinessSocialAccounts(
    request: business_v1_business_pb.ListBusinessSocialAccountsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.ListBusinessSocialAccountsResponse>;

  createBusinessReview(
    request: business_v1_business_pb.CreateBusinessReviewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateBusinessReviewResponse>;

  getBusinessReview(
    request: business_v1_business_pb.GetBusinessReviewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetBusinessReviewResponse>;

  updateBusinessReview(
    request: business_v1_business_pb.UpdateBusinessReviewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateBusinessReviewResponse>;

  deleteBusinessReview(
    request: business_v1_business_pb.DeleteBusinessReviewRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBusinessReviews(
    request: business_v1_business_pb.ListBusinessReviewsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.ListBusinessReviewsResponse>;

  createBusinessMembership(
    request: business_v1_business_pb.CreateBusinessMembershipRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateBusinessMembershipResponse>;

  getBusinessMembership(
    request: business_v1_business_pb.GetBusinessMembershipRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetBusinessMembershipResponse>;

  updateBusinessMembership(
    request: business_v1_business_pb.UpdateBusinessMembershipRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateBusinessMembershipResponse>;

  deleteBusinessMembership(
    request: business_v1_business_pb.DeleteBusinessMembershipRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBusinessMemberships(
    request: business_v1_business_pb.ListBusinessMembershipsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.ListBusinessMembershipsResponse>;

  createBusinessBrand(
    request: business_v1_business_pb.CreateBusinessBrandRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateBusinessBrandResponse>;

  getBusinessBrand(
    request: business_v1_business_pb.GetBusinessBrandRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetBusinessBrandResponse>;

  updateBusinessBrand(
    request: business_v1_business_pb.UpdateBusinessBrandRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateBusinessBrandResponse>;

  deleteBusinessBrand(
    request: business_v1_business_pb.DeleteBusinessBrandRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBusinessBrands(
    request: business_v1_business_pb.ListBusinessBrandsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.ListBusinessBrandsResponse>;

  createBusinessRelation(
    request: business_v1_business_pb.CreateBusinessRelationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.CreateBusinessRelationResponse>;

  getBusinessRelation(
    request: business_v1_business_pb.GetBusinessRelationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.GetBusinessRelationResponse>;

  updateBusinessRelation(
    request: business_v1_business_pb.UpdateBusinessRelationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<business_v1_business_pb.UpdateBusinessRelationResponse>;

  deleteBusinessRelation(
    request: business_v1_business_pb.DeleteBusinessRelationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

