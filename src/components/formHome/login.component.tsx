import { Flex, Input } from "../tw-component";

export const LoginForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} autoComplete="on">
      <Flex $col className="justify-center content-center h-3/4 gap-4">
        <Input />
        <Input type="password" />
        <Input type="submit" className="p-0" />
      </Flex>
    </form>
  );
};
