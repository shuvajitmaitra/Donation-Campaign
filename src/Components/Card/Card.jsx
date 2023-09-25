import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, image, title, category, card_bg, category_bg, text_btn_bg } =
    card;

  return (
    <Link
      to={`/donation/${id}`}
      className="flex  flex-col pb-4 space-y-2 rounded-lg"
      style={{ background: card_bg }}
    >
      <img src={image} className="h-[150px] w-full rounded-t-lg mb-2" />
      <p
        className="w-fit rounded p-1 mx-4 font-medium"
        style={{ color: text_btn_bg, background: category_bg }}
      >
        {" "}
        {category}
      </p>
      <h2 className="font-bold mx-4" style={{ color: text_btn_bg }}>
        {title}
      </h2>
    </Link>
  );
};
Card.propTypes = {
  card: PropTypes.object,
};
export default Card;
