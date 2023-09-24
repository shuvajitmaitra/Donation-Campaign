// import background from "../../assets/background.jpg";
const Banner = () => {
  return (
    // <div className="relative bg-white   	">
    //   <img src={background} className="" />
    //   <div className="absolute top-1/2 left-0  right-0 m-auto ">
    // <div>
    //   <h1 className="border w-full text-5xl text-center font-bold">
    //     I Grow By Helping People In Need
    //   </h1>
    // </div>
    // <div className="flex justify-center">
    //   <input type="text" className="border rounded-l-lg" />
    //   <button className="px-7 py-4 rounded-r-lg bg-[#FF444A]">
    //     Search
    //   </button>
    // </div>
    //   </div>
    // </div>
    <div
      className="hero h-[80vh]"
      style={{
        backgroundImage: "url(https://i.ibb.co/vQJVMwf/background.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="space-y-6">
          <div>
            <h1 className=" w-full text-5xl text-center font-bold">
              I Grow By Helping People In Need
            </h1>
          </div>
          <div className="flex justify-center">
            <input type="text" className=" rounded-l-lg" />
            <button className="px-7 py-4 rounded-r-lg bg-[#FF444A]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
