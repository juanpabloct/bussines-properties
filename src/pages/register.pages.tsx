import { RegisterForm } from "../components/register/register.component";
import { Flex } from "../components/tw-component";

const RegisterPages = () => {
  return (
    <Flex className="h-full min-h-screen justify-center">
      <RegisterForm redirectLogin />
    </Flex>
  );
};
export default RegisterPages;
