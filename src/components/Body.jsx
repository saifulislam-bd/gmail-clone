import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <main className="flex ">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default Body;
