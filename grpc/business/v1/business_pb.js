// source: business/v1/business.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.business.v1.Business', null, global);
goog.exportSymbol('proto.business.v1.BusinessBrand', null, global);
goog.exportSymbol('proto.business.v1.BusinessLocation', null, global);
goog.exportSymbol('proto.business.v1.BusinessMedia', null, global);
goog.exportSymbol('proto.business.v1.BusinessMembership', null, global);
goog.exportSymbol('proto.business.v1.BusinessRelation', null, global);
goog.exportSymbol('proto.business.v1.BusinessReview', null, global);
goog.exportSymbol('proto.business.v1.BusinessSocialAccount', null, global);
goog.exportSymbol('proto.business.v1.Category', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessBrandRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessBrandResponse', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessLocationRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessLocationResponse', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessMediaRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessMediaResponse', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessMembershipRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessMembershipResponse', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessRelationRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessRelationResponse', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessResponse', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessReviewRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessReviewResponse', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessSocialAccountRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateBusinessSocialAccountResponse', null, global);
goog.exportSymbol('proto.business.v1.CreateCategoryRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateCategoryResponse', null, global);
goog.exportSymbol('proto.business.v1.CreateSocialPlatformRequest', null, global);
goog.exportSymbol('proto.business.v1.CreateSocialPlatformResponse', null, global);
goog.exportSymbol('proto.business.v1.DeleteBusinessBrandRequest', null, global);
goog.exportSymbol('proto.business.v1.DeleteBusinessLocationRequest', null, global);
goog.exportSymbol('proto.business.v1.DeleteBusinessMediaRequest', null, global);
goog.exportSymbol('proto.business.v1.DeleteBusinessMembershipRequest', null, global);
goog.exportSymbol('proto.business.v1.DeleteBusinessRelationRequest', null, global);
goog.exportSymbol('proto.business.v1.DeleteBusinessRequest', null, global);
goog.exportSymbol('proto.business.v1.DeleteBusinessReviewRequest', null, global);
goog.exportSymbol('proto.business.v1.DeleteBusinessSocialAccountRequest', null, global);
goog.exportSymbol('proto.business.v1.DeleteCategoryRequest', null, global);
goog.exportSymbol('proto.business.v1.DeleteSocialPlatformRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessBrandRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessBrandResponse', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessByNameRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessByNameResponse', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessLocationRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessLocationResponse', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessMediaRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessMediaResponse', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessMembershipRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessMembershipResponse', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessRelationRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessRelationResponse', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessResponse', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessReviewRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessReviewResponse', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessSocialAccountRequest', null, global);
goog.exportSymbol('proto.business.v1.GetBusinessSocialAccountResponse', null, global);
goog.exportSymbol('proto.business.v1.GetCategoryRequest', null, global);
goog.exportSymbol('proto.business.v1.GetCategoryResponse', null, global);
goog.exportSymbol('proto.business.v1.GetSocialPlatformRequest', null, global);
goog.exportSymbol('proto.business.v1.GetSocialPlatformResponse', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessBrandsRequest', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessBrandsResponse', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessLocationsRequest', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessLocationsResponse', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessMediaRequest', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessMediaResponse', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessMembershipsRequest', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessMembershipsResponse', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessReviewsRequest', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessReviewsResponse', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessSocialAccountsRequest', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessSocialAccountsResponse', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessesRequest', null, global);
goog.exportSymbol('proto.business.v1.ListBusinessesResponse', null, global);
goog.exportSymbol('proto.business.v1.ListCategoriesRequest', null, global);
goog.exportSymbol('proto.business.v1.ListCategoriesResponse', null, global);
goog.exportSymbol('proto.business.v1.ListSocialPlatformsRequest', null, global);
goog.exportSymbol('proto.business.v1.ListSocialPlatformsResponse', null, global);
goog.exportSymbol('proto.business.v1.ReviewStatus', null, global);
goog.exportSymbol('proto.business.v1.SocialPlatform', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessBrandRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessBrandResponse', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessLocationRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessLocationResponse', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessMediaRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessMediaResponse', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessMembershipRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessMembershipResponse', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessRelationRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessRelationResponse', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessResponse', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessReviewRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessReviewResponse', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessSocialAccountRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateBusinessSocialAccountResponse', null, global);
goog.exportSymbol('proto.business.v1.UpdateCategoryRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateCategoryResponse', null, global);
goog.exportSymbol('proto.business.v1.UpdateSocialPlatformRequest', null, global);
goog.exportSymbol('proto.business.v1.UpdateSocialPlatformResponse', null, global);
goog.exportSymbol('proto.business.v1.VerificationStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.Business = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.Business, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.Business.displayName = 'proto.business.v1.Business';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.BusinessLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.BusinessLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.BusinessLocation.displayName = 'proto.business.v1.BusinessLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.BusinessMedia = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.BusinessMedia, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.BusinessMedia.displayName = 'proto.business.v1.BusinessMedia';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.SocialPlatform = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.SocialPlatform, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.SocialPlatform.displayName = 'proto.business.v1.SocialPlatform';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.Category = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.Category, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.Category.displayName = 'proto.business.v1.Category';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.BusinessSocialAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.BusinessSocialAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.BusinessSocialAccount.displayName = 'proto.business.v1.BusinessSocialAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.BusinessReview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.BusinessReview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.BusinessReview.displayName = 'proto.business.v1.BusinessReview';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.BusinessMembership = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.BusinessMembership, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.BusinessMembership.displayName = 'proto.business.v1.BusinessMembership';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.BusinessBrand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.BusinessBrand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.BusinessBrand.displayName = 'proto.business.v1.BusinessBrand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.BusinessRelation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.BusinessRelation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.BusinessRelation.displayName = 'proto.business.v1.BusinessRelation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessRequest.displayName = 'proto.business.v1.CreateBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessResponse.displayName = 'proto.business.v1.CreateBusinessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessRequest.displayName = 'proto.business.v1.GetBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessResponse.displayName = 'proto.business.v1.GetBusinessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessByNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessByNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessByNameRequest.displayName = 'proto.business.v1.GetBusinessByNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessByNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessByNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessByNameResponse.displayName = 'proto.business.v1.GetBusinessByNameResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessRequest.displayName = 'proto.business.v1.UpdateBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessResponse.displayName = 'proto.business.v1.UpdateBusinessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteBusinessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteBusinessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteBusinessRequest.displayName = 'proto.business.v1.DeleteBusinessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.ListBusinessesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessesRequest.displayName = 'proto.business.v1.ListBusinessesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.v1.ListBusinessesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.v1.ListBusinessesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessesResponse.displayName = 'proto.business.v1.ListBusinessesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessLocationRequest.displayName = 'proto.business.v1.CreateBusinessLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessLocationResponse.displayName = 'proto.business.v1.CreateBusinessLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessLocationRequest.displayName = 'proto.business.v1.GetBusinessLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessLocationResponse.displayName = 'proto.business.v1.GetBusinessLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessLocationRequest.displayName = 'proto.business.v1.UpdateBusinessLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessLocationResponse.displayName = 'proto.business.v1.UpdateBusinessLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteBusinessLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteBusinessLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteBusinessLocationRequest.displayName = 'proto.business.v1.DeleteBusinessLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessLocationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.ListBusinessLocationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessLocationsRequest.displayName = 'proto.business.v1.ListBusinessLocationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessLocationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.v1.ListBusinessLocationsResponse.repeatedFields_, null);
};
goog.inherits(proto.business.v1.ListBusinessLocationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessLocationsResponse.displayName = 'proto.business.v1.ListBusinessLocationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessMediaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessMediaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessMediaRequest.displayName = 'proto.business.v1.CreateBusinessMediaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessMediaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessMediaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessMediaResponse.displayName = 'proto.business.v1.CreateBusinessMediaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessMediaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessMediaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessMediaRequest.displayName = 'proto.business.v1.GetBusinessMediaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessMediaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessMediaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessMediaResponse.displayName = 'proto.business.v1.GetBusinessMediaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessMediaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessMediaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessMediaRequest.displayName = 'proto.business.v1.UpdateBusinessMediaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessMediaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessMediaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessMediaResponse.displayName = 'proto.business.v1.UpdateBusinessMediaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteBusinessMediaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteBusinessMediaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteBusinessMediaRequest.displayName = 'proto.business.v1.DeleteBusinessMediaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessMediaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.ListBusinessMediaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessMediaRequest.displayName = 'proto.business.v1.ListBusinessMediaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessMediaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.v1.ListBusinessMediaResponse.repeatedFields_, null);
};
goog.inherits(proto.business.v1.ListBusinessMediaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessMediaResponse.displayName = 'proto.business.v1.ListBusinessMediaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateSocialPlatformRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateSocialPlatformRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateSocialPlatformRequest.displayName = 'proto.business.v1.CreateSocialPlatformRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateSocialPlatformResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateSocialPlatformResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateSocialPlatformResponse.displayName = 'proto.business.v1.CreateSocialPlatformResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetSocialPlatformRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetSocialPlatformRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetSocialPlatformRequest.displayName = 'proto.business.v1.GetSocialPlatformRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetSocialPlatformResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetSocialPlatformResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetSocialPlatformResponse.displayName = 'proto.business.v1.GetSocialPlatformResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateSocialPlatformRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateSocialPlatformRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateSocialPlatformRequest.displayName = 'proto.business.v1.UpdateSocialPlatformRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateSocialPlatformResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateSocialPlatformResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateSocialPlatformResponse.displayName = 'proto.business.v1.UpdateSocialPlatformResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteSocialPlatformRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteSocialPlatformRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteSocialPlatformRequest.displayName = 'proto.business.v1.DeleteSocialPlatformRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListSocialPlatformsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.ListSocialPlatformsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListSocialPlatformsRequest.displayName = 'proto.business.v1.ListSocialPlatformsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListSocialPlatformsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.v1.ListSocialPlatformsResponse.repeatedFields_, null);
};
goog.inherits(proto.business.v1.ListSocialPlatformsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListSocialPlatformsResponse.displayName = 'proto.business.v1.ListSocialPlatformsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateCategoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateCategoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateCategoryRequest.displayName = 'proto.business.v1.CreateCategoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateCategoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateCategoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateCategoryResponse.displayName = 'proto.business.v1.CreateCategoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetCategoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetCategoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetCategoryRequest.displayName = 'proto.business.v1.GetCategoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetCategoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetCategoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetCategoryResponse.displayName = 'proto.business.v1.GetCategoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateCategoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateCategoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateCategoryRequest.displayName = 'proto.business.v1.UpdateCategoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateCategoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateCategoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateCategoryResponse.displayName = 'proto.business.v1.UpdateCategoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteCategoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteCategoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteCategoryRequest.displayName = 'proto.business.v1.DeleteCategoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListCategoriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.ListCategoriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListCategoriesRequest.displayName = 'proto.business.v1.ListCategoriesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListCategoriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.v1.ListCategoriesResponse.repeatedFields_, null);
};
goog.inherits(proto.business.v1.ListCategoriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListCategoriesResponse.displayName = 'proto.business.v1.ListCategoriesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessSocialAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessSocialAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessSocialAccountRequest.displayName = 'proto.business.v1.CreateBusinessSocialAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessSocialAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessSocialAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessSocialAccountResponse.displayName = 'proto.business.v1.CreateBusinessSocialAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessSocialAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessSocialAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessSocialAccountRequest.displayName = 'proto.business.v1.GetBusinessSocialAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessSocialAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessSocialAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessSocialAccountResponse.displayName = 'proto.business.v1.GetBusinessSocialAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessSocialAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessSocialAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessSocialAccountRequest.displayName = 'proto.business.v1.UpdateBusinessSocialAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessSocialAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessSocialAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessSocialAccountResponse.displayName = 'proto.business.v1.UpdateBusinessSocialAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteBusinessSocialAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteBusinessSocialAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteBusinessSocialAccountRequest.displayName = 'proto.business.v1.DeleteBusinessSocialAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessSocialAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.ListBusinessSocialAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessSocialAccountsRequest.displayName = 'proto.business.v1.ListBusinessSocialAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessSocialAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.v1.ListBusinessSocialAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.business.v1.ListBusinessSocialAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessSocialAccountsResponse.displayName = 'proto.business.v1.ListBusinessSocialAccountsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessReviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessReviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessReviewRequest.displayName = 'proto.business.v1.CreateBusinessReviewRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessReviewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessReviewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessReviewResponse.displayName = 'proto.business.v1.CreateBusinessReviewResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessReviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessReviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessReviewRequest.displayName = 'proto.business.v1.GetBusinessReviewRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessReviewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessReviewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessReviewResponse.displayName = 'proto.business.v1.GetBusinessReviewResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessReviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessReviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessReviewRequest.displayName = 'proto.business.v1.UpdateBusinessReviewRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessReviewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessReviewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessReviewResponse.displayName = 'proto.business.v1.UpdateBusinessReviewResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteBusinessReviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteBusinessReviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteBusinessReviewRequest.displayName = 'proto.business.v1.DeleteBusinessReviewRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessReviewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.ListBusinessReviewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessReviewsRequest.displayName = 'proto.business.v1.ListBusinessReviewsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessReviewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.v1.ListBusinessReviewsResponse.repeatedFields_, null);
};
goog.inherits(proto.business.v1.ListBusinessReviewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessReviewsResponse.displayName = 'proto.business.v1.ListBusinessReviewsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessMembershipRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessMembershipRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessMembershipRequest.displayName = 'proto.business.v1.CreateBusinessMembershipRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessMembershipResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessMembershipResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessMembershipResponse.displayName = 'proto.business.v1.CreateBusinessMembershipResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessMembershipRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessMembershipRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessMembershipRequest.displayName = 'proto.business.v1.GetBusinessMembershipRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessMembershipResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessMembershipResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessMembershipResponse.displayName = 'proto.business.v1.GetBusinessMembershipResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessMembershipRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessMembershipRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessMembershipRequest.displayName = 'proto.business.v1.UpdateBusinessMembershipRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessMembershipResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessMembershipResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessMembershipResponse.displayName = 'proto.business.v1.UpdateBusinessMembershipResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteBusinessMembershipRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteBusinessMembershipRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteBusinessMembershipRequest.displayName = 'proto.business.v1.DeleteBusinessMembershipRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessMembershipsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.ListBusinessMembershipsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessMembershipsRequest.displayName = 'proto.business.v1.ListBusinessMembershipsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessMembershipsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.v1.ListBusinessMembershipsResponse.repeatedFields_, null);
};
goog.inherits(proto.business.v1.ListBusinessMembershipsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessMembershipsResponse.displayName = 'proto.business.v1.ListBusinessMembershipsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessBrandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessBrandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessBrandRequest.displayName = 'proto.business.v1.CreateBusinessBrandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessBrandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessBrandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessBrandResponse.displayName = 'proto.business.v1.CreateBusinessBrandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessBrandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessBrandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessBrandRequest.displayName = 'proto.business.v1.GetBusinessBrandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessBrandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessBrandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessBrandResponse.displayName = 'proto.business.v1.GetBusinessBrandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessBrandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessBrandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessBrandRequest.displayName = 'proto.business.v1.UpdateBusinessBrandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessBrandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessBrandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessBrandResponse.displayName = 'proto.business.v1.UpdateBusinessBrandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteBusinessBrandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteBusinessBrandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteBusinessBrandRequest.displayName = 'proto.business.v1.DeleteBusinessBrandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessBrandsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.ListBusinessBrandsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessBrandsRequest.displayName = 'proto.business.v1.ListBusinessBrandsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.ListBusinessBrandsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.business.v1.ListBusinessBrandsResponse.repeatedFields_, null);
};
goog.inherits(proto.business.v1.ListBusinessBrandsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.ListBusinessBrandsResponse.displayName = 'proto.business.v1.ListBusinessBrandsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessRelationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessRelationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessRelationRequest.displayName = 'proto.business.v1.CreateBusinessRelationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.CreateBusinessRelationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.CreateBusinessRelationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.CreateBusinessRelationResponse.displayName = 'proto.business.v1.CreateBusinessRelationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessRelationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessRelationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessRelationRequest.displayName = 'proto.business.v1.GetBusinessRelationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.GetBusinessRelationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.GetBusinessRelationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.GetBusinessRelationResponse.displayName = 'proto.business.v1.GetBusinessRelationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessRelationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessRelationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessRelationRequest.displayName = 'proto.business.v1.UpdateBusinessRelationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.UpdateBusinessRelationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.UpdateBusinessRelationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.UpdateBusinessRelationResponse.displayName = 'proto.business.v1.UpdateBusinessRelationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.business.v1.DeleteBusinessRelationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.business.v1.DeleteBusinessRelationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.business.v1.DeleteBusinessRelationRequest.displayName = 'proto.business.v1.DeleteBusinessRelationRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.Business.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.Business.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.Business} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.Business.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
createdBy: jspb.Message.getFieldWithDefault(msg, 2, ""),
arName: jspb.Message.getFieldWithDefault(msg, 3, ""),
enName: jspb.Message.getFieldWithDefault(msg, 4, ""),
arDescription: jspb.Message.getFieldWithDefault(msg, 5, ""),
enDescription: jspb.Message.getFieldWithDefault(msg, 6, ""),
address: jspb.Message.getFieldWithDefault(msg, 7, ""),
phoneNumber: jspb.Message.getFieldWithDefault(msg, 8, ""),
storageQuota: jspb.Message.getFieldWithDefault(msg, 9, 0),
keyWords: (f = msg.getKeyWords()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
email: jspb.Message.getFieldWithDefault(msg, 11, ""),
workingHours: (f = msg.getWorkingHours()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
categoryId: jspb.Message.getFieldWithDefault(msg, 13, ""),
isActive: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
verificationStatus: jspb.Message.getFieldWithDefault(msg, 15, 0),
verifiedAt: (f = msg.getVerifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
deletedAt: (f = msg.getDeletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.Business}
 */
proto.business.v1.Business.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.Business;
  return proto.business.v1.Business.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.Business} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.Business}
 */
proto.business.v1.Business.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setArDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStorageQuota(value);
      break;
    case 10:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setKeyWords(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 12:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setWorkingHours(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryId(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 15:
      var value = /** @type {!proto.business.v1.VerificationStatus} */ (reader.readEnum());
      msg.setVerificationStatus(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setVerifiedAt(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletedAt(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 19:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.Business.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.Business.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.Business} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.Business.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEnName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getArDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEnDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStorageQuota();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getKeyWords();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getWorkingHours();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getCategoryId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getVerificationStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getVerifiedAt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeletedAt();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.Business.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string created_by = 2;
 * @return {string}
 */
proto.business.v1.Business.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ar_name = 3;
 * @return {string}
 */
proto.business.v1.Business.prototype.getArName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setArName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string en_name = 4;
 * @return {string}
 */
proto.business.v1.Business.prototype.getEnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setEnName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ar_description = 5;
 * @return {string}
 */
proto.business.v1.Business.prototype.getArDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setArDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string en_description = 6;
 * @return {string}
 */
proto.business.v1.Business.prototype.getEnDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setEnDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string address = 7;
 * @return {string}
 */
proto.business.v1.Business.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string phone_number = 8;
 * @return {string}
 */
proto.business.v1.Business.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 storage_quota = 9;
 * @return {number}
 */
proto.business.v1.Business.prototype.getStorageQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setStorageQuota = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional google.protobuf.Struct key_words = 10;
 * @return {?proto.google.protobuf.Struct}
 */
proto.business.v1.Business.prototype.getKeyWords = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 10));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.business.v1.Business} returns this
*/
proto.business.v1.Business.prototype.setKeyWords = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.clearKeyWords = function() {
  return this.setKeyWords(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.Business.prototype.hasKeyWords = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string email = 11;
 * @return {string}
 */
proto.business.v1.Business.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.Struct working_hours = 12;
 * @return {?proto.google.protobuf.Struct}
 */
proto.business.v1.Business.prototype.getWorkingHours = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 12));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.business.v1.Business} returns this
*/
proto.business.v1.Business.prototype.setWorkingHours = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.clearWorkingHours = function() {
  return this.setWorkingHours(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.Business.prototype.hasWorkingHours = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string category_id = 13;
 * @return {string}
 */
proto.business.v1.Business.prototype.getCategoryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setCategoryId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional bool is_active = 14;
 * @return {boolean}
 */
proto.business.v1.Business.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional VerificationStatus verification_status = 15;
 * @return {!proto.business.v1.VerificationStatus}
 */
proto.business.v1.Business.prototype.getVerificationStatus = function() {
  return /** @type {!proto.business.v1.VerificationStatus} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.business.v1.VerificationStatus} value
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.setVerificationStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional google.protobuf.Timestamp verified_at = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.Business.prototype.getVerifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.Business} returns this
*/
proto.business.v1.Business.prototype.setVerifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.clearVerifiedAt = function() {
  return this.setVerifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.Business.prototype.hasVerifiedAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp deleted_at = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.Business.prototype.getDeletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.Business} returns this
*/
proto.business.v1.Business.prototype.setDeletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.clearDeletedAt = function() {
  return this.setDeletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.Business.prototype.hasDeletedAt = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.Business.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.Business} returns this
*/
proto.business.v1.Business.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.Business.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.Business.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.Business} returns this
*/
proto.business.v1.Business.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.Business} returns this
 */
proto.business.v1.Business.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.Business.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 19) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.BusinessLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.BusinessLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.BusinessLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
businessId: jspb.Message.getFieldWithDefault(msg, 2, ""),
street: jspb.Message.getFieldWithDefault(msg, 3, ""),
city: jspb.Message.getFieldWithDefault(msg, 4, ""),
state: jspb.Message.getFieldWithDefault(msg, 5, ""),
zipCode: jspb.Message.getFieldWithDefault(msg, 6, ""),
language: jspb.Message.getFieldWithDefault(msg, 7, ""),
latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
mapUrl: jspb.Message.getFieldWithDefault(msg, 10, ""),
isPrimary: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.BusinessLocation}
 */
proto.business.v1.BusinessLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.BusinessLocation;
  return proto.business.v1.BusinessLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.BusinessLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.BusinessLocation}
 */
