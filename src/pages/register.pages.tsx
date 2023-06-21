import { Link } from "react-router-dom";
import { FormUser } from "../components/register/register.component";
import { Flex } from "../components/tw-component";
import { login } from "../common/routes";
import {
  information,
  useNewUser,
} from "../components/formHome/hooks/useNewUser";

const RegisterPages = () => {
  const newUser = useNewUser;
  const action = (data: information) => newUser(data);

  return (
    <Flex className="h-full min-h-screen justify-center">
      <FormUser
        title="Register"
        action={action}
        redirect={
          <Link className="w-full text-right text-blue-400" to={login}>
            Login User
          </Link>
        }
      />
    </Flex>
  );
};
export default RegisterPages;
