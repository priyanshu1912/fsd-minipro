import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Feeds from '../../feeds/Feeds'
import './Overview.css'
import {useNavigate} from 'react-router-dom'


function Overview(props) {
  const navigate = useNavigate()

  const [recommendedPeople,setRecommendedPeople] = useState(null)
  const [recommendedClub,setRecommendedClub] = useState(null)
  const {userData} = props

  const [openProfile,setOpenProfile] = useState({
    value: false,
    data: null
  })

  console.log(recommendedPeople)

  useEffect(()=>{
    axios.post(`http://localhost:5000/recommend/${userData.userType.toLowerCase()}/${userData.username}`)
    .then(res=>{
      setRecommendedPeople(res.data.recommended)
    })
    .catch(err=>{
      console.log(err)
    })
    
    axios.post('http://localhost:5000/recommend/club')
    .then(res=>{
      setRecommendedClub(res.data.recommended)
    })
    .catch(err=>{
      console.log(err)
    })

    // Promise.all([
    //   axios.post(`http://localhost:5000/recommend/${userData.userType.toLowerCase()}/${userData.username}`),
    //   axios.post(`http://localhost:5000/recommend/club/${userData._id}`)
    // ])
    // .then(res => {
    //   setRecommendedPeople(res[0].data.recommeded)
    //   setRecommendedClub(res[1].data)
    //   console.log(res[1].data)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  },[])


  const viewProfile = (id) => {
    setOpenProfile({
      ...openProfile,
      value: true,
      data: id
    })
  }

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
            {
              recommendedClub && recommendedClub.length !== 0 &&
              <>
                {
                  recommendedClub.map(item => {
                    return (
                      <div className='group'>
                        <div className='group-image'>
                          <img src='https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-monster-square-avatar-funny-cartoon-monster-cyclops-face-vector-halloween-monster-square-avatar-175919095.jpg' alt='grp-img' style={{width:'30px'}}/>
                        </div>
                        <div style={{width:'75%'}}>
                          <div className='group-name'>{item.name}</div>
                          <div className='group-desc'>{item.description}</div>
                        </div>
                      </div>
                    )
                  })
                }
              </>
            }
          </div>
        </div>
        

        <div className='people-container'>
          <div className='people-heading'>People you may know</div>
          <div className='people-inner-container'>
            {
              recommendedPeople && recommendedPeople.length !== 0 &&
              <>
              {
                recommendedPeople.map(item => {
                  return (
                    <div className='people'>
                      <div style={{display:'flex',alignItems:'center'}}>
                        <img src={item.profilePhoto} className='people-image'/>
                        <div className='people-name'>{item.name}</div>
                      </div>
                      <div onClick={()=>viewProfile(item)} className='connect'>view</div>
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