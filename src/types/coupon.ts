export interface Coupon {
  id: string;
  code: string;
  customerId?: string;
  issueDate: string;
  isRegistered: boolean;
  registrationDate?: string;
  campaignId: string;
  status: 'active' | 'drawn' | 'expired';
}
