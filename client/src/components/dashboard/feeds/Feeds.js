import React,{useState,useEffect} from 'react'
import './Feeds.css'
import {AiFillHeart} from 'react-icons/ai'
import axios from 'axios'

function Feeds() {
  const [feeds,setFeeds] = useState(null)
  console.log({feeds})

  const getData = () => {
    axios.get('http://localhost:5000/club')
    .then(res=>{
        const data = res.data
        const userClubs = data.filter(item => item.students.includes('625b973da035c0ba0404b9b4'))
        let feed = []
        userClubs.forEach(item => {
          const club = item.posts
          club.forEach(item => feed.push(item))
        });

        feed.sort((a,b)=>(a.createdAt < b.createdAt) ? 1 : -1)
        setFeeds(feed)
    })
    .catch(err=>{
      console.log(err)
    })
}

useEffect(()=>{
    getData()
},[])

console.log({feeds})

  return (
    <>
    {
      feeds && feeds.length !== 0 &&
      <div className='feeds'>
      {
        feeds.map(item => {
          return (
            <div className='feed-container'>
              <div className='feed-info'>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <img src={item.image} className='feed-image'/>
                    <div className='feed-name'>
                      <div>{item.username}</div>
                      <div className='feed-time'>{item.createdAt.slice(0,item.createdAt.indexOf('T'))}</div>
                    </div>
                  </div>
                  <div></div>
              </div>

        <div className='feed-content'>
          {item.content}
        </div>

        {/* <div className='feed-options'>
          <div className='feed-buttons'>
            <AiFillHeart className='feed-like'/> 21
          </div>
          <div className='feed-buttons'>
            <AiFillHeart className='feed-like'/> 21
          </div>
          <div className='feed-buttons'>
            <AiFillHeart className='feed-like'/> 21
          </div>
        </div> */}
        
    </div>
          )
        })
      }
      </div>
    }
    </>
  )
}

export default Feeds