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
      cart:[],
      displayProducts:[]
    }
  }

  componentDidMount()
  {
    axios.get('http://localhost:3001/products').then(res=>this.setState({
      products:res.data,
      displayProducts:res.data
    }))
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

    return(
      <div className="container">
        <CategoryNav  handleCategory={this.handleCategory}/>
        <div>
        {this.state.displayProducts.map((product,index)=>
          <div key={product.id} className="row mb-3 shadow border">
            
           <div className="col-12 col-sm-3">
              <img src={product.src} className="d-flex m-1 mx-auto img-fluid" alt={product.name} />                         
            </div>

          <div className="col-12 col-sm-7 mt-2"  >
            <h5>{product.name}</h5>
            Rating: <span className="badge badge-success text-white p-1" style={{fontSize:"12px"}}><i className="fa fa-star"></i>{product.star}</span>
            <br/><br/>
            
          <ul id={"ul"+index} className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href={"#descp"+index}>Description</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href={"#specf"+index}>Specification</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href={"#review"+index}>Review</a></li>
          </ul>
        <div id={"div"+index} className="tab-content">
          <div id={"descp"+index} className="tab-pane active">
          <h3>HOME</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div id={"specf"+index} className="tab-pane fade">
          <h3>Menu 1</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div id={"review"+index} className="tab-pane fade">
          <h3>Menu 2</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
        </div>
        </div>

          <div className="col-12 col-sm-2 mt-5">
            <h5>₹{product.cost}</h5>
            <p><strike>₹{product.originalcost}</strike> {product.offer}% off</p>
          </div>
          </div>
        )}
       </div>
      </div>
    )
  }

}

export default HomeComponent;