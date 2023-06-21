export interface SesionResultInterface {
  id: number;
  userId: number;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface validateSesionInterface {
  id: number;
  userName: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
}
