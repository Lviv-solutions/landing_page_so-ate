"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LocaleLayout from "../../../../components/LocaleLayout";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import { businessFormDB } from "../../../../../lib/businessFormDB";

interface DaySchedule {
  isOpen: boolean;
  from: string;
  to: string;
}

interface WeekSchedule {
  [key: string]: DaySchedule;
}

export default function CreateBusinessStep3() {
  const router = useRouter();
  const locale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'ar';
  
  const [schedule, setSchedule] = useState<WeekSchedule>({
    saturday: { isOpen: true, from: '09:00', to: '23:00' },
    sunday: { isOpen: true, from: '09:00', to: '23:00' },
    monday: { isOpen: true, from: '09:00', to: '23:00' },
    tuesday: { isOpen: true, from: '09:00', to: '23:00' },
    wednesday: { isOpen: true, from: '09:00', to: '23:00' },
    thursday: { isOpen: true, from: '09:00', to: '23:00' },
    friday: { isOpen: false, from: '09:00', to: '23:00' },
  });

  const [alwaysOpen, setAlwaysOpen] = useState(false);

  const dayNames: { [key: string]: string } = {
    saturday: 'السبت',
    sunday: 'الأحد',
    monday: 'الإثنين',
    tuesday: 'الثلاثاء',
    wednesday: 'الأربعاء',
    thursday: 'الخميس',
    friday: 'الجمعة',
  };

  useEffect(() => {
    // Check if previous step data exists and load schedule data
    const loadData = async () => {
      try {
        const savedData = await businessFormDB.getFormData();
        if (!savedData || !savedData.arName) {
          router.push(`/${locale}/business/create/step1`);
        } else {
          if (savedData.schedule) {
            setSchedule(savedData.schedule);
          }
          if (savedData.alwaysOpen !== undefined) {
            setAlwaysOpen(savedData.alwaysOpen);
          }
        }
      } catch (error) {
        console.error('Failed to load form data:', error);
      }
    };
    loadData();
  }, [router, locale]);

  const handleDayToggle = (day: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        isOpen: !prev[day].isOpen
      }
    }));
  };

  const handleTimeChange = (day: string, field: 'from' | 'to', value: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value
      }
    }));
  };

  const handleNext = async () => {
    try {
      // Save schedule data to IndexedDB
      await businessFormDB.updateStep(3, {
        schedule: schedule,
        alwaysOpen: alwaysOpen
      });
      router.push(`/${locale}/business/create/step4`);
    } catch (error) {
      console.error('Failed to save schedule data:', error);
      alert('حدث خطأ أثناء حفظ البيانات. الرجاء المحاولة مرة أخرى.');
    }
  };

  return (
    <LocaleLayout>
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto w-full">
            {/* Header Banner - Removed as per image */}
            
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

              {/* Form Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Side - Illustration */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    {/* Illustration */}
                    <svg viewBox="0 0 300 300" className="w-full h-auto">
                      {/* Background elements */}
                      <circle cx="80" cy="80" r="15" fill="#FED7AA" opacity="0.6" />
                      <circle cx="220" cy="100" r="15" fill="#FED7AA" opacity="0.6" />
                      
                      {/* Man figure */}
                      <g transform="translate(100, 120)">
                        {/* Head */}
                        <circle cx="0" cy="0" r="25" fill="#F3E8D7" />
                        {/* Beard */}
                        <path d="M-15 5 Q-15 25, 0 30 Q15 25, 15 5" fill="#8B4513" />
                        {/* Body */}
                        <rect x="-30" y="30" width="60" height="80" rx="10" fill="#DC2626" />
                        {/* Arms */}
                        <rect x="-45" y="40" width="15" height="50" rx="7" fill="#DC2626" />
                        <rect x="30" y="40" width="15" height="50" rx="7" fill="#DC2626" />
                        {/* Legs */}
                        <rect x="-25" y="110" width="20" height="50" rx="10" fill="#1F2937" />
                        <rect x="5" y="110" width="20" height="50" rx="10" fill="#1F2937" />
                      </g>
                      
                      {/* Woman figure */}
                      <g transform="translate(200, 120)">
                        {/* Head with hijab */}
                        <ellipse cx="0" cy="0" rx="30" ry="35" fill="#F3E8D7" />
                        <path d="M-30 -10 Q-30 -40, 0 -40 Q30 -40, 30 -10 L30 20 Q30 30, 0 30 Q-30 30, -30 20 Z" fill="#1F2937" />
                        {/* Face */}
                        <circle cx="0" cy="5" r="20" fill="#F3E8D7" />
                        {/* Body */}
                        <path d="M-35 40 L-35 120 Q-35 130, -25 130 L25 130 Q35 130, 35 120 L35 40 Z" fill="#059669" />
                        {/* Arms */}
                        <rect x="-50" y="50" width="15" height="50" rx="7" fill="#059669" />
                        <rect x="35" y="50" width="15" height="50" rx="7" fill="#059669" />
                      </g>
                      
                      {/* Wine bottle and glass */}
                      <g transform="translate(150, 80)">
                        <rect x="0" y="0" width="8" height="30" rx="1" fill="#7C2D12" />
                        <rect x="-2" y="-5" width="12" height="5" rx="1" fill="#7C2D12" />
                        <ellipse cx="20" cy="15" rx="8" ry="12" fill="#DC2626" opacity="0.3" />
                        <path d="M12 20 L12 25 L28 25 L28 20" fill="none" stroke="#DC2626" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-2">حدد أوقات عمل مطعمك</h2>
                    <p className="text-sm text-black leading-relaxed mb-6">
                      حل عملائك يعرفون متى تفتح ومتى تكون مشغول او مقفل.
                    </p>
                  </div>

                  {/* Days Tabs */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    {Object.keys(schedule).map((day) => (
                      <button
                        key={day}
                        onClick={() => handleDayToggle(day)}
                        className={`px-4 py-2 rounded-lg font-bold whitespace-nowrap transition-all ${
                          schedule[day].isOpen
                            ? 'bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white'
                            : 'bg-gray-200 text-black'
                        }`}
                      >
                        {dayNames[day]}
                      </button>
                    ))}
                  </div>

                  {/* Always Open Toggle */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
                    <span className="text-black font-medium">يوم عمل</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={alwaysOpen}
                        onChange={(e) => setAlwaysOpen(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#ED614A] peer-checked:to-[#E6446F]"></div>
                    </label>
                  </div>

                  {/* Time Selection */}
                  <div className="space-y-3">
                    {Object.entries(schedule).filter(([_, day]) => day.isOpen).map(([dayKey, day]) => (
                      <div key={dayKey} className="flex items-center gap-3">
                        <span className="text-sm font-medium text-black w-20">{dayNames[dayKey]}</span>
                        <div className="flex-1 flex items-center gap-2">
                          <select
                            value={day.to}
                            onChange={(e) => handleTimeChange(dayKey, 'to', e.target.value)}
                            className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-center bg-white"
                          >
                            {Array.from({ length: 24 }, (_, i) => {
                              const hour = i.toString().padStart(2, '0');
                              return (
                                <option key={hour} value={`${hour}:00`}>
                                  {hour}:00
                                </option>
                              );
                            })}
                          </select>
                          <span className="text-black">إلى</span>
                          <select
                            value={day.from}
                            onChange={(e) => handleTimeChange(dayKey, 'from', e.target.value)}
                            className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#ED614A] focus:outline-none text-center bg-white"
                          >
                            {Array.from({ length: 24 }, (_, i) => {
                              const hour = i.toString().padStart(2, '0');
                              return (
                                <option key={hour} value={`${hour}:00`}>
                                  {hour}:00
                                </option>
                              );
                            })}
                          </select>
                          <span className="text-black">من</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Break Time */}
                  <button
                    type="button"
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-[#ED614A] font-medium hover:border-[#ED614A] transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    إضافة فترة
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                  >
                    التالي
                  </button>
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
