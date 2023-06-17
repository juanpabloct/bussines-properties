export const { VITE_TOKEN_MAPBOX, VITE_ROUTE_BACK } = import.meta.env;

enum KeyLocalStorage {
  token = "token",
  userId = "userId",
  role = "role",
}
export const { token, userId, role } = KeyLocalStorage;
