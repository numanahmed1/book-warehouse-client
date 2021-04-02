import React from "react";
import { Container, Spinner } from "react-bootstrap";
import "./CustomSpinner.css";

const CustomSpinner = () => {
  return (
    <div className="spinner">
      <Spinner animation="grow" />
    </div>
  );
};

export default CustomSpinner;
