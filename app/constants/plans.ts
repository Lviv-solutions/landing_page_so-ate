export type PlanCode = 'free' | 'basic' | 'premium' | 'enterprise';

export interface MembershipPlan {
  code: PlanCode;
  name: string;
  displayName: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  trialDays: number;
  isPopular?: boolean;
  features: string[];
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    code: 'free',
    name: 'Free Plan',
    displayName: 'Free',
    description: 'Essential features to get started',
    priceMonthly: 0.00,
    priceYearly: 0.00,
    trialDays: 0,
    features: ['menu.basic', 'orders.limited']
  },
  {
    code: 'basic',
    name: 'Basic Plan',
    displayName: 'Basic',
    description: 'Essential features for small businesses',
    priceMonthly: 9.99,
    priceYearly: 99.99,
    trialDays: 14,
    features: [
      'menu.max_items.50',
      'menu.max_categories.10',
      'orders.online_ordering',
      'menu.qr_code_generation'
    ]
  },
  {
    code: 'premium',
    name: 'Premium Plan',
    displayName: 'Premium',
    description: 'Advanced features for growing businesses',
    priceMonthly: 29.99,
    priceYearly: 299.99,
    trialDays: 14,
    isPopular: true,
    features: [
      'menu.max_items.200',
      'menu.max_categories.50',
      'menu.custom_branding',
      'orders.online_ordering',
      'orders.delivery_integration',
      'analytics.reports',
      'analytics.custom_reports'
    ]
  },
  {
    code: 'enterprise',
    name: 'Enterprise Plan',
    displayName: 'Enterprise',
    description: 'Full features for large organizations',
    priceMonthly: 99.99,
    priceYearly: 999.99,
    trialDays: 30,
    features: [
      'menu.unlimited',
      'orders.unlimited',
      'analytics.advanced',
      'analytics.export_data',
      'api.access',
      'support.priority'
    ]
  }
];
