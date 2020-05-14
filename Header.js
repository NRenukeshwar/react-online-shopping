import React,{useState} from "react";
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

function Header(props){

   const [isNavOpen, setIsNavOpen] = useState(false);
    return (
      
      <Navbar dark expand="md" className="" style={{backgroundColor:"#2874f0"}}>
        <NavbarToggler onClick={isNavOpen?()=>setIsNavOpen(false):()=>setIsNavOpen(true)} />
        <NavbarBrand className="text-white">
          
            <span><i className="fas fa-shopping-bag fa-lg"></i></span> NN Shopping
          
        </NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <Link className="nav-link text-white" to="/aboutUs">
                About Us
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-white" to="/contactUs">
                Contact Us
              </Link>
            </NavItem>
            <NavItem>
              {props.login
              ? 
              <Link className="nav-link text-white" onClick={props.handleLogout}>
                <span><i className="fas fa-sign-out-alt"></i> Logout</span>
              </Link>
              :
              
              <Link className="nav-link text-white" to="/login">
                <span><i className="fas fa-sign-in-alt"></i> Login</span>
              </Link>}
            </NavItem>
          </Nav>
        </Collapse>
        <Nav navbar>
          <NavItem>
              <Link className="nav-link text-white" to="/cart">
                <span><i className="fas fa-shopping-cart"></i> Cart</span>
              </Link>
            </NavItem>
        </Nav>
      </Navbar>
    );
  }

export default Header;
