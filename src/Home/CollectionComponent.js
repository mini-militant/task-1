import React,{useState,useEffect} from 'react';
import axios from 'axios'
import CategoryComponent from './CategoryComponent'
import './collectionComponent.css'
import Title from './Title/Title'


export default function CollectionComponent(){

  const [data,setData] = useState([])
  const baseUrl = 'https://thequint-malibu-beta.quintype.io/api/v1/collections/';

  useEffect(() => {
    async function fetchData(){
      const result = await axios(
        baseUrl+'home',
      );
      setData(result.data.items.filter(item=>item.type==='collection'));
    }
    fetchData();
  },[])


  return(
    <div className='collection-container'>
    {
      data.map(filteredData=>{
        return(
          <div key={filteredData.id}>
            <CategoryComponent url={baseUrl+filteredData.slug} name={filteredData.name}/>
          </div>
      )
      })
    }
    </div>
  )
}
