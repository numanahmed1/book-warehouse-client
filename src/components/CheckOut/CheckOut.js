import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { userInfoContext } from "../../App";
import "./CheckOut.css";

const CheckOut = () => {
  const { bookId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);

  useEffect(() => {
    const url = `https://secret-falls-84464.herokuapp.com/selectedProduct?id=${bookId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data[0]);
      });
  }, [bookId]);

  const { name, author, price } = selectedProduct;

  const handleCheckOut = () => {
    const newPurchase = {
      ...loggedInUser,
      ...selectedProduct,
      orderDate: new Date(),
    };
    fetch("https://secret-falls-84464.herokuapp.com/proceedToCheckOut", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPurchase),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          document.getElementById("thank-you").style.display = "block";
        }
      });
  };
  return (
    <div>
      <Container>
        <h1>Checkout</h1>
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  {name} <strong>By</strong> {author}
                </td>
                <td>1</td>
                <td>
                  $<strong>{price}</strong>
                </td>
              </tr>

              <tr>
                <td></td>
                <td colSpan="2">Total</td>
                <td>
                  $<strong>{price}</strong>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="text-right">
            <span id="thank-you">Thank you for purchasing Book</span>
            <button onClick={handleCheckOut} className="btn buy-btn">
              Proceed to checkout
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
