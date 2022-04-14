import React from 'react'
import Feeds from '../../feeds/Feeds'
import './Overview.css'

function Overview() {
  return (
    <div className='overview'>
      <div className='container1'>
        <div className='feeds-heading'>Feeds</div>
        <Feeds/>
      </div>

      <div className='container2'>
        <div className='recommended-container'>
          <div className='recommended-heading'>Recommended clubs</div>
          <div className='recommended-inner-container'>
            <div className='group'>
              <div className='group-image'>
                <img src='https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-monster-square-avatar-funny-cartoon-monster-cyclops-face-vector-halloween-monster-square-avatar-175919095.jpg' alt='grp-img'
                style={{width:'30px'}}/>
              </div>
              <div>
                <div className='group-name'>Club name</div>
                <div className='group-desc'>Lorem ipsum dolor sit amet.</div>
              </div>
            </div>

            <div className='group'>
              <div className='group-image'>
                <img src='https://thumbs.dreamstime.com/b/happy-cartoon-monster-one-eye-cyclops-face-vector-halloween-monster-square-avatar-funny-cartoon-monster-face-vector-halloween-160465254.jpg' alt='grp-img'
                style={{width:'30px'}}/>
              </div>
              <div>
                <div className='group-name'>Club name</div>
                <div className='group-desc'>Lorem ipsum dolor sit amet.</div>
              </div>
            </div>
          </div>
        </div>

        <div className='people-container'>
          <div className='people-heading'>People you may know</div>
          <div className='people-inner-container'>
            <div className='people'>
              <div style={{display:'flex',alignItems:'center'}}>
                <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" 
                className='people-image'/>
                <div className='people-name'>Priyanshu</div>
              </div>
              <div className='connect'>connect</div>
            </div>

            <div className='people'>
              <div style={{display:'flex',alignItems:'center'}}>
                <img src="https://th.bing.com/th/id/R.47e108b2aecf920b7818f3afc483ec96?rik=DRdxpbqhHTIF8A&riu=http%3a%2f%2falbaniandubs.weebly.com%2fuploads%2f5%2f7%2f8%2f2%2f57825701%2fwalter-spies-in-disguise-2019_orig.png&ehk=RTcJunS39qQ1MWAHdI9q7keWNgx5l4PhhWT8LkC62QE%3d&risl=&pid=ImgRaw&r=0" 
                className='people-image'/>
                <div className='people-name'>Priyanshu</div>
              </div>
              <div className='connect'>connect</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview