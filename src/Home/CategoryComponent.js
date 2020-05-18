import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Layout from '../molecule/Layout'
import './categoryComponent.css'
import Title from './Title/Title'

export default function CategoryComponent(props){

  const[storiesData,setStoriesData] = useState([])
  const [shouldShowTitle,setShouldShowTitle] = useState(false)

  useEffect(() => {
    async function fetchData(){
      const result = await axios(props.url);
      let stories = result.data.items.filter(item=>item.type==='story');
      setStoriesData(stories);
      setShouldShowTitle(stories.length>0)
    }
    fetchData();
  },[])



  return(
    <div>
      {
        shouldShowTitle
        ?
        <Title name={props.name}/>
        :
        null
      }

      <div className='slug-container'>
      {
        storiesData.slice(0,6)
        .map(item=>
          <div key={item.id}>
          <Layout
          imgKey={item.story["hero-image-s3-key"]}
          headline={item.story.headline}
          authorName={item.story["author-name"]}
          />
          </div>
        )
      }

    </div>
    </div>

  )
}
