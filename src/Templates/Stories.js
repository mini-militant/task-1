import React,{ useState , useEffect} from 'react'
import Layout from '../molecule/Layout'
import './Stories.css'


function Stories(){
  const [data, setData] = useState([]);
  const [ count, setCount ] = useState(0)

  useEffect(()=>{
    fetch('https://thequint-malibu-beta.quintype.io/api/v1/stories')
    .then(res=>res.json())
    .then(res=>setData(res.stories))
  },[count])

  return (
    <div className="stories-container">
      {
        data.map(item=>{
          return(
            <div key={item.id}>
            <Layout
            imgKey={item["hero-image-s3-key"]}
            headline={item.headline}
            authorName={item["author-name"]}
            />
            </div>
          )
        }

        )
      }
    </div>
  );
}
export default Stories
