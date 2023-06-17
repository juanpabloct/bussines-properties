import { FC } from "react";
import { Flex } from "../components/tw-component";
import { LoginForm } from "../components/formHome/login.component";

const LoginPage: FC = () => {
  return (
    <Flex className="h-full min-h-screen justify-center">
      <div className="pt-10">
        <Flex $col>
          <h2 className="text-center text-2xl font-semibold">Login</h2>
          <LoginForm />
        </Flex>
      </div>
    </Flex>
  );
};
export default LoginPage;
