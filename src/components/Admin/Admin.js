import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ManageProduct from "../ManageProduct/ManageProduct";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faFolderPlus,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-to-front">
        <Link to="/">
          <button className="visit-btn">Visit Site</button>
        </Link>
      </div>
      <div className="admin-main">
        <Router>
          <div className="admin-left">
            <h1>Book Warehouse</h1>

            <div className="v-nav">
              <Link to="/manage-product">
                <span className="admin-icon">
                  <FontAwesomeIcon icon={faTasks} />
                </span>
                Manage Product
              </Link>
              <Link to="/add-product">
                <span className="admin-icon">
                  <FontAwesomeIcon icon={faFolderPlus} />
                </span>
                Add Product
              </Link>
              <Link to="/edit-product">
                <span className="admin-icon">
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                Edit Product
              </Link>
            </div>
          </div>

          <div className="admin-right">
            <Switch>
              <PrivateRoute path="/admin">
                <ManageProduct />
              </PrivateRoute>
              <PrivateRoute path="/manage-product">
                <ManageProduct />
              </PrivateRoute>
              <PrivateRoute path="/add-product">
                <AddProduct />
              </PrivateRoute>
              <PrivateRoute path="/edit-product">
                <EditProduct />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Admin;
