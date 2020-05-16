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


import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super();
  this.state={
      login:false,
      username:"",
      password:"",
      users:[]
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

  saveCart=(event, cart)=>{
    event.preventDefault()


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
      const detail=user[0]
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
      login:false
    })
    localStorage.removeItem('loginDetail')
  }
    render(){
    return (
      <BrowserRouter>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />

        <Header login={this.state.login} handleLogout={this.handleLogout} />
        <Route path="/aboutUs"><AboutUs /></Route>
        <Route path="/contactUs"><ContactUs /></Route>
        <Route path="/login"> {this.state.login ?<Redirect to="/"/>:<Login handleLoginSubmit={this.handleLoginSubmit} username={this.state.username} password={this.state.password} handleChange={this.handleChange}/>}</Route>
        <Route path="/cart">{this.state.login ? <Cart cart={}/>:<Redirect to="/login" />}</Route>
        <Route path="/register"> <Registration /></Route>
        <Route exact path="/">
          <HomeComponent saveCart={this.saveCart} />
        </Route>
        
        
      </BrowserRouter>
    );
    }
}

render(<App />, document.getElementById('root'));
