import React from 'react'
import {
  Card, CardBody, CardFooter, Button, CardHeader, Row, Col
} from 'reactstrap';
import {Link} from 'react-router-dom'
class Login extends React.Component{

  constructor()
  {
    super();
    this.state={

    }
  }

  render(){
    return(
    <div className="container">
      <Row style={{height:"600px"}}>
      <Col sm="6" className="m-auto">
      <Card className="text-center" style={{backgroundColor: "",
            boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px"}}>
        <CardHeader className="bg- text-warning font-weight-bold" tag="h4">LOGIN</CardHeader>
        <CardBody>
                
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: "50px",backgroundColor: "#FFC312",border: "0", color:"black"}}><i className="fas fa-user"></i></span>
                                </div>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email ID" title="Email Id"
                                    autofocus="autofocus" required />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: "50px",backgroundColor: "#FFC312",border: "0", color:"black"}}><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password"
                                    title="Password" required/>
                            </div>

                            <div className="form-group ">
                                <input type="submit" value="Login" className="btn btn-success font-weight-bold"/>
                            </div>
                    </form>
                
        </CardBody>
        <CardFooter className="bg-">
          <div class="justify-content-center">
            Don't have an account?<Link to="/register" className="nav-link">Create new Account</Link>
          </div>
        </CardFooter>
      </Card>
    </Col>
    </Row>
      </div>
    )
  }
} 

export default Login;