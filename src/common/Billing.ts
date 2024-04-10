export interface Address {
  user?: string;
  first_name: string;
  last_name: string;
  company_name?: string;
  region: string;
  street: string;
  city: string;
  province: string;
  zip_code: string;
  phone: string;
  email: string;
  additional_information?: string;
}
