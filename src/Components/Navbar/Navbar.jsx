import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 ">
      <div>
        <img src={Logo} alt="" className="h-[72px]" />
      </div>
      <div className="flex gap-6">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/donation"}>Donation</NavLink>
        <NavLink to={"/statistic"}>Statistic</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
