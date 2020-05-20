import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AdminHome extends React.Component{

  
  constructor()
  {
    super();
    this.state={
      products:[],
      editProduct:{
        id:"",
        name: "",
	      specifications:[],
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

  handleChange=(e)=>{
    const edit=this.state.editProduct
    
    this.setState({

    })
  }



  render()
  {
    var dd=localStorage.getItem('loginDetail')
    dd=JSON.parse(dd);

    if(this.state.pageLoaded){
    return(
      <div className="container">
        <Modal isOpen={this.state.modal}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>


        </ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>{' '}
          <Button color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
        {this.state.products.map((product,index)=>
          <div key={product.id} className="row mb-3 shadow border">
            
           <div className="col-12 col-sm-3">
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
          <p>{}</p>
        </div>
        </div>
        </div>

          <div className="col-12 col-sm-2 m-auto text-center">
            <h4>₹{product.cost}</h4>
            <p><strike>₹{product.originalcost}</strike> {product.offer}% off</p>
            <button className="btn btn-primary mb-2" onClick={(event)=>this.handleEdit(event,product)}>Update</button>
            <button className="btn btn-danger mb-2" onClick={(event)=>this.handleDelete(event,product)}>Delete</button>
            
          </div>
          </div>
        )}
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