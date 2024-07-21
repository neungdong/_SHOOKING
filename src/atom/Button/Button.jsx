import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Container } from "./Button.style";
import { validColors } from "../../lib/styles/colors";

const Button = forwardRef((props, ref) => {
  const {
    size = "md",
    color = "primary",
    children,
    shadow = false,
    ...options
  } = props;

  return (
    <Container size={size} color={color} shadow={shadow} {...options} ref={ref}>
      {children}
    </Container>
  );
});

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "auto"]),
  color: PropTypes.oneOf(validColors),
  children: PropTypes.node.isRequired,
  shadow: PropTypes.bool,
};

export default Button;
