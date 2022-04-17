import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Feeds from '../../feeds/Feeds'
import './Overview.css'

function Overview(props) {
  const [recommended,setRecommended] = useState(null)
  const {userData} = props

  useEffect(()=>{
    axios.post(`http://localhost:5000/recommend/${userData.userType.toLowerCase()}/${userData.username}`)
    .then(res=>{
      setRecommended(res.data.recommended)
    })
    .catch(err=>{
      console.log(err)
    })
    
    // axios.post(`http://localhost:5000/recommend/club/${userData.username}`)
    // .then(res=>{
    //   console.log(res)
    //   setRecommended(res.data.recommended)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
  },[])

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
            {
              recommended && recommended.length !== 0 &&
              <>
              {
                recommended.map(item => {
                  return (
                    <div className='people'>
                      <div style={{display:'flex',alignItems:'center'}}>
                        <img src={item.profilePhoto} className='people-image'/>
                        <div className='people-name'>{item.name}</div>
                      </div>
                      <div className='connect'>connect</div>
                    </div>
                  )
                })
              }
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview