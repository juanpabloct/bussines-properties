import { ReactNode, useState } from "react";
import { Flex, Input } from "../tw-component";
import { InputComponent } from "../formHome/InputComponent";
import { InputPasword } from "../formHome/inputPassword.component";
import { Select } from "../tw-component/select";
import { information } from "../formHome/hooks/useNewUser";
export const FormUser = ({
  createRol,
  redirect,
  action,
  title,
}: {
  createRol?: boolean;
  redirect?: ReactNode;
  action: (form: information) => Promise<void>;
  title: string;
}) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  return (
    <div className="pt-10">
      <Flex $col>
        <h2 className="text-center text-2xl font-semibold">{title}</h2>
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
          <Input
            type="submit"
            className="p-0"
            onClick={async () =>
              action({ userName: user, createRol: rol, email, password })
            }
          />
          {redirect}
        </Flex>
      </Flex>
    </div>
  );
};
