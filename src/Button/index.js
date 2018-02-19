import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ButtonWrapper, AddButtonWrapper } from "./index.style";

export const Button = ({ children, type, onClick }) => {
  const className = classNames(type);
  return (
    <ButtonWrapper
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export const AddButton = ({ onClick }) => {
  return (
    <AddButtonWrapper onClick={onClick}>Add</AddButtonWrapper>
  )
}

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "default",
};
