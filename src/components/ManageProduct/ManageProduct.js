import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import TableRow from "../TableRow/TableRow";

const ManageProduct = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://secret-falls-84464.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <Container>
      <h1>Manage Product</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td className="text-center" colSpan="4">
                Loading...
              </td>
            </tr>
          ) : (
            books.map((book) => <TableRow key={book._id} book={book} />)
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageProduct;
