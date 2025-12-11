/**
 * IndexedDB utility for managing business form state
 * Provides persistent storage for multi-step business creation form
 */

const DB_NAME = "BusinessFormDB";
const DB_VERSION = 1;
const STORE_NAME = "businessForms";

export interface BusinessFormData {
  id: string;
  arName: string;
  enName: string;
  phoneNumber: string;
  email: string;
  categoryId: string;
  businessType: string;
  arDescription: string;
  tableCount?: string;
  keywords?: string[];
  location?: {
    country: string;
    city: string;
    street: string;
    postalCode: string;
    latitude: string;
    longitude: string;
  };
  schedule?: {
    [key: string]: {
      isOpen: boolean;
      from: string;
      to: string;
    };
  };
  alwaysOpen?: boolean;
  currentStep: number;
  createdAt: number;
  updatedAt: number;
}

class BusinessFormDB {
  private dbPromise: Promise<IDBDatabase> | null = null;

  /**
   * Initialize and open the database
   */
  private openDB(): Promise<IDBDatabase> {
    if (this.dbPromise) {
      return this.dbPromise;
    }

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === "undefined") {
        reject(new Error("IndexedDB is not available in this environment"));
        return;
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        reject(new Error("Failed to open database"));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create object store if it doesn't exist
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const objectStore = db.createObjectStore(STORE_NAME, {
            keyPath: "id",
          });
          objectStore.createIndex("phoneNumber", "phoneNumber", {
            unique: false,
          });
          objectStore.createIndex("createdAt", "createdAt", { unique: false });
        }
      };
    });

    return this.dbPromise;
  }

  /**
   * Save or update business form data
   */
  async saveFormData(data: Partial<BusinessFormData>): Promise<void> {
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);

      // Get existing data if any
      const getRequest = store.get("current");

      getRequest.onsuccess = () => {
        const existingData = getRequest.result || {
          id: "current",
          createdAt: Date.now(),
        };

        const updatedData: BusinessFormData = {
          ...existingData,
          ...data,
          updatedAt: Date.now(),
        };

        const putRequest = store.put(updatedData);

        putRequest.onsuccess = () => {
          resolve();
        };

        putRequest.onerror = () => {
          reject(new Error("Failed to save form data"));
        };
      };

      getRequest.onerror = () => {
        reject(new Error("Failed to retrieve existing form data"));
      };
    });
  }

  /**
   * Get current business form data
   */
  async getFormData(): Promise<BusinessFormData | null> {
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get("current");

      request.onsuccess = () => {
        resolve(request.result || null);
      };

      request.onerror = () => {
        reject(new Error("Failed to retrieve form data"));
      };
    });
  }

  /**
   * Clear current form data (after successful submission)
   */
  async clearFormData(): Promise<void> {
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete("current");

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(new Error("Failed to clear form data"));
      };
    });
  }

  /**
   * Get all saved forms (for debugging or recovery)
   */
  async getAllForms(): Promise<BusinessFormData[]> {
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(new Error("Failed to retrieve all forms"));
      };
    });
  }

  /**
   * Update specific step data
   */
  async updateStep(
    stepNumber: number,
    stepData: Partial<BusinessFormData>
  ): Promise<void> {
    await this.saveFormData({
      ...stepData,
      currentStep: stepNumber,
    });
  }
}

// Export singleton instance
export const businessFormDB = new BusinessFormDB();
export default businessFormDB;
