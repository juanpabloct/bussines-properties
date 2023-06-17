import { useState } from "react";
import { Flex, Input } from "../tw-component";
import { conectBack } from "../../conection/conection";
import { Link } from "react-router-dom";
import { InputComponent } from "../formHome/InputComponent";
import { InputPasword } from "../formHome/inputPassword.component";
import { Select } from "../tw-component/select";
import { login } from "../../common/routes";
export const RegisterForm = ({
  createRol,
  redirectLogin,
}: {
  createRol?: boolean;
  redirectLogin?: boolean;
}) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const action = async () => {
    const values: {
      email: string;
      password: string;
      userName: string;
      rol?: string;
    } = { email, password, userName: user };
    if (createRol) {
      values.rol = rol;
    }
    try {
      await conectBack.post("/user", values);
      alert("Creado Correctamente");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pt-10">
      <Flex $col>
        <h2 className="text-center text-2xl font-semibold">Register</h2>
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
          {createRol && (
            <Select value={rol} onChange={({ target }) => setRol(target.value)}>
              <option value="admin">operario</option>
              <option value="operarion">admin</option>
            </Select>
          )}
          <InputPasword password={password} setPassword={setPassword} />
          <Input type="submit" className="p-0" onClick={async () => action()} />
          {redirectLogin && (
            <Link className="w-full text-right text-blue-400" to={login}>
              Login User
            </Link>
          )}
        </Flex>
      </Flex>
    </div>
  );
};
