"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LocaleLayout from "../../../components/LocaleLayout";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";

export default function BusinessSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'ar';
  const businessId = searchParams.get('id');

  return (
    <LocaleLayout>
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl mx-auto w-full">
            {/* Main Content Card */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center" dir="rtl">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                تم إنشاء مطعمك بنجاح!
              </h1>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                تهانينا! تم إنشاء حساب مطعمك بنجاح. يمكنك الآن البدء في إضافة المنتجات والعروض وإدارة طلباتك.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => router.push(`/${locale}/business/dashboard`)}
                  className="w-full bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  الذهاب إلى لوحة التحكم
                </button>
                
                <button
                  onClick={() => router.push(`/${locale}/business/${businessId}`)}
                  className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:border-[#ED614A] transition-all"
                >
                  عرض صفحة المطعم
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>ملاحظة:</strong> سيتم مراجعة معلومات مطعمك من قبل فريقنا خلال 24 ساعة. سنرسل لك إشعاراً عند الموافقة.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </LocaleLayout>
  );
}
