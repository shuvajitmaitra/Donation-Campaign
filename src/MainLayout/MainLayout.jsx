import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default MainLayout;
