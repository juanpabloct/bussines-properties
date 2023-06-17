import { Flex } from "../tw-component";

export const Loading = () => {
  return (
    <Flex $col className=" min-h-screen justify-center items-center">
      <div className="loading  bg-[#2f68a1] w-40 h-40 a mb-4"></div>
      <div className=" animate-bounce font-semibold text-lg ">Cargando</div>
    </Flex>
  );
};
