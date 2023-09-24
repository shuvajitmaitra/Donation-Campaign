import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [info, setInfo] = useState([]);

  const data = useLoaderData();

  return (
    <div>
      <div>
        <Banner setSearchText={setSearchText}></Banner>
      </div>
    </div>
  );
};

export default Home;
