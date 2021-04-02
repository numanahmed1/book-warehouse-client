import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userInfoContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userInfoContext);
  return (
    <div className="header">
      <Container>
        <Navbar className="main-nav" expand="lg">
          <Navbar.Brand>
            <Link to="/">
              Book <span>Warehouse</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto main-nav-ul align-items-center">
              <Link to="/">Home</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/admin">Admin</Link>
              <Link to="/deals">Deals</Link>
              {loggedInUser.username ? (
                <a className="login-btn">{loggedInUser.username}</a>
              ) : (
                <Link className="login-btn" to="/login">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
