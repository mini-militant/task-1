import React from 'react'
import './Layout.css'
import Image from '../atom/Image/Image'
import Headline from '../atom/Headline/Headline'
import AuthorName from '../atom/AuthorName/AuthorName'

export default function Layout(props){
  console.log('props layout',props);
    return(
      <div>

        <div className="layout-card">
          <Image imgKey={props.imgKey}/>
          <Headline headline={props.headline}/>
          <AuthorName authorName={props.authorName}/>
        </div>

      </div>
    )

}