proto.business.v1.BusinessLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipCode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapUrl(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPrimary(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.BusinessLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.BusinessLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.BusinessLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStreet();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getZipCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getMapUrl();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getIsPrimary();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.BusinessLocation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_id = 2;
 * @return {string}
 */
proto.business.v1.BusinessLocation.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string street = 3;
 * @return {string}
 */
proto.business.v1.BusinessLocation.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setStreet = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string city = 4;
 * @return {string}
 */
proto.business.v1.BusinessLocation.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string state = 5;
 * @return {string}
 */
proto.business.v1.BusinessLocation.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string zip_code = 6;
 * @return {string}
 */
proto.business.v1.BusinessLocation.prototype.getZipCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setZipCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string language = 7;
 * @return {string}
 */
proto.business.v1.BusinessLocation.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double latitude = 8;
 * @return {number}
 */
proto.business.v1.BusinessLocation.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double longitude = 9;
 * @return {number}
 */
proto.business.v1.BusinessLocation.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional string map_url = 10;
 * @return {string}
 */
proto.business.v1.BusinessLocation.prototype.getMapUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setMapUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool is_primary = 11;
 * @return {boolean}
 */
proto.business.v1.BusinessLocation.prototype.getIsPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.setIsPrimary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessLocation.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessLocation} returns this
*/
proto.business.v1.BusinessLocation.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessLocation.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessLocation.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessLocation} returns this
*/
proto.business.v1.BusinessLocation.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessLocation} returns this
 */
proto.business.v1.BusinessLocation.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessLocation.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 13) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.BusinessMedia.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.BusinessMedia.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.BusinessMedia} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessMedia.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
businessId: jspb.Message.getFieldWithDefault(msg, 2, ""),
mediaUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
mediaType: jspb.Message.getFieldWithDefault(msg, 4, ""),
name: jspb.Message.getFieldWithDefault(msg, 5, ""),
uploadedAt: (f = msg.getUploadedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.BusinessMedia}
 */
proto.business.v1.BusinessMedia.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.BusinessMedia;
  return proto.business.v1.BusinessMedia.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.BusinessMedia} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.BusinessMedia}
 */
proto.business.v1.BusinessMedia.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUploadedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.BusinessMedia.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.BusinessMedia.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.BusinessMedia} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessMedia.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMediaUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMediaType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUploadedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.BusinessMedia.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessMedia} returns this
 */
proto.business.v1.BusinessMedia.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_id = 2;
 * @return {string}
 */
proto.business.v1.BusinessMedia.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessMedia} returns this
 */
proto.business.v1.BusinessMedia.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string media_url = 3;
 * @return {string}
 */
proto.business.v1.BusinessMedia.prototype.getMediaUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessMedia} returns this
 */
proto.business.v1.BusinessMedia.prototype.setMediaUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string media_type = 4;
 * @return {string}
 */
proto.business.v1.BusinessMedia.prototype.getMediaType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessMedia} returns this
 */
proto.business.v1.BusinessMedia.prototype.setMediaType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.business.v1.BusinessMedia.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessMedia} returns this
 */
proto.business.v1.BusinessMedia.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp uploaded_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessMedia.prototype.getUploadedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessMedia} returns this
*/
proto.business.v1.BusinessMedia.prototype.setUploadedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessMedia} returns this
 */
proto.business.v1.BusinessMedia.prototype.clearUploadedAt = function() {
  return this.setUploadedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessMedia.prototype.hasUploadedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessMedia.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessMedia} returns this
*/
proto.business.v1.BusinessMedia.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessMedia} returns this
 */
proto.business.v1.BusinessMedia.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessMedia.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.SocialPlatform.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.SocialPlatform.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.SocialPlatform} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.SocialPlatform.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.SocialPlatform}
 */
proto.business.v1.SocialPlatform.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.SocialPlatform;
  return proto.business.v1.SocialPlatform.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.SocialPlatform} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.SocialPlatform}
 */
proto.business.v1.SocialPlatform.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.SocialPlatform.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.SocialPlatform.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.SocialPlatform} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.SocialPlatform.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.SocialPlatform.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.SocialPlatform} returns this
 */
proto.business.v1.SocialPlatform.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.business.v1.SocialPlatform.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.SocialPlatform} returns this
 */
proto.business.v1.SocialPlatform.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.SocialPlatform.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.SocialPlatform} returns this
*/
proto.business.v1.SocialPlatform.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.SocialPlatform} returns this
 */
proto.business.v1.SocialPlatform.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.SocialPlatform.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.SocialPlatform.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.SocialPlatform} returns this
*/
proto.business.v1.SocialPlatform.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.SocialPlatform} returns this
 */
proto.business.v1.SocialPlatform.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.SocialPlatform.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.Category.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.Category.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.Category} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.Category.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.Category}
 */
proto.business.v1.Category.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.Category;
  return proto.business.v1.Category.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.Category} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.Category}
 */
proto.business.v1.Category.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.Category.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.Category.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.Category} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.Category.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.Category.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Category} returns this
 */
proto.business.v1.Category.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.business.v1.Category.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.Category} returns this
 */
proto.business.v1.Category.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.Category.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.Category} returns this
*/
proto.business.v1.Category.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.Category} returns this
 */
proto.business.v1.Category.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.Category.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.Category.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.Category} returns this
*/
proto.business.v1.Category.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.Category} returns this
 */
proto.business.v1.Category.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.Category.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.BusinessSocialAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.BusinessSocialAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.BusinessSocialAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessSocialAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
businessId: jspb.Message.getFieldWithDefault(msg, 2, ""),
platformId: jspb.Message.getFieldWithDefault(msg, 3, ""),
url: jspb.Message.getFieldWithDefault(msg, 4, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.BusinessSocialAccount}
 */
proto.business.v1.BusinessSocialAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.BusinessSocialAccount;
  return proto.business.v1.BusinessSocialAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.BusinessSocialAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.BusinessSocialAccount}
 */
proto.business.v1.BusinessSocialAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.BusinessSocialAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.BusinessSocialAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.BusinessSocialAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessSocialAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlatformId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.BusinessSocialAccount.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessSocialAccount} returns this
 */
proto.business.v1.BusinessSocialAccount.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_id = 2;
 * @return {string}
 */
proto.business.v1.BusinessSocialAccount.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessSocialAccount} returns this
 */
proto.business.v1.BusinessSocialAccount.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string platform_id = 3;
 * @return {string}
 */
proto.business.v1.BusinessSocialAccount.prototype.getPlatformId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessSocialAccount} returns this
 */
proto.business.v1.BusinessSocialAccount.prototype.setPlatformId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.business.v1.BusinessSocialAccount.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessSocialAccount} returns this
 */
proto.business.v1.BusinessSocialAccount.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessSocialAccount.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessSocialAccount} returns this
*/
proto.business.v1.BusinessSocialAccount.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessSocialAccount} returns this
 */
proto.business.v1.BusinessSocialAccount.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessSocialAccount.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessSocialAccount.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessSocialAccount} returns this
*/
proto.business.v1.BusinessSocialAccount.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessSocialAccount} returns this
 */
proto.business.v1.BusinessSocialAccount.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessSocialAccount.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.BusinessReview.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.BusinessReview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.BusinessReview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessReview.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
businessId: jspb.Message.getFieldWithDefault(msg, 2, ""),
userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
rating: jspb.Message.getFieldWithDefault(msg, 4, 0),
comment: jspb.Message.getFieldWithDefault(msg, 5, ""),
status: jspb.Message.getFieldWithDefault(msg, 6, 0),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.BusinessReview}
 */
proto.business.v1.BusinessReview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.BusinessReview;
  return proto.business.v1.BusinessReview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.BusinessReview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.BusinessReview}
 */
proto.business.v1.BusinessReview.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRating(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 6:
      var value = /** @type {!proto.business.v1.ReviewStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.BusinessReview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.BusinessReview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.BusinessReview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessReview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRating();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.BusinessReview.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessReview} returns this
 */
proto.business.v1.BusinessReview.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_id = 2;
 * @return {string}
 */
proto.business.v1.BusinessReview.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessReview} returns this
 */
proto.business.v1.BusinessReview.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.business.v1.BusinessReview.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessReview} returns this
 */
proto.business.v1.BusinessReview.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 rating = 4;
 * @return {number}
 */
proto.business.v1.BusinessReview.prototype.getRating = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.BusinessReview} returns this
 */
proto.business.v1.BusinessReview.prototype.setRating = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string comment = 5;
 * @return {string}
 */
proto.business.v1.BusinessReview.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessReview} returns this
 */
proto.business.v1.BusinessReview.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional ReviewStatus status = 6;
 * @return {!proto.business.v1.ReviewStatus}
 */
proto.business.v1.BusinessReview.prototype.getStatus = function() {
  return /** @type {!proto.business.v1.ReviewStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.business.v1.ReviewStatus} value
 * @return {!proto.business.v1.BusinessReview} returns this
 */
proto.business.v1.BusinessReview.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessReview.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessReview} returns this
*/
proto.business.v1.BusinessReview.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessReview} returns this
 */
proto.business.v1.BusinessReview.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessReview.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessReview.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessReview} returns this
*/
proto.business.v1.BusinessReview.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessReview} returns this
 */
proto.business.v1.BusinessReview.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessReview.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.BusinessMembership.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.BusinessMembership.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.BusinessMembership} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessMembership.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
businessId: jspb.Message.getFieldWithDefault(msg, 2, ""),
roleId: jspb.Message.getFieldWithDefault(msg, 3, 0),
accountId: jspb.Message.getFieldWithDefault(msg, 4, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.BusinessMembership}
 */
proto.business.v1.BusinessMembership.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.BusinessMembership;
  return proto.business.v1.BusinessMembership.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.BusinessMembership} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.BusinessMembership}
 */
proto.business.v1.BusinessMembership.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.BusinessMembership.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.BusinessMembership.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.BusinessMembership} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessMembership.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.BusinessMembership.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessMembership} returns this
 */
proto.business.v1.BusinessMembership.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_id = 2;
 * @return {string}
 */
proto.business.v1.BusinessMembership.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessMembership} returns this
 */
proto.business.v1.BusinessMembership.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 role_id = 3;
 * @return {number}
 */
proto.business.v1.BusinessMembership.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.BusinessMembership} returns this
 */
proto.business.v1.BusinessMembership.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string account_id = 4;
 * @return {string}
 */
proto.business.v1.BusinessMembership.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessMembership} returns this
 */
proto.business.v1.BusinessMembership.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessMembership.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessMembership} returns this
*/
proto.business.v1.BusinessMembership.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessMembership} returns this
 */
proto.business.v1.BusinessMembership.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessMembership.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessMembership.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessMembership} returns this
*/
proto.business.v1.BusinessMembership.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessMembership} returns this
 */
proto.business.v1.BusinessMembership.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessMembership.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.BusinessBrand.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.BusinessBrand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.BusinessBrand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessBrand.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
businessId: jspb.Message.getFieldWithDefault(msg, 2, ""),
brandId: jspb.Message.getFieldWithDefault(msg, 3, ""),
relationship: jspb.Message.getFieldWithDefault(msg, 4, ""),
isPrimary: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.BusinessBrand}
 */
proto.business.v1.BusinessBrand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.BusinessBrand;
  return proto.business.v1.BusinessBrand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.BusinessBrand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.BusinessBrand}
 */
proto.business.v1.BusinessBrand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrandId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelationship(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPrimary(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.BusinessBrand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.BusinessBrand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.BusinessBrand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessBrand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBrandId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRelationship();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsPrimary();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.BusinessBrand.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessBrand} returns this
 */
proto.business.v1.BusinessBrand.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_id = 2;
 * @return {string}
 */
proto.business.v1.BusinessBrand.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessBrand} returns this
 */
proto.business.v1.BusinessBrand.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string brand_id = 3;
 * @return {string}
 */
