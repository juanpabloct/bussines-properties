import { FC } from "react";
import { Flex } from "../components/tw-component";
import { LoginForm } from "../components/formHome/login.component";

const LoginPage: FC = () => {
  return (
    <Flex className="h-full min-h-screen justify-center">
      <LoginForm />
    </Flex>
  );
};
export default LoginPage;
