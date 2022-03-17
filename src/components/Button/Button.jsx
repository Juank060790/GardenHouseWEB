import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const ButtonHeader = ({
  label,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo,
  variant,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={linkTo} className="btn-mobile">
      <Button
        variant={variant}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {label}
      </Button>
    </Link>
  );
};