proto.business.v1.BusinessBrand.prototype.getBrandId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessBrand} returns this
 */
proto.business.v1.BusinessBrand.prototype.setBrandId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string relationship = 4;
 * @return {string}
 */
proto.business.v1.BusinessBrand.prototype.getRelationship = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessBrand} returns this
 */
proto.business.v1.BusinessBrand.prototype.setRelationship = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_primary = 5;
 * @return {boolean}
 */
proto.business.v1.BusinessBrand.prototype.getIsPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.business.v1.BusinessBrand} returns this
 */
proto.business.v1.BusinessBrand.prototype.setIsPrimary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Struct metadata = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.business.v1.BusinessBrand.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.business.v1.BusinessBrand} returns this
*/
proto.business.v1.BusinessBrand.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessBrand} returns this
 */
proto.business.v1.BusinessBrand.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessBrand.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessBrand.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessBrand} returns this
*/
proto.business.v1.BusinessBrand.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessBrand} returns this
 */
proto.business.v1.BusinessBrand.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessBrand.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessBrand.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessBrand} returns this
*/
proto.business.v1.BusinessBrand.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessBrand} returns this
 */
proto.business.v1.BusinessBrand.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessBrand.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.BusinessRelation.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.BusinessRelation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.BusinessRelation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessRelation.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
businessIdA: jspb.Message.getFieldWithDefault(msg, 2, ""),
businessIdB: jspb.Message.getFieldWithDefault(msg, 3, ""),
relationType: jspb.Message.getFieldWithDefault(msg, 4, ""),
notes: jspb.Message.getFieldWithDefault(msg, 5, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.BusinessRelation}
 */
proto.business.v1.BusinessRelation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.BusinessRelation;
  return proto.business.v1.BusinessRelation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.BusinessRelation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.BusinessRelation}
 */
proto.business.v1.BusinessRelation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessIdA(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessIdB(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelationType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotes(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.BusinessRelation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.BusinessRelation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.BusinessRelation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.BusinessRelation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBusinessIdA();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBusinessIdB();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRelationType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNotes();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.BusinessRelation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessRelation} returns this
 */
proto.business.v1.BusinessRelation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string business_id_a = 2;
 * @return {string}
 */
proto.business.v1.BusinessRelation.prototype.getBusinessIdA = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessRelation} returns this
 */
proto.business.v1.BusinessRelation.prototype.setBusinessIdA = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string business_id_b = 3;
 * @return {string}
 */
proto.business.v1.BusinessRelation.prototype.getBusinessIdB = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessRelation} returns this
 */
proto.business.v1.BusinessRelation.prototype.setBusinessIdB = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string relation_type = 4;
 * @return {string}
 */
proto.business.v1.BusinessRelation.prototype.getRelationType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessRelation} returns this
 */
proto.business.v1.BusinessRelation.prototype.setRelationType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string notes = 5;
 * @return {string}
 */
proto.business.v1.BusinessRelation.prototype.getNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.BusinessRelation} returns this
 */
proto.business.v1.BusinessRelation.prototype.setNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.business.v1.BusinessRelation.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.business.v1.BusinessRelation} returns this
*/
proto.business.v1.BusinessRelation.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.BusinessRelation} returns this
 */
proto.business.v1.BusinessRelation.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.BusinessRelation.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
business: (f = msg.getBusiness()) && proto.business.v1.Business.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessRequest}
 */
proto.business.v1.CreateBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessRequest;
  return proto.business.v1.CreateBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessRequest}
 */
proto.business.v1.CreateBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Business;
      reader.readMessage(value,proto.business.v1.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.Business.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.v1.Business}
 */
proto.business.v1.CreateBusinessRequest.prototype.getBusiness = function() {
  return /** @type{?proto.business.v1.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.Business, 1));
};


/**
 * @param {?proto.business.v1.Business|undefined} value
 * @return {!proto.business.v1.CreateBusinessRequest} returns this
*/
proto.business.v1.CreateBusinessRequest.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessRequest} returns this
 */
proto.business.v1.CreateBusinessRequest.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessRequest.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessResponse}
 */
proto.business.v1.CreateBusinessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessResponse;
  return proto.business.v1.CreateBusinessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessResponse}
 */
proto.business.v1.CreateBusinessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string businessID = 1;
 * @return {string}
 */
proto.business.v1.CreateBusinessResponse.prototype.getBusinessid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.CreateBusinessResponse} returns this
 */
proto.business.v1.CreateBusinessResponse.prototype.setBusinessid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessRequest}
 */
proto.business.v1.GetBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessRequest;
  return proto.business.v1.GetBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessRequest}
 */
proto.business.v1.GetBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string businessID = 1;
 * @return {string}
 */
proto.business.v1.GetBusinessRequest.prototype.getBusinessid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessRequest} returns this
 */
proto.business.v1.GetBusinessRequest.prototype.setBusinessid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
business: (f = msg.getBusiness()) && proto.business.v1.Business.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessResponse}
 */
proto.business.v1.GetBusinessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessResponse;
  return proto.business.v1.GetBusinessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessResponse}
 */
proto.business.v1.GetBusinessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Business;
      reader.readMessage(value,proto.business.v1.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.Business.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.v1.Business}
 */
proto.business.v1.GetBusinessResponse.prototype.getBusiness = function() {
  return /** @type{?proto.business.v1.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.Business, 1));
};


/**
 * @param {?proto.business.v1.Business|undefined} value
 * @return {!proto.business.v1.GetBusinessResponse} returns this
*/
proto.business.v1.GetBusinessResponse.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetBusinessResponse} returns this
 */
proto.business.v1.GetBusinessResponse.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetBusinessResponse.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessByNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessByNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessByNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessByNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
arName: jspb.Message.getFieldWithDefault(msg, 1, ""),
enName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessByNameRequest}
 */
proto.business.v1.GetBusinessByNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessByNameRequest;
  return proto.business.v1.GetBusinessByNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessByNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessByNameRequest}
 */
proto.business.v1.GetBusinessByNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setArName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessByNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessByNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessByNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessByNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string ar_name = 1;
 * @return {string}
 */
proto.business.v1.GetBusinessByNameRequest.prototype.getArName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessByNameRequest} returns this
 */
proto.business.v1.GetBusinessByNameRequest.prototype.setArName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string en_name = 2;
 * @return {string}
 */
proto.business.v1.GetBusinessByNameRequest.prototype.getEnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessByNameRequest} returns this
 */
proto.business.v1.GetBusinessByNameRequest.prototype.setEnName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessByNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessByNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessByNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessByNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
business: (f = msg.getBusiness()) && proto.business.v1.Business.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessByNameResponse}
 */
proto.business.v1.GetBusinessByNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessByNameResponse;
  return proto.business.v1.GetBusinessByNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessByNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessByNameResponse}
 */
proto.business.v1.GetBusinessByNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Business;
      reader.readMessage(value,proto.business.v1.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessByNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessByNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessByNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessByNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.Business.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.v1.Business}
 */
proto.business.v1.GetBusinessByNameResponse.prototype.getBusiness = function() {
  return /** @type{?proto.business.v1.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.Business, 1));
};


/**
 * @param {?proto.business.v1.Business|undefined} value
 * @return {!proto.business.v1.GetBusinessByNameResponse} returns this
*/
proto.business.v1.GetBusinessByNameResponse.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetBusinessByNameResponse} returns this
 */
proto.business.v1.GetBusinessByNameResponse.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetBusinessByNameResponse.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
business: (f = msg.getBusiness()) && proto.business.v1.Business.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessRequest}
 */
proto.business.v1.UpdateBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessRequest;
  return proto.business.v1.UpdateBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessRequest}
 */
proto.business.v1.UpdateBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Business;
      reader.readMessage(value,proto.business.v1.Business.deserializeBinaryFromReader);
      msg.setBusiness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusiness();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.Business.serializeBinaryToWriter
    );
  }
};


/**
 * optional Business business = 1;
 * @return {?proto.business.v1.Business}
 */
proto.business.v1.UpdateBusinessRequest.prototype.getBusiness = function() {
  return /** @type{?proto.business.v1.Business} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.Business, 1));
};


/**
 * @param {?proto.business.v1.Business|undefined} value
 * @return {!proto.business.v1.UpdateBusinessRequest} returns this
*/
proto.business.v1.UpdateBusinessRequest.prototype.setBusiness = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessRequest} returns this
 */
proto.business.v1.UpdateBusinessRequest.prototype.clearBusiness = function() {
  return this.setBusiness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessRequest.prototype.hasBusiness = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessResponse}
 */
proto.business.v1.UpdateBusinessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessResponse;
  return proto.business.v1.UpdateBusinessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessResponse}
 */
proto.business.v1.UpdateBusinessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string businessID = 1;
 * @return {string}
 */
proto.business.v1.UpdateBusinessResponse.prototype.getBusinessid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.UpdateBusinessResponse} returns this
 */
proto.business.v1.UpdateBusinessResponse.prototype.setBusinessid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteBusinessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteBusinessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteBusinessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteBusinessRequest}
 */
proto.business.v1.DeleteBusinessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteBusinessRequest;
  return proto.business.v1.DeleteBusinessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteBusinessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteBusinessRequest}
 */
proto.business.v1.DeleteBusinessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteBusinessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteBusinessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteBusinessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string businessID = 1;
 * @return {string}
 */
proto.business.v1.DeleteBusinessRequest.prototype.getBusinessid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteBusinessRequest} returns this
 */
proto.business.v1.DeleteBusinessRequest.prototype.setBusinessid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
filter: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessesRequest}
 */
proto.business.v1.ListBusinessesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessesRequest;
  return proto.business.v1.ListBusinessesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessesRequest}
 */
proto.business.v1.ListBusinessesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.business.v1.ListBusinessesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.ListBusinessesRequest} returns this
 */
proto.business.v1.ListBusinessesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.business.v1.ListBusinessesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessesRequest} returns this
 */
proto.business.v1.ListBusinessesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.business.v1.ListBusinessesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessesRequest} returns this
 */
proto.business.v1.ListBusinessesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.v1.ListBusinessesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessesList: jspb.Message.toObjectList(msg.getBusinessesList(),
    proto.business.v1.Business.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessesResponse}
 */
proto.business.v1.ListBusinessesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessesResponse;
  return proto.business.v1.ListBusinessesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessesResponse}
 */
proto.business.v1.ListBusinessesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Business;
      reader.readMessage(value,proto.business.v1.Business.deserializeBinaryFromReader);
      msg.addBusinesses(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.v1.Business.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Business businesses = 1;
 * @return {!Array<!proto.business.v1.Business>}
 */
proto.business.v1.ListBusinessesResponse.prototype.getBusinessesList = function() {
  return /** @type{!Array<!proto.business.v1.Business>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.v1.Business, 1));
};


/**
 * @param {!Array<!proto.business.v1.Business>} value
 * @return {!proto.business.v1.ListBusinessesResponse} returns this
*/
proto.business.v1.ListBusinessesResponse.prototype.setBusinessesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.v1.Business=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.v1.Business}
 */
proto.business.v1.ListBusinessesResponse.prototype.addBusinesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.v1.Business, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.v1.ListBusinessesResponse} returns this
 */
proto.business.v1.ListBusinessesResponse.prototype.clearBusinessesList = function() {
  return this.setBusinessesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.business.v1.ListBusinessesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessesResponse} returns this
 */
proto.business.v1.ListBusinessesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessLocation: (f = msg.getBusinessLocation()) && proto.business.v1.BusinessLocation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessLocationRequest}
 */
proto.business.v1.CreateBusinessLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessLocationRequest;
  return proto.business.v1.CreateBusinessLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessLocationRequest}
 */
proto.business.v1.CreateBusinessLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessLocation;
      reader.readMessage(value,proto.business.v1.BusinessLocation.deserializeBinaryFromReader);
      msg.setBusinessLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessLocation business_location = 1;
 * @return {?proto.business.v1.BusinessLocation}
 */
proto.business.v1.CreateBusinessLocationRequest.prototype.getBusinessLocation = function() {
  return /** @type{?proto.business.v1.BusinessLocation} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessLocation, 1));
};


/**
 * @param {?proto.business.v1.BusinessLocation|undefined} value
 * @return {!proto.business.v1.CreateBusinessLocationRequest} returns this
*/
proto.business.v1.CreateBusinessLocationRequest.prototype.setBusinessLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessLocationRequest} returns this
 */
proto.business.v1.CreateBusinessLocationRequest.prototype.clearBusinessLocation = function() {
  return this.setBusinessLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessLocationRequest.prototype.hasBusinessLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
locationid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessLocationResponse}
 */
proto.business.v1.CreateBusinessLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessLocationResponse;
  return proto.business.v1.CreateBusinessLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessLocationResponse}
 */
proto.business.v1.CreateBusinessLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string LocationID = 1;
 * @return {string}
 */
proto.business.v1.CreateBusinessLocationResponse.prototype.getLocationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.CreateBusinessLocationResponse} returns this
 */
proto.business.v1.CreateBusinessLocationResponse.prototype.setLocationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessLocationRequest}
 */
proto.business.v1.GetBusinessLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessLocationRequest;
  return proto.business.v1.GetBusinessLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessLocationRequest}
 */
proto.business.v1.GetBusinessLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.GetBusinessLocationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessLocationRequest} returns this
 */
proto.business.v1.GetBusinessLocationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessLocation: (f = msg.getBusinessLocation()) && proto.business.v1.BusinessLocation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessLocationResponse}
 */
proto.business.v1.GetBusinessLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessLocationResponse;
  return proto.business.v1.GetBusinessLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessLocationResponse}
 */
proto.business.v1.GetBusinessLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessLocation;
      reader.readMessage(value,proto.business.v1.BusinessLocation.deserializeBinaryFromReader);
      msg.setBusinessLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessLocation business_location = 1;
 * @return {?proto.business.v1.BusinessLocation}
 */
proto.business.v1.GetBusinessLocationResponse.prototype.getBusinessLocation = function() {
  return /** @type{?proto.business.v1.BusinessLocation} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessLocation, 1));
};


/**
 * @param {?proto.business.v1.BusinessLocation|undefined} value
 * @return {!proto.business.v1.GetBusinessLocationResponse} returns this
*/
proto.business.v1.GetBusinessLocationResponse.prototype.setBusinessLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetBusinessLocationResponse} returns this
 */
proto.business.v1.GetBusinessLocationResponse.prototype.clearBusinessLocation = function() {
  return this.setBusinessLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetBusinessLocationResponse.prototype.hasBusinessLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessLocation: (f = msg.getBusinessLocation()) && proto.business.v1.BusinessLocation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessLocationRequest}
 */
proto.business.v1.UpdateBusinessLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessLocationRequest;
  return proto.business.v1.UpdateBusinessLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessLocationRequest}
 */
proto.business.v1.UpdateBusinessLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessLocation;
      reader.readMessage(value,proto.business.v1.BusinessLocation.deserializeBinaryFromReader);
      msg.setBusinessLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessLocation business_location = 1;
 * @return {?proto.business.v1.BusinessLocation}
 */
proto.business.v1.UpdateBusinessLocationRequest.prototype.getBusinessLocation = function() {
  return /** @type{?proto.business.v1.BusinessLocation} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessLocation, 1));
};


/**
 * @param {?proto.business.v1.BusinessLocation|undefined} value
 * @return {!proto.business.v1.UpdateBusinessLocationRequest} returns this
*/
proto.business.v1.UpdateBusinessLocationRequest.prototype.setBusinessLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessLocationRequest} returns this
 */
proto.business.v1.UpdateBusinessLocationRequest.prototype.clearBusinessLocation = function() {
  return this.setBusinessLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessLocationRequest.prototype.hasBusinessLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
locationid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessLocationResponse}
 */
proto.business.v1.UpdateBusinessLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessLocationResponse;
  return proto.business.v1.UpdateBusinessLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessLocationResponse}
 */
proto.business.v1.UpdateBusinessLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string LocationID = 1;
 * @return {string}
 */
proto.business.v1.UpdateBusinessLocationResponse.prototype.getLocationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.UpdateBusinessLocationResponse} returns this
 */
proto.business.v1.UpdateBusinessLocationResponse.prototype.setLocationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteBusinessLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteBusinessLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteBusinessLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteBusinessLocationRequest}
 */
proto.business.v1.DeleteBusinessLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteBusinessLocationRequest;
  return proto.business.v1.DeleteBusinessLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteBusinessLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteBusinessLocationRequest}
 */
proto.business.v1.DeleteBusinessLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteBusinessLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteBusinessLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteBusinessLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.DeleteBusinessLocationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteBusinessLocationRequest} returns this
 */
proto.business.v1.DeleteBusinessLocationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessLocationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessLocationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessLocationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessLocationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessLocationsRequest}
 */
proto.business.v1.ListBusinessLocationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessLocationsRequest;
  return proto.business.v1.ListBusinessLocationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessLocationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessLocationsRequest}
 */
proto.business.v1.ListBusinessLocationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessLocationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessLocationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessLocationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessLocationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string business_id = 1;
 * @return {string}
 */
