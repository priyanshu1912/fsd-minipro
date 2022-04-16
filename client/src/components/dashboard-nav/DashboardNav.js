import React,{useEffect} from 'react'
import './DashboardNav.css'
import {IoMdArrowDropdown,IoMdNotificationsOutline} from 'react-icons/io'
import {BiMessageSquareDetail} from 'react-icons/bi'

function DashboardNav() {

  useEffect(()=>{
    
  },[])

  return (
    <div className='dashboard-main-nav'>
        {/* <div className='dashboard-heading'></div> */}
        <div className='user-profile'>
            <IoMdNotificationsOutline className='notification'/>
            <BiMessageSquareDetail className='message'/>
            <img src="https://th.bing.com/th/id/OIP.wQXfxYT-sTJyhTCa7akaWAAAAA?pid=ImgDet&rs=1" 
            className='user-profile-icon'/>
            <div className='user-profile-name'>Hello, <span style={{color:'black'}}>Priyanshu</span></div>
            <IoMdArrowDropdown className='user-profile-arrow'/>
        </div>
    </div>
  )
}

export default DashboardNav