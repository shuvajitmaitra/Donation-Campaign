import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, image, title, category } = card;
  let divClass = ["flex", "flex-col", "pb-4", "space-y-2", "rounded-lg"];
  let imgClass = ["h-[150px]", "w-full", "rounded-t-lg", "mb-2"];
  let categoryClass = ["w-fit", "rounded", "p-1", "mx-4"];
  let titleClass = ["font-bold", "mx-4"];

  if (category === "Education") {
    divClass.push("bg-[#FF444A26]");
    titleClass.push("text-[#FF444A]");
    categoryClass.push("text-[#FF444A]", "bg-[#FF444A26]", "font-medium");
  }

  if (category === "Health") {
    divClass.push("bg-[#0052FF26]");
    titleClass.push("text-[#0052FF]");
    categoryClass.push("text-[#0052FF]", "bg-[#0052FF26]");
  }

  if (category === "Food") {
    divClass.push("bg-[#F8714726]");
    titleClass.push("text-[#F87147]");
    categoryClass.push("text-[#F87147]", "bg-[#F8714726]");
  }

  if (category === "Clothing") {
    divClass.push("bg-[#79C23F26]");
    titleClass.push("text-[#79C23F]");
    categoryClass.push("text-[#79C23F]", "bg-[#79C23F26]");
  }

  return (
    <Link to={`/donation/${id}`} className={divClass.join(" ")}>
      <img src={image} className={imgClass.join(" ")} />
      <p className={categoryClass.join(" ")}> {category}</p>
      <h2 className={titleClass.join(" ")}>{title}</h2>
    </Link>
  );
};
Card.propTypes = {
  card: PropTypes.object,
};
export default Card;
