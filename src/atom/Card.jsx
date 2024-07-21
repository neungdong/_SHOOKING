//card
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <CardContainer ref={ref} className={className} {...props} />
));
Card.displayName = "Card";
Card.propTypes = {
  className: PropTypes.string,
};

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <CardHeaderContainer ref={ref} className={className} {...props} />
));
CardHeader.displayName = "CardHeader";
CardHeader.propTypes = {
  className: PropTypes.string,
};

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <CardTitleContainer ref={ref} className={className} {...props} />
));
CardTitle.displayName = "CardTitle";
CardTitle.propTypes = {
  className: PropTypes.string,
};

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <CardDescriptionContainer ref={ref} className={className} {...props} />
));
CardDescription.displayName = "CardDescription";
CardDescription.propTypes = {
  className: PropTypes.string,
};

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <CardContentContainer ref={ref} className={className} {...props} />
));
CardContent.displayName = "CardContent";
CardContent.propTypes = {
  className: PropTypes.string,
};

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <CardFooterContainer ref={ref} className={className} {...props} />
));
CardFooter.displayName = "CardFooter";
CardFooter.propTypes = {
  className: PropTypes.string,
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

const CardContainer = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  color: #111827;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
`;

const CardTitleContainer = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const CardDescriptionContainer = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const CardContentContainer = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;

const CardFooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
`;
