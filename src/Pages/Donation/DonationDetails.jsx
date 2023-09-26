import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import {
  getStoredDonationId,
  saveDonationId,
} from "../../LocalStorage/LocalStorage";
import Swal from "sweetalert2";

const DonationDetails = () => {
  // load data form json file.................
  const data = useLoaderData();

  // using useParams state.....................
  const { id } = useParams();
  const idInt = parseInt(id);

  // find out donation data form the total data.................
  const donation = data.find((item) => item.id === idInt);

  // handle donation button....................
  const handleDonation = (id) => {
    // get id from local storage in the form of array............
    const donationId = getStoredDonationId();

    // clicked id exist in local storage or not.....................
    const isExist = donationId.find((donationId) => donationId === id);

    // showing sweet alert..................
    if (!isExist) {
      Swal.fire(
        "Donation Successfully!!",
        "Thanks! You are a very kind-hearted person...",
        "success"
      );
    } else {
      Swal.fire({
        icon: "info",
        title: "Already Donated",
        text: "Thank you so much for donating...",
      });
    }
    saveDonationId(idInt);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar></Navbar>
      <div className="relative">
        <img src={donation.image} className="w-full rounded-lg h-[90vh]" />
        <div className="absolute w-full py-10 px-6 bottom-0 bg-black bg-opacity-50 rounded-b-lg">
          <button
            onClick={() => handleDonation(idInt)}
            className="py-3 px-2 rounded font-semibold text-white"
            style={{ background: donation.text_btn_bg }}
          >
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

export default DonationDetails;
