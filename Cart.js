import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardHeader, CardBody, CardFooter} from 'reactstrap'

function Cart(props){

    if(props.cart.length>0){
    const total=0;
    props.cart.map(p=>total+=Number(p.cost)*Number(p.quantity))

    return(
      <React.Fragment>
        <div className="container">
          <Card className="mt-2">
          <CardHeader tag="h3" className="bg-white">
            My Cart
          </CardHeader>
          <CardBody>
          {
              props.cart.map((item,index)=>
                  <div className="row border p-2">
                    <div className="col-12 col-sm-3 text-center">
                    
                      <img src={item.src} className="img-fluid" width="100px" height="200px" alt={item.name}/>
                    
                      <div>
                      <button className="btn btn-light btn-sm" onClick={(event)=>props.decrementProduct(event,index)}>
                      <i className="fa fa-minus" ></i>
                      </button>
                      
                        <span className="badge p-3" >{item.quantity}</span>
                      
                      <button className="btn btn-light btn-sm" onClick={(event)=>props.incrementProduct(event,index)} >
                      <i className="fa fa-plus"></i>
                      </button>
                      </div>
                    </div>
                   
                    
                    <div className="col-12 col-sm-9">
                      <h4>{item.name}</h4>
                      <p>{item.specifications[0]}</p>
                    
                      <div className="d-flex">
                      <h4>₹{Number(item.cost)*Number(item.quantity)}/- </h4> &nbsp;<strike className="mt-1">₹{Number(item.originalcost)*Number(item.quantity)}</strike>&nbsp;&nbsp;<p className="mt-1 text-success font-weight-bold">{item.offer}% off</p>
                      </div>
                      <button className="btn btn-danger" onClick={()=>props.removeProduct(event,index)}>Remove</button>
                    </div>
                    
              </div>
              )
          }
          </CardBody>
          <CardFooter className="bg-white text-center">
            
            <h4>Total Amount ₹{total}</h4>
            <button className="btn btn-success">Place order</button>
          </CardFooter>
          </Card>
        </div>
      </React.Fragment>
    )
    }
    else
    return(
      <div className="text-center mt-5">
        Your Cart is Empty...Please click to add items to cart..
        <br/>
        <br/>
        <Link to="/"><button className="btn btn-primary">Add Items</button></Link>
      </div>
    )
  
}

export default Cart