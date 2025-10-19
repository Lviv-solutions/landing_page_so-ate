"use client";
import LocaleLayout from "../../components/LocaleLayout";
import Header from "../../components/Header";
// import MobileAppSection from "../../components/MobileAppSection";
import Footer from "../../components/Footer";
import ClientHeroSection from "../../components/ClientHeroSection";
// import SmartPaymentSection from "../../components/SmartPaymentSection";
import BookingStepsSection from "../../components/BookingStepsSection";
import InteractiveMenuSection from "../../components/InteractiveMenuSection";
import EnjoyMakeFriendsSection from "../../components/EnjoyMakeFriendsSection";
import ExperienceSection from "../../components/ExperienceSection";
import RecommendationsSection from "../../components/RecommendationsSection";
import ElectronicInvitationsSection from "../../components/ElectronicInvitationsSection";

export default function ClientPage() {
//   const { t } = useTranslation();

  return (
    <LocaleLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#f9f8f3] via-[#f5f5f0] to-[#f0f0eb]">
        <Header />

        <ClientHeroSection/>
        {/* <SmartPaymentSection/> */}
        <BookingStepsSection/>
        <InteractiveMenuSection/>
        <EnjoyMakeFriendsSection/>
        <ExperienceSection/>
        <RecommendationsSection/>
        <ElectronicInvitationsSection/>
        
        <Footer />
      </div>
    </LocaleLayout>
  );
}
