// Common types for the So-Eat application

export interface Service {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}
