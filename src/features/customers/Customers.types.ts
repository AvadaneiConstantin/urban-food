// Types for Customers feature
// - NewCustomerData: data needed to create a new customer
// - Customer: extends NewCustomerData with a unique numeric id

export type NewCustomerData = {
  name: string;
  email: string;
  group: "" | "Retail" | "Individual" | "Partner";
  totalOrders: number;
};

export interface Customer extends NewCustomerData {
  id: number;
}
