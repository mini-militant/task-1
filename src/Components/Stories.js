import React from 'react'
import Layout from './Layout'
import '../styles/Stories.css'

class Stories extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }

   componentDidMount(){

     fetch('https://thequint-malibu-beta.quintype.io/api/v1/stories')
    .then(res=>res.json())
    .then(res=>this.setState({
      data:res.stories
    }))

  }

  render(){

    const {data}=this.state;
    return(
      <div className='stories-container'>

        {
          data.map(item=>
            <Layout
            imgKey={item["hero-image-s3-key"]}
            headline={item.headline}
            authorName={item["author-name"]}

            />
          )
        }

      </div>
    )
  }
}

export default Stories
