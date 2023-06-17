import { useState } from "react";
import { AiOutlinePropertySafety } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import tw from "tailwind-styled-components";
import { Flex } from "../tw-component";
import { conectBack } from "../../conection/conection";
import { token } from "../../../config";
import { useContextRol } from "../../context/contextRol";
import { Link } from "react-router-dom";
import { adminRegister, home } from "../../common/routes";
const Nav = tw.nav`h-full col-span-2 text-center flex items-center justify-center text-xl font-bold font-sans`;
export const Navbar = () => {
  const rol = useContextRol();
  const [showMenu, setShowMenu] = useState(false);
  const changeShowModal = () => setShowMenu((current) => !current);
  const exit = async () => {
    try {
      const exitUser = await conectBack.post("auth/signOff", {
        token: localStorage.getItem(token),
      });
      if (exitUser) {
        localStorage.clear();
        location.reload();
      }
    } catch (error) {
      console.log();
    }
  };
  return (
    <Flex className="relative">
      <header className="w-full grid grid-cols-12  border-b-2 border-solid border-b-[#80c5eb] divide-x">
        <Nav className=" text-[#80c5eb] bg-[#2f383c] col-span-3 py-4 ">
          <span className="ml-10 ">
            <AiOutlinePropertySafety />
          </span>
          <h1 className=" text-left ">Properties</h1>
        </Nav>
        {rol.value === "admin" && (
          <Nav className="col-end-9 cursor-pointer">
            <Link to={adminRegister}>Admin</Link>
          </Nav>
        )}
        <Nav className="col-end-11 cursor-pointer">
          <Link to={home}>Home</Link>
        </Nav>
        <Nav className="col-end-13 text-5xl flex-col relative">
          <span
            className="cursor-pointer"
            onMouseEnter={changeShowModal}
            onMouseLeave={changeShowModal}
          >
            <MdAccountCircle />
          </span>
          {showMenu && (
            <div
              className=" w-full text-lg  border-solid border-black border-1 absolute top-[90%] shadow-md shadow-black z-20 bg-white"
              onMouseEnter={changeShowModal}
              onMouseLeave={changeShowModal}
            >
              <Flex
                className="w-full justify-center items-center gap-2 cursor-pointer"
                onClick={exit}
              >
                Exit
                <span>
                  <IoMdExit />
                </span>
              </Flex>
            </div>
          )}
        </Nav>
      </header>
    </Flex>
  );
};
