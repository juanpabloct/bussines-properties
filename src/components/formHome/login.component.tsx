import { useState } from "react";
import { Flex, Input } from "../tw-component";
import { InputComponent } from "./InputComponent";
import { InputPasword } from "./inputPassword.component";
import { conectBack } from "../../conection/conection";
import { SesionResultInterface } from "../../interfaces/SessionResult.interface";
import { role, token, userId } from "../../../config";
import { Link, useNavigate } from "react-router-dom";
import { home, register } from "../../common/routes";
import { useContextRol } from "../../context/contextRol";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const rol = useContextRol();
  const action = async () => {
    const values = { email, password, userName: user };
    try {
      const { data } = await conectBack.post<SesionResultInterface>(
        "/auth",
        values
      );
      localStorage.setItem(token, data.token);
      localStorage.setItem(userId, data.id.toString());
      localStorage.setItem(role, data.name);
      rol.value = data.name;
      navigate(home);
    } catch (error) {
      console.log();
    }
  };
  return (
    <div className="">
      <Flex $col className="justify-center content-center h-3/4 gap-4">
        <InputComponent
          action={(value) => setUser(value)}
          value={user}
          label="Name User"
        />
        <InputComponent
          action={(value) => setEmail(value)}
          value={email}
          label="email"
          type="email"
        />
        <InputPasword password={password} setPassword={setPassword} />
        <Input type="submit" className="p-0" onClick={async () => action()} />
        <Link className="w-full text-right text-blue-400" to={register}>
          Register User
        </Link>
      </Flex>
    </div>
  );
};
