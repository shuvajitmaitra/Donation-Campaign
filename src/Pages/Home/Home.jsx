import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [info, setInfo] = useState([]);

  // data load form json..........................
  const data = useLoaderData();

  // searching functionalities.....................
  useEffect(() => {
    filteredData();
  }, [searchText]);

  const filteredData = () => {
    const filteredData = data.filter((item) =>
      item.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setInfo(filteredData);
  };

  return (
    <div>
      <div>
        <Banner setSearchText={setSearchText}></Banner>
        <div className="max-w-screen-lg px-6 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16">
          {info.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
