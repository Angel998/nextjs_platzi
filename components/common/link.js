import Link from "next/link";
import PropTypes from "prop-types";

const customLink = ({
  href,
  text,
  target,
  attributes,
  className,
  children
}) => {
  let linkContent;

  if (children) {
    linkContent = children;
  } else {
    linkContent = text;
  }

  const isExternalLink = href.indexOf("http") >= 0;
  if (isExternalLink) {
    return (
      <a className={className} target={target} href={href}>
        {linkContent}
      </a>
    );
  }
  return (
    <Link href={href} {...attributes}>
      <a className={className} target={target}>
        {linkContent}
      </a>
    </Link>
  );
};

customLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  target: PropTypes.oneOf(["", "_blank"]),
  className: PropTypes.string.isRequired,
  icon: PropTypes.string
};

customLink.defaultProps = {
  className: "",
  target: "",
  text: "",
  icon: null,
  attributes: {}
};

export default customLink;
