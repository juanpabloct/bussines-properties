import axios from "axios";
import { VITE_ROUTE_BACK, token } from "../../config";
const tokenValue = localStorage.getItem(token);
export const conectBack = axios.create({
  baseURL: VITE_ROUTE_BACK,
});
