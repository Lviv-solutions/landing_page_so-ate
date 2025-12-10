"use client";
import { useState } from "react";
import LocaleLayout from "../../../components/LocaleLayout";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import businessService from "../../../../services/businessService";

export default function SearchBusinessPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [foundBusiness, setFoundBusiness] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setError("الرجاء إدخال اسم البراند");
      return;
    }

    setLoading(true);
    setError("");
    setNotFound(false);
    setFoundBusiness(null);

    try {
      const response = await businessService.getBusinessByBrandName(searchQuery);
      
      if (response.business) {
        setFoundBusiness(response.business);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } catch (err: any) {
      console.error('Error searching business:', err);
      // If business not found, show the create option
      if (err.code === 5 || err.message?.includes('not found')) {
        setNotFound(true);
      } else {
        setError("حدث خطأ أثناء البحث. الرجاء المحاولة مرة أخرى.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocaleLayout>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Search For Business Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto w-full">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#ED614A] to-[#E6446F] rounded-t-2xl py-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Search For Business
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

              {/* Illustration and Content */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                {/* Left Side - Illustration */}
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Question Mark Icon */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFE5E0] rounded-full flex items-center justify-center text-3xl text-[#ED614A] z-10">
                      ?
                    </div>
                    
                    {/* Main Illustration */}
                    <div className="relative">
                      {/* Character */}
                      <div className="text-center">
                        <div className="inline-block relative">
                          {/* Head */}
                          <div className="w-20 h-20 bg-[#F5D5C8] rounded-full mx-auto mb-2 relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-3 h-3 bg-[#8B5E3C] rounded-full"></div>
                            </div>
                          </div>
                          
                          {/* Headwear */}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white rounded-t-full border-b-2 border-gray-200"></div>
                          
                          {/* Body */}
                          <div className="w-32 h-40 bg-white rounded-t-full mx-auto relative">
                            {/* Phone in hand */}
                            <div className="absolute top-12 right-4 w-8 h-12 bg-gray-800 rounded-lg"></div>
                          </div>
                          
                          {/* Laptop */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-300 rounded-t-lg"></div>
                        </div>
                      </div>
                      
                      {/* Box Icon */}
                      <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#ED614A] opacity-30 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Text Content */}
                <div className="text-right space-y-4">
                  <div className="inline-block bg-[#FFE5E0] px-4 py-2 rounded-full">
                    <p className="text-sm text-black">
                      باقي على سو ايت بيزنس 23 يوم
                      <br />
                      تقدر تجدد الحين
                    </p>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-black leading-relaxed">
                    من الأفضل أن يكون برانك موجوداً
                    <br />
                    بالفعل على سو ايت. 
                    <span className="text-[#ED614A]"> ابحث عنه الآن</span>
                  </h2>

                  <p className="text-black leading-relaxed">
                    ابحث عن البراند أو إذا كنت تريد إضافة براند جديد، يمكنك إضافة اسم البراند
                    من خلال البحث في مستندات So-Eat حيث أنه
                  </p>

                  {/* Search Form */}
                  <form onSubmit={handleSearch} className="flex gap-3 mt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "جاري البحث..." : "ابحث"}
                    </button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setError("");
                        }}
                        placeholder="ابحث عن البراند..."
                        disabled={loading}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black disabled:bg-gray-50"
                      />
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </form>

                  {/* Error Message */}
                  {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-right">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Found Business */}
                  {foundBusiness && (
                    <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="flex-1 text-right mr-4">
                          <h3 className="text-xl font-bold text-black mb-2">
                            {foundBusiness.arName || foundBusiness.enName}
                          </h3>
                          {foundBusiness.arName && foundBusiness.enName && (
                            <p className="text-black mb-2">{foundBusiness.enName}</p>
                          )}
                          {foundBusiness.arDescription && (
                            <p className="text-black text-sm mb-3">{foundBusiness.arDescription}</p>
                          )}
                          <div className="space-y-2 text-sm">
                            {foundBusiness.address && (
                              <div className="flex items-center justify-end gap-2">
                                <span className="text-black">{foundBusiness.address}</span>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                            )}
                            {foundBusiness.phoneNumber && (
                              <div className="flex items-center justify-end gap-2">
                                <span className="text-black">{foundBusiness.phoneNumber}</span>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                              </div>
                            )}
                            {foundBusiness.email && (
                              <div className="flex items-center justify-end gap-2">
                                <span className="text-black">{foundBusiness.email}</span>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="mt-4 flex gap-3 justify-end">
                            <button
                              type="button"
                              className="bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all"
                            >
                              عرض التفاصيل
                            </button>
                            <button
                              type="button"
                              className="bg-white border-2 border-gray-300 text-black px-6 py-2 rounded-lg font-bold hover:border-[#ED614A] transition-all"
                            >
                              تعديل
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Add Restaurant Option - Shows after search */}
                  {notFound && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => window.location.href = `/${window.location.pathname.split('/')[1]}/business/create/step1?name=${encodeURIComponent(searchQuery)}`}
                          className="bg-white border-2 border-gray-300 text-black px-6 py-3 rounded-lg font-bold hover:border-[#ED614A] transition-all"
                        >
                          انشاء
                        </button>
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="اضف اسم البراند..."
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-right text-black"
                          />
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#ED614A] to-[#E6446F] rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-black mt-2">اضف البراند</p>
                    </div>
                  )}
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
