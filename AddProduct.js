import React from 'react'
import { Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios'

class AddProduct extends React.Component{

 constructor()
  {
    super();
    this.state={

        name: "",
	      specifications:[""],
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
    })
  }

  addRow=(e)=>{
    e.preventDefault()
    const arr=this.state.specifications
    arr.push("")
    this.setState({
      specifications:arr
    })
  }

  deleteRow=(e,index)=>{
    e.preventDefault()
    const arr=this.state.specifications
    if(arr.length>1)
    arr.splice(index,1)
    this.setState({
      specifications:arr
    })
  }

  handleChangeRow=(e,index)=>{
    const arr=this.state.specifications
    arr[index]=e.target.value
    this.setState({
      specifications:arr
    })
    
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const {        name,
	      specifications,
        src,
       star,
       cost,
       originalcost,
       offer,
	      description,
       available,
	      type}= this.state
    if(
        name!="" &&
	      specifications.length>0 &&
        src!="" &&
       star!="" &&
       cost!="" &&
       originalcost!="" &&
       offer!="" &&
	      description!="" &&
       available!="" &&
	      type!=""
    )
    {
      const newProduct ={...this.state,reviews:[],available:Boolean(this.state.available)}
      axios.post('http://localhost:3001/products',newProduct).then(res=>this.setState({
      name: "",
	      specifications:[""],
        src:"",
       star:"",
       cost:"",
       originalcost:"",
       offer:"",
	      description:"",
       available: "",
	      type:""
    }))
    alert("New Product added successfully")
    }
    else
    {
      alert("All feilds are mandatory")
    }
    console.log(this.state)
  }
  render()
  {
    return(
      <div className="container">

        <h2 className="text-warning text-center mt-3">Add Product</h2>
        <form onSubmit={this.handleSubmit}>
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
            <Label for="specifications">Specifications</Label>
            <br/>
            <ol>
            {this.state.specifications.map((item,index)=><li key={index}>
            <div className="input-group">
              <Input
              type="text"
              id={"specifications"+index}
              name={"specifications"+index}
              className="form-control mb-1"
              value={item}
              onChange={event => {
                this.handleChangeRow(event,index);
              }}
              placeholder="Enter Product specifications"
              required
            />
             <div className="input-group-append">
                <button type="button" onClick={(e)=>this.deleteRow(e,index)} className="btn btn-danger" style={{height:"38px"}}><i className="fa fa-trash "/></button>
              </div>
            </div>
            {index==this.state.specifications.length-1? <button type="button" className="btn btn-success" onClick={(e)=>this.addRow(e)}><i className="fa fa-plus"/> Add</button>:''}</li>)}
            </ol>
          </div>
          <div className="form-group row col-sm-6 mx-auto">
            <Label for="src">Product Image</Label>
            <Input
              type="url"
              id="src"
              name="src"
              className="form-control p-1"
              onChange={event => {
                this.handleChange(event);
              }}
              value={this.state.src}
              placeholder="Enter Product Image URL"
              required
            />
            {this.state.src.trim()!=""?<img src={this.state.src} width="100px" height="100px" alt="Image"/>:''}
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
            <Link to="/admin/home">
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