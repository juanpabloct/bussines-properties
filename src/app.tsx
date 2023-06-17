import { ContextRolProvider } from "./context/contextRol";
import { Allroutes } from "./pages/AllRoutes";

export const App = () => {
  return (
    <ContextRolProvider>
      <Allroutes />
    </ContextRolProvider>
  );
};
