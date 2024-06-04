import { IoIosSearch } from "react-icons/io";
import logo from "../assets/Gmail_Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar, { genConfig } from "react-nice-avatar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchText, setUser } from "./redux/appSlice.js";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";

const config = genConfig({ sex: "man", hairStyle: "mohawk" });

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const [searchTextInput, setSearchTextInput] = useState("");

  useEffect(() => {
    dispatch(setSearchText(searchTextInput));
  }, [dispatch, searchTextInput]);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => console.log(err.message));
  };

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
            value={searchTextInput}
            placeholder="Search mail"
            onChange={(e) => setSearchTextInput(e.target.value)}
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
          <div className="cursor-pointer relative">
            <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                  className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
                >
                  <p className="p-2 underline" onClick={signOutHandler}>
                    Sign Out
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
