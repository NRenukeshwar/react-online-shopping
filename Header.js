import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  var dd = localStorage.getItem("loginDetail");
  dd = JSON.parse(dd);
  if (dd == null || dd.type == "user")
    return (
      <Navbar dark expand="md" style={{ backgroundColor: "#2874f0" }}>
        <NavbarToggler
          onClick={
            isNavOpen ? () => setIsNavOpen(false) : () => setIsNavOpen(true)
          }
        />
        <NavbarBrand className="text-white">
          <span>
            <i className="fas fa-shopping-bag fa-lg" />
          </span>{" "}
          NN Shopping
        </NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              {props.login ? (
                <span
                  className="nav-link text-white"
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-user-circle" /> Hi {dd.name}!
                </span>
              ) : (
                ""
              )}
            </NavItem>
            <NavItem>
              <Link className="nav-link text-white" to="/">
                <i className="fas fa-home" /> Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-white" to="/aboutUs">
                <i className="fas fa-shopping-bag" /> About Us
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-white" to="/contactUs">
                <i className="fas fa-address-card" /> Contact Us
              </Link>
            </NavItem>
            <NavItem>
              {props.login ? (
                <span
                  className="nav-link text-white"
                  style={{ cursor: "pointer" }}
                  onClick={props.handleLogout}
                >
                  <i className="fas fa-sign-out-alt" /> Logout
                </span>
              ) : (
                <Link className="nav-link text-white" to="/login">
                  <span>
                    <i className="fas fa-sign-in-alt" /> Login
                  </span>
                </Link>
              )}
            </NavItem>
          </Nav>
        </Collapse>
        <Nav navbar>
          <NavItem>
            <Link className="nav-link text-white" to="/cart">
              <span>
                <i className="fas fa-shopping-cart" /> Cart
                {props.cartCount > 0 && (
                  <sup>
                    <span className="badge badge-danger">
                      {props.cartCount}
                    </span>
                  </sup>
                )}
              </span>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  else
    return (
      <Navbar dark expand="md" style={{ backgroundColor: "#2874f0" }}>
        <NavbarToggler
          onClick={
            isNavOpen ? () => setIsNavOpen(false) : () => setIsNavOpen(true)
          }
        />
        <NavbarBrand className="text-white">
          <span>
            <i className="fas fa-shopping-bag fa-lg" />
          </span>{" "}
          NN Shopping
        </NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              {props.login ? (
                <span
                  className="nav-link text-white"
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-user-circle" /> Hi {dd.name}!
                </span>
              ) : (
                ""
              )}
            </NavItem>
            <NavItem>
              <Link className="nav-link text-white" to="/admin/home">
                <i className="fas fa-home" /> Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-white" to="/admin/addProduct">
                <i className="fas fa-plus" /> Add Product
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav navbar>
          <NavItem>
            <span
              className="nav-link text-white"
              style={{ cursor: "pointer" }}
              onClick={props.handleLogout}
            >
              <i className="fas fa-sign-out-alt" /> Logout
            </span>
          </NavItem>
        </Nav>
      </Navbar>
    );
}

export default Header;
