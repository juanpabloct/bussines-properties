import { useState } from "react";
import { Flex } from "../tw-component";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { InputComponent } from "./InputComponent";
interface InputPaswordProp {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
export const InputPasword = ({ password, setPassword }: InputPaswordProp) => {
  const [showPassword, setShowPassword] = useState(false);
  const ChangeShowPassword = () => setShowPassword((current) => !current);
  return (
    <InputComponent
      icon={
        <Flex className="absolute right-2 w-min h-full justify-end items-center text-2xl">
          <span onClick={ChangeShowPassword}>
            {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </Flex>
      }
      value={password}
      action={(value) => setPassword(value)}
      label="password"
      type={showPassword ? "password" : "text"}
    />
  );
};
