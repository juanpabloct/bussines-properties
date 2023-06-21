import {
  information,
  useNewUser,
} from "../components/formHome/hooks/useNewUser";
import { FormUser } from "../components/register/register.component";
import { Flex } from "../components/tw-component";

const RegisterAdminPages = () => {
  const newUser = useNewUser;
  const action = (data: information) => newUser(data);
  return (
    <Flex className="h-full min-h-screen justify-center">
      <FormUser createRol action={action} title="Register" />
    </Flex>
  );
};
export default RegisterAdminPages;
