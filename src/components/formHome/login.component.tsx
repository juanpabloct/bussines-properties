import { conectBack } from "../../conection/conection";
import { SesionResultInterface } from "../../interfaces/SessionResult.interface";
import { token, userId } from "../../../config";
import { Link, useNavigate } from "react-router-dom";
import { home, register } from "../../common/routes";
import { useContextRol } from "../../context/contextRol";
import { FormUser } from "../register/register.component";
import { information } from "./hooks/useNewUser";

export const LoginForm = () => {
  const navigate = useNavigate();

  const rol = useContextRol();
  const action = async (value: information) => {
    const { createRol: data, ...allValues } = value;
    try {
      const { data } = await conectBack.post<SesionResultInterface>(
        "/auth",
        allValues
      );
      localStorage.setItem(token, data.token);
      localStorage.setItem(userId, data.id.toString());
      rol.value = data.name;
      navigate(home);
    } catch {
      alert("Credenciales invalidas");
    }
  };
  return (
    <div className="">
      <FormUser
        action={(data: information) => action(data)}
        redirect={
          <Link className="w-full text-right text-blue-400" to={register}>
            Register User
          </Link>
        }
      />
    </div>
  );
};