proto.business.v1.ListBusinessLocationsRequest.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessLocationsRequest} returns this
 */
proto.business.v1.ListBusinessLocationsRequest.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.business.v1.ListBusinessLocationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.ListBusinessLocationsRequest} returns this
 */
proto.business.v1.ListBusinessLocationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.business.v1.ListBusinessLocationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessLocationsRequest} returns this
 */
proto.business.v1.ListBusinessLocationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.v1.ListBusinessLocationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessLocationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessLocationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessLocationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessLocationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessLocationsList: jspb.Message.toObjectList(msg.getBusinessLocationsList(),
    proto.business.v1.BusinessLocation.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessLocationsResponse}
 */
proto.business.v1.ListBusinessLocationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessLocationsResponse;
  return proto.business.v1.ListBusinessLocationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessLocationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessLocationsResponse}
 */
proto.business.v1.ListBusinessLocationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessLocation;
      reader.readMessage(value,proto.business.v1.BusinessLocation.deserializeBinaryFromReader);
      msg.addBusinessLocations(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessLocationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessLocationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessLocationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessLocationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.v1.BusinessLocation.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated BusinessLocation business_locations = 1;
 * @return {!Array<!proto.business.v1.BusinessLocation>}
 */
proto.business.v1.ListBusinessLocationsResponse.prototype.getBusinessLocationsList = function() {
  return /** @type{!Array<!proto.business.v1.BusinessLocation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.v1.BusinessLocation, 1));
};


/**
 * @param {!Array<!proto.business.v1.BusinessLocation>} value
 * @return {!proto.business.v1.ListBusinessLocationsResponse} returns this
*/
proto.business.v1.ListBusinessLocationsResponse.prototype.setBusinessLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.v1.BusinessLocation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.v1.BusinessLocation}
 */
proto.business.v1.ListBusinessLocationsResponse.prototype.addBusinessLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.v1.BusinessLocation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.v1.ListBusinessLocationsResponse} returns this
 */
proto.business.v1.ListBusinessLocationsResponse.prototype.clearBusinessLocationsList = function() {
  return this.setBusinessLocationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.business.v1.ListBusinessLocationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessLocationsResponse} returns this
 */
proto.business.v1.ListBusinessLocationsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessMediaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessMediaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessMediaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessMediaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
mediaid: (f = msg.getMediaid()) && proto.business.v1.BusinessMedia.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessMediaRequest}
 */
proto.business.v1.CreateBusinessMediaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessMediaRequest;
  return proto.business.v1.CreateBusinessMediaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessMediaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessMediaRequest}
 */
proto.business.v1.CreateBusinessMediaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMedia;
      reader.readMessage(value,proto.business.v1.BusinessMedia.deserializeBinaryFromReader);
      msg.setMediaid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessMediaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessMediaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessMediaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessMediaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMediaid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessMedia.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessMedia MediaID = 1;
 * @return {?proto.business.v1.BusinessMedia}
 */
proto.business.v1.CreateBusinessMediaRequest.prototype.getMediaid = function() {
  return /** @type{?proto.business.v1.BusinessMedia} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessMedia, 1));
};


/**
 * @param {?proto.business.v1.BusinessMedia|undefined} value
 * @return {!proto.business.v1.CreateBusinessMediaRequest} returns this
*/
proto.business.v1.CreateBusinessMediaRequest.prototype.setMediaid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessMediaRequest} returns this
 */
proto.business.v1.CreateBusinessMediaRequest.prototype.clearMediaid = function() {
  return this.setMediaid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessMediaRequest.prototype.hasMediaid = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessMediaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessMediaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessMediaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessMediaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
mediaid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessMediaResponse}
 */
proto.business.v1.CreateBusinessMediaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessMediaResponse;
  return proto.business.v1.CreateBusinessMediaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessMediaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessMediaResponse}
 */
proto.business.v1.CreateBusinessMediaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessMediaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessMediaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessMediaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessMediaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMediaid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MediaID = 1;
 * @return {string}
 */
proto.business.v1.CreateBusinessMediaResponse.prototype.getMediaid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.CreateBusinessMediaResponse} returns this
 */
proto.business.v1.CreateBusinessMediaResponse.prototype.setMediaid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessMediaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessMediaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessMediaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessMediaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessMediaRequest}
 */
proto.business.v1.GetBusinessMediaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessMediaRequest;
  return proto.business.v1.GetBusinessMediaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessMediaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessMediaRequest}
 */
proto.business.v1.GetBusinessMediaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessMediaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessMediaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessMediaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessMediaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.GetBusinessMediaRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessMediaRequest} returns this
 */
proto.business.v1.GetBusinessMediaRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessMediaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessMediaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessMediaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessMediaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessMedia: (f = msg.getBusinessMedia()) && proto.business.v1.BusinessMedia.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessMediaResponse}
 */
proto.business.v1.GetBusinessMediaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessMediaResponse;
  return proto.business.v1.GetBusinessMediaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessMediaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessMediaResponse}
 */
proto.business.v1.GetBusinessMediaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMedia;
      reader.readMessage(value,proto.business.v1.BusinessMedia.deserializeBinaryFromReader);
      msg.setBusinessMedia(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessMediaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessMediaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessMediaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessMediaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessMedia();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessMedia.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessMedia business_media = 1;
 * @return {?proto.business.v1.BusinessMedia}
 */
proto.business.v1.GetBusinessMediaResponse.prototype.getBusinessMedia = function() {
  return /** @type{?proto.business.v1.BusinessMedia} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessMedia, 1));
};


/**
 * @param {?proto.business.v1.BusinessMedia|undefined} value
 * @return {!proto.business.v1.GetBusinessMediaResponse} returns this
*/
proto.business.v1.GetBusinessMediaResponse.prototype.setBusinessMedia = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetBusinessMediaResponse} returns this
 */
proto.business.v1.GetBusinessMediaResponse.prototype.clearBusinessMedia = function() {
  return this.setBusinessMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetBusinessMediaResponse.prototype.hasBusinessMedia = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessMediaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessMediaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessMediaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessMediaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessMedia: (f = msg.getBusinessMedia()) && proto.business.v1.BusinessMedia.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessMediaRequest}
 */
proto.business.v1.UpdateBusinessMediaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessMediaRequest;
  return proto.business.v1.UpdateBusinessMediaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessMediaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessMediaRequest}
 */
proto.business.v1.UpdateBusinessMediaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMedia;
      reader.readMessage(value,proto.business.v1.BusinessMedia.deserializeBinaryFromReader);
      msg.setBusinessMedia(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessMediaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessMediaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessMediaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessMediaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessMedia();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessMedia.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessMedia business_media = 1;
 * @return {?proto.business.v1.BusinessMedia}
 */
proto.business.v1.UpdateBusinessMediaRequest.prototype.getBusinessMedia = function() {
  return /** @type{?proto.business.v1.BusinessMedia} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessMedia, 1));
};


/**
 * @param {?proto.business.v1.BusinessMedia|undefined} value
 * @return {!proto.business.v1.UpdateBusinessMediaRequest} returns this
*/
proto.business.v1.UpdateBusinessMediaRequest.prototype.setBusinessMedia = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessMediaRequest} returns this
 */
proto.business.v1.UpdateBusinessMediaRequest.prototype.clearBusinessMedia = function() {
  return this.setBusinessMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessMediaRequest.prototype.hasBusinessMedia = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessMediaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessMediaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessMediaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessMediaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
mediaid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessMediaResponse}
 */
proto.business.v1.UpdateBusinessMediaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessMediaResponse;
  return proto.business.v1.UpdateBusinessMediaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessMediaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessMediaResponse}
 */
proto.business.v1.UpdateBusinessMediaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessMediaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessMediaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessMediaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessMediaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMediaid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string MediaID = 1;
 * @return {string}
 */
proto.business.v1.UpdateBusinessMediaResponse.prototype.getMediaid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.UpdateBusinessMediaResponse} returns this
 */
proto.business.v1.UpdateBusinessMediaResponse.prototype.setMediaid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteBusinessMediaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteBusinessMediaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteBusinessMediaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessMediaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteBusinessMediaRequest}
 */
proto.business.v1.DeleteBusinessMediaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteBusinessMediaRequest;
  return proto.business.v1.DeleteBusinessMediaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteBusinessMediaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteBusinessMediaRequest}
 */
proto.business.v1.DeleteBusinessMediaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteBusinessMediaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteBusinessMediaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteBusinessMediaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessMediaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.DeleteBusinessMediaRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteBusinessMediaRequest} returns this
 */
proto.business.v1.DeleteBusinessMediaRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessMediaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessMediaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessMediaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessMediaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessMediaRequest}
 */
proto.business.v1.ListBusinessMediaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessMediaRequest;
  return proto.business.v1.ListBusinessMediaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessMediaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessMediaRequest}
 */
proto.business.v1.ListBusinessMediaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessMediaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessMediaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessMediaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessMediaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string business_id = 1;
 * @return {string}
 */
proto.business.v1.ListBusinessMediaRequest.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessMediaRequest} returns this
 */
proto.business.v1.ListBusinessMediaRequest.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.business.v1.ListBusinessMediaRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.ListBusinessMediaRequest} returns this
 */
proto.business.v1.ListBusinessMediaRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.business.v1.ListBusinessMediaRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessMediaRequest} returns this
 */
proto.business.v1.ListBusinessMediaRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.v1.ListBusinessMediaResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessMediaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessMediaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessMediaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessMediaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessMediaList: jspb.Message.toObjectList(msg.getBusinessMediaList(),
    proto.business.v1.BusinessMedia.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessMediaResponse}
 */
proto.business.v1.ListBusinessMediaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessMediaResponse;
  return proto.business.v1.ListBusinessMediaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessMediaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessMediaResponse}
 */
proto.business.v1.ListBusinessMediaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMedia;
      reader.readMessage(value,proto.business.v1.BusinessMedia.deserializeBinaryFromReader);
      msg.addBusinessMedia(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessMediaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessMediaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessMediaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessMediaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessMediaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.v1.BusinessMedia.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated BusinessMedia business_media = 1;
 * @return {!Array<!proto.business.v1.BusinessMedia>}
 */
proto.business.v1.ListBusinessMediaResponse.prototype.getBusinessMediaList = function() {
  return /** @type{!Array<!proto.business.v1.BusinessMedia>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.v1.BusinessMedia, 1));
};


/**
 * @param {!Array<!proto.business.v1.BusinessMedia>} value
 * @return {!proto.business.v1.ListBusinessMediaResponse} returns this
*/
proto.business.v1.ListBusinessMediaResponse.prototype.setBusinessMediaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.v1.BusinessMedia=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.v1.BusinessMedia}
 */
proto.business.v1.ListBusinessMediaResponse.prototype.addBusinessMedia = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.v1.BusinessMedia, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.v1.ListBusinessMediaResponse} returns this
 */
proto.business.v1.ListBusinessMediaResponse.prototype.clearBusinessMediaList = function() {
  return this.setBusinessMediaList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.business.v1.ListBusinessMediaResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessMediaResponse} returns this
 */
proto.business.v1.ListBusinessMediaResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateSocialPlatformRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateSocialPlatformRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateSocialPlatformRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateSocialPlatformRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
socialPlatform: (f = msg.getSocialPlatform()) && proto.business.v1.SocialPlatform.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateSocialPlatformRequest}
 */
proto.business.v1.CreateSocialPlatformRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateSocialPlatformRequest;
  return proto.business.v1.CreateSocialPlatformRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateSocialPlatformRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateSocialPlatformRequest}
 */
proto.business.v1.CreateSocialPlatformRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.SocialPlatform;
      reader.readMessage(value,proto.business.v1.SocialPlatform.deserializeBinaryFromReader);
      msg.setSocialPlatform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateSocialPlatformRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateSocialPlatformRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateSocialPlatformRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateSocialPlatformRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSocialPlatform();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.SocialPlatform.serializeBinaryToWriter
    );
  }
};


/**
 * optional SocialPlatform social_platform = 1;
 * @return {?proto.business.v1.SocialPlatform}
 */
proto.business.v1.CreateSocialPlatformRequest.prototype.getSocialPlatform = function() {
  return /** @type{?proto.business.v1.SocialPlatform} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.SocialPlatform, 1));
};


/**
 * @param {?proto.business.v1.SocialPlatform|undefined} value
 * @return {!proto.business.v1.CreateSocialPlatformRequest} returns this
*/
proto.business.v1.CreateSocialPlatformRequest.prototype.setSocialPlatform = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateSocialPlatformRequest} returns this
 */
proto.business.v1.CreateSocialPlatformRequest.prototype.clearSocialPlatform = function() {
  return this.setSocialPlatform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateSocialPlatformRequest.prototype.hasSocialPlatform = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateSocialPlatformResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateSocialPlatformResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateSocialPlatformResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateSocialPlatformResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
socialPlatform: (f = msg.getSocialPlatform()) && proto.business.v1.SocialPlatform.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateSocialPlatformResponse}
 */
proto.business.v1.CreateSocialPlatformResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateSocialPlatformResponse;
  return proto.business.v1.CreateSocialPlatformResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateSocialPlatformResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateSocialPlatformResponse}
 */
proto.business.v1.CreateSocialPlatformResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.SocialPlatform;
      reader.readMessage(value,proto.business.v1.SocialPlatform.deserializeBinaryFromReader);
      msg.setSocialPlatform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateSocialPlatformResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateSocialPlatformResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateSocialPlatformResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateSocialPlatformResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSocialPlatform();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.SocialPlatform.serializeBinaryToWriter
    );
  }
};


/**
 * optional SocialPlatform social_platform = 1;
 * @return {?proto.business.v1.SocialPlatform}
 */
proto.business.v1.CreateSocialPlatformResponse.prototype.getSocialPlatform = function() {
  return /** @type{?proto.business.v1.SocialPlatform} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.SocialPlatform, 1));
};


/**
 * @param {?proto.business.v1.SocialPlatform|undefined} value
 * @return {!proto.business.v1.CreateSocialPlatformResponse} returns this
*/
proto.business.v1.CreateSocialPlatformResponse.prototype.setSocialPlatform = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateSocialPlatformResponse} returns this
 */
proto.business.v1.CreateSocialPlatformResponse.prototype.clearSocialPlatform = function() {
  return this.setSocialPlatform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateSocialPlatformResponse.prototype.hasSocialPlatform = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetSocialPlatformRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetSocialPlatformRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetSocialPlatformRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetSocialPlatformRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetSocialPlatformRequest}
 */
proto.business.v1.GetSocialPlatformRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetSocialPlatformRequest;
  return proto.business.v1.GetSocialPlatformRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetSocialPlatformRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetSocialPlatformRequest}
 */
proto.business.v1.GetSocialPlatformRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetSocialPlatformRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetSocialPlatformRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetSocialPlatformRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetSocialPlatformRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.GetSocialPlatformRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetSocialPlatformRequest} returns this
 */
proto.business.v1.GetSocialPlatformRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetSocialPlatformResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetSocialPlatformResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetSocialPlatformResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetSocialPlatformResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
socialPlatform: (f = msg.getSocialPlatform()) && proto.business.v1.SocialPlatform.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetSocialPlatformResponse}
 */
proto.business.v1.GetSocialPlatformResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetSocialPlatformResponse;
  return proto.business.v1.GetSocialPlatformResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetSocialPlatformResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetSocialPlatformResponse}
 */
proto.business.v1.GetSocialPlatformResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.SocialPlatform;
      reader.readMessage(value,proto.business.v1.SocialPlatform.deserializeBinaryFromReader);
      msg.setSocialPlatform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetSocialPlatformResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetSocialPlatformResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetSocialPlatformResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetSocialPlatformResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSocialPlatform();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.SocialPlatform.serializeBinaryToWriter
    );
  }
};


/**
 * optional SocialPlatform social_platform = 1;
 * @return {?proto.business.v1.SocialPlatform}
 */
proto.business.v1.GetSocialPlatformResponse.prototype.getSocialPlatform = function() {
  return /** @type{?proto.business.v1.SocialPlatform} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.SocialPlatform, 1));
};


/**
 * @param {?proto.business.v1.SocialPlatform|undefined} value
 * @return {!proto.business.v1.GetSocialPlatformResponse} returns this
*/
proto.business.v1.GetSocialPlatformResponse.prototype.setSocialPlatform = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetSocialPlatformResponse} returns this
 */
proto.business.v1.GetSocialPlatformResponse.prototype.clearSocialPlatform = function() {
  return this.setSocialPlatform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetSocialPlatformResponse.prototype.hasSocialPlatform = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateSocialPlatformRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateSocialPlatformRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateSocialPlatformRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateSocialPlatformRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
socialPlatform: (f = msg.getSocialPlatform()) && proto.business.v1.SocialPlatform.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateSocialPlatformRequest}
 */
