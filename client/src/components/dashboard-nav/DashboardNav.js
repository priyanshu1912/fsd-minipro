import React from 'react'
import './DashboardNav.css'
import {IoMdArrowDropdown,IoMdNotificationsOutline} from 'react-icons/io'
import {BiMessageSquareDetail} from 'react-icons/bi'

function DashboardNav(props) {
  const userData = props.userData

  return (
    <div className='dashboard-main-nav'>
        {/* <div className='dashboard-heading'></div> */}
        <div className='user-profile'>
            <IoMdNotificationsOutline className='notification'/>
            <BiMessageSquareDetail className='message'/>
            <img src={userData.profilePhoto} 
            className='user-profile-icon'/>
            <div className='user-profile-name'>Hello, <span style={{color:'black'}}>{userData.username}</span></div>
            <IoMdArrowDropdown className='user-profile-arrow'/>
        </div>
    </div>
  )
}

export default DashboardNav