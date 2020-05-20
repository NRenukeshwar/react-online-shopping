import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import HomeComponent from './HomeComponent'
import Cart from './Cart'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Registration from './Registration'
import AdminHome from './AdminHome'
import AddProduct from './AddProduct'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

class App extends React.Component {
  constructor(){
    super();
  this.state={
      login:false,
      username:"",
      password:"",
      users:[],
      cart:[]
  }
  localStorage.removeItem('loginDetail')
  }

  componentDidMount()
  {
    axios.get('http://localhost:3001/users').then(res=>this.setState({
      users:res.data
    }))
  
  }

  handleChange=(event)=>{
    event.preventDefault()
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  saveItemToCart=(event, product)=>{
    event.preventDefault()

    const cart=this.state.cart
    if(cart.length>0){ 
        if(cart.filter(p=>p.id==product.id).length>0)
        {
          alert("Item added already into cart")
        }
        else{
          cart.push({...product,"quantity":1})
          this.setState({
            cart:cart
          })
          alert("Item added into cart sucessfully")
        }
      }
    else{
      cart.push({...product,"quantity":1})
      this.setState({
        cart:cart
      })
      alert("Item added into cart sucessfully")
    } 
  }

  incrementProduct=(event,index)=>{
    event.preventDefault();

    const cart=this.state.cart

    if(cart[index].quantity<3){
    cart[index].quantity++;
    this.setState({cart:cart})
    }
    else{
      alert("You can only purchase three units of "+cart[index].name.toUpperCase()+" in single order")
    }

  }

  decrementProduct=(event,index)=>{
    event.preventDefault();

    const cart=this.state.cart
    if(cart[index].quantity>1)
    { cart[index].quantity--;
      this.setState({cart:cart})
    }   
  }

  removeProduct=(event,index)=>{
    event.preventDefault();

    const cart=this.state.cart
    cart.splice(index,1)
    this.setState({cart:cart})
  }

  clearCart=(event)=>{
    event.preventDefault();
    const list=[this.state.cart.map(c=>c.name)]
    console.log(list)
    alert("Thank you for placing order..\n"+list.length+" Items\n"+list)

    this.setState({cart:[]})
  }

  handleLoginSubmit=(event)=>{
    event.preventDefault()
    if(this.state.username=="" || this.state.password==""){
      alert("Please enter username and passowrd")
    }
    else{
    const users=this.state.users
    const user=users.filter(user=>user.username==this.state.username)
    if(user.length==0)
    {
      alert("Sorry! You are not registered..Please create new account")
    }
    else if(user[0].password==this.state.password)
    {
      this.setState({
        login:true
      })
      const detail={"name":user[0].name,"username":user[0].username,"type":user[0].type}
      localStorage.setItem('loginDetail',JSON.stringify(detail))
    }
    else{
      alert("You entered incorrect password..Please try again..")
    }
    this.setState({
      username:"",
      password:""
    })
    }
  }  
  handleLogout=(event)=>
  {
    event.preventDefault()
    this.setState({
      login:false,
      cart:[]
    })
    localStorage.removeItem('loginDetail')
  }
    render(){
    return (
      <BrowserRouter>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
        
        <Header login={this.state.login} handleLogout={this.handleLogout} cartCount={this.state.cart.length}/>
        <Route path="/aboutUs"><AboutUs /></Route>
        <Route path="/contactUs"><ContactUs /></Route>
        <Route path="/login"> {this.state.login ?<Redirect to="/"/>:<Login handleLoginSubmit={this.handleLoginSubmit} username={this.state.username} password={this.state.password} handleChange={this.handleChange}/>}</Route>
       <Route path="/cart">{this.state.login ? <Cart cart={this.state.cart} incrementProduct={this.incrementProduct} decrementProduct={this.decrementProduct} removeProduct={this.removeProduct} clearCart={this.clearCart}/>:<Redirect to="/login" />}</Route>
        <Route path="/register"> <Registration /></Route>
        <Route exact path="/">
          <HomeComponent saveItemToCart={this.saveItemToCart} />
        </Route>

        <Route path="/admin/home"><AdminHome /></Route>
        <Route path="/admin/addProduct"><AddProduct /></Route>
        
        
      </BrowserRouter>
    );
    }
}

render(<App />, document.getElementById('root'));
