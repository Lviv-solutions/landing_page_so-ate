import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ReservationManagementSection from "./components/ReservationManagementSection";
import DynamicMenuSection from "./components/DynamicMenuSection";
import SmartWaitlistSection from "./components/SmartWaitlistSection";
import LoyaltyProgramSection from "./components/LoyaltyProgramSection";
import AnalyticsReportsSection from "./components/AnalyticsReportsSection";
import CustomerFeedbackSection from "./components/CustomerFeedbackSection";
import SecurityTrustSection from "./components/SecurityTrustSection";
import FAQSection from "./components/FAQSection";
import TrustedRestaurantsSection from "./components/TrustedRestaurantsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import LocaleLayout from "./components/LocaleLayout";
import ThreeBackground from "./components/ThreeBackground";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <LocaleLayout>
      <div className="min-h-screen relative">
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
        {/*<MobileAppSection />*/}
        {/*<CTASection />*/}
        <FAQSection />
        <Footer />
      </div>
    </LocaleLayout>
  );
}
