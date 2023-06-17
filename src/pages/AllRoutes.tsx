import {
  StrictMode,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { home, login, routes } from "../common/routes";
import { token, userId } from "../../config";
import { conectBack } from "../conection/conection";
import { Loading } from "../components/loading/loading";
import { Navbar } from "../components/Navbar/navbar.component";
import { useContextRol } from "../context/contextRol";
import { SesionResultInterface } from "../interfaces/SessionResult.interface";
export const Allroutes = () => {
  const getRole = useContextRol();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const valueToken = localStorage.getItem(token);
  const user = localStorage.getItem(userId);
  const [loading, setloading] = useState(false);
  const validateToken = useCallback(
    async (redirect?: string) => {
      conectBack
        .post<SesionResultInterface>("/auth/validate", {
          token: valueToken,
          idUser: user,
        })
        .then((res) => {
          getRole.value = res.data.name;
          if (redirect) {
            pathname !== redirect && navigate(redirect);
          }
        })
        .catch((e) => {
          console.log(e);
          pathname !== login && navigate(login);
        });
    },
    [navigate, pathname, user, valueToken, getRole]
  );
  const executeValidation = useCallback(async () => {
    setloading(true);
    const findRoute = routes.find((route) => route.route === pathname);
    if (findRoute && findRoute.validToken) {
      if (pathname !== login && !valueToken) {
        navigate(login);
      } else if (
        valueToken &&
        (findRoute.validToken.valid || findRoute.validToken.redirect)
      ) {
        await validateToken(findRoute.validToken.redirect);
      }
    }
    setloading(false);
  }, [pathname, valueToken, navigate, validateToken]);
  useEffect(() => {
    executeValidation();
  }, [pathname, executeValidation]);
  const RoutesMemo = useMemo(() => {
    return routes.map((route, i) => {
      const { element: Element, route: RouteElement } = route;
      return <Route path={RouteElement} element={<Element />} key={i} />;
    });
  }, []);

  return (
    <>
      <Navbar />
      {!loading ? (
        <Suspense fallback={<Loading />}>
          <StrictMode>
            <Routes>{RoutesMemo}</Routes>
          </StrictMode>
        </Suspense>
      ) : (
        <Loading />
      )}
    </>
  );
};
