"use client";
import { useState, useEffect } from "react";
import { businessFormDB, type BusinessFormData } from "../../lib/businessFormDB";

/**
 * Hook that guards business creation steps by checking if prior form data exists.
 * Redirects to step1 if required data (arName) is missing.
 * Returns the saved form data once loaded.
 */
export function useBusinessFormGuard(locale: string, router: ReturnType<typeof import("next/navigation").useRouter>) {
  const [savedData, setSavedData] = useState<BusinessFormData | null>(null);
  const [isGuardLoading, setIsGuardLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await businessFormDB.getFormData();
        if (!data || !data.arName) {
          router.push(`/${locale}/business/create/step1`);
          return;
        }
        setSavedData(data);
      } catch (error) {
        console.error("Failed to load form data:", error);
      } finally {
        setIsGuardLoading(false);
      }
    };
    loadData();
  }, [router, locale]);

  return { savedData, isGuardLoading };
}
