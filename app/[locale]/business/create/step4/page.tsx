"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import LocaleLayout from "../../../../components/LocaleLayout";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import businessService from "../../../../../services/businessService";
import { businessFormDB } from "../../../../../lib/businessFormDB";
import { getCurrentUserId } from "../../../../../lib/auth";

export default function CreateBusinessStep4() {
  const router = useRouter();
  const locale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'ar';
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Check if previous step data exists and load phone number
    const loadData = async () => {
      try {
        const savedData = await businessFormDB.getFormData();
        if (!savedData || !savedData.arName) {
          router.push(`/${locale}/business/create/step1`);
        } else {
          setPhoneNumber(savedData.phoneNumber || '');
        }
      } catch (error) {
        console.error('Failed to load form data:', error);
      }
    };
    loadData();
  }, [router, locale]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOtp = () => {
    // Logic to resend OTP
    console.log('Resending OTP to:', phoneNumber);
  };

  const handleSubmit = async () => {
    const otpCode = otp.join('');
    
    if (otpCode.length !== 6) {
      setError('الرجاء إدخال رمز التحقق كاملاً');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // TODO: Verify OTP with backend
      // For now, we'll skip OTP verification and proceed to business creation
      // In production, you should verify the OTP first:
      // const otpResponse = await authService.verifyOTP(phoneNumber, otpCode);
      // if (!otpResponse.valid) {
      //   setError('رمز التحقق غير صحيح');
      //   setLoading(false);
      //   return;
      // }
      
      // Get all form data from IndexedDB
      const savedData = await businessFormDB.getFormData();
      
      if (!savedData) {
        setError('لم يتم العثور على بيانات النموذج. الرجاء البدء من جديد.');
        setLoading(false);
        return;
      }
      
      // Prepare keywords from description
      const keywords = savedData.arDescription 
        ? savedData.arDescription.split(/[\s,،]+/).filter(word => word.length > 2).slice(0, 10)
        : [];

      // Prepare working hours from schedule
      const workingHours: { [key: string]: string } = {};
      if (savedData.schedule) {
        Object.entries(savedData.schedule).forEach(([day, schedule]) => {
          if (schedule.isOpen) {
            workingHours[day] = `${schedule.from} - ${schedule.to}`;
          }
        });
      }

      // Prepare business data for API matching the expected payload structure
      const businessData = {
        createdBy: getCurrentUserId(), // Gets or generates a valid UUID
        arName: savedData.arName,
        enName: savedData.enName || savedData.arName, // Fallback to Arabic name if English not provided
        arDescription: savedData.arDescription,
        enDescription: savedData.arDescription, // Can be translated later
        address: savedData.location ? 
          `${savedData.location.street}, ${savedData.location.city}, ${savedData.location.country}` : '',
        phoneNumber: savedData.phoneNumber,
        storageQuota: 100000, // 100KB default
        keyWords: {
          keywords: keywords
        },
        email: savedData.email,
        workingHours: workingHours,
        categoryId: 1, // Default Restaurant category
        isActive: true,
      };

      // Create business
      const response = await businessService.createBusiness(businessData);
      const businessId = response.businessid;

      // Create business location if location data exists
      if (savedData.location && businessId) {
        const locationData = {
          businessId: businessId,
          street: savedData.location.street || '',
          city: savedData.location.city || '',
          state: savedData.location.country || '', // Using country as state
          zipCode: savedData.location.postalCode || '',
          language: 'ar',
          latitude: parseFloat(savedData.location.latitude) || 0,
          longitude: parseFloat(savedData.location.longitude) || 0,
          mapUrl: '',
          isPrimary: true,
        };

        try {
          await businessService.createBusinessLocation(locationData);
        } catch (locationErr) {
          console.error('Error creating business location:', locationErr);
          // Continue even if location creation fails
        }
      }
      
      // Clear IndexedDB after successful creation
      await businessFormDB.clearFormData();
      
      // Redirect to success page or business dashboard
      router.push(`/${locale}/business/success?id=${businessId}`);
      
    } catch (err: any) {
      console.error('Error creating business:', err);
      console.error('Error details:', err.message, err.code, err.metadata);
      setError(`حدث خطأ أثناء إنشاء المطعم: ${err.message || 'خطأ غير معروف'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocaleLayout>
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl mx-auto w-full">
            {/* Main Content Card */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12" dir="rtl">
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

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Phone Icon */}
                    <div className="w-24 h-24 bg-gradient-to-br from-[#ED614A] to-[#E6446F] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    {/* Lock Badge */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-[#ED614A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-black mb-2">
                  أدخل الكود المرسل إلى {phoneNumber || '7890 456 123'}
                </h2>
                <p className="text-sm text-black mb-8">
                  لقد أرسلنا لك رسالة نصية تحتوي على رمز تحقق مكون من 6 أرقام<br />
                  أدخله أدناه للتحقق من رقم هاتفك.
                </p>

                {/* OTP Input */}
                <div className="flex justify-center gap-2 mb-6" dir="ltr">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { inputRefs.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#ED614A] focus:outline-none transition-all text-black"
                    />
                  ))}
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                {/* Resend Link */}
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-[#ED614A] text-sm font-medium hover:underline"
                  >
                    لم يصل بعد؟ <span className="font-bold">إعادة إرسال الكود</span>
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading || otp.some(d => !d)}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    loading || otp.some(d => !d)
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white hover:shadow-lg'
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري التحقق...
                    </div>
                  ) : (
                    'تأكيد'
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </LocaleLayout>
  );
}
