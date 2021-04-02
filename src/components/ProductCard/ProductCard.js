import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ book }) => {
  const { _id, name, author, imageUrl, price } = book;
  const history = useHistory();
  const handleBuyNow = (bookId) => {
    const url = `/checkout/${bookId}`;
    history.push(url);
  };
  return (
    <Col className="my-2" lg={3} md={3}>
      <Card className="book-card h-100">
        <Card.Img className="book-img" variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title className="book-card-title">{name}</Card.Title>
          <Card.Text className="book-card-author">{author}</Card.Text>
        </Card.Body>
        <Card.Footer className="book-card-f d-flex justify-content-between align-items-center">
          <Card.Text className="m-0 book-card-price">
            $<b>{price}</b>
          </Card.Text>
          <Button onClick={() => handleBuyNow(_id)} className="buy-btn">
            Buy Now
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
