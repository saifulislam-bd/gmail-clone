import { IoIosSearch } from "react-icons/io";
import logo from "../assets/Gmail_Logo.png";
import avatar from "../assets/avatar.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import AvatarReactjs from "avatar-reactjs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-3 min-h-16 ">
      <div className="flex items-center gap-10 ">
        <div className="flex items-center gap-2 ">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img src={logo} alt="Gmail Logo" className="w-8 cursor-pointer" />
          <h1 className="text-2xl text-gray-400 font-medium cursor-pointer">
            Gmail
          </h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#eaf1fb] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search mail"
            className="w-full rounded-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={"24px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiSettings size={"24px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"24px"} />
          </div>
          <div className="cursor-pointer">
            <AvatarReactjs
              src={avatar}
              fontSize={"medium"}
              width={"40px"}
              height={"40px"}
              borderRadius={"100%"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
