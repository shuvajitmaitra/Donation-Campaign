import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [info, setInfo] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    filteredData();
  }, [searchText]);

  const filteredData = () => {
    const filteredData = data.filter((item) =>
      item.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setInfo(filteredData);
  };

  console.log(searchText);

  return (
    <div>
      <div>
        <Banner setSearchText={setSearchText}></Banner>
        <div className="grid grid-cols-4 gap-4 my-12">
          {info.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
