import { ReactNode, createContext, useContext } from "react";
import { signal } from "@preact/signals-react";
const rol = signal("");
const contextRol = createContext(rol);
export const ContextRolProvider = ({ children }: { children: ReactNode }) => {
  return <contextRol.Provider value={rol}>{children}</contextRol.Provider>;
};

export const useContextRol = () => useContext(contextRol);
