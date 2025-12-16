"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import Navigation from "../../../../../components/Navigation";
import { useTranslation } from "../../../../hooks/useTranslation";

export default function CreateBusinessStep1() {
  const router = useRouter();
  const { t } = useTranslation();
  const [locale, setLocale] = useState(
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "ar"
  );

  const [formData, setFormData] = useState({
    arName: "",
    phoneNumber: "",
    email: "",
    tableCount: "",
    categoryId: "",
    keywords: [] as string[],
  });

  const [currentKeyword, setCurrentKeyword] = useState("");

  useEffect(() => {
    // Update locale when URL changes
    const handleRouteChange = () => {
      const newLocale = window.location.pathname.split("/")[1];
      if (newLocale !== locale) {
        setLocale(newLocale);
      }
    };

    // Listen for popstate (browser back/forward) and route changes
    window.addEventListener("popstate", handleRouteChange);

    // Also check on mount and when router changes
    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [router, locale]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await businessFormDB.getFormData();
        if (savedData) {
          setFormData({
            arName: savedData.arName || "",
            phoneNumber: savedData.phoneNumber || "",
            email: savedData.email || "",
            tableCount: savedData.tableCount || "",
            categoryId: savedData.categoryId || "",
            keywords: savedData.keywords || [],
          });
        }
      } catch (error) {
        console.error("Failed to load saved data:", error);
      }
    };
    loadData();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addKeyword = () => {
    if (currentKeyword.trim() && formData.keywords.length < 10) {
      setFormData((prev) => ({
        ...prev,
        keywords: [...prev.keywords, currentKeyword.trim()],
      }));
      setCurrentKeyword("");
    }
  };

  const removeKeyword = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((_, i) => i !== index),
    }));
  };

  const handleNext = async () => {
    if (!formData.arName || !formData.phoneNumber || !formData.categoryId) {
      alert(t("businessForm.validationError"));
      return;
    }

    try {
      await businessFormDB.updateStep(1, formData);
      router.push(`/${locale}/business/create/step2`);
    } catch (error) {
      console.error("Failed to save form data:", error);
      alert(t("businessForm.saveError"));
    }
  };

  return (
    <div
      className="min-h-screen bg-white"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Navigation locale={locale} />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Preview Side */}
          <div
            className={`${locale === "ar" ? "md:order-2" : "md:order-1"}`}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="bg-gray-50 p-8">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {formData.arName || t("businessForm.previewBusinessName")}
                  </h3>
                  <div className="flex items-center justify-center gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {formData.phoneNumber || t("businessForm.previewPhone")}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-500">
                      {t("businessForm.previewEmail")}
                    </span>
                    <p className="text-gray-800">
                      {formData.email || "example@gmail.com"}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">
                      {t("businessForm.previewTableCount")}
                    </span>
                    <p className="text-gray-800">
                      {formData.tableCount ||
                        t("businessForm.tableCountPlaceholder")}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">
                      {t("businessForm.previewCategory")}
                    </span>
                    <p className="text-gray-800">
                      {formData.categoryId === "1"
                        ? t("businessForm.categoryRestaurant")
                        : formData.categoryId === "2"
                          ? t("businessForm.categoryCafe")
                          : formData.categoryId === "3"
                            ? t("businessForm.categoryBakery")
                            : formData.categoryId === "4"
                              ? t("businessForm.categorySweets")
                              : t("businessForm.categoryRestaurant")}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">
                      {t("businessForm.previewKeywords")}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.keywords.length > 0 ? (
                        formData.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {keyword}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400 text-xs">
                          {t("businessForm.keywordsPlaceholder")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Form Side */}
          <div
            className={`${locale === "ar" ? "md:order-1" : "md:order-2"}`}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {t("businessForm.step1Title")}
                </h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("businessForm.step1Subtitle")}
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    {t("businessForm.phoneLabel")}
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+966 123 456 7890"
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5630] focus:border-transparent outline-none ${locale === "ar" ? "text-right" : "text-left"}`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    {t("businessForm.emailLabel")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5630] focus:border-transparent outline-none ${locale === "ar" ? "text-right" : "text-left"}`}
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    {t("businessForm.businessNameLabel")}
                  </label>
                  <input
                    type="text"
                    name="arName"
                    value={formData.arName}
                    onChange={handleInputChange}
                    placeholder=""
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5630] focus:border-transparent outline-none ${locale === "ar" ? "text-right" : "text-left"}`}
                  />
                </div>

                {/* Table Count */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    {t("businessForm.tableCountLabel")}
                  </label>
                  <input
                    type="text"
                    name="tableCount"
                    value={formData.tableCount}
                    onChange={handleInputChange}
                    placeholder={t("businessForm.tableCountPlaceholder")}
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5630] focus:border-transparent outline-none ${locale === "ar" ? "text-right" : "text-left"}`}
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    {t("businessForm.categoryLabel")}
                  </label>
                  <select
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5630] focus:border-transparent outline-none bg-white ${locale === "ar" ? "text-right" : "text-left"}`}
                  >
                    <option value="">
                      {t("businessForm.categoryPlaceholder")}
                    </option>
                    <option value="1">
                      {t("businessForm.categoryRestaurant")}
                    </option>
                    <option value="2">{t("businessForm.categoryCafe")}</option>
                    <option value="3">
                      {t("businessForm.categoryBakery")}
                    </option>
                    <option value="4">
                      {t("businessForm.categorySweets")}
                    </option>
                  </select>
                </div>

                {/* Keywords */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    {t("businessForm.keywordsLabel")}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={currentKeyword}
                      onChange={(e) => setCurrentKeyword(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && (e.preventDefault(), addKeyword())
                      }
                      placeholder={t("businessForm.keywordsPlaceholder")}
                      className={`flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5630] focus:border-transparent outline-none ${locale === "ar" ? "text-right" : "text-left"}`}
                    />
                    <button
                      type="button"
                      onClick={addKeyword}
                      className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      {t("businessForm.addButton")}
                    </button>
                  </div>
                  {formData.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {keyword}
                          <button
                            type="button"
                            onClick={() => removeKeyword(index)}
                            className="text-gray-500 hover:text-red-500"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full py-3 bg-[#FF5630] text-white rounded-lg font-medium hover:bg-[#E64A2B] transition-colors mt-6"
                >
                  {t("businessForm.submitButton")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
