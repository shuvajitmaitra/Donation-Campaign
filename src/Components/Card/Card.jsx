import PropTypes from "prop-types";

const Card = ({ card }) => {
  const { image, title, category, background } = card;

  return (
    <div>
      <img src={image} alt="" />
      {category}
      <h2 className={`text-${background}`}>{title}</h2>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object,
};
export default Card;
