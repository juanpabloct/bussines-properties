import { conectBack } from "../../conection/conection";
import { SesionResultInterface } from "../../interfaces/SessionResult.interface";
import { token, userId } from "../../../config";
import { Link, useNavigate } from "react-router-dom";
import { getheaders, home, register } from "../../common/routes";
import { useContextRol } from "../../context/contextRol";
import { FormUser } from "../register/register.component";
import { information } from "./hooks/useNewUser";

export const LoginForm = () => {
  const navigate = useNavigate();

  const action = async (value: information) => {
    const { createRol: data, ...allValues } = value;
    data;
    try {
      const { data } = await conectBack.post<SesionResultInterface>(
        "/auth",
        allValues,
        {
          ...getheaders(),
        }
      );
      localStorage.setItem(token, data.token);
      localStorage.setItem(userId, data.userId.toString());
      navigate(home);
    } catch {
      alert("Credenciales invalidas");
    }
  };
  return (
    <div className="">
      <FormUser
        title="Login User"
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
