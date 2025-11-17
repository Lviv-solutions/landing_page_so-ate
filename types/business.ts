/**
 * Business type definitions
 */

export interface BusinessKeyWords {
  keywords: string[];
}

export interface BusinessWorkingHours {
  [day: string]: string; // e.g., "monday": "9:00 AM - 5:00 PM"
}

export interface CreateBusinessPayload {
  created_by: string;
  ar_name: string;
  en_name: string;
  ar_description: string;
  en_description: string;
  address: string;
  phone_number: string;
  storage_quota: number;
  key_words: BusinessKeyWords;
  email: string;
  working_hours: BusinessWorkingHours;
  category_id: string;
  is_active: boolean;
}

export interface BusinessServicePayload {
  createdBy: string;
  arName: string;
  enName: string;
  arDescription: string;
  enDescription: string;
  address: string;
  phoneNumber: string;
  storageQuota: number;
  keyWords: BusinessKeyWords;
  email: string;
  workingHours: BusinessWorkingHours;
  categoryId: string;
  isActive: boolean;
}

export interface Business {
  id: string;
  created_by: string;
  ar_name: string;
  en_name: string;
  ar_description: string;
  en_description: string;
  address: string;
  phone_number: string;
  storage_quota: number;
  key_words: BusinessKeyWords;
  email: string;
  working_hours: BusinessWorkingHours;
  category_id: string;
  is_active: boolean;
  verification_status: string;
  verified_at?: string;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
}
