import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label, Input } from 'reactstrap';

class AdminHome extends React.Component{

  
  constructor()
  {
    super();
    this.state={
      products:[],
      editProduct:{
        id:"",
        name: "",
	      specifications:[""],
        src:"",
       star:"",
       cost:"",
       originalcost:"",
       offer:"",
       reviews: [],
	      description:"",
       available: false,
	      type:""
        },
      pageLoaded:false,
      modal:false
    }
  }

  componentDidMount()
  {
    axios.get('http://localhost:3001/products').then(res=>this.setState({
      products:res.data
    })).then(()=>{
      this.setState({
        pageLoaded:true
      })
    })
  }

  refreshProducts(){
    axios.get('http://localhost:3001/products').then(res=>this.setState({
      products:res.data
    }))
  }

  handleEdit=(e,p)=>{
    e.preventDefault()

    this.setState({
      editProduct:p,
      modal:true
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault()

    axios.put('http://localhost:3001/products/'+this.state.editProduct.id,this.state.editProduct).then(()=>{this.setState({
       editProduct:{
        id:"",
        name: "",
	      specifications:[""],
        src:"",
       star:"",
       cost:"",
       originalcost:"",
       offer:"",
       reviews: [],
	      description:"",
       available: false,
	      type:""
        },
      modal:false
    })
    this.refreshProducts()
    console.log(this.state.editProduct.id)
    alert("Product Details Updated Successfully")})
  }

  handleChange=(e)=>{
    const edit=this.state.editProduct
    
    this.setState({
      editProduct:{...edit,[e.target.name]:e.target.value}
    })
  }

  addRow=(e)=>{
    e.preventDefault()
    const edit=this.state.editProduct
    
    edit.specifications.push("")
    this.setState({
      editProduct:edit
    })
  }

  deleteRow=(e,index)=>{
    e.preventDefault()
    const edit=this.state.editProduct
    
    if(edit.specifications.length>1)
    edit.specifications.splice(index,1)
    this.setState({
      editProduct:edit
    })
  }

  handleChangeRow=(e,index)=>{
    const edit=this.state.editProduct
    
    edit.specifications[index]=e.target.value
    this.setState({
      editProduct:edit
    })
    
  }
  cancelUpdate=(e)=>{
    e.preventDefault()
    this.setState({
      editProduct:{
        id:"",
        name: "",
	      specifications:[""],
        src:"",
       star:"",
       cost:"",
       originalcost:"",
       offer:"",
       reviews: [],
	      description:"",
       available: false,
	      type:""
        },
      modal:false
    })
  }
  handleDelete=(event,index)=>{
    event.preventDefault()
    const products=this.state.products
    products.splice(index,1)

    this.setState({
      products:products
    })
    //axios.delete('http://localhost:3001/products').then(()=>this.refreshProducts)
    alert("Product removed successfully..")
  }
  

  render()
  {
    if(this.state.pageLoaded){
    return(
      <div className="container mt-3">
        <Modal isOpen={this.state.modal} className="container row w-100 modal-lg h-100" style={{overflow:"scroll"}}>
        
        <ModalHeader>
        Update Product
        <div className="ml-auto text-right"><button type="button" className="btn btn-white" onClick={this.cancelUpdate}>&times;</button></div>
        </ModalHeader>
        <ModalBody>
          <form id="form">
          <div className="form-group">
            <Label for="name">Product Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={this.state.editProduct.name}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product Name"
              required
            />
            
          </div>
          <div className="form-group">
            <Label for="specifications">Specifications</Label>
            <br/>
            <ol>
            {this.state.editProduct.specifications.map((item,index)=><li key={index}>
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
            {index==this.state.editProduct.specifications.length-1? <button type="button" className="btn btn-success" onClick={(e)=>this.addRow(e)}><i className="fa fa-plus"/> Add</button>:''}</li>)}
            </ol>
          </div>
          <div className="form-group">
            <Label for="src">Product Image</Label>
            <Input
              type="url"
              id="src"
              name="src"
              className="form-control p-1"
              onChange={event => {
                this.handleChange(event);
              }}
              value={this.state.editProduct.src}
              placeholder="Enter Product Image URL"
              required
            />
            {this.state.editProduct.src.trim()!=""?<img src={this.state.editProduct.src} width="100px" height="100px" alt="Image"/>:''}
          </div>
          <div className="form-group">
            <Label for="star">Star Rating</Label>
            <Input
              type="number"
              id="star"
              name="star"
              step="0.1"
              min="0"
              max="5"
              value={this.state.editProduct.star}
              className="form-control"
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product Star Rating"
              required
            />
          </div>
          <div className="form-group">
            <Label for="cost">Cost</Label>
            <Input
              type="number"
              id="cost"
              name="cost"
              min="1"
              className="form-control"
              value={this.state.editProduct.cost}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product cost with offer"
              required
            />
          </div>
          <div className="form-group">
            <Label for="offer">Offer (%)</Label>
            <Input
              type="number"
              id="offer"
              name="offer"
              min="1"
              max="100"
              className="form-control"
              value={this.state.editProduct.offer}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product offer/discount in %"
              required
            />
          </div>
          <div className="form-group">
            <Label for="originalcost">Original Cost (without offer)</Label>
            <Input
              type="number"
              id="originalcost"
              name="originalcost"
              min="1"
              className="form-control"
              value={this.state.editProduct.originalcost}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product cost without offer"
              required
            />
          </div>
          <div className="form-group">
            <Label for="available">Availability</Label>
            <select
              id="available"
              name="available"
              className="form-control"
              value={this.state.editProduct.available}
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
          <div className="form-group">
            <Label for="type">Product Type</Label>
             <select
              id="type"
              name="type"
              className="form-control"
              value={this.state.editProduct.type}
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
          <div className="form-group">
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              id="description"
              name="description"
              min="1"
              className="form-control"
              value={this.state.editProduct.description}
              onChange={event => {
                this.handleChange(event);
              }}
              placeholder="Enter Product description"
              required
            />
          </div>
          </form>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>Update</Button>{' '}
          <Button color="secondary" onClick={this.cancelUpdate}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <div >
        {this.state.products.map((product,index)=>
          <div key={product.id} className="row mb-3 mt-1 shadow border">
            
           <div className="col-12 col-sm-3 m-auto">
              <img src={product.src} className="d-flex m-1 mx-auto img-fluid" alt={product.name} />                         
            </div>

          <div className="col-12 col-sm-7 mt-2">
            <h4>{product.name}</h4>
            Rating: <span className="badge badge-success text-white p-1" style={{fontSize:"12px"}}><i className="fa fa-star"></i>{product.star}</span>
            <p>Availabilitty :{product.available}</p>
            
          <ul id={"ul"+index} className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href={"#descp"+index}>Description</a></li>
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href={"#specf"+index}>Specification</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href={"#review"+index}>Review</a></li>
          </ul>
        <div id={"div"+index} className="tab-content border mb-3" style={{borderTop:"0px solid"}}>
          <div id={"descp"+index} className="container mt-2 tab-pane fade">
          <h5>Description</h5>
          <p>{product.description}</p>
        </div>
        <div id={"specf"+index} className="container mt-2 tab-pane active">
          <h5>Specifications</h5>
          <ul>{product.specifications.map((spe,index)=><li key={index}>{spe}</li>)}</ul>
        </div>
        <div id={"review"+index} className="container mt-2 tab-pane fade">
          <h5>Reviews</h5>
          {product.reviews.map((review,rindex)=>
            <div key={rindex} className="m-3 p-2" style={{border:"1px solid grey",borderLeft:"5px solid grey", borderRadius:"5px"}}>
            <b>Comment: </b>{review.comment}<br/>
            <b>Rating: </b>{review.star}<br/>
            <b>Author: </b>{review.author}
            </div>
          )}
        </div>
        </div>
        </div>

          <div className="col-12 col-sm-2 m-auto text-center">
            <h4>₹{product.cost}</h4>
            <p><strike>₹{product.originalcost}</strike> {product.offer}% off</p>
            <button className="btn btn-primary mb-2" onClick={(event)=>this.handleEdit(event,product)}>Update</button>
            <button className="btn btn-danger mb-2" onClick={(event)=>this.handleDelete(event,index)}>Delete</button>
            
          </div>
          </div>
        )}
        </div>
       </div>

    )
    }
    else{
    return(
      <div className="text-warning text-center mt-5"><h3 ><i className="fa fa-spinner fa-spin text-success" aria-hidden="true"></i>Loading...</h3></div>
    )
    }
  }
}
export default AdminHome