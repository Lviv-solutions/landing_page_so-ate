"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LocaleLayout from "../../../../components/LocaleLayout";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { businessFormDB } from "../../../../../lib/businessFormDB";

export default function CreateBusinessStep2() {
  const router = useRouter();
  const locale =
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "ar";

  const [locationData, setLocationData] = useState({
    country: "",
    city: "",
    street: "",
    postalCode: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    // Check if previous step data exists and load location data
    const loadData = async () => {
      try {
        const savedData = await businessFormDB.getFormData();
        if (!savedData || !savedData.arName) {
          router.push(`/${locale}/business/create/step1`);
        } else if (savedData.location) {
          setLocationData(savedData.location);
        }
      } catch (error) {
        console.error("Failed to load form data:", error);
      }
    };
    loadData();
  }, [router, locale]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLocationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = async () => {
    // Validate required fields
    if (!locationData.country || !locationData.city || !locationData.street) {
      alert("الرجاء إكمال جميع الحقول المطلوبة (الدولة، المدينة، الشارع)");
      return;
    }

    try {
      // Save location data to IndexedDB
      await businessFormDB.updateStep(2, { location: locationData });
      router.push(`/${locale}/business/create/step3`);
    } catch (error) {
      console.error("Failed to save location data:", error);
      alert("حدث خطأ أثناء حفظ البيانات. الرجاء المحاولة مرة أخرى.");
    }
  };

  return (
    <LocaleLayout>
      <div className="min-h-screen bg-white">
        <Header />

        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto w-full">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#ED614A] to-[#E6446F] rounded-t-2xl py-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                add location
              </h1>
            </div>

            {/* Main Content Card */}
            <div
              className="bg-white shadow-2xl rounded-b-2xl p-8 md:p-12"
              dir="rtl"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="w-8 h-5 rounded overflow-hidden">
                    <Image
                      src="/image/uk-flag.png"
                      alt="English"
                      width={32}
                      height={20}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">سو - إيت بيزنس</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#ED614A] to-[#E6446F] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="max-w-2xl mx-auto">
                {/* Form */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-2">
                      أضف عنوان مطعمك بدقة
                    </h2>
                    <p className="text-sm text-black leading-relaxed mb-6">
                      عشان العملاء يقدرون يوصلون لك بسهولة، عطنا التفاصيل
                      الصحيحة لموقعك.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <select
                      name="country"
                      value={locationData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right bg-white text-black"
                    >
                      <option value="">الدولة / المنطقة</option>
                      <option value="saudi">المملكة العربية السعودية</option>
                      <option value="uae">الإمارات العربية المتحدة</option>
                      <option value="kuwait">الكويت</option>
                      <option value="qatar">قطر</option>
                      <option value="bahrain">البحرين</option>
                      <option value="oman">عمان</option>
                    </select>

                    <select
                      name="city"
                      value={locationData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right bg-white text-black"
                    >
                      <option value="">البلدية</option>
                      <option value="riyadh">الرياض</option>
                      <option value="jeddah">جدة</option>
                      <option value="dammam">الدمام</option>
                      <option value="mecca">مكة المكرمة</option>
                    </select>

                    <input
                      type="text"
                      name="street"
                      value={locationData.street}
                      onChange={handleInputChange}
                      placeholder="عنوان الشارع"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black"
                    />

                    <input
                      type="text"
                      name="postalCode"
                      value={locationData.postalCode}
                      onChange={handleInputChange}
                      placeholder="الرقم البريدي"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black"
                    />

                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full py-3 rounded-lg font-bold transition-all bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white hover:shadow-lg"
                    >
                      التالي
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </LocaleLayout>
  );
}
