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
    
    {console.log("home")}

    return(
      <div className="container">
        <CategoryNav  handleCategory={this.handleCategory}/>
        <div>
        {this.state.displayProducts.map(product=>
          <div key={product.id} className="row mb-3 shadow border">
            
           <div className="col-12 col-sm-3">
              <img src={product.src} className="d-flex m-1 mx-auto img-fluid" alt={product.name} />                         
            </div>

          <div className="col-12 col-sm-7 mt-2"  >
            <h5>{product.name}</h5>
            Rating: <span className="badge badge-success text-white p-1" style={{fontSize:"12px"}}><i className="fa fa-star"></i>{product.star}</span>
            <br/>

            
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