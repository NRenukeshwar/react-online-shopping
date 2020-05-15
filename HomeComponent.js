import React from 'react'

class HomeComponent extends React.Component{

  constructor(props)
  {
    super(props);
  }

  render()
  {
    var dd=localStorage.getItem('loginDetail')
    return(
      <div>
        homes
        
        {console.log(this.dd)}
      </div>
    )
  }

}

export default HomeComponent;