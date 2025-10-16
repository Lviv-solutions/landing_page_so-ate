import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
// import FeaturesSection from "../components/FeaturesSection";
// import AboutSection from "../components/AboutSection";
// import StatisticsSection from "../components/StatisticsSection";
import ReservationManagementSection from "../components/ReservationManagementSection";
import DynamicMenuSection from "../components/DynamicMenuSection";
import SmartWaitlistSection from "../components/SmartWaitlistSection";
import LoyaltyProgramSection from "../components/LoyaltyProgramSection";
import AnalyticsReportsSection from "../components/AnalyticsReportsSection";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";
import SecurityTrustSection from "../components/SecurityTrustSection";
import FAQSection from "../components/FAQSection";
import TrustedRestaurantsSection from "../components/TrustedRestaurantsSection";
import PricingSection from "../components/PricingSection";
import MobileAppSection from "../components/MobileAppSection";
// import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import LocaleLayout from "../components/LocaleLayout";
import ThreeBackground from "../components/ThreeBackground";
// import ScrollIndicator from "../components/ScrollIndicator";
import ScrollProgress from "../components/ScrollProgress";
import "../style.css";
export default function LocalePage() {
  return (
    <LocaleLayout>
      <div className="min-h-screen bg-white relative">
        <ThreeBackground />
        <ScrollProgress />
        <Header />
        <HeroSection />
        {/*<ScrollIndicator />*/}
        {/*<FeaturesSection />*/}
        {/*<AboutSection />*/}
        {/*<StatisticsSection />*/}
        <ReservationManagementSection />
        <DynamicMenuSection />
        <SmartWaitlistSection />
        <LoyaltyProgramSection />
        <AnalyticsReportsSection />
        <CustomerFeedbackSection />
        <SecurityTrustSection />
        <TrustedRestaurantsSection />
        <PricingSection />
        {/* <MobileAppSection /> */}
        {/*<CTASection />*/}
        <FAQSection />
        <Footer />
      </div>
    </LocaleLayout>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }];
}
