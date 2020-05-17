import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Layout from '../molecule/Layout'
export default function TestComponent(props){

  const[slugData,setSlugData] = useState([])
  useEffect(async () => {
    const result = await axios(props.url);
    setSlugData(result.data.items);
  },[])

  console.log('slugData',slugData);
  return(
    <div>
    <p style={{color:"red"}}>{props.url}</p>
    <div>
      {
        slugData.filter(item=>item.type==='story')
        .slice(0,6)
        .map(item=>
          <Layout
          imgKey={item.story["hero-image-s3-key"]}
          headline={item.story.headline}
          authorName={item.story["author-name"]}
          />
        )
      }

    </div>
    </div>

  )
}
