import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationId } from "../../LocalStorage/LocalStorage";
import Navbar from "../../Components/Navbar/Navbar";
import CardDonation from "./CardDonation";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const data = useLoaderData();

  useEffect(() => {
    const donationsId = getStoredDonationId();
    console.log(donationsId);
    if (donationsId.length > 0) {
      const filteredDonation = data.filter((item) =>
        donationsId.includes(item.id)
      );
      console.log("filtered donation", filteredDonation);
      setDonations(filteredDonation);
    }
  }, [data]);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="max-w-screen-lg mx-auto ">
      <Navbar></Navbar>
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
      <div className="flex justify-center py-8">
        {donations.length > 4 && (
          <button
            onClick={() => handleShowAll()}
            className={`py-2 px-5 bg-green-600 rounded-md font-semibold text-white ${
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
