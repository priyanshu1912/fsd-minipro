import React,{useEffect,useState} from 'react'
import './DashboardNav.css'
import {IoMdArrowDropdown,IoMdNotificationsOutline} from 'react-icons/io'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useStore} from 'react-context-hook'
import axios from 'axios'

function DashboardNav(props) {
  const [userInfo,setUserInfo] = useStore('user')
  const userData = props.userData

  const [user,setUser] = useState(null)
  console.log({user})

  useEffect(()=>{
    axios.get(`http://localhost:5000/user/${userData.userType.toLowerCase()}/${userData.username}`)
    .then(res=>{
      setUser(res.data)
      setUserInfo(res.data)
      sessionStorage.setItem('userType',res.data.userType)
      sessionStorage.setItem('username',res.data.username)
      sessionStorage.setItem('profilePhoto',res.data.profilePhoto)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div className='dashboard-main-nav'>
      <div></div>
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