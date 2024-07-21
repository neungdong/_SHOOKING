import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atom/Button/Button";

const ProductCard = ({ imageSrc, title, description, price, onAddToCart }) => {
  return (
    <Card>
      <CardHeader>
        <Thumbnail src={imageSrc} />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Price>{price}원</Price>
      </CardContent>
      <CardFooter>
        <Button size="sm" color="black" onClick={onAddToCart}>
          담기
        </Button>
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

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: rgb(0 0 0 / 12%) 0px 8px 32px 0px;
    transform: translateY(-6px);
  }
`;

const CardHeader = styled.div`
  width: 100%;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  background: linear-gradient(to right bottom, #f6d365, #ffc9ba);
`;

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 600;
  margin: 0;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; // 라인수 1
  -webkit-box-orient: vertical;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const CardFooter = styled.div`
  //border-top: 1px solid #f1f3f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;