proto.business.v1.UpdateSocialPlatformRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateSocialPlatformRequest;
  return proto.business.v1.UpdateSocialPlatformRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateSocialPlatformRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateSocialPlatformRequest}
 */
proto.business.v1.UpdateSocialPlatformRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.SocialPlatform;
      reader.readMessage(value,proto.business.v1.SocialPlatform.deserializeBinaryFromReader);
      msg.setSocialPlatform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateSocialPlatformRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateSocialPlatformRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateSocialPlatformRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateSocialPlatformRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSocialPlatform();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.SocialPlatform.serializeBinaryToWriter
    );
  }
};


/**
 * optional SocialPlatform social_platform = 1;
 * @return {?proto.business.v1.SocialPlatform}
 */
proto.business.v1.UpdateSocialPlatformRequest.prototype.getSocialPlatform = function() {
  return /** @type{?proto.business.v1.SocialPlatform} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.SocialPlatform, 1));
};


/**
 * @param {?proto.business.v1.SocialPlatform|undefined} value
 * @return {!proto.business.v1.UpdateSocialPlatformRequest} returns this
*/
proto.business.v1.UpdateSocialPlatformRequest.prototype.setSocialPlatform = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateSocialPlatformRequest} returns this
 */
proto.business.v1.UpdateSocialPlatformRequest.prototype.clearSocialPlatform = function() {
  return this.setSocialPlatform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateSocialPlatformRequest.prototype.hasSocialPlatform = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateSocialPlatformResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateSocialPlatformResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateSocialPlatformResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateSocialPlatformResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
socialPlatform: (f = msg.getSocialPlatform()) && proto.business.v1.SocialPlatform.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateSocialPlatformResponse}
 */
proto.business.v1.UpdateSocialPlatformResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateSocialPlatformResponse;
  return proto.business.v1.UpdateSocialPlatformResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateSocialPlatformResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateSocialPlatformResponse}
 */
proto.business.v1.UpdateSocialPlatformResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.SocialPlatform;
      reader.readMessage(value,proto.business.v1.SocialPlatform.deserializeBinaryFromReader);
      msg.setSocialPlatform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateSocialPlatformResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateSocialPlatformResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateSocialPlatformResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateSocialPlatformResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSocialPlatform();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.SocialPlatform.serializeBinaryToWriter
    );
  }
};


/**
 * optional SocialPlatform social_platform = 1;
 * @return {?proto.business.v1.SocialPlatform}
 */
proto.business.v1.UpdateSocialPlatformResponse.prototype.getSocialPlatform = function() {
  return /** @type{?proto.business.v1.SocialPlatform} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.SocialPlatform, 1));
};


/**
 * @param {?proto.business.v1.SocialPlatform|undefined} value
 * @return {!proto.business.v1.UpdateSocialPlatformResponse} returns this
*/
proto.business.v1.UpdateSocialPlatformResponse.prototype.setSocialPlatform = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateSocialPlatformResponse} returns this
 */
proto.business.v1.UpdateSocialPlatformResponse.prototype.clearSocialPlatform = function() {
  return this.setSocialPlatform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateSocialPlatformResponse.prototype.hasSocialPlatform = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteSocialPlatformRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteSocialPlatformRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteSocialPlatformRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteSocialPlatformRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteSocialPlatformRequest}
 */
proto.business.v1.DeleteSocialPlatformRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteSocialPlatformRequest;
  return proto.business.v1.DeleteSocialPlatformRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteSocialPlatformRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteSocialPlatformRequest}
 */
proto.business.v1.DeleteSocialPlatformRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteSocialPlatformRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteSocialPlatformRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteSocialPlatformRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteSocialPlatformRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.DeleteSocialPlatformRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteSocialPlatformRequest} returns this
 */
proto.business.v1.DeleteSocialPlatformRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListSocialPlatformsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListSocialPlatformsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListSocialPlatformsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListSocialPlatformsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListSocialPlatformsRequest}
 */
proto.business.v1.ListSocialPlatformsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListSocialPlatformsRequest;
  return proto.business.v1.ListSocialPlatformsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListSocialPlatformsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListSocialPlatformsRequest}
 */
proto.business.v1.ListSocialPlatformsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListSocialPlatformsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListSocialPlatformsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListSocialPlatformsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListSocialPlatformsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.business.v1.ListSocialPlatformsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.ListSocialPlatformsRequest} returns this
 */
proto.business.v1.ListSocialPlatformsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.business.v1.ListSocialPlatformsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListSocialPlatformsRequest} returns this
 */
proto.business.v1.ListSocialPlatformsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.v1.ListSocialPlatformsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListSocialPlatformsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListSocialPlatformsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListSocialPlatformsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListSocialPlatformsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
socialPlatformsList: jspb.Message.toObjectList(msg.getSocialPlatformsList(),
    proto.business.v1.SocialPlatform.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListSocialPlatformsResponse}
 */
proto.business.v1.ListSocialPlatformsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListSocialPlatformsResponse;
  return proto.business.v1.ListSocialPlatformsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListSocialPlatformsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListSocialPlatformsResponse}
 */
proto.business.v1.ListSocialPlatformsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.SocialPlatform;
      reader.readMessage(value,proto.business.v1.SocialPlatform.deserializeBinaryFromReader);
      msg.addSocialPlatforms(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListSocialPlatformsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListSocialPlatformsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListSocialPlatformsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListSocialPlatformsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSocialPlatformsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.v1.SocialPlatform.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated SocialPlatform social_platforms = 1;
 * @return {!Array<!proto.business.v1.SocialPlatform>}
 */
proto.business.v1.ListSocialPlatformsResponse.prototype.getSocialPlatformsList = function() {
  return /** @type{!Array<!proto.business.v1.SocialPlatform>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.v1.SocialPlatform, 1));
};


/**
 * @param {!Array<!proto.business.v1.SocialPlatform>} value
 * @return {!proto.business.v1.ListSocialPlatformsResponse} returns this
*/
proto.business.v1.ListSocialPlatformsResponse.prototype.setSocialPlatformsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.v1.SocialPlatform=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.v1.SocialPlatform}
 */
proto.business.v1.ListSocialPlatformsResponse.prototype.addSocialPlatforms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.v1.SocialPlatform, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.v1.ListSocialPlatformsResponse} returns this
 */
proto.business.v1.ListSocialPlatformsResponse.prototype.clearSocialPlatformsList = function() {
  return this.setSocialPlatformsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.business.v1.ListSocialPlatformsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListSocialPlatformsResponse} returns this
 */
proto.business.v1.ListSocialPlatformsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateCategoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateCategoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateCategoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateCategoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
category: (f = msg.getCategory()) && proto.business.v1.Category.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateCategoryRequest}
 */
proto.business.v1.CreateCategoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateCategoryRequest;
  return proto.business.v1.CreateCategoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateCategoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateCategoryRequest}
 */
proto.business.v1.CreateCategoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Category;
      reader.readMessage(value,proto.business.v1.Category.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateCategoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateCategoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateCategoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateCategoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.Category.serializeBinaryToWriter
    );
  }
};


/**
 * optional Category category = 1;
 * @return {?proto.business.v1.Category}
 */
proto.business.v1.CreateCategoryRequest.prototype.getCategory = function() {
  return /** @type{?proto.business.v1.Category} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.Category, 1));
};


/**
 * @param {?proto.business.v1.Category|undefined} value
 * @return {!proto.business.v1.CreateCategoryRequest} returns this
*/
proto.business.v1.CreateCategoryRequest.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateCategoryRequest} returns this
 */
proto.business.v1.CreateCategoryRequest.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateCategoryRequest.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateCategoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateCategoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateCategoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateCategoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
category: (f = msg.getCategory()) && proto.business.v1.Category.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateCategoryResponse}
 */
proto.business.v1.CreateCategoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateCategoryResponse;
  return proto.business.v1.CreateCategoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateCategoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateCategoryResponse}
 */
proto.business.v1.CreateCategoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Category;
      reader.readMessage(value,proto.business.v1.Category.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateCategoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateCategoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateCategoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateCategoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.Category.serializeBinaryToWriter
    );
  }
};


/**
 * optional Category category = 1;
 * @return {?proto.business.v1.Category}
 */
proto.business.v1.CreateCategoryResponse.prototype.getCategory = function() {
  return /** @type{?proto.business.v1.Category} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.Category, 1));
};


/**
 * @param {?proto.business.v1.Category|undefined} value
 * @return {!proto.business.v1.CreateCategoryResponse} returns this
*/
proto.business.v1.CreateCategoryResponse.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateCategoryResponse} returns this
 */
proto.business.v1.CreateCategoryResponse.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateCategoryResponse.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetCategoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetCategoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetCategoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetCategoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetCategoryRequest}
 */
proto.business.v1.GetCategoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetCategoryRequest;
  return proto.business.v1.GetCategoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetCategoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetCategoryRequest}
 */
proto.business.v1.GetCategoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetCategoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetCategoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetCategoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetCategoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.GetCategoryRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetCategoryRequest} returns this
 */
proto.business.v1.GetCategoryRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetCategoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetCategoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetCategoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetCategoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
category: (f = msg.getCategory()) && proto.business.v1.Category.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetCategoryResponse}
 */
proto.business.v1.GetCategoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetCategoryResponse;
  return proto.business.v1.GetCategoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetCategoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetCategoryResponse}
 */
proto.business.v1.GetCategoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Category;
      reader.readMessage(value,proto.business.v1.Category.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetCategoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetCategoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetCategoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetCategoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.Category.serializeBinaryToWriter
    );
  }
};


/**
 * optional Category category = 1;
 * @return {?proto.business.v1.Category}
 */
proto.business.v1.GetCategoryResponse.prototype.getCategory = function() {
  return /** @type{?proto.business.v1.Category} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.Category, 1));
};


/**
 * @param {?proto.business.v1.Category|undefined} value
 * @return {!proto.business.v1.GetCategoryResponse} returns this
*/
proto.business.v1.GetCategoryResponse.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetCategoryResponse} returns this
 */
proto.business.v1.GetCategoryResponse.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetCategoryResponse.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateCategoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateCategoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateCategoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateCategoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
category: (f = msg.getCategory()) && proto.business.v1.Category.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateCategoryRequest}
 */
proto.business.v1.UpdateCategoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateCategoryRequest;
  return proto.business.v1.UpdateCategoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateCategoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateCategoryRequest}
 */
proto.business.v1.UpdateCategoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Category;
      reader.readMessage(value,proto.business.v1.Category.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateCategoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateCategoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateCategoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateCategoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.Category.serializeBinaryToWriter
    );
  }
};


/**
 * optional Category category = 1;
 * @return {?proto.business.v1.Category}
 */
proto.business.v1.UpdateCategoryRequest.prototype.getCategory = function() {
  return /** @type{?proto.business.v1.Category} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.Category, 1));
};


/**
 * @param {?proto.business.v1.Category|undefined} value
 * @return {!proto.business.v1.UpdateCategoryRequest} returns this
*/
proto.business.v1.UpdateCategoryRequest.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateCategoryRequest} returns this
 */
proto.business.v1.UpdateCategoryRequest.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateCategoryRequest.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateCategoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateCategoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateCategoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateCategoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
category: (f = msg.getCategory()) && proto.business.v1.Category.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateCategoryResponse}
 */
proto.business.v1.UpdateCategoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateCategoryResponse;
  return proto.business.v1.UpdateCategoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateCategoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateCategoryResponse}
 */
proto.business.v1.UpdateCategoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Category;
      reader.readMessage(value,proto.business.v1.Category.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateCategoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateCategoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateCategoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateCategoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.Category.serializeBinaryToWriter
    );
  }
};


/**
 * optional Category category = 1;
 * @return {?proto.business.v1.Category}
 */
proto.business.v1.UpdateCategoryResponse.prototype.getCategory = function() {
  return /** @type{?proto.business.v1.Category} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.Category, 1));
};


/**
 * @param {?proto.business.v1.Category|undefined} value
 * @return {!proto.business.v1.UpdateCategoryResponse} returns this
*/
proto.business.v1.UpdateCategoryResponse.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateCategoryResponse} returns this
 */
proto.business.v1.UpdateCategoryResponse.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateCategoryResponse.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteCategoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteCategoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteCategoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteCategoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteCategoryRequest}
 */
proto.business.v1.DeleteCategoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteCategoryRequest;
  return proto.business.v1.DeleteCategoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteCategoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteCategoryRequest}
 */
proto.business.v1.DeleteCategoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteCategoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteCategoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteCategoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteCategoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.DeleteCategoryRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteCategoryRequest} returns this
 */
proto.business.v1.DeleteCategoryRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListCategoriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListCategoriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListCategoriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListCategoriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListCategoriesRequest}
 */
proto.business.v1.ListCategoriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListCategoriesRequest;
  return proto.business.v1.ListCategoriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListCategoriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListCategoriesRequest}
 */
proto.business.v1.ListCategoriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListCategoriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListCategoriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListCategoriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListCategoriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.business.v1.ListCategoriesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.ListCategoriesRequest} returns this
 */
proto.business.v1.ListCategoriesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.business.v1.ListCategoriesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListCategoriesRequest} returns this
 */
proto.business.v1.ListCategoriesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.v1.ListCategoriesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListCategoriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListCategoriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListCategoriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListCategoriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
categoriesList: jspb.Message.toObjectList(msg.getCategoriesList(),
    proto.business.v1.Category.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListCategoriesResponse}
 */
proto.business.v1.ListCategoriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListCategoriesResponse;
  return proto.business.v1.ListCategoriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListCategoriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListCategoriesResponse}
 */
proto.business.v1.ListCategoriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.Category;
      reader.readMessage(value,proto.business.v1.Category.deserializeBinaryFromReader);
      msg.addCategories(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListCategoriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListCategoriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListCategoriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListCategoriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.v1.Category.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Category categories = 1;
 * @return {!Array<!proto.business.v1.Category>}
 */
proto.business.v1.ListCategoriesResponse.prototype.getCategoriesList = function() {
  return /** @type{!Array<!proto.business.v1.Category>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.v1.Category, 1));
};


/**
 * @param {!Array<!proto.business.v1.Category>} value
 * @return {!proto.business.v1.ListCategoriesResponse} returns this
*/
proto.business.v1.ListCategoriesResponse.prototype.setCategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.v1.Category=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.v1.Category}
 */
proto.business.v1.ListCategoriesResponse.prototype.addCategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.v1.Category, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.v1.ListCategoriesResponse} returns this
 */
proto.business.v1.ListCategoriesResponse.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.business.v1.ListCategoriesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListCategoriesResponse} returns this
 */
proto.business.v1.ListCategoriesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessSocialAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessSocialAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessSocialAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessSocialAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessSocialAccount: (f = msg.getBusinessSocialAccount()) && proto.business.v1.BusinessSocialAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessSocialAccountRequest}
 */
proto.business.v1.CreateBusinessSocialAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessSocialAccountRequest;
  return proto.business.v1.CreateBusinessSocialAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessSocialAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessSocialAccountRequest}
 */
proto.business.v1.CreateBusinessSocialAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessSocialAccount;
      reader.readMessage(value,proto.business.v1.BusinessSocialAccount.deserializeBinaryFromReader);
      msg.setBusinessSocialAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessSocialAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessSocialAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessSocialAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessSocialAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessSocialAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessSocialAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessSocialAccount business_social_account = 1;
 * @return {?proto.business.v1.BusinessSocialAccount}
 */
proto.business.v1.CreateBusinessSocialAccountRequest.prototype.getBusinessSocialAccount = function() {
  return /** @type{?proto.business.v1.BusinessSocialAccount} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessSocialAccount, 1));
};


/**
 * @param {?proto.business.v1.BusinessSocialAccount|undefined} value
 * @return {!proto.business.v1.CreateBusinessSocialAccountRequest} returns this
*/
proto.business.v1.CreateBusinessSocialAccountRequest.prototype.setBusinessSocialAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessSocialAccountRequest} returns this
 */
proto.business.v1.CreateBusinessSocialAccountRequest.prototype.clearBusinessSocialAccount = function() {
  return this.setBusinessSocialAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessSocialAccountRequest.prototype.hasBusinessSocialAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessSocialAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessSocialAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessSocialAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessSocialAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessSocialAccount: (f = msg.getBusinessSocialAccount()) && proto.business.v1.BusinessSocialAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessSocialAccountResponse}
 */
proto.business.v1.CreateBusinessSocialAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessSocialAccountResponse;
  return proto.business.v1.CreateBusinessSocialAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessSocialAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessSocialAccountResponse}
 */
proto.business.v1.CreateBusinessSocialAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessSocialAccount;
      reader.readMessage(value,proto.business.v1.BusinessSocialAccount.deserializeBinaryFromReader);
      msg.setBusinessSocialAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessSocialAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessSocialAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessSocialAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessSocialAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessSocialAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessSocialAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessSocialAccount business_social_account = 1;
 * @return {?proto.business.v1.BusinessSocialAccount}
 */
