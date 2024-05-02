import {
  ListBulletIcon,
  UsersIcon,
  ChartPieIcon
} from "@heroicons/react/24/solid";

export const roles = [
  {
    label: 'Administardor',
    value: 'admin',
  },
  {
    label: 'Administrador de Empresa',
    value: 'admin_company',
  },
  {
    label: 'Usuario',
    value: 'user',
  },

];

export const dashboardRoutes = [
  {
    href: "/dashboard",
    text: "Dashboard",
    icon: ChartPieIcon,
    roles: ["admin",],
  },
  {
    href: "/dashboard/users",
    text: "Users",
    icon: UsersIcon,
    roles: ["admin", "admin_company"],
  },
  {
    href: "/dashboard/empresas",
    text: "Empresas",
    icon: ListBulletIcon,
    roles: ["admin"],
  },
];