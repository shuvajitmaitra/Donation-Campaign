import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationId } from "../../LocalStorage/LocalStorage";
import Navbar from "../../Components/Navbar/Navbar";
import CardDonation from "./CardDonation";

const Donations = () => {
  // state declaration ......................
  const [donations, setDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // data load form the JSON...................
  const data = useLoaderData();

  // useEffect state...............................
  useEffect(() => {
    // Get local storage data..................
    const donationsId = getStoredDonationId();

    // Conditionally check data existence on local storage........
    if (donationsId.length > 0) {
      const filteredDonation = data.filter((item) =>
        donationsId.includes(item.id)
      );
      setDonations(filteredDonation);
    }
  }, [data]);

  // show all button on click functionalities.....................
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  // main jsx ..........................................
  return (
    <div className="max-w-screen-lg mx-auto ">
      <Navbar></Navbar>

      {/* condition  donation page no card ................... */}
      {donations.length <= 0 && (
        <div className="h-[80vh] flex justify-center items-center font-bold text-4xl text-center">
          <h1>No Donation Successful Yet...</h1>
        </div>
      )}

      {/* handle show all button condition...................... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {showAll
          ? donations.map((donation) => (
              <CardDonation
                key={donation.id}
                donation={donation}
              ></CardDonation>
            ))
          : donations
              .slice(0, 4)
              .map((donation) => (
                <CardDonation
                  key={donation.id}
                  donation={donation}
                ></CardDonation>
              ))}
      </div>

      {/* hide showAll button........................ */}
      <div className="flex justify-center py-8">
        {donations.length > 4 && (
          <button
            onClick={() => handleShowAll()}
            className={`py-2 px-5 bg-green-600 rounded font-semibold text-white ${
              showAll && "hidden"
            }`}
          >
            Show all
          </button>
        )}
      </div>
    </div>
  );
};

export default Donations;
