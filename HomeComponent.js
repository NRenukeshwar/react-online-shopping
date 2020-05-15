import React from 'react'

class HomeComponent extends React.Component{

  constructor(props)
  {
    super(props);
  }

  render()
  {
    var dd=localStorage.getItem('loginDetail')
    dd=JSON.parse(dd)
    return(
      <div>
        homes

        {console.log(dd==null)}
      </div>
    )
  }

}

export default HomeComponent;