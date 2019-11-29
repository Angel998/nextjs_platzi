import Card from "./card";
import PropTypes from "prop-types";

const channelCard = ({ channel: { id, title, description } }) => {
  if (description.length > 150) {
    description = description.substring(0, 150) + "...";
  }
  return (
    <Card hoverable={true} link={`/canal/${id}`}>
      <h5>{title}</h5>
      <p>{description}</p>
    </Card>
  );
};

channelCard.propTypes = {
  channel: PropTypes.object.isRequired
};

export default channelCard;
