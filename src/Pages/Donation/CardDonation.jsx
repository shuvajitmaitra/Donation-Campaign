import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardDonation = ({ donation }) => {
  const {
    id,
    image,
    text_btn_bg,
    category_bg,
    card_bg,
    price,
    title,
    category,
  } = donation;
  return (
    <div className="flex rounded-lg" style={{ background: card_bg }}>
      <div className="flex-1 md:flex-auto md:w-1/3">
        <img src={image} className=" rounded-l-lg  h-full" />
      </div>
      <div className="p-4 space-y-2 flex-1 md:flex-auto md:w-2/3">
        <p
          className="w-fit rounded py-1 px-2   font-medium"
          style={{ color: text_btn_bg, background: category_bg }}
        >
          {" "}
          {category}
        </p>
        <h2 className="text-lg font-bold ">{title}</h2>
        <p className="font-semibold" style={{ color: text_btn_bg }}>
          $ {price}
        </p>
        <Link to={`/donation/${id}`}>
          <button
            className="mt-2 py-2 px-3 md:px-5 text-xs md:text-base text-white font-semibold rounded"
            style={{ background: text_btn_bg }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
CardDonation.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default CardDonation;
