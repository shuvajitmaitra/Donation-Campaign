import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
