export const sidebarRoutes = [
  {
    name: "Home",
    children: [
      {
        name: "Dashoard",
        path: "/",
        icon: "dashboard",
      },
      {
        name: "Users",
        path: "/",
        icon: "users",
      },
      {
        name: "Guarantors",
        path: "/home/guarantors",
        icon: "savings",
      },
    ],
  },
  {
    name: "Businesses",
    children: [
      {
        name: "Organisation",
        path: "/home/organisation",
        icon: "settlements",
      },
      {
        name: "Services",
        path: "/services",
        icon: "services",
      },
    ],
  },
  {
    name: "Settings",
    children: [
      {
        name: "Preferences",
        path: "/preferences",
        icon: "preferences",
      },
      {
        name: "Audit Logs",
        path: "/audit-logs",
        icon: "auditLogs",
      },
    ],
  },
];
