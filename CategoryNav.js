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

  const categories=["Mobiles","Desktops"]
  return (
        <div className="row" style={{borderBottom:"1px solid skyblue",padding:"8px"}} >
          <div className="col col-sm-2">
            <label className="text-warning font-weight-bold">Category :</label>
          </div>
          {categories.map((category,index)=>
          <div key={index} className="col col-sm-2">
            <p onClick={(event)=>props.handleCategory(event,category)} style={{cursor:"pointer"}} className="m-auto text-center text-primary">{category}</p>
          </div>
          )}
        </div>
      
    )
  }

export default Header;
