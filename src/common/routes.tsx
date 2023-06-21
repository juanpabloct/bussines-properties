import { lazy } from "react";
import { Loading } from "../components/loading/loading";
import { token } from "../../config";

// eslint-disable-next-line react-refresh/only-export-components
const LoginPage = lazy(() => import("../pages/login.page"));
// eslint-disable-next-line react-refresh/only-export-components
const HomePage = lazy(() => import("../pages/map.page"));
// eslint-disable-next-line react-refresh/only-export-components
const RegisterForm = lazy(() => import("../pages/register.pages"));
// eslint-disable-next-line react-refresh/only-export-components
const AdminRegister = lazy(() => import("../pages/registerAdmin.pages"));
enum allRoute {
  login = "/",
  home = "/map",
  register = "/register",
  adminRegister = "/adminRegister",
  error = "*",
}
export const { home, error, login, register, adminRegister } = allRoute;
export const routes = [
  {
    route: home,
    validToken: { valid: true },
    element: HomePage,
  },
  {
    validToken: { redirect: home },
    route: login,
    element: LoginPage,
  },
  {
    validToken: { valid: true },
    route: adminRegister,
    element: AdminRegister,
  },
  {
    route: register,
    element: RegisterForm,
    validToken: { valid: true },
  },
  { route: error, element: Loading },
];
export const getheaders = () => {
  return {
    headers: {
      Authorization: localStorage.getItem(token),
    },
  };
};
