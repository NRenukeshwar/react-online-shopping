import React from 'react'

function ContactUs()
{
  return(
    <div className="container text-center">
      <p className="text-warning font-weight-bold mt-5" style={{fontSize:"80px",marginBottom:"0px"}}>NN 
      <span className="text-success font-weight-light" style={{fontSize:"40px"}}> Shopping</span></p>
      <hr className="m-3" style={{borderTop:"1px solid skyblue"}}/>
      <br/>
      <p className="text-info">You can contact us through...</p>
      
      <p className="m-2"> write to <span><i className="fas fa-envelope m-2" style={{fontSize:"20px",color: "#139DF9"}}></i></span> NNShopping@gmail.com</p>
      <br/>
      <div className="row ml-5 mr-5">
        <hr style={{width:"45%",borderTop:"1px solid gold"}}/>
        <label className="font-weight-bold">OR</label>
        <hr style={{width:"45%",borderTop:"1px solid gold"}}/>
      </div>
      <div>
      <p className="mt-3" style={{color:"#4138BE"}} title="Facebook"><span><i className="fab fa-facebook" style={{fontSize:"40px"}}></i></span> Facebook</p>
      <p style={{color: "#FF0000"}} title="Google"><span><i className="fab fa-google-plus-square" style={{fontSize:"40px"}}></i></span> Google</p>
      <p style={{color: "#139DF9"}} title="Twitter"><span><i className="fab fa-twitter-square" style={{fontSize:"40px"}}></i></span> Twitter</p>
      </div>
    </div>
  )
}

export default ContactUs;