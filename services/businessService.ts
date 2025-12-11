import { BusinessServiceClient } from "../grpc/business/v1/BusinessServiceClientPb";
const pb = require("../grpc/business/v1/business_pb.js");
const { Struct } = require("google-protobuf/google/protobuf/struct_pb.js");

// Proto exports are extended directly to module.exports
const {
  CreateBusinessRequest,
  CreateBusinessResponse,
  GetBusinessRequest,
  GetBusinessResponse,
  GetBusinessByNameRequest,
  GetBusinessByNameResponse,
  UpdateBusinessRequest,
  UpdateBusinessResponse,
  DeleteBusinessRequest,
  ListBusinessesRequest,
  ListBusinessesResponse,
  Business,
  CreateBusinessLocationRequest,
  CreateBusinessLocationResponse,
  BusinessLocation,
} = pb;

class BusinessService {
  private client: BusinessServiceClient;

  constructor() {
    const envoyUrl =
      process.env.NEXT_PUBLIC_GRPC_WEB_URL || "http://localhost:8085";
    this.client = new BusinessServiceClient(envoyUrl, null, null);
  }

  /**
   * Create a new business
   */
  async createBusiness(business: any): Promise<any> {
    const request = new CreateBusinessRequest();
    const businessMsg = new Business();

    if (business.createdBy) businessMsg.setCreatedBy(business.createdBy);
    if (business.arName) businessMsg.setArName(business.arName);
    if (business.enName) businessMsg.setEnName(business.enName);
    if (business.arDescription)
      businessMsg.setArDescription(business.arDescription);
    if (business.enDescription)
      businessMsg.setEnDescription(business.enDescription);
    if (business.address) businessMsg.setAddress(business.address);
    if (business.phoneNumber) businessMsg.setPhoneNumber(business.phoneNumber);
    if (business.storageQuota !== undefined)
      businessMsg.setStorageQuota(business.storageQuota);
    if (business.email) businessMsg.setEmail(business.email);
    if (business.categoryId) businessMsg.setCategoryId(business.categoryId);
    if (business.isActive !== undefined)
      businessMsg.setIsActive(business.isActive);

    // Handle key_words as Struct
    if (business.keyWords) {
      const keyWordsStruct = Struct.fromJavaScript(business.keyWords);
      businessMsg.setKeyWords(keyWordsStruct);
    }

    // Handle working_hours as Struct
    if (business.workingHours) {
      const workingHoursStruct = Struct.fromJavaScript(business.workingHours);
      businessMsg.setWorkingHours(workingHoursStruct);
    }
    console.log(businessMsg.toObject());
    request.setBusiness(businessMsg);

    return new Promise((resolve, reject) => {
      this.client.createBusiness(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });
  }

  /**
   * Get business by ID
   */
  async getBusiness(businessId: string): Promise<any> {
    const request = new GetBusinessRequest();
    request.setBusinessid(businessId);

    return new Promise((resolve, reject) => {
      this.client.getBusiness(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });
  }

  /**
   * Get business by brand name
   * Searches for businesses associated with a brand
   */
  async getBusinessByBrandName(brandName: string): Promise<any> {
    const request = new GetBusinessByNameRequest();
    // Use the name fields to pass brand name for search
    request.setEnName(brandName);
    request.setArName(brandName);

    return new Promise((resolve, reject) => {
      this.client.getBusinessByName(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          console.log(response.toObject());
          resolve(response.toObject());
        }
      });
    });
  }

