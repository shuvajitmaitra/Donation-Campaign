import Navbar from "../Navbar/Navbar";

const Error = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar></Navbar>
      <div className="h-[70vh] flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center">No data found</h1>
      </div>
    </div>
  );
};

export default Error;
