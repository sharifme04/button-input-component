import React from "react";

const ButtonComponent = ({
  style = {},
  title = "" || "Button Name",
  isDisabled = false,
  isDanger = false,
  isBlock = false,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`${!isDanger && !isDisabled  && "btn btn-primary"}
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

export default ButtonComponent;
