import React,{useState} from 'react'
import './YourClubs.css'
import {useStore} from 'react-context-hook'

function YourClubs(props) {
    const [clubData,setClubData] = useStore('clubData')
    const [selected,setSelected] = useStore('selected')
    const {post,setPost} = props

    const open = (value) => {
        setPost(true)
        setClubData(value)
        setSelected(value)
    }

    const removeClub = () => {
        
    }

  return (
    <div className='your-club-container'>
        <div className={selected==='your club'?'selected-club':'your-club'} onClick={()=>open('your club')}>
            <div style={{display:'flex',alignItems:'center'}}>
                <img src='https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-monster-square-avatar-funny-cartoon-monster-cyclops-face-vector-halloween-monster-square-avatar-175919095.jpg' alt='grp-img'
                className='your-club-image'/>
                <div>
                    <div className='your-club-name'>Club name</div>
                    <div className='your-club-desc'>
                        Lorem ipsum dolor sit amet.
                        <div>120 members</div>
                    </div>
                </div>
            </div>
            <div onClick={removeClub} className='remove-club'>exit club</div>
        </div>
    </div>
  )
}

export default YourClubs