proto.business.v1.CreateBusinessSocialAccountResponse.prototype.getBusinessSocialAccount = function() {
  return /** @type{?proto.business.v1.BusinessSocialAccount} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessSocialAccount, 1));
};


/**
 * @param {?proto.business.v1.BusinessSocialAccount|undefined} value
 * @return {!proto.business.v1.CreateBusinessSocialAccountResponse} returns this
*/
proto.business.v1.CreateBusinessSocialAccountResponse.prototype.setBusinessSocialAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessSocialAccountResponse} returns this
 */
proto.business.v1.CreateBusinessSocialAccountResponse.prototype.clearBusinessSocialAccount = function() {
  return this.setBusinessSocialAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessSocialAccountResponse.prototype.hasBusinessSocialAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessSocialAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessSocialAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessSocialAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessSocialAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessSocialAccountRequest}
 */
proto.business.v1.GetBusinessSocialAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessSocialAccountRequest;
  return proto.business.v1.GetBusinessSocialAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessSocialAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessSocialAccountRequest}
 */
proto.business.v1.GetBusinessSocialAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessSocialAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessSocialAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessSocialAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessSocialAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.GetBusinessSocialAccountRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessSocialAccountRequest} returns this
 */
proto.business.v1.GetBusinessSocialAccountRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessSocialAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessSocialAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessSocialAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessSocialAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessSocialAccount: (f = msg.getBusinessSocialAccount()) && proto.business.v1.BusinessSocialAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessSocialAccountResponse}
 */
proto.business.v1.GetBusinessSocialAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessSocialAccountResponse;
  return proto.business.v1.GetBusinessSocialAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessSocialAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessSocialAccountResponse}
 */
proto.business.v1.GetBusinessSocialAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessSocialAccount;
      reader.readMessage(value,proto.business.v1.BusinessSocialAccount.deserializeBinaryFromReader);
      msg.setBusinessSocialAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessSocialAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessSocialAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessSocialAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessSocialAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessSocialAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessSocialAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessSocialAccount business_social_account = 1;
 * @return {?proto.business.v1.BusinessSocialAccount}
 */
proto.business.v1.GetBusinessSocialAccountResponse.prototype.getBusinessSocialAccount = function() {
  return /** @type{?proto.business.v1.BusinessSocialAccount} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessSocialAccount, 1));
};


/**
 * @param {?proto.business.v1.BusinessSocialAccount|undefined} value
 * @return {!proto.business.v1.GetBusinessSocialAccountResponse} returns this
*/
proto.business.v1.GetBusinessSocialAccountResponse.prototype.setBusinessSocialAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetBusinessSocialAccountResponse} returns this
 */
proto.business.v1.GetBusinessSocialAccountResponse.prototype.clearBusinessSocialAccount = function() {
  return this.setBusinessSocialAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetBusinessSocialAccountResponse.prototype.hasBusinessSocialAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessSocialAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessSocialAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessSocialAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessSocialAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessSocialAccount: (f = msg.getBusinessSocialAccount()) && proto.business.v1.BusinessSocialAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessSocialAccountRequest}
 */
proto.business.v1.UpdateBusinessSocialAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessSocialAccountRequest;
  return proto.business.v1.UpdateBusinessSocialAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessSocialAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessSocialAccountRequest}
 */
proto.business.v1.UpdateBusinessSocialAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessSocialAccount;
      reader.readMessage(value,proto.business.v1.BusinessSocialAccount.deserializeBinaryFromReader);
      msg.setBusinessSocialAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessSocialAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessSocialAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessSocialAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessSocialAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessSocialAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessSocialAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessSocialAccount business_social_account = 1;
 * @return {?proto.business.v1.BusinessSocialAccount}
 */
proto.business.v1.UpdateBusinessSocialAccountRequest.prototype.getBusinessSocialAccount = function() {
  return /** @type{?proto.business.v1.BusinessSocialAccount} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessSocialAccount, 1));
};


/**
 * @param {?proto.business.v1.BusinessSocialAccount|undefined} value
 * @return {!proto.business.v1.UpdateBusinessSocialAccountRequest} returns this
*/
proto.business.v1.UpdateBusinessSocialAccountRequest.prototype.setBusinessSocialAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessSocialAccountRequest} returns this
 */
proto.business.v1.UpdateBusinessSocialAccountRequest.prototype.clearBusinessSocialAccount = function() {
  return this.setBusinessSocialAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessSocialAccountRequest.prototype.hasBusinessSocialAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessSocialAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessSocialAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessSocialAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessSocialAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessSocialAccount: (f = msg.getBusinessSocialAccount()) && proto.business.v1.BusinessSocialAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessSocialAccountResponse}
 */
proto.business.v1.UpdateBusinessSocialAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessSocialAccountResponse;
  return proto.business.v1.UpdateBusinessSocialAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessSocialAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessSocialAccountResponse}
 */
proto.business.v1.UpdateBusinessSocialAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessSocialAccount;
      reader.readMessage(value,proto.business.v1.BusinessSocialAccount.deserializeBinaryFromReader);
      msg.setBusinessSocialAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessSocialAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessSocialAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessSocialAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessSocialAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessSocialAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessSocialAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessSocialAccount business_social_account = 1;
 * @return {?proto.business.v1.BusinessSocialAccount}
 */
proto.business.v1.UpdateBusinessSocialAccountResponse.prototype.getBusinessSocialAccount = function() {
  return /** @type{?proto.business.v1.BusinessSocialAccount} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessSocialAccount, 1));
};


/**
 * @param {?proto.business.v1.BusinessSocialAccount|undefined} value
 * @return {!proto.business.v1.UpdateBusinessSocialAccountResponse} returns this
*/
proto.business.v1.UpdateBusinessSocialAccountResponse.prototype.setBusinessSocialAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessSocialAccountResponse} returns this
 */
proto.business.v1.UpdateBusinessSocialAccountResponse.prototype.clearBusinessSocialAccount = function() {
  return this.setBusinessSocialAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessSocialAccountResponse.prototype.hasBusinessSocialAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteBusinessSocialAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteBusinessSocialAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteBusinessSocialAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessSocialAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteBusinessSocialAccountRequest}
 */
proto.business.v1.DeleteBusinessSocialAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteBusinessSocialAccountRequest;
  return proto.business.v1.DeleteBusinessSocialAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteBusinessSocialAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteBusinessSocialAccountRequest}
 */
proto.business.v1.DeleteBusinessSocialAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteBusinessSocialAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteBusinessSocialAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteBusinessSocialAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessSocialAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.DeleteBusinessSocialAccountRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteBusinessSocialAccountRequest} returns this
 */
proto.business.v1.DeleteBusinessSocialAccountRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessSocialAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessSocialAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessSocialAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessSocialAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessSocialAccountsRequest}
 */
proto.business.v1.ListBusinessSocialAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessSocialAccountsRequest;
  return proto.business.v1.ListBusinessSocialAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessSocialAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessSocialAccountsRequest}
 */
proto.business.v1.ListBusinessSocialAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessSocialAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessSocialAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessSocialAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessSocialAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string business_id = 1;
 * @return {string}
 */
proto.business.v1.ListBusinessSocialAccountsRequest.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessSocialAccountsRequest} returns this
 */
proto.business.v1.ListBusinessSocialAccountsRequest.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.business.v1.ListBusinessSocialAccountsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.ListBusinessSocialAccountsRequest} returns this
 */
proto.business.v1.ListBusinessSocialAccountsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.business.v1.ListBusinessSocialAccountsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessSocialAccountsRequest} returns this
 */
proto.business.v1.ListBusinessSocialAccountsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.v1.ListBusinessSocialAccountsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessSocialAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessSocialAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessSocialAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessSocialAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessSocialAccountsList: jspb.Message.toObjectList(msg.getBusinessSocialAccountsList(),
    proto.business.v1.BusinessSocialAccount.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessSocialAccountsResponse}
 */
proto.business.v1.ListBusinessSocialAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessSocialAccountsResponse;
  return proto.business.v1.ListBusinessSocialAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessSocialAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessSocialAccountsResponse}
 */
proto.business.v1.ListBusinessSocialAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessSocialAccount;
      reader.readMessage(value,proto.business.v1.BusinessSocialAccount.deserializeBinaryFromReader);
      msg.addBusinessSocialAccounts(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessSocialAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessSocialAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessSocialAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessSocialAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessSocialAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.v1.BusinessSocialAccount.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated BusinessSocialAccount business_social_accounts = 1;
 * @return {!Array<!proto.business.v1.BusinessSocialAccount>}
 */
proto.business.v1.ListBusinessSocialAccountsResponse.prototype.getBusinessSocialAccountsList = function() {
  return /** @type{!Array<!proto.business.v1.BusinessSocialAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.v1.BusinessSocialAccount, 1));
};


/**
 * @param {!Array<!proto.business.v1.BusinessSocialAccount>} value
 * @return {!proto.business.v1.ListBusinessSocialAccountsResponse} returns this
*/
proto.business.v1.ListBusinessSocialAccountsResponse.prototype.setBusinessSocialAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.v1.BusinessSocialAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.v1.BusinessSocialAccount}
 */
proto.business.v1.ListBusinessSocialAccountsResponse.prototype.addBusinessSocialAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.v1.BusinessSocialAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.v1.ListBusinessSocialAccountsResponse} returns this
 */
proto.business.v1.ListBusinessSocialAccountsResponse.prototype.clearBusinessSocialAccountsList = function() {
  return this.setBusinessSocialAccountsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.business.v1.ListBusinessSocialAccountsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessSocialAccountsResponse} returns this
 */
proto.business.v1.ListBusinessSocialAccountsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessReviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessReviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessReviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessReviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessReview: (f = msg.getBusinessReview()) && proto.business.v1.BusinessReview.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessReviewRequest}
 */
proto.business.v1.CreateBusinessReviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessReviewRequest;
  return proto.business.v1.CreateBusinessReviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessReviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessReviewRequest}
 */
proto.business.v1.CreateBusinessReviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessReview;
      reader.readMessage(value,proto.business.v1.BusinessReview.deserializeBinaryFromReader);
      msg.setBusinessReview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessReviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessReviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessReviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessReviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessReview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessReview.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessReview business_review = 1;
 * @return {?proto.business.v1.BusinessReview}
 */
proto.business.v1.CreateBusinessReviewRequest.prototype.getBusinessReview = function() {
  return /** @type{?proto.business.v1.BusinessReview} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessReview, 1));
};


/**
 * @param {?proto.business.v1.BusinessReview|undefined} value
 * @return {!proto.business.v1.CreateBusinessReviewRequest} returns this
*/
proto.business.v1.CreateBusinessReviewRequest.prototype.setBusinessReview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessReviewRequest} returns this
 */
proto.business.v1.CreateBusinessReviewRequest.prototype.clearBusinessReview = function() {
  return this.setBusinessReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessReviewRequest.prototype.hasBusinessReview = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessReviewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessReviewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessReviewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessReviewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessReview: (f = msg.getBusinessReview()) && proto.business.v1.BusinessReview.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessReviewResponse}
 */
proto.business.v1.CreateBusinessReviewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessReviewResponse;
  return proto.business.v1.CreateBusinessReviewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessReviewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessReviewResponse}
 */
proto.business.v1.CreateBusinessReviewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessReview;
      reader.readMessage(value,proto.business.v1.BusinessReview.deserializeBinaryFromReader);
      msg.setBusinessReview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessReviewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessReviewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessReviewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessReviewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessReview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessReview.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessReview business_review = 1;
 * @return {?proto.business.v1.BusinessReview}
 */
proto.business.v1.CreateBusinessReviewResponse.prototype.getBusinessReview = function() {
  return /** @type{?proto.business.v1.BusinessReview} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessReview, 1));
};


/**
 * @param {?proto.business.v1.BusinessReview|undefined} value
 * @return {!proto.business.v1.CreateBusinessReviewResponse} returns this
*/
proto.business.v1.CreateBusinessReviewResponse.prototype.setBusinessReview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessReviewResponse} returns this
 */
proto.business.v1.CreateBusinessReviewResponse.prototype.clearBusinessReview = function() {
  return this.setBusinessReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessReviewResponse.prototype.hasBusinessReview = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessReviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessReviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessReviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessReviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessReviewRequest}
 */
proto.business.v1.GetBusinessReviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessReviewRequest;
  return proto.business.v1.GetBusinessReviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessReviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessReviewRequest}
 */
proto.business.v1.GetBusinessReviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessReviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessReviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessReviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessReviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.GetBusinessReviewRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessReviewRequest} returns this
 */
proto.business.v1.GetBusinessReviewRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessReviewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessReviewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessReviewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessReviewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessReview: (f = msg.getBusinessReview()) && proto.business.v1.BusinessReview.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessReviewResponse}
 */
proto.business.v1.GetBusinessReviewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessReviewResponse;
  return proto.business.v1.GetBusinessReviewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessReviewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessReviewResponse}
 */
proto.business.v1.GetBusinessReviewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessReview;
      reader.readMessage(value,proto.business.v1.BusinessReview.deserializeBinaryFromReader);
      msg.setBusinessReview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessReviewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessReviewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessReviewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessReviewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessReview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessReview.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessReview business_review = 1;
 * @return {?proto.business.v1.BusinessReview}
 */
proto.business.v1.GetBusinessReviewResponse.prototype.getBusinessReview = function() {
  return /** @type{?proto.business.v1.BusinessReview} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessReview, 1));
};


/**
 * @param {?proto.business.v1.BusinessReview|undefined} value
 * @return {!proto.business.v1.GetBusinessReviewResponse} returns this
*/
proto.business.v1.GetBusinessReviewResponse.prototype.setBusinessReview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetBusinessReviewResponse} returns this
 */
proto.business.v1.GetBusinessReviewResponse.prototype.clearBusinessReview = function() {
  return this.setBusinessReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetBusinessReviewResponse.prototype.hasBusinessReview = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessReviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessReviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessReviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessReviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessReview: (f = msg.getBusinessReview()) && proto.business.v1.BusinessReview.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessReviewRequest}
 */
proto.business.v1.UpdateBusinessReviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessReviewRequest;
  return proto.business.v1.UpdateBusinessReviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessReviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessReviewRequest}
 */
proto.business.v1.UpdateBusinessReviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessReview;
      reader.readMessage(value,proto.business.v1.BusinessReview.deserializeBinaryFromReader);
      msg.setBusinessReview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessReviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessReviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessReviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessReviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessReview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessReview.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessReview business_review = 1;
 * @return {?proto.business.v1.BusinessReview}
 */
proto.business.v1.UpdateBusinessReviewRequest.prototype.getBusinessReview = function() {
  return /** @type{?proto.business.v1.BusinessReview} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessReview, 1));
};


/**
 * @param {?proto.business.v1.BusinessReview|undefined} value
 * @return {!proto.business.v1.UpdateBusinessReviewRequest} returns this
*/
proto.business.v1.UpdateBusinessReviewRequest.prototype.setBusinessReview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessReviewRequest} returns this
 */
proto.business.v1.UpdateBusinessReviewRequest.prototype.clearBusinessReview = function() {
  return this.setBusinessReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessReviewRequest.prototype.hasBusinessReview = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessReviewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessReviewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessReviewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessReviewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessReview: (f = msg.getBusinessReview()) && proto.business.v1.BusinessReview.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessReviewResponse}
 */
proto.business.v1.UpdateBusinessReviewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessReviewResponse;
  return proto.business.v1.UpdateBusinessReviewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessReviewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessReviewResponse}
 */
proto.business.v1.UpdateBusinessReviewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessReview;
      reader.readMessage(value,proto.business.v1.BusinessReview.deserializeBinaryFromReader);
      msg.setBusinessReview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessReviewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessReviewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessReviewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessReviewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessReview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessReview.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessReview business_review = 1;
 * @return {?proto.business.v1.BusinessReview}
 */
proto.business.v1.UpdateBusinessReviewResponse.prototype.getBusinessReview = function() {
  return /** @type{?proto.business.v1.BusinessReview} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessReview, 1));
};


/**
 * @param {?proto.business.v1.BusinessReview|undefined} value
 * @return {!proto.business.v1.UpdateBusinessReviewResponse} returns this
*/
proto.business.v1.UpdateBusinessReviewResponse.prototype.setBusinessReview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessReviewResponse} returns this
 */
proto.business.v1.UpdateBusinessReviewResponse.prototype.clearBusinessReview = function() {
  return this.setBusinessReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessReviewResponse.prototype.hasBusinessReview = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteBusinessReviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteBusinessReviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteBusinessReviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessReviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteBusinessReviewRequest}
 */
proto.business.v1.DeleteBusinessReviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteBusinessReviewRequest;
  return proto.business.v1.DeleteBusinessReviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteBusinessReviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteBusinessReviewRequest}
 */
