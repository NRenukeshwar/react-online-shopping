import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  CardHeader,
  Row,
  Col,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";
function Login(props) {
  return (
    <div className="container">
      <Row style={{ height: "600px" }}>
        <Col sm="6" className="m-auto">
          <Card
            className="text-center"
            style={{
              backgroundColor: "",
              boxShadow:
                "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: "10px"
            }}
          >
            <CardHeader className="text-warning font-weight-bold" tag="h4">
              LOGIN
            </CardHeader>
            <CardBody>
              <form onSubmit={(event)=>props.handleLoginSubmit(event)}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      style={{
                        width: "110px",
                        backgroundColor: "#FFC312",
                        border: "0",
                        color: "black"
                      }}
                    >
                      <i className="fas fa-user" />&nbsp;Username
                    </span>
                  </div>
                  <Input
                    type="email"
                    className="form-control"
                    id="username"
                    name="username"
                    value={props.username}
                    onChange={(event)=> props.handleChange(event)}
                    placeholder="Enter Email ID"
                    title="Email Id"
                    required
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      style={{
                        width: "110px",
                        backgroundColor: "#FFC312",
                        border: "0",
                        color: "black"
                      }}
                    >
                      <i className="fas fa-key" />&nbsp;Password
                    </span>
                  </div>
                  <Input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={props.password}
                    onChange={event => props.handleChange(event)}
                    placeholder="Enter Password"
                    title="Password"
                    required
                  />
                </div>

                <div className="form-group ">
                  <button
              type="submit"
              id="submit"
              name="submit"
              className="btn btn-success"
            >
              Login
            </button>
                </div>
              </form>
            </CardBody>
            <CardFooter>
              <div className="justify-content-center">
                Don't have an account?
                <Link to="/register" className="nav-link">
                  Create new Account
                </Link>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
