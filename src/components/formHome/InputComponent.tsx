import { useState } from "react";
import { Flex, Input } from "../tw-component";
import { InputInterface } from "./interfaces/InputInterface";
export const InputComponent = ({
  type,
  label,
  icon,
  value,
  action,
}: InputInterface) => {
  const [entry, setEntry] = useState(false);
  const ChangeEntry = () => setEntry((current) => !current);
  return (
    <Flex $col className={`${entry && "text-[#6993c6]"}`}>
      <label typeof="">{label}</label>
      <Flex className="relative ">
        {icon}
        <Input
          value={value}
          name={label}
          type={type}
          className={`${
            entry && "focus:text-[#6993c6] focus:border-[#6993c6]"
          }`}
          onBlur={ChangeEntry}
          onFocus={ChangeEntry}
          onChange={({ target }) => action(target.value)}
        />
      </Flex>
    </Flex>
  );
};