proto.business.v1.DeleteBusinessReviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteBusinessReviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteBusinessReviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteBusinessReviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessReviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.DeleteBusinessReviewRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteBusinessReviewRequest} returns this
 */
proto.business.v1.DeleteBusinessReviewRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessReviewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessReviewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessReviewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessReviewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessReviewsRequest}
 */
proto.business.v1.ListBusinessReviewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessReviewsRequest;
  return proto.business.v1.ListBusinessReviewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessReviewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessReviewsRequest}
 */
proto.business.v1.ListBusinessReviewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessReviewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessReviewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessReviewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessReviewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string business_id = 1;
 * @return {string}
 */
proto.business.v1.ListBusinessReviewsRequest.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessReviewsRequest} returns this
 */
proto.business.v1.ListBusinessReviewsRequest.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.business.v1.ListBusinessReviewsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.ListBusinessReviewsRequest} returns this
 */
proto.business.v1.ListBusinessReviewsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.business.v1.ListBusinessReviewsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessReviewsRequest} returns this
 */
proto.business.v1.ListBusinessReviewsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.v1.ListBusinessReviewsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessReviewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessReviewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessReviewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessReviewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessReviewsList: jspb.Message.toObjectList(msg.getBusinessReviewsList(),
    proto.business.v1.BusinessReview.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessReviewsResponse}
 */
proto.business.v1.ListBusinessReviewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessReviewsResponse;
  return proto.business.v1.ListBusinessReviewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessReviewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessReviewsResponse}
 */
proto.business.v1.ListBusinessReviewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessReview;
      reader.readMessage(value,proto.business.v1.BusinessReview.deserializeBinaryFromReader);
      msg.addBusinessReviews(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessReviewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessReviewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessReviewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessReviewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessReviewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.v1.BusinessReview.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated BusinessReview business_reviews = 1;
 * @return {!Array<!proto.business.v1.BusinessReview>}
 */
proto.business.v1.ListBusinessReviewsResponse.prototype.getBusinessReviewsList = function() {
  return /** @type{!Array<!proto.business.v1.BusinessReview>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.v1.BusinessReview, 1));
};


/**
 * @param {!Array<!proto.business.v1.BusinessReview>} value
 * @return {!proto.business.v1.ListBusinessReviewsResponse} returns this
*/
proto.business.v1.ListBusinessReviewsResponse.prototype.setBusinessReviewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.v1.BusinessReview=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.v1.BusinessReview}
 */
proto.business.v1.ListBusinessReviewsResponse.prototype.addBusinessReviews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.v1.BusinessReview, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.v1.ListBusinessReviewsResponse} returns this
 */
proto.business.v1.ListBusinessReviewsResponse.prototype.clearBusinessReviewsList = function() {
  return this.setBusinessReviewsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.business.v1.ListBusinessReviewsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessReviewsResponse} returns this
 */
proto.business.v1.ListBusinessReviewsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessMembershipRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessMembershipRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessMembershipRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessMembershipRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessMembership: (f = msg.getBusinessMembership()) && proto.business.v1.BusinessMembership.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessMembershipRequest}
 */
proto.business.v1.CreateBusinessMembershipRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessMembershipRequest;
  return proto.business.v1.CreateBusinessMembershipRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessMembershipRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessMembershipRequest}
 */
proto.business.v1.CreateBusinessMembershipRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMembership;
      reader.readMessage(value,proto.business.v1.BusinessMembership.deserializeBinaryFromReader);
      msg.setBusinessMembership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessMembershipRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessMembershipRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessMembershipRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessMembershipRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessMembership();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessMembership.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessMembership business_membership = 1;
 * @return {?proto.business.v1.BusinessMembership}
 */
proto.business.v1.CreateBusinessMembershipRequest.prototype.getBusinessMembership = function() {
  return /** @type{?proto.business.v1.BusinessMembership} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessMembership, 1));
};


/**
 * @param {?proto.business.v1.BusinessMembership|undefined} value
 * @return {!proto.business.v1.CreateBusinessMembershipRequest} returns this
*/
proto.business.v1.CreateBusinessMembershipRequest.prototype.setBusinessMembership = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessMembershipRequest} returns this
 */
proto.business.v1.CreateBusinessMembershipRequest.prototype.clearBusinessMembership = function() {
  return this.setBusinessMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessMembershipRequest.prototype.hasBusinessMembership = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessMembershipResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessMembershipResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessMembershipResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessMembershipResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessMembership: (f = msg.getBusinessMembership()) && proto.business.v1.BusinessMembership.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessMembershipResponse}
 */
proto.business.v1.CreateBusinessMembershipResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessMembershipResponse;
  return proto.business.v1.CreateBusinessMembershipResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessMembershipResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessMembershipResponse}
 */
proto.business.v1.CreateBusinessMembershipResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMembership;
      reader.readMessage(value,proto.business.v1.BusinessMembership.deserializeBinaryFromReader);
      msg.setBusinessMembership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessMembershipResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessMembershipResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessMembershipResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessMembershipResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessMembership();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessMembership.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessMembership business_membership = 1;
 * @return {?proto.business.v1.BusinessMembership}
 */
proto.business.v1.CreateBusinessMembershipResponse.prototype.getBusinessMembership = function() {
  return /** @type{?proto.business.v1.BusinessMembership} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessMembership, 1));
};


/**
 * @param {?proto.business.v1.BusinessMembership|undefined} value
 * @return {!proto.business.v1.CreateBusinessMembershipResponse} returns this
*/
proto.business.v1.CreateBusinessMembershipResponse.prototype.setBusinessMembership = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessMembershipResponse} returns this
 */
proto.business.v1.CreateBusinessMembershipResponse.prototype.clearBusinessMembership = function() {
  return this.setBusinessMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessMembershipResponse.prototype.hasBusinessMembership = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessMembershipRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessMembershipRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessMembershipRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessMembershipRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessMembershipRequest}
 */
proto.business.v1.GetBusinessMembershipRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessMembershipRequest;
  return proto.business.v1.GetBusinessMembershipRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessMembershipRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessMembershipRequest}
 */
proto.business.v1.GetBusinessMembershipRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessMembershipRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessMembershipRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessMembershipRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessMembershipRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.GetBusinessMembershipRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessMembershipRequest} returns this
 */
proto.business.v1.GetBusinessMembershipRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessMembershipResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessMembershipResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessMembershipResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessMembershipResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessMembership: (f = msg.getBusinessMembership()) && proto.business.v1.BusinessMembership.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessMembershipResponse}
 */
proto.business.v1.GetBusinessMembershipResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessMembershipResponse;
  return proto.business.v1.GetBusinessMembershipResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessMembershipResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessMembershipResponse}
 */
proto.business.v1.GetBusinessMembershipResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMembership;
      reader.readMessage(value,proto.business.v1.BusinessMembership.deserializeBinaryFromReader);
      msg.setBusinessMembership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessMembershipResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessMembershipResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessMembershipResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessMembershipResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessMembership();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessMembership.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessMembership business_membership = 1;
 * @return {?proto.business.v1.BusinessMembership}
 */
proto.business.v1.GetBusinessMembershipResponse.prototype.getBusinessMembership = function() {
  return /** @type{?proto.business.v1.BusinessMembership} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessMembership, 1));
};


/**
 * @param {?proto.business.v1.BusinessMembership|undefined} value
 * @return {!proto.business.v1.GetBusinessMembershipResponse} returns this
*/
proto.business.v1.GetBusinessMembershipResponse.prototype.setBusinessMembership = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetBusinessMembershipResponse} returns this
 */
proto.business.v1.GetBusinessMembershipResponse.prototype.clearBusinessMembership = function() {
  return this.setBusinessMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetBusinessMembershipResponse.prototype.hasBusinessMembership = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessMembershipRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessMembershipRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessMembershipRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessMembershipRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessMembership: (f = msg.getBusinessMembership()) && proto.business.v1.BusinessMembership.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessMembershipRequest}
 */
proto.business.v1.UpdateBusinessMembershipRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessMembershipRequest;
  return proto.business.v1.UpdateBusinessMembershipRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessMembershipRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessMembershipRequest}
 */
proto.business.v1.UpdateBusinessMembershipRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMembership;
      reader.readMessage(value,proto.business.v1.BusinessMembership.deserializeBinaryFromReader);
      msg.setBusinessMembership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessMembershipRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessMembershipRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessMembershipRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessMembershipRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessMembership();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessMembership.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessMembership business_membership = 1;
 * @return {?proto.business.v1.BusinessMembership}
 */
proto.business.v1.UpdateBusinessMembershipRequest.prototype.getBusinessMembership = function() {
  return /** @type{?proto.business.v1.BusinessMembership} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessMembership, 1));
};


/**
 * @param {?proto.business.v1.BusinessMembership|undefined} value
 * @return {!proto.business.v1.UpdateBusinessMembershipRequest} returns this
*/
proto.business.v1.UpdateBusinessMembershipRequest.prototype.setBusinessMembership = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessMembershipRequest} returns this
 */
proto.business.v1.UpdateBusinessMembershipRequest.prototype.clearBusinessMembership = function() {
  return this.setBusinessMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessMembershipRequest.prototype.hasBusinessMembership = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessMembershipResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessMembershipResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessMembershipResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessMembershipResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessMembership: (f = msg.getBusinessMembership()) && proto.business.v1.BusinessMembership.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessMembershipResponse}
 */
proto.business.v1.UpdateBusinessMembershipResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessMembershipResponse;
  return proto.business.v1.UpdateBusinessMembershipResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessMembershipResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessMembershipResponse}
 */
proto.business.v1.UpdateBusinessMembershipResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMembership;
      reader.readMessage(value,proto.business.v1.BusinessMembership.deserializeBinaryFromReader);
      msg.setBusinessMembership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessMembershipResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessMembershipResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessMembershipResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessMembershipResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessMembership();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessMembership.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessMembership business_membership = 1;
 * @return {?proto.business.v1.BusinessMembership}
 */
proto.business.v1.UpdateBusinessMembershipResponse.prototype.getBusinessMembership = function() {
  return /** @type{?proto.business.v1.BusinessMembership} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessMembership, 1));
};


/**
 * @param {?proto.business.v1.BusinessMembership|undefined} value
 * @return {!proto.business.v1.UpdateBusinessMembershipResponse} returns this
*/
proto.business.v1.UpdateBusinessMembershipResponse.prototype.setBusinessMembership = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessMembershipResponse} returns this
 */
proto.business.v1.UpdateBusinessMembershipResponse.prototype.clearBusinessMembership = function() {
  return this.setBusinessMembership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessMembershipResponse.prototype.hasBusinessMembership = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteBusinessMembershipRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteBusinessMembershipRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteBusinessMembershipRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessMembershipRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteBusinessMembershipRequest}
 */
proto.business.v1.DeleteBusinessMembershipRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteBusinessMembershipRequest;
  return proto.business.v1.DeleteBusinessMembershipRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteBusinessMembershipRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteBusinessMembershipRequest}
 */
proto.business.v1.DeleteBusinessMembershipRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteBusinessMembershipRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteBusinessMembershipRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteBusinessMembershipRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessMembershipRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.DeleteBusinessMembershipRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteBusinessMembershipRequest} returns this
 */
proto.business.v1.DeleteBusinessMembershipRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessMembershipsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessMembershipsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessMembershipsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessMembershipsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessMembershipsRequest}
 */
proto.business.v1.ListBusinessMembershipsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessMembershipsRequest;
  return proto.business.v1.ListBusinessMembershipsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessMembershipsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessMembershipsRequest}
 */
proto.business.v1.ListBusinessMembershipsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessMembershipsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessMembershipsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessMembershipsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessMembershipsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string business_id = 1;
 * @return {string}
 */
proto.business.v1.ListBusinessMembershipsRequest.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessMembershipsRequest} returns this
 */
proto.business.v1.ListBusinessMembershipsRequest.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.business.v1.ListBusinessMembershipsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.ListBusinessMembershipsRequest} returns this
 */
proto.business.v1.ListBusinessMembershipsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.business.v1.ListBusinessMembershipsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessMembershipsRequest} returns this
 */
proto.business.v1.ListBusinessMembershipsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.v1.ListBusinessMembershipsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessMembershipsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessMembershipsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessMembershipsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessMembershipsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessMembershipsList: jspb.Message.toObjectList(msg.getBusinessMembershipsList(),
    proto.business.v1.BusinessMembership.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessMembershipsResponse}
 */
proto.business.v1.ListBusinessMembershipsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessMembershipsResponse;
  return proto.business.v1.ListBusinessMembershipsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessMembershipsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessMembershipsResponse}
 */
proto.business.v1.ListBusinessMembershipsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessMembership;
      reader.readMessage(value,proto.business.v1.BusinessMembership.deserializeBinaryFromReader);
      msg.addBusinessMemberships(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessMembershipsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessMembershipsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessMembershipsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessMembershipsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessMembershipsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.v1.BusinessMembership.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated BusinessMembership business_memberships = 1;
 * @return {!Array<!proto.business.v1.BusinessMembership>}
 */
proto.business.v1.ListBusinessMembershipsResponse.prototype.getBusinessMembershipsList = function() {
  return /** @type{!Array<!proto.business.v1.BusinessMembership>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.v1.BusinessMembership, 1));
};


/**
 * @param {!Array<!proto.business.v1.BusinessMembership>} value
 * @return {!proto.business.v1.ListBusinessMembershipsResponse} returns this
*/
proto.business.v1.ListBusinessMembershipsResponse.prototype.setBusinessMembershipsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.v1.BusinessMembership=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.v1.BusinessMembership}
 */
proto.business.v1.ListBusinessMembershipsResponse.prototype.addBusinessMemberships = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.v1.BusinessMembership, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.v1.ListBusinessMembershipsResponse} returns this
 */
proto.business.v1.ListBusinessMembershipsResponse.prototype.clearBusinessMembershipsList = function() {
  return this.setBusinessMembershipsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.business.v1.ListBusinessMembershipsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessMembershipsResponse} returns this
 */
proto.business.v1.ListBusinessMembershipsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessBrandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessBrandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessBrandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessBrandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessBrand: (f = msg.getBusinessBrand()) && proto.business.v1.BusinessBrand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessBrandRequest}
 */
proto.business.v1.CreateBusinessBrandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessBrandRequest;
  return proto.business.v1.CreateBusinessBrandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessBrandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessBrandRequest}
 */
proto.business.v1.CreateBusinessBrandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessBrand;
      reader.readMessage(value,proto.business.v1.BusinessBrand.deserializeBinaryFromReader);
      msg.setBusinessBrand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessBrandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessBrandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessBrandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessBrandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessBrand();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessBrand.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessBrand business_brand = 1;
 * @return {?proto.business.v1.BusinessBrand}
 */
proto.business.v1.CreateBusinessBrandRequest.prototype.getBusinessBrand = function() {
  return /** @type{?proto.business.v1.BusinessBrand} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessBrand, 1));
};


/**
 * @param {?proto.business.v1.BusinessBrand|undefined} value
 * @return {!proto.business.v1.CreateBusinessBrandRequest} returns this
*/
proto.business.v1.CreateBusinessBrandRequest.prototype.setBusinessBrand = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessBrandRequest} returns this
 */
proto.business.v1.CreateBusinessBrandRequest.prototype.clearBusinessBrand = function() {
  return this.setBusinessBrand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessBrandRequest.prototype.hasBusinessBrand = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessBrandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessBrandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessBrandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessBrandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessBrand: (f = msg.getBusinessBrand()) && proto.business.v1.BusinessBrand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessBrandResponse}
 */
proto.business.v1.CreateBusinessBrandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessBrandResponse;
  return proto.business.v1.CreateBusinessBrandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessBrandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessBrandResponse}
 */
proto.business.v1.CreateBusinessBrandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessBrand;
      reader.readMessage(value,proto.business.v1.BusinessBrand.deserializeBinaryFromReader);
      msg.setBusinessBrand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessBrandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessBrandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessBrandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessBrandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessBrand();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessBrand.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessBrand business_brand = 1;
 * @return {?proto.business.v1.BusinessBrand}
 */
proto.business.v1.CreateBusinessBrandResponse.prototype.getBusinessBrand = function() {
  return /** @type{?proto.business.v1.BusinessBrand} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessBrand, 1));
};


/**
 * @param {?proto.business.v1.BusinessBrand|undefined} value
 * @return {!proto.business.v1.CreateBusinessBrandResponse} returns this
*/
proto.business.v1.CreateBusinessBrandResponse.prototype.setBusinessBrand = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessBrandResponse} returns this
 */
proto.business.v1.CreateBusinessBrandResponse.prototype.clearBusinessBrand = function() {
  return this.setBusinessBrand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessBrandResponse.prototype.hasBusinessBrand = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessBrandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessBrandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessBrandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessBrandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessBrandRequest}
 */
proto.business.v1.GetBusinessBrandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessBrandRequest;
  return proto.business.v1.GetBusinessBrandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessBrandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessBrandRequest}
 */
proto.business.v1.GetBusinessBrandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessBrandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessBrandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessBrandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessBrandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.GetBusinessBrandRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessBrandRequest} returns this
 */
