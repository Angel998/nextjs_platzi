import PropTypes from "prop-types";

const customLink = ({ href, text, target, className, children }) => {
  let linkContent;

  if (children) {
    linkContent = children;
  } else {
    linkContent = text;
  }
  return (
    <a className={className} target={target} href={href}>
      {linkContent}
    </a>
  );
};

customLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["", "_blank"]),
  className: PropTypes.string.isRequired,
  icon: PropTypes.string
};

customLink.defaultProps = {
  className: "",
  target: "",
  text: "",
  icon: null
};

export default customLink;
