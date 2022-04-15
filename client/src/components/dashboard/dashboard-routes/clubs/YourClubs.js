import React from 'react'
import './YourClubs.css'

function YourClubs() {
  return (
    <div className='your-club-container'>
        <div className='your-club'>
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
            <div className='remove-club'>exit club</div>
        </div>
    </div>
  )
}

export default YourClubs