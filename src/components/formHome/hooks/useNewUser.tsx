import { getheaders } from "../../../common/routes";
import { conectBack } from "../../../conection/conection";

interface typesValues {
  email: string;
  password: string;
  userName: string;
  rol?: string;
}
export interface information extends typesValues {
  createRol: string;
}

export const useNewUser = async ({
  email,
  password,
  userName,
  rol,
  createRol,
}: information) => {
  const values: typesValues = { email, password, userName };
  if (createRol) {
    values.rol = rol;
  }
  try {
    await conectBack.post("/user", values, getheaders());
  } catch (error) {
    console.log(error);
    alert("Error creando el usuario");
  }
};