  /**
   * Update business
   */
  async updateBusiness(business: any): Promise<any> {
    const request = new UpdateBusinessRequest();
    const businessMsg = new Business();

    if (business.id) businessMsg.setId(business.id);
    if (business.createdBy) businessMsg.setCreatedBy(business.createdBy);
    if (business.arName) businessMsg.setArName(business.arName);
    if (business.enName) businessMsg.setEnName(business.enName);
    if (business.arDescription)
      businessMsg.setArDescription(business.arDescription);
    if (business.enDescription)
      businessMsg.setEnDescription(business.enDescription);
    if (business.address) businessMsg.setAddress(business.address);
    if (business.phoneNumber) businessMsg.setPhoneNumber(business.phoneNumber);
    if (business.storageQuota !== undefined)
      businessMsg.setStorageQuota(business.storageQuota);
    if (business.email) businessMsg.setEmail(business.email);
    if (business.categoryId) businessMsg.setCategoryId(business.categoryId);
    if (business.isActive !== undefined)
      businessMsg.setIsActive(business.isActive);

    // Handle key_words as Struct
    if (business.keyWords) {
      const keyWordsStruct = Struct.fromJavaScript(business.keyWords);
      businessMsg.setKeyWords(keyWordsStruct);
    }

    // Handle working_hours as Struct
    if (business.workingHours) {
      const workingHoursStruct = Struct.fromJavaScript(business.workingHours);
      businessMsg.setWorkingHours(workingHoursStruct);
    }

    request.setBusiness(businessMsg);

    return new Promise((resolve, reject) => {
      this.client.updateBusiness(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });
  }

  /**
   * Delete business
   */
  async deleteBusiness(businessId: string): Promise<void> {
    const request = new DeleteBusinessRequest();
    request.setBusinessid(businessId);

    return new Promise((resolve, reject) => {
      this.client.deleteBusiness(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * List businesses with pagination
   */
  async listBusinesses(
    pageSize: number = 10,
    pageToken: string = "",
    filter: string = ""
  ): Promise<any> {
    const request = new ListBusinessesRequest();
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setFilter(filter);

    return new Promise((resolve, reject) => {
      this.client.listBusinesses(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });
  }

  /**
   * Create business location
   */
  async createBusinessLocation(location: any): Promise<any> {
    const request = new CreateBusinessLocationRequest();
    const locationMsg = new BusinessLocation();

    if (location.businessId) locationMsg.setBusinessId(location.businessId);
    if (location.street) locationMsg.setStreet(location.street);
    if (location.city) locationMsg.setCity(location.city);
    if (location.state) locationMsg.setState(location.state);
    if (location.zipCode) locationMsg.setZipCode(location.zipCode);
    if (location.language) locationMsg.setLanguage(location.language);
    if (location.latitude !== undefined)
      locationMsg.setLatitude(location.latitude);
    if (location.longitude !== undefined)
      locationMsg.setLongitude(location.longitude);
    if (location.mapUrl) locationMsg.setMapUrl(location.mapUrl);
    if (location.isPrimary !== undefined)
      locationMsg.setIsPrimary(location.isPrimary);

    request.setBusinessLocation(locationMsg);

    return new Promise((resolve, reject) => {
      this.client.createBusinessLocation(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });
  }

  /**
   * Search business by name (Arabic or English)
   */
  async searchByName(
    name: string,
    isArabic: boolean
  ): Promise<{ found: boolean; business?: any }> {
    const request = new GetBusinessByNameRequest();

    if (isArabic) {
      request.setArName(name);
      request.setEnName("");
    } else {
      request.setEnName(name);
      request.setArName("");
    }

    return new Promise((resolve, reject) => {
      this.client.getBusinessByName(request, {}, (err, response) => {
        if (err) {
          // If not found, return found: false instead of rejecting
          if (err.code === 5 || err.message?.includes("not found")) {
            resolve({ found: false });
          } else {
            reject(err);
          }
        } else {
          const businessData = response.toObject();
          if (businessData.business) {
            resolve({ found: true, business: businessData.business });
          } else {
            resolve({ found: false });
          }
        }
      });
    });
  }
}

// Export types
export interface Business {
  id: string;
  createdBy: string;
  arName: string;
  enName: string;
  arDescription: string;
  enDescription: string;
  address: string;
  phoneNumber: string;
  storageQuota: number;
  email: string;
  categoryId: number;
  isActive: boolean;
}

// Export singleton instance
export const businessService = new BusinessService();
export default businessService;
