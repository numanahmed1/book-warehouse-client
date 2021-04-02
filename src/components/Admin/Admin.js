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

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-to-front">
        <button className="visit-btn">
          <Link to="/">Visit Site</Link>
        </button>
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
              <Route path="/admin">
                <ManageProduct />
              </Route>
              <Route path="/manage-product">
                <ManageProduct />
              </Route>
              <Route path="/add-product">
                <AddProduct />
              </Route>
              <Route path="/edit-product">
                <EditProduct />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Admin;
