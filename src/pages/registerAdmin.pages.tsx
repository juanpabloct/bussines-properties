import { RegisterForm } from "../components/register/register.component";
import { Flex } from "../components/tw-component";

const RegisterAdminPages = () => {
  return (
    <Flex className="h-full min-h-screen justify-center">
      <RegisterForm createRol />
    </Flex>
  );
};
export default RegisterAdminPages;
