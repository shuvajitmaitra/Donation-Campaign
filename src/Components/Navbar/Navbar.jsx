import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg md:mx-auto flex flex-col md:flex-row justify-between items-center py-3 md:py-6 px-6">
      <div className="mb-4 md:mb-0">
        <img src={Logo} alt="" className="h-[30px] md:h-[72px]" />
      </div>
      <div className="flex gap-6">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/donations"}>Donation</NavLink>
        <NavLink to={"/statistic"}>Statistic</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
