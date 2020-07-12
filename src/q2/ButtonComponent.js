import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = ({
  style = {},
  title = "" || "Button Name",
  isDisabled = false,
  isDanger = false,
  isBlock = false,
  onClick,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`${!isDanger && !isDisabled && "btn btn-primary"}
    ${isDisabled && "btn btn-light"}
    ${isDanger && "btn btn-danger"}
    ${isBlock ? "blockStyle" : "inlineStyle"}
    `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

ButtonComponent.propTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool,
  isBlock: PropTypes.bool,
  onClick: PropTypes.func
};

export default ButtonComponent;
