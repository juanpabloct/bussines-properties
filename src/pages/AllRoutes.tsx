import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
const LoginPage = lazy(() => import("./login.page"));
// eslint-disable-next-line react-refresh/only-export-components
const HomePage = lazy(() => import("./map.page"));
export const AllRoutes = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/map" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};
