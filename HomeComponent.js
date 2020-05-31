import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import CategoryNav from './CategoryNav'

class HomeComponent extends React.Component{

  constructor(props)
  {
    super(props);
    this.state={
      products:[],
      displayProducts:[],
      pageLoaded:false
    }
  }

  componentDidMount()
  {
    axios.get('http://localhost:3001/products').then(res=>this.setState({
      products:res.data,
      displayProducts:res.data
    })).then(()=>{
      this.setState({
        pageLoaded:true
      })
    })
  }
  commentSubmit=(event,form,index)=>{
    event.preventDefault()
    console.log(index)
    
    const reviews={
      star:form[index].rating.value,
      comment:form[index].comment.value,
      author:form[index].author.value
    }
    const displayProducts=this.state.displayProducts
    displayProducts[index].reviews.push(reviews)
    this.setState({
      displayProducts:displayProducts
    })
    console.log(reviews)
    form[index].rating.value=""
    form[index].comment.value=""
    form[index].author.value=""
  }
  handleCategory=(event,category)=>{
    if(category!='')
    {
      console.log(category)
      this.setState({
      displayProducts:this.state.products.filter(product=>product.type==category.toLowerCase())
      })
    }
    else{
      this.setState({
          displayProducts=this.state.products
      })
    }
  }

  render()
  {
    var dd=localStorage.getItem('loginDetail')
    dd=JSON.parse(dd);

    if(this.state.pageLoaded){
    return(
      <div className="container">
        <CategoryNav  handleCategory={this.handleCategory}/>
        <div>
        {this.state.displayProducts.map((product,index)=>
          <div key={product.id} className="row mb-3 shadow border">
            
           <div className="col-12 col-sm-3 m-auto">
              <img src={product.src} className="d-flex mb-1 mx-auto img-fluid" alt={product.name} />                         
            </div>

          <div className="col-12 col-sm-7 mt-2">
            <h4>{product.name}</h4>
            Rating: <span className="badge badge-success text-white p-1" style={{fontSize:"12px"}}><i className="fa fa-star"></i>{product.star}</span>
            <br/><br/>
            
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
          <button className="btn btn-primary btn-sm mb-2" data-toggle="collapse" data-target={"#add"+product.id}>Add Comment</button>
          <div id={"add"+product.id} className="m-3 p-2 collapse">
          <form name="myform" onSubmit={event=>this.commentSubmit(event,myform,index)}>
          <b>Rating: </b><input type="number" id="rating" name="rating" step="0.1" min="0" max="5" className="form-control" required/>
            <b>Comment: </b><input type="text" id="comment" name="comment" className="form-control" required/>
            
            <b>Author: </b><input type="text" id="author" name="author" className="form-control" required/>
            <div className="mt-2" align="center">  
              <button className="btn btn-success btn-sm">Add</button>
            </div>
            </form>
            </div>
            
        </div>
        </div>
        </div>

          <div className="col-12 col-sm-2 m-auto text-center">
            <h4>₹{product.cost}</h4>
            <p><strike>₹{product.originalcost}</strike> {product.offer}% off</p>
            {product.available?<button className="btn btn-primary mb-2" onClick={(event)=>this.props.saveItemToCart(event,product)}>Add to Cart</button>:<p>Sold Out</p>}
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

export default HomeComponent;