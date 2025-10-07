# Urban Food App

Urban Food is a **React + TypeScript** application for managing customers, orders, food menu, dashboards, and analytics (charts).  
It provides an **admin dashboard** for KPIs and data visualization, and a **user interface** for browsing food products and services.  


## 🌐 Live Demo
[Urban Food App Live](https://urban-food.netlify.app)  


## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**
   
git clone https://github.com/AvadaneiConstantin/urban-food.git
cd urban-food

npm install
npm run dev

📂 Project Structure
```text
src/
├── assets/
│   └── images/
│       ├── bkgUser.png
│       ├── logoUrbanFood.png
│       └── urban3.png
│
├── context/
│   ├── AuthContext.tsx
│   └── useAuthContext.ts
│
├── features/
│   ├── charts/
│   │   └── ChartsPage.tsx
│   │
│   ├── customers/
│   │   ├── AddCustomerForm/
│   │   │   ├── AddCustomerForm.test.tsx
│   │   │   └── AddCustomerForm.tsx
│   │   ├── customersPage/
│   │   │   ├── CustomersPage.tsx
│   │   │   └── CustomersPageMobile.tsx
│   │   ├── Customers.mock.ts
│   │   └── Customers.types.ts
│   │
│   ├── dashboard/
│   │   ├── cards/
│   │   │   ├── dashboardData.ts
│   │   │   ├── DashboardKpi.tsx
│   │   │   └── DashboardCharts.tsx
│   │   ├── UserDashboard.tsx
│   │   ├── AdminDashboard.tsx
│   │   └── DashboardPage.tsx
│   │
│   ├── foodMenu/
│   │   ├── foodMenuData.ts
│   │   └── FoodMenuPage.tsx
│   │
│   ├── orders/
│   │   └── OrdersPage.tsx
│   │
│   └── services/
│       └── ServicesPage.tsx
│
├── hocs/
│   └── components/
│       ├── mainLayout/
│       │   ├── index.tsx
│       │   └── MobileAppbar.tsx
│       ├── ColumnSelector.tsx
│       ├── CompanyLogo.tsx
│       ├── FullScreenImg.tsx
│       └── LoginForm.tsx
│
├── packages/
│   └── firebase/
│       ├── firebase-auth.ts
│       └── firebase-config.ts
│
├── routes/
│   ├── Routing.tsx
│   └── ProtectedRoute.tsx
│
├── App.tsx
├── main.tsx
└── index.css
│   ...



🛠️ Tech Stack

React + TypeScript
Material UI – layout, forms, responsive components  
React Router – routing  
Firebase Auth – authentication  
Chart.js + react-chartjs-2 – analytics visualizations  
Jest + React Testing Library – unit testing  
State – basic useState and context API  


Module Documentation
1. Core

App.tsx – Application entry point. Wraps routes in AuthProvider and BrowserRouter.  
Routing.tsx – Defines routes (public, protected, admin) with MainLayout.  

2. Firebase & Auth

firebase-config.ts – Firebase setup, exports auth, providerGoogle.  
firebase-auth.ts – Functions for login/logout.  
AuthContext.tsx / useAuthContext.ts – Global auth state management.  
ProtectedRoute.tsx – Route protection (auth + optional admin check).  
LoginForm.tsx – Modal login form for users/administrators.  

3. Layout (HOCs)

MainLayout/index.tsx – Root layout with sidebar, AppBar, login/logout, and navigation.  
MobileAppBar.tsx – Mobile top bar with logo and auth/menu buttons.  
CompanyLogo.tsx – Displays brand logo + text.  
ColumnSelector.tsx – Floating panel to select number of grid columns.  
FullScreenImg.tsx – Modal for displaying fullscreen images.  

4. Customers Feature

Customers.types.ts – Type definitions: NewCustomerData, Customer.  
Customers.mock.ts – Mock customer data for testing.  
CustomersPage.tsx – Main customers management page (desktop).  
CustomersPageMobile.tsx – Mobile-friendly customers list.  
AddCustomerForm.tsx – Form for adding a new customer.  
AddCustomerForm.test.tsx – Unit tests for form validation and behavior.  

5. Food Menu

productsData.ts – Static product dataset (name, image, price).
FoodMenuPage.tsx – Displays menu in responsive grid, supports fullscreen view.

6. Dashboard

DashboardPage.tsx – Chooses between AdminDashboard and UserDashboard.  
UserDashboard.tsx – Simple user dashboard (welcome screen).  
AdminDashboard.tsx – KPI cards + charts.  
KpiCard.tsx / KpiGrid.tsx – Reusable UI components for KPIs.  
DashboardCharts.tsx – Line, Bar, Pie charts (orders, sales, registrations, segments).  
dashboardData.ts – Static datasets for charts.  

7. Charts

ChartsPage.tsx – Interactive analytics page with multiple charts (orders, revenue, satisfaction, sales).

8. Services & Orders

ServicesPage.tsx – Placeholder (background image only).  
OrdersPage.tsx – Placeholder (background image only).  


🧪 Testing

Unit tests are written with Jest + React Testing Library.  
Example: AddCustomerForm.test.tsx checks field validation, dropdown behavior, numeric-only inputs, cancel + submit.


🔗 Connections & Data Flow

AuthContext → ProtectedRoute → Routing: Controls access to admin/user pages.
MainLayout → CompanyLogo / LoginForm / MobileAppBar: Provides global layout.
CustomersPage → AddCustomerForm + Customers.mock.ts + Customers.types.ts: Customer CRUD flow.
FoodMenuPage → ColumnSelector + FullScreenImg + productsData.ts: Interactive menu grid.
AdminDashboard → DashboardCharts + KpiGrid/KpiCard + dashboardData.ts: Analytics and KPIs.
ChartsPage: Independent charts view, extendable with API integration.


📌 Notes & Future Improvements

Implement JWT (JSON Web Token) authentication for secure and remove hardcoded credentials.  
Replace mock/static data with API/backend integration.  
Use react-hook-form or Formik for advanced form validation.  
Expand ServicesPage and OrdersPage with real data.




