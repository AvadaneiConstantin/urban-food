// src/types/Customers.ts
export type NewCustomerData = {
  name: string;
  email: string;
  group: "" | "Retail" | "Individual" | "Partner";
  totalOrders: number;
};

export interface Customer extends NewCustomerData {
  id: number; // obligatoriu pentru un customer complet
}
