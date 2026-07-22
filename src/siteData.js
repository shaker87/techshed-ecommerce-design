import {
  benefits,
  bestSellers,
  brands,
  categories,
  featureCards,
  paymentMethods,
  saleProducts,
} from "./assets";

export const shopLinks = [
  "Shop All",
  "Computers",
  "Tablets",
  "Drones & Cameras",
  "Audio",
  "Mobile",
  "TV & Home Cinema",
  "Wearable Tech",
  "Sale",
];

export const footerColumns = [
  {
    title: "Store Location",
    items: [
      "500 Terry Francois Street",
      "San Francisco, CA 94158",
      "info@mysite.com",
      "123-456-7890",
    ],
  },
  { title: "Shop", items: shopLinks },
  {
    title: "Customer Support",
    items: ["Contact Us", "Help Center", "About Us", "Careers"],
  },
  {
    title: "Policy",
    items: ["Shipping & Returns", "Terms & Conditions", "Payment Methods", "FAQ"],
  },
];

export const homeContent = {
  benefits,
  bestSellers,
  brands,
  categories,
  featureCards,
  paymentMethods,
  saleProducts,
};

export const adminStats = [
  { label: "Total Orders", value: "1,248", trend: "+12%" },
  { label: "Revenue", value: "$42,890", trend: "+8.2%" },
  { label: "Products", value: "386", trend: "+24" },
  { label: "Pending Reviews", value: "17", trend: "-3" },
];

export const customerStats = [
  { label: "Open Orders", value: "3", note: "1 arriving tomorrow" },
  { label: "Wishlist Items", value: "14", note: "5 on sale now" },
  { label: "Reward Points", value: "2,430", note: "Worth $24.30" },
  { label: "Saved Addresses", value: "2", note: "Home and Office" },
];

export const adminTasks = [
  "Review new orders and pending refunds",
  "Update featured products on the homepage",
  "Manage user roles for support staff",
  "Track revenue performance by category",
];

export const customerTasks = [
  "Track active orders and shipping progress",
  "Manage saved addresses and payment methods",
  "Review wishlist deals and recommended products",
  "Download invoices and order history",
];

export const adminSidebarItems = [
  { label: "Overview", to: "/admin", icon: "home" },
  { label: "Orders", to: "/admin", icon: "orders" },
  { label: "Products", to: "/admin", icon: "products" },
  { label: "Customers", to: "/admin", icon: "customers" },
  { label: "Reports", to: "/admin", icon: "reports" },
  { label: "Settings", to: "/admin", icon: "settings" },
];

export const customerSidebarItems = [
  { label: "Overview", to: "/customer", icon: "home" },
  { label: "My Orders", to: "/customer", icon: "shopping" },
  { label: "Wishlist", to: "/customer", icon: "wishlist" },
  { label: "Addresses", to: "/customer", icon: "addresses" },
  { label: "Payments", to: "/customer", icon: "payments" },
  { label: "Account", to: "/customer", icon: "account" },
];
