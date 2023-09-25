import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Donation = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt);
  console.log(data);

  const donation = data.find((item) => item.id === idInt);

  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar></Navbar>
      <div className="relative">
        <img src={donation.image} className="w-full h-[70vh]" />
        <div className="absolute w-full py-10 px-6 bottom-0 bg-black bg-opacity-50">
          <button className="py-3 px-2 bg-red-400 rounded-lg font-semibold text-white">
            Donate $ {donation.price}
          </button>
        </div>
      </div>
      <h2 className="text-xl md:text-3xl font-bold py-4 text-black">
        {donation.title}
      </h2>
      <p className="pb-6"> {donation.description} </p>
    </div>
  );
};

export default Donation;
