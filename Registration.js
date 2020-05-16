import React from 'react'
import { Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios'

class Registration extends React.Component{

  constructor()
  {
    super();
    this.state={
      "username":"",
      "password":"",
      "name":""
    }

  }

    handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    if (
      this.state.name != "" &&
      this.state.username != "" &&
      this.state.password != ""
    ) {
      const user = {
        "name": this.state.name,
        "username": this.state.username,
        "password": this.state.password,
        "type":"user"
      };
      axios.post('http://localhost:3001/users',user)
      .then( ()=>
        this.setState({
          "username":"",
          "password":"",
          "name":""}))
      .then(()=>window.location.replace("/login"))
    
      alert("--Movie Added successfully--");
      console.log(this.state)
    } else {
      alert("All feilds are mandatory");
    }
  }

  render()
  {
    return (
       <div className="container mt-3">
        <h2 className="text-warning text-center">Registration</h2>
        <div className="row">
        <form onSubmit={this.handleSubmit} className="col-sm-6 mx-auto" style={{border:"2px solid gold",padding:"20px",borderRadius:"10px"}}>
          <div className="form-group">
            <Label for="username">Email ID</Label>
            <Input
              type="email"
              id="username"
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Enter your Email ID"
              required
            />
          </div>
          <div className="form-group">
            <Label for="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="[A-Za-z]+"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="form-group">
            <Label for="password">Password</Label>
            <Input
              type="text"
              id="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/">
              <button
                type="button"
                id="cancel"
                name="cancel"
                className="btn btn-secondary mr-2"
              >
                Back
              </button>
            </Link>
            <button
              type="submit"
              id="submit"
              name="submit"
              className="btn btn-success"
            >
              Register
            </button>
          </div>
          </form>
          </div>
          </div>
    )
  }
}

export default Registration