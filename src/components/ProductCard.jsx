import PropTypes from "prop-types";
import Button from "../atom/Button";

import styled from "styled-components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../atom/Card";

const ProductCard = ({ imageSrc, title, description, price, onAddToCart }) => {
  return (
    <Card className="max-w-sm">
      <Image src={imageSrc} alt={title} />
      <CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Price>{price}</Price>
        </CardHeader>
      </CardContent>
      <CardFooter>
        <Button onClick={onAddToCart}>담기</Button>
      </CardFooter>
    </Card>
  );
};

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;

const Image = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin: 0.5rem 0;
`;
