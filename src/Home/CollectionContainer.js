import React,{useState,useEffect} from 'react';
import Api from '../API/Api'
import axios from 'axios'
import SlugComponent from './SlugComponent'
import './collectionContainer.css'
import Title from './Title/Title'

export default function CollectionContainer(){
  const Url = [
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/top-story-home",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/videos-home",
  'https://thequint-malibu-beta.quintype.io/api/v1/collections/fit',
  'https://thequint-malibu-beta.quintype.io/api/v1/collections/entertainment',
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/webqoof",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/covid-19-faq",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/opinion",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/charcha-2020",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/education",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/my-report",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/podcast",

  "https://thequint-malibu-beta.quintype.io/api/v1/collections/sports",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/big-story",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/neon",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/tech-and-auto",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/explainers",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/quint-lens-home",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/gender",
  "https://thequint-malibu-beta.quintype.io/api/v1/collections/news",
  ]

  const [data,setData] = useState([])

  useEffect(async () => {
    const result = await axios(
      'https://thequint-malibu-beta.quintype.io/api/v1/collections/home',
    );
    setData(result.data.items);
  },[])


  return(
    <div className='collection-container'>
    {
      data.filter(item=>item.type==='collection')
      .map(filteredData=>{
        let url=Url.filter(i=>i.split('/').includes(filteredData.slug)).join()
        return(
          <div >
        <Title name={filteredData.name}/>
        <SlugComponent url={url}/>

        </div>
      )
      })

    }



    </div>
  )
}
