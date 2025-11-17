"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LocaleLayout from "../../../../components/LocaleLayout";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { businessFormDB } from "../../../../../lib/businessFormDB";

export default function CreateBusinessStep1() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'ar';
  
  const [formData, setFormData] = useState({
    arName: searchParams.get('name') || '',
    enName: '',
    phoneNumber: '',
    email: '',
    categoryId: '',
    businessType: '',
    arDescription: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = async () => {
    try {
      // Store data in IndexedDB
      await businessFormDB.updateStep(1, formData);
      router.push(`/${locale}/business/create/step2`);
    } catch (error) {
      console.error('Failed to save form data:', error);
      alert('حدث خطأ أثناء حفظ البيانات. الرجاء المحاولة مرة أخرى.');
    }
  };

  useEffect(() => {
    // Load existing data from IndexedDB
    const loadData = async () => {
      try {
        const savedData = await businessFormDB.getFormData();
        if (savedData) {
          setFormData({
            arName: savedData.arName || searchParams.get('name') || '',
            enName: savedData.enName || '',
            phoneNumber: savedData.phoneNumber || '',
            email: savedData.email || '',
            categoryId: savedData.categoryId || '',
            businessType: savedData.businessType || '',
            arDescription: savedData.arDescription || '',
          });
        }
      } catch (error) {
        console.error('Failed to load form data:', error);
      }
    };
    loadData();
  }, [searchParams]);

  return (
    <LocaleLayout>
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto w-full">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#ED614A] to-[#E6446F] rounded-t-2xl py-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                add information
              </h1>
            </div>

            {/* Main Content Card */}
            <div className="bg-white shadow-2xl rounded-b-2xl p-8 md:p-12" dir="rtl">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="w-8 h-5 rounded overflow-hidden">
                    <Image src="/image/uk-flag.png" alt="English" width={32} height={20} className="object-cover" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-black">سو - إيت بيزنس</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#ED614A] to-[#E6446F] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Side - Preview/Illustration */}
                <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{formData.arName || 'اسم المطعم'}</h3>
                    <p className="text-sm text-black">معاينة بطاقة المطعم</p>
                  </div>
                  
                  {/* Preview Cards */}
                  <div className="w-full space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 text-sm text-black">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{formData.phoneNumber || 'رقم الهاتف'}</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 text-sm text-black">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{formData.email || 'البريد الإلكتروني'}</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2 text-sm text-black">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <span>{formData.businessType || 'نوع النشاط'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-2">سجل بيانات مطعمك الأساسية</h2>
                    <p className="text-sm text-black leading-relaxed mb-6">
                      قم بإضافة معلومات البيزنس الخاص بك بالتفصيل. صفحة البيزنس الخاص بك لن يتم التحقق من هذه المعلومات من الآخرين، بحيوث بالواقعية عليها سيرسل لك بريد الكتروني يوضح لك تفاصيل ربط البيزنس الخاص بك.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="رقم الهاتف"
                        className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black"
                      />
                      <input
                        type="text"
                        name="arName"
                        value={formData.arName}
                        onChange={handleInputChange}
                        placeholder="البريد الالكتروني"
                        className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black"
                      />
                    </div>

                    <input
                      type="text"
                      name="enName"
                      value={formData.enName}
                      onChange={handleInputChange}
                      placeholder="عنوان بيزنسك الالكتروني (اختياري)"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black"
                    />

                    <select
                      name="categoryId"
                      value={formData.categoryId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black bg-white"
                    >
                      <option value="">عدد الفئات</option>
                      <option value="1">مطعم</option>
                      <option value="2">كافيه</option>
                      <option value="3">حلويات</option>
                    </select>

                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black bg-white"
                    >
                      <option value="">أصنف تصنيف منتجاتك</option>
                      <option value="fast-food">وجبات سريعة</option>
                      <option value="traditional">مأكولات تقليدية</option>
                      <option value="international">مأكولات عالمية</option>
                    </select>

                    <textarea
                      name="arDescription"
                      value={formData.arDescription}
                      onChange={handleInputChange}
                      placeholder="الكلمات المفتاحية"
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black resize-none"
                    />

                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                    >
                      إستمرار
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
