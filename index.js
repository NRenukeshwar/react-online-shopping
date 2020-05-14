import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import HomeComponent from './HomeComponent'
import Cart from './Cart'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super();
  this.state={
      login:false
  }
  }

  handleLogout=(event)=>
  {
    event.preventDefault()
    this.setState({
      login:false
    })
  }
    render(){
    return (
      <BrowserRouter>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />

        <Header login={this.state.login} handleLogout={this.handleLogout}/>
        <Route path="/aboutUs"><AboutUs /></Route>
        <Route path="/contactUs"><ContactUs /></Route>
        <Route path="/login"> <Login /></Route>
        <Route path="/cart">{this.state.login ? <Cart />:<Redirect to="/login" />}</Route>
        
        <Route exact path="/">
          <HomeComponent login={this.state.login}/>
        </Route>
        


        
      </BrowserRouter>
    );
    }
}

render(<App />, document.getElementById('root'));
