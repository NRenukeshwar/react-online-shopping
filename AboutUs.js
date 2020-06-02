import React from "react";

function AboutUs() {
  return (
    <div className="container text-center">
      <p
        className="text-warning font-weight-bold mt-5 mb-0"
        style={{ fontSize: "80px" }}
      >
        NN
        <span
          className="text-success font-weight-light mb-0"
          style={{ fontSize: "40px" }}
        >
          {" "}
          Shopping
        </span>
      </p>
      <p className="text-primary font-weight-bold">Since 1997</p>
      <hr style={{ borderTop: "1px solid skyblue" }} />
      <div className="m-5">
        <p>
          NN Shopping is an Indian e-commerce company based in Bengaluru,
          Karnataka, India. It was founded by NN. The company product categories
          such as consumer electronics, fashion, home essentials & groceries,
          and lifestyle products. Mobiles in Electronics stands first in sales
          in our e-commerce. Our Success, because of our thousands of employees.
          At NN India hundreds of disabled associates find equal opportunity and
          a community they relate with. This year 2020, We introduced 24x7
          Support.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
