import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <ButtonStyled ref={ref} className={className} {...props} />
));

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;

const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 0.5rem;
  &:hover {
    background-color: #2563eb;
  }
`;
