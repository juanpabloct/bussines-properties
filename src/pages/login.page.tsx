import { FC } from "react";
import { Flex } from "../components/tw-component";
import { LoginForm } from "../components/formHome/login.component";

const LoginPage: FC = () => {
  return (
    <Flex className="h-full min-h-screen justify-center">
      <div className="pt-10">
        <Flex $col>
          <LoginForm />
        </Flex>
      </div>
    </Flex>
  );
};
export default LoginPage;
