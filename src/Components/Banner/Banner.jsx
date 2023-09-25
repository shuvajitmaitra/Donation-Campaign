import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";

const Banner = ({ setSearchText }) => {
  const [text, setText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div className="relative">
      <div
        className="hero h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/vQJVMwf/background.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="absolute top-0 right-0 left-0">
          <Navbar></Navbar>
        </div>
        <div className="text-center text-neutral-content z-0 ">
          <div className="space-y-6">
            <div>
              <h1 className=" z-10 w-full text-3xl lg:text-5xl text-center text-black font-bold">
                I Grow By Helping People In Need
              </h1>
            </div>
            <div className="flex justify-center ">
              <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                className="border rounded-l-lg text-black w-1/2 focus:outline-slate-600 placeholder-black "
                placeholder=" Search here...."
              />
              <button
                onClick={() => handleSearch(text)}
                className="px-7 py-4 rounded-r-lg bg-[#FF444A]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  setSearchText: PropTypes.func,
};

export default Banner;
