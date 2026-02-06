export interface IBillingFrequency {
  value: string;
  label: string;
  priceSuffix: string;
}

export const BillingFrequency: IBillingFrequency[] = [
  { value: 'month', label: 'Mensual', priceSuffix: '/mes' },
  { value: 'year', label: 'Anual', priceSuffix: '/año' },
];
