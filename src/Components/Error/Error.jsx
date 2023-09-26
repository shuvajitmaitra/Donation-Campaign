import { Link, useRouteError } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ErrorPage = () => {
  // Error page handle.....................................

  const error = useRouteError();

  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar></Navbar>
      <div className="h-[70vh] space-y-3 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">No data found</h1>
        <Link
          to="/"
          className="py-2 px-5 text-black font-semibold bg-[#0052FF26] rounded"
        >
          Go Back Home
        </Link>
        <p className="text-slate-400">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
