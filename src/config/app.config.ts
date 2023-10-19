interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read car information', 'Create bookings', 'Create reviews', 'Create reports'],
  ownerAbilities: [
    'Manage company information',
    'Manage cars in the company',
    'View bookings of cars',
    'View reviews of cars',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/516863b2-a050-4a1c-8bea-47f893924141',
};
