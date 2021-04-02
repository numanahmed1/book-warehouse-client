import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./TableRow.css";

const TableRow = ({ book }) => {
  const { name, author, price, _id } = book;
  const handleDelete = (id) => {
    fetch(`https://secret-falls-84464.herokuapp.com/deleteBook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{author}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn-delete">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
