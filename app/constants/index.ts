import { NavItem, Statistic, FooterSection, ContactInfo } from "../types";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

export const STATISTICS: Statistic[] = [
  { value: "500+", label: "مطعم شريك" },
  { value: "10K+", label: "طلب يومي" },
  { value: "95%", label: "رضا العملاء" },
  { value: "24/7", label: "دعم فني" },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "الخدمات",
    links: [
      { label: "إدارة الطلبات", href: "#" },
      { label: "نظام نقاط البيع", href: "#" },
      { label: "التسويق الرقمي", href: "#" },
      { label: "التحليلات", href: "#" },
    ],
  },
  {
    title: "الشركة",
    links: [
      { label: "من نحن", href: "#" },
      { label: "فريق العمل", href: "#" },
      { label: "الوظائف", href: "#" },
      { label: "اتصل بنا", href: "#" },
    ],
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "info@so-eat.com",
  phone: "+966 50 123 4567",
  address: "الرياض، المملكة العربية السعودية",
};

export const COMPANY_INFO = {
  name: "So-Eat",
  description: "An integrated platform for restaurant management and electronic orders",
  copyright: "© 2025 So-Eat. All rights reserved.",
};

export const ABOUT_FEATURES = [
  "خبرة أكثر من 10 سنوات في المجال",
  "فريق عمل متخصص ومحترف",
  "دعم فني على مدار الساعة",
  "حلول مخصصة حسب احتياجاتكم",
];
