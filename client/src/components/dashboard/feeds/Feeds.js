import React from 'react'
import './Feeds.css'
import {AiFillHeart} from 'react-icons/ai'

function Feeds() {
  return (
    <>
    <div className='feed-container'>
        <div className='feed-info'>
            <div style={{display:'flex',alignItems:'center'}}>
              <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" 
              className='feed-image'/>
              <div className='feed-name'>
                <div>Priyanshu</div>
                <div className='feed-time'>3:45 PM</div>
              </div>
            </div>
            <div></div>
        </div>

        <div className='feed-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque modi quae nobis ratione repudiandae. Commodi non adipisci officiis vel!
        </div>

        <div className='feed-options'>
          <div className='feed-buttons'>
            <AiFillHeart className='feed-like'/> 21
          </div>
          {/* <div className='feed-buttons'>
            <AiFillHeart className='feed-like'/> 21
          </div>
          <div className='feed-buttons'>
            <AiFillHeart className='feed-like'/> 21
          </div> */}
        </div>
    </div>

    <div className='feed-container'>
        <div className='feed-info'>
            <div style={{display:'flex',alignItems:'center'}}>
              <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" 
              className='feed-image'/>
              <div className='feed-name'>
                <div>Priyanshu</div>
                <div className='feed-time'>3:45 PM</div>
              </div>
            </div>
            <div></div>
        </div>

        <div className='feed-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque modi quae nobis ratione repudiandae. Commodi non adipisci officiis vel!
        </div>

        <div className='feed-options'>
          <div className='feed-buttons'>
            <AiFillHeart className='feed-like'/> 21
          </div>
          {/* <div className='feed-buttons'>
            <AiFillHeart className='feed-like'/> 21
          </div>
          <div className='feed-buttons'>
            <AiFillHeart className='feed-like'/> 21
          </div> */}
        </div>
    </div>
    </>
  )
}

export default Feeds