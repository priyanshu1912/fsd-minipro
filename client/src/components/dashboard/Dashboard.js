import React,{useState} from 'react'
import './Dashboard.css'
import {IoSettingsOutline} from 'react-icons/io5'
import {AiOutlineDashboard} from 'react-icons/ai'
import Overview from './dashboard-routes/overview/Overview'
import Profile from './dashboard-routes/profile/Profile'

function Dashboard() {
    const [activeTab,setActiveTab] = useState('overview')

  return (
    <div className='dashboard'>
        <div className='dashboard-side'>
            <div className='dashboard-side-message'>Welcome back!</div>

            <div className='profile-info'>
                <div className='profile-info-name'>Priyanshu Bhardwaj</div>
                <div className='profile-info-email'>priyanshubhradwaj19dec@gmail.com</div>
            </div>

            <div className='dashboard-options'>
                <div className={activeTab==='overview'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('overview')}>
                    <AiOutlineDashboard className='dashboard-profile-icon'/>
                    Overview
                </div>
                <div className={activeTab==='profile'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('profile')}>
                    <IoSettingsOutline className='dashboard-profile-icon'/>
                    Profile settings
                </div>
            </div>
        </div>

        <div className='dashboard-main'>
            {
                activeTab==='overview' &&
                <Overview/>
            }
            {
                activeTab==='profile' &&
                <Profile/>
            }
        </div>
    </div>
  )
}

export default Dashboard