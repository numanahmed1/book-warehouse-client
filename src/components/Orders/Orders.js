import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { userInfoContext } from "../../App";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://secret-falls-84464.herokuapp.com/orders?email=${loggedInUser.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div>
      <Container>
        <h1>Your Orders</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Author Name</th>
              <th>Quantity</th>
              <th>Placed Order</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5">You didn't purchase anything yet</td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.author}</td>
                  <td>1</td>
                  <td>
                    {new Date(order.orderDate).toDateString("dd/MM/yyyy")}
                  </td>
                  <td>
                    $<strong>{order.price}</strong>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Orders;
