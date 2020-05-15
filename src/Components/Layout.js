import React from 'react'
import '../styles/Layout.css'


class Layout extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    console.log('layout',this.props);
    return(
      <div>

        <div className="layout-card">
          <img src={`https://images.assettype.com/${this.props.imgKey}`}/>
          <p class='layout-headline'>{this.props.headline}</p>
          <p class='layout-authorName'> By {this.props.authorName}</p>
        </div>

      </div>
    )
  }
}

export default Layout
