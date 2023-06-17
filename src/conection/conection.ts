import axios from "axios";
import { VITE_ROUTE_BACK } from "../../config";

export const conectBack = axios.create({
  baseURL: VITE_ROUTE_BACK,
});
