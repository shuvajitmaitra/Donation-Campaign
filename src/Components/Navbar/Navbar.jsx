import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 ">
      <div>
        <img src={Logo} alt="" className="h-[72px]" />
      </div>
      <div className="flex gap-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/donation"}>Donation</Link>
        <Link to={"/statistic"}>Statistic</Link>
      </div>
    </div>
  );
};

export default Navbar;
