import { ReactNode } from "react";

export interface InputInterface {
  type?: "text" | "password" | "email";
  label: string;
  icon?: ReactNode;
  value: string;
  action: (valor: string) => void;
}
