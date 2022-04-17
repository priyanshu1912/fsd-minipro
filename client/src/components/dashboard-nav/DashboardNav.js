import React,{useEffect,useState} from 'react'
import './DashboardNav.css'
import {IoMdArrowDropdown,IoMdNotificationsOutline} from 'react-icons/io'
import {BiMessageSquareDetail} from 'react-icons/bi'
import axios from 'axios'

function DashboardNav(props) {
  const userData = props.userData

  const [user,setUser] = useState(null)

  useEffect(()=>{
    axios.get(`http://localhost:5000/user/${userData.userType.toLowerCase()}/${userData.username}`)
    .then(res=>{
      setUser(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div className='dashboard-main-nav'>
        <div className='user-profile'>
          {
            user &&
            <>
            <IoMdNotificationsOutline className='notification'/>
            <BiMessageSquareDetail className='message'/>
            <img src={user.profilePhoto} 
            className='user-profile-icon'/>
            <div className='user-profile-name'>Hello, <span style={{color:'black'}}>{user.username}</span></div>
            {/* <IoMdArrowDropdown className='user-profile-arrow'/> */}
            </>
          }
        </div>
    </div>
  )
}

export default DashboardNav