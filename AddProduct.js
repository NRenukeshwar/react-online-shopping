import React from 'react'
import { Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
class AddProduct extends React.Component{

 constructor()
  {
    super();
    this.state={

        name: "",
	      specifications:[],
        src:"",
       star:"",
       cost:"",
       originalcost:"",
       offer:"",
	      description:"",
       available: "",
	      type:""
    }
  }

    handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  render()
  {
    return(
      <div className="container">

         <h2 className="text-warning text-center">Add Product</h2>
        <form onSubmit={this.handleSubmit} className="">
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="name">Product Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="name">----</Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="name">Product Image (.jpg, .png)</Label>
            <Input
              type="file"
              accept="image/*"
              id="src"
              name="src"
              className="form-control p-1"
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product Image"
              
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="star">Star Rating</Label>
            <Input
              type="number"
              id="star"
              name="star"
              step="0.1"
              min="0"
              max="5"
              value={this.state.star}
              className="form-control"
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product Star Rating"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="cost">Cost</Label>
            <Input
              type="number"
              id="cost"
              name="cost"
              min="1"
              className="form-control"
              value={this.state.cost}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product cost with offer"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="offer">Offer (%)</Label>
            <Input
              type="number"
              id="offer"
              name="offer"
              min="1"
              max="100"
              className="form-control"
              value={this.state.offer}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product offer/discount in %"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="originalcost">Original Cost (without offer)</Label>
            <Input
              type="number"
              id="originalcost"
              name="originalcost"
              min="1"
              className="form-control"
              value={this.state.originalcost}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product cost without offer"
              required
            />
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="available">Availability</Label>
            <select
              id="available"
              name="available"
              className="form-control"
              value={this.state.available}
              onChange={event => {
                this.handleChange(event);
              }}
              required
            >
              <option value="">Select available</option>
              <option value="true">Available</option>
              <option value="false">Sold Out</option>
            </select>
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="type">Product Type</Label>
             <select
              id="type"
              name="type"
              className="form-control"
              value={this.state.type}
              onChange={event => {
                this.handleChange(event);
              }}
              required
            >
              <option value="">Select type</option>
              <option value="mobiles">Mobiles</option>
              <option value="desktops">Desktops</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              id="description"
              name="description"
              min="1"
              className="form-control"
              value={this.state.description}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product description"
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
              Add
            </button>
          </div>
          </form>

      </div>
    )
  }
}

export default AddProduct