import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://secret-falls-84464.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="home">
      <Container>
        <Row>
          {books.length === 0 ? (
            <CustomSpinner />
          ) : (
            books.map((book) => <ProductCard key={book._id} book={book} />)
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
