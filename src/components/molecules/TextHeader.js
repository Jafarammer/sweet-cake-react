import React from "react";
import { PropTypes } from "prop-types";

function TextHeader(props) {
  const { title, desc } = props;
  return (
    <>
      <h1 className="text-warning text-center mb-4">{title}</h1>
      <p className="text-center text-muted mb-5">{desc}</p>
    </>
  );
}

TextHeader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

TextHeader.defaultProps = {
  title: "Unknown title",
  desc: "Unknown description",
};

export default TextHeader;