proto.business.v1.GetBusinessBrandRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessBrandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessBrandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessBrandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessBrandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessBrand: (f = msg.getBusinessBrand()) && proto.business.v1.BusinessBrand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessBrandResponse}
 */
proto.business.v1.GetBusinessBrandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessBrandResponse;
  return proto.business.v1.GetBusinessBrandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessBrandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessBrandResponse}
 */
proto.business.v1.GetBusinessBrandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessBrand;
      reader.readMessage(value,proto.business.v1.BusinessBrand.deserializeBinaryFromReader);
      msg.setBusinessBrand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessBrandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessBrandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessBrandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessBrandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessBrand();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessBrand.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessBrand business_brand = 1;
 * @return {?proto.business.v1.BusinessBrand}
 */
proto.business.v1.GetBusinessBrandResponse.prototype.getBusinessBrand = function() {
  return /** @type{?proto.business.v1.BusinessBrand} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessBrand, 1));
};


/**
 * @param {?proto.business.v1.BusinessBrand|undefined} value
 * @return {!proto.business.v1.GetBusinessBrandResponse} returns this
*/
proto.business.v1.GetBusinessBrandResponse.prototype.setBusinessBrand = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetBusinessBrandResponse} returns this
 */
proto.business.v1.GetBusinessBrandResponse.prototype.clearBusinessBrand = function() {
  return this.setBusinessBrand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetBusinessBrandResponse.prototype.hasBusinessBrand = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessBrandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessBrandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessBrandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessBrandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessBrand: (f = msg.getBusinessBrand()) && proto.business.v1.BusinessBrand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessBrandRequest}
 */
proto.business.v1.UpdateBusinessBrandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessBrandRequest;
  return proto.business.v1.UpdateBusinessBrandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessBrandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessBrandRequest}
 */
proto.business.v1.UpdateBusinessBrandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessBrand;
      reader.readMessage(value,proto.business.v1.BusinessBrand.deserializeBinaryFromReader);
      msg.setBusinessBrand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessBrandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessBrandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessBrandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessBrandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessBrand();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessBrand.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessBrand business_brand = 1;
 * @return {?proto.business.v1.BusinessBrand}
 */
proto.business.v1.UpdateBusinessBrandRequest.prototype.getBusinessBrand = function() {
  return /** @type{?proto.business.v1.BusinessBrand} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessBrand, 1));
};


/**
 * @param {?proto.business.v1.BusinessBrand|undefined} value
 * @return {!proto.business.v1.UpdateBusinessBrandRequest} returns this
*/
proto.business.v1.UpdateBusinessBrandRequest.prototype.setBusinessBrand = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessBrandRequest} returns this
 */
proto.business.v1.UpdateBusinessBrandRequest.prototype.clearBusinessBrand = function() {
  return this.setBusinessBrand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessBrandRequest.prototype.hasBusinessBrand = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessBrandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessBrandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessBrandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessBrandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessBrand: (f = msg.getBusinessBrand()) && proto.business.v1.BusinessBrand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessBrandResponse}
 */
proto.business.v1.UpdateBusinessBrandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessBrandResponse;
  return proto.business.v1.UpdateBusinessBrandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessBrandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessBrandResponse}
 */
proto.business.v1.UpdateBusinessBrandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessBrand;
      reader.readMessage(value,proto.business.v1.BusinessBrand.deserializeBinaryFromReader);
      msg.setBusinessBrand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessBrandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessBrandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessBrandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessBrandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessBrand();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessBrand.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessBrand business_brand = 1;
 * @return {?proto.business.v1.BusinessBrand}
 */
proto.business.v1.UpdateBusinessBrandResponse.prototype.getBusinessBrand = function() {
  return /** @type{?proto.business.v1.BusinessBrand} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessBrand, 1));
};


/**
 * @param {?proto.business.v1.BusinessBrand|undefined} value
 * @return {!proto.business.v1.UpdateBusinessBrandResponse} returns this
*/
proto.business.v1.UpdateBusinessBrandResponse.prototype.setBusinessBrand = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessBrandResponse} returns this
 */
proto.business.v1.UpdateBusinessBrandResponse.prototype.clearBusinessBrand = function() {
  return this.setBusinessBrand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessBrandResponse.prototype.hasBusinessBrand = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteBusinessBrandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteBusinessBrandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteBusinessBrandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessBrandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteBusinessBrandRequest}
 */
proto.business.v1.DeleteBusinessBrandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteBusinessBrandRequest;
  return proto.business.v1.DeleteBusinessBrandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteBusinessBrandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteBusinessBrandRequest}
 */
proto.business.v1.DeleteBusinessBrandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteBusinessBrandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteBusinessBrandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteBusinessBrandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessBrandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.DeleteBusinessBrandRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteBusinessBrandRequest} returns this
 */
proto.business.v1.DeleteBusinessBrandRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessBrandsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessBrandsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessBrandsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessBrandsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessBrandsRequest}
 */
proto.business.v1.ListBusinessBrandsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessBrandsRequest;
  return proto.business.v1.ListBusinessBrandsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessBrandsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessBrandsRequest}
 */
proto.business.v1.ListBusinessBrandsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessBrandsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessBrandsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessBrandsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessBrandsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string business_id = 1;
 * @return {string}
 */
proto.business.v1.ListBusinessBrandsRequest.prototype.getBusinessId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessBrandsRequest} returns this
 */
proto.business.v1.ListBusinessBrandsRequest.prototype.setBusinessId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.business.v1.ListBusinessBrandsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.business.v1.ListBusinessBrandsRequest} returns this
 */
proto.business.v1.ListBusinessBrandsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.business.v1.ListBusinessBrandsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessBrandsRequest} returns this
 */
proto.business.v1.ListBusinessBrandsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.business.v1.ListBusinessBrandsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.ListBusinessBrandsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.ListBusinessBrandsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.ListBusinessBrandsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessBrandsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessBrandsList: jspb.Message.toObjectList(msg.getBusinessBrandsList(),
    proto.business.v1.BusinessBrand.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.ListBusinessBrandsResponse}
 */
proto.business.v1.ListBusinessBrandsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.ListBusinessBrandsResponse;
  return proto.business.v1.ListBusinessBrandsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.ListBusinessBrandsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.ListBusinessBrandsResponse}
 */
proto.business.v1.ListBusinessBrandsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessBrand;
      reader.readMessage(value,proto.business.v1.BusinessBrand.deserializeBinaryFromReader);
      msg.addBusinessBrands(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.ListBusinessBrandsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.ListBusinessBrandsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.ListBusinessBrandsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.ListBusinessBrandsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessBrandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.business.v1.BusinessBrand.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated BusinessBrand business_brands = 1;
 * @return {!Array<!proto.business.v1.BusinessBrand>}
 */
proto.business.v1.ListBusinessBrandsResponse.prototype.getBusinessBrandsList = function() {
  return /** @type{!Array<!proto.business.v1.BusinessBrand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.business.v1.BusinessBrand, 1));
};


/**
 * @param {!Array<!proto.business.v1.BusinessBrand>} value
 * @return {!proto.business.v1.ListBusinessBrandsResponse} returns this
*/
proto.business.v1.ListBusinessBrandsResponse.prototype.setBusinessBrandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.business.v1.BusinessBrand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.business.v1.BusinessBrand}
 */
proto.business.v1.ListBusinessBrandsResponse.prototype.addBusinessBrands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.business.v1.BusinessBrand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.business.v1.ListBusinessBrandsResponse} returns this
 */
proto.business.v1.ListBusinessBrandsResponse.prototype.clearBusinessBrandsList = function() {
  return this.setBusinessBrandsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.business.v1.ListBusinessBrandsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.ListBusinessBrandsResponse} returns this
 */
proto.business.v1.ListBusinessBrandsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessRelationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessRelationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessRelationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessRelationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessRelation: (f = msg.getBusinessRelation()) && proto.business.v1.BusinessRelation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessRelationRequest}
 */
proto.business.v1.CreateBusinessRelationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessRelationRequest;
  return proto.business.v1.CreateBusinessRelationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessRelationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessRelationRequest}
 */
proto.business.v1.CreateBusinessRelationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessRelation;
      reader.readMessage(value,proto.business.v1.BusinessRelation.deserializeBinaryFromReader);
      msg.setBusinessRelation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessRelationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessRelationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessRelationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessRelationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessRelation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessRelation.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessRelation business_relation = 1;
 * @return {?proto.business.v1.BusinessRelation}
 */
proto.business.v1.CreateBusinessRelationRequest.prototype.getBusinessRelation = function() {
  return /** @type{?proto.business.v1.BusinessRelation} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessRelation, 1));
};


/**
 * @param {?proto.business.v1.BusinessRelation|undefined} value
 * @return {!proto.business.v1.CreateBusinessRelationRequest} returns this
*/
proto.business.v1.CreateBusinessRelationRequest.prototype.setBusinessRelation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessRelationRequest} returns this
 */
proto.business.v1.CreateBusinessRelationRequest.prototype.clearBusinessRelation = function() {
  return this.setBusinessRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessRelationRequest.prototype.hasBusinessRelation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.CreateBusinessRelationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.CreateBusinessRelationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.CreateBusinessRelationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessRelationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessRelation: (f = msg.getBusinessRelation()) && proto.business.v1.BusinessRelation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.CreateBusinessRelationResponse}
 */
proto.business.v1.CreateBusinessRelationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.CreateBusinessRelationResponse;
  return proto.business.v1.CreateBusinessRelationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.CreateBusinessRelationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.CreateBusinessRelationResponse}
 */
proto.business.v1.CreateBusinessRelationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessRelation;
      reader.readMessage(value,proto.business.v1.BusinessRelation.deserializeBinaryFromReader);
      msg.setBusinessRelation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.CreateBusinessRelationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.CreateBusinessRelationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.CreateBusinessRelationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.CreateBusinessRelationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessRelation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessRelation.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessRelation business_relation = 1;
 * @return {?proto.business.v1.BusinessRelation}
 */
proto.business.v1.CreateBusinessRelationResponse.prototype.getBusinessRelation = function() {
  return /** @type{?proto.business.v1.BusinessRelation} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessRelation, 1));
};


/**
 * @param {?proto.business.v1.BusinessRelation|undefined} value
 * @return {!proto.business.v1.CreateBusinessRelationResponse} returns this
*/
proto.business.v1.CreateBusinessRelationResponse.prototype.setBusinessRelation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.CreateBusinessRelationResponse} returns this
 */
proto.business.v1.CreateBusinessRelationResponse.prototype.clearBusinessRelation = function() {
  return this.setBusinessRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.CreateBusinessRelationResponse.prototype.hasBusinessRelation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessRelationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessRelationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessRelationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessRelationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessRelationRequest}
 */
proto.business.v1.GetBusinessRelationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessRelationRequest;
  return proto.business.v1.GetBusinessRelationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessRelationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessRelationRequest}
 */
proto.business.v1.GetBusinessRelationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessRelationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessRelationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessRelationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessRelationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.GetBusinessRelationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.GetBusinessRelationRequest} returns this
 */
proto.business.v1.GetBusinessRelationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.GetBusinessRelationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.GetBusinessRelationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.GetBusinessRelationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessRelationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessRelation: (f = msg.getBusinessRelation()) && proto.business.v1.BusinessRelation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.GetBusinessRelationResponse}
 */
proto.business.v1.GetBusinessRelationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.GetBusinessRelationResponse;
  return proto.business.v1.GetBusinessRelationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.GetBusinessRelationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.GetBusinessRelationResponse}
 */
proto.business.v1.GetBusinessRelationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessRelation;
      reader.readMessage(value,proto.business.v1.BusinessRelation.deserializeBinaryFromReader);
      msg.setBusinessRelation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.GetBusinessRelationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.GetBusinessRelationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.GetBusinessRelationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.GetBusinessRelationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessRelation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessRelation.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessRelation business_relation = 1;
 * @return {?proto.business.v1.BusinessRelation}
 */
proto.business.v1.GetBusinessRelationResponse.prototype.getBusinessRelation = function() {
  return /** @type{?proto.business.v1.BusinessRelation} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessRelation, 1));
};


/**
 * @param {?proto.business.v1.BusinessRelation|undefined} value
 * @return {!proto.business.v1.GetBusinessRelationResponse} returns this
*/
proto.business.v1.GetBusinessRelationResponse.prototype.setBusinessRelation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.GetBusinessRelationResponse} returns this
 */
proto.business.v1.GetBusinessRelationResponse.prototype.clearBusinessRelation = function() {
  return this.setBusinessRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.GetBusinessRelationResponse.prototype.hasBusinessRelation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessRelationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessRelationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessRelationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessRelationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
businessRelation: (f = msg.getBusinessRelation()) && proto.business.v1.BusinessRelation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessRelationRequest}
 */
proto.business.v1.UpdateBusinessRelationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessRelationRequest;
  return proto.business.v1.UpdateBusinessRelationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessRelationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessRelationRequest}
 */
proto.business.v1.UpdateBusinessRelationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessRelation;
      reader.readMessage(value,proto.business.v1.BusinessRelation.deserializeBinaryFromReader);
      msg.setBusinessRelation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessRelationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessRelationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessRelationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessRelationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessRelation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessRelation.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessRelation business_relation = 1;
 * @return {?proto.business.v1.BusinessRelation}
 */
proto.business.v1.UpdateBusinessRelationRequest.prototype.getBusinessRelation = function() {
  return /** @type{?proto.business.v1.BusinessRelation} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessRelation, 1));
};


/**
 * @param {?proto.business.v1.BusinessRelation|undefined} value
 * @return {!proto.business.v1.UpdateBusinessRelationRequest} returns this
*/
proto.business.v1.UpdateBusinessRelationRequest.prototype.setBusinessRelation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessRelationRequest} returns this
 */
proto.business.v1.UpdateBusinessRelationRequest.prototype.clearBusinessRelation = function() {
  return this.setBusinessRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessRelationRequest.prototype.hasBusinessRelation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.UpdateBusinessRelationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.UpdateBusinessRelationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.UpdateBusinessRelationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessRelationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
businessRelation: (f = msg.getBusinessRelation()) && proto.business.v1.BusinessRelation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.UpdateBusinessRelationResponse}
 */
proto.business.v1.UpdateBusinessRelationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.UpdateBusinessRelationResponse;
  return proto.business.v1.UpdateBusinessRelationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.UpdateBusinessRelationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.UpdateBusinessRelationResponse}
 */
proto.business.v1.UpdateBusinessRelationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.business.v1.BusinessRelation;
      reader.readMessage(value,proto.business.v1.BusinessRelation.deserializeBinaryFromReader);
      msg.setBusinessRelation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.UpdateBusinessRelationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.UpdateBusinessRelationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.UpdateBusinessRelationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.UpdateBusinessRelationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessRelation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.business.v1.BusinessRelation.serializeBinaryToWriter
    );
  }
};


/**
 * optional BusinessRelation business_relation = 1;
 * @return {?proto.business.v1.BusinessRelation}
 */
proto.business.v1.UpdateBusinessRelationResponse.prototype.getBusinessRelation = function() {
  return /** @type{?proto.business.v1.BusinessRelation} */ (
    jspb.Message.getWrapperField(this, proto.business.v1.BusinessRelation, 1));
};


/**
 * @param {?proto.business.v1.BusinessRelation|undefined} value
 * @return {!proto.business.v1.UpdateBusinessRelationResponse} returns this
*/
proto.business.v1.UpdateBusinessRelationResponse.prototype.setBusinessRelation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.business.v1.UpdateBusinessRelationResponse} returns this
 */
proto.business.v1.UpdateBusinessRelationResponse.prototype.clearBusinessRelation = function() {
  return this.setBusinessRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.business.v1.UpdateBusinessRelationResponse.prototype.hasBusinessRelation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.business.v1.DeleteBusinessRelationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.business.v1.DeleteBusinessRelationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.business.v1.DeleteBusinessRelationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessRelationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.business.v1.DeleteBusinessRelationRequest}
 */
proto.business.v1.DeleteBusinessRelationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.business.v1.DeleteBusinessRelationRequest;
  return proto.business.v1.DeleteBusinessRelationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.business.v1.DeleteBusinessRelationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.business.v1.DeleteBusinessRelationRequest}
 */
proto.business.v1.DeleteBusinessRelationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.business.v1.DeleteBusinessRelationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.business.v1.DeleteBusinessRelationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.business.v1.DeleteBusinessRelationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.business.v1.DeleteBusinessRelationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.business.v1.DeleteBusinessRelationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.business.v1.DeleteBusinessRelationRequest} returns this
 */
proto.business.v1.DeleteBusinessRelationRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.business.v1.VerificationStatus = {
  VERIFICATION_STATUS_UNSPECIFIED: 0,
  DRAFT: 1,
  PENDING: 2,
  VERIFIED: 3,
  SUSPENDED: 4
};

/**
 * @enum {number}
 */
proto.business.v1.ReviewStatus = {
  REVIEW_STATUS_UNSPECIFIED: 0,
  VISIBLE: 1,
  HIDDEN: 2,
  FLAGGED: 3
};

goog.object.extend(exports, proto.business.v1);
