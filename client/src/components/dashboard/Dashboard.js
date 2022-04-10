import React,{useState} from 'react'
import './Dashboard.css'
import {IoSettingsOutline} from 'react-icons/io5'
import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineDashboard} from 'react-icons/ai'
import {RiUser3Fill} from 'react-icons/ri'
import {CgFeed,CgCardClubs} from 'react-icons/cg'
import Overview from './dashboard-routes/overview/Overview'
import Profile from './dashboard-routes/profile/Profile'
import Clubs from './dashboard-routes/clubs/Clubs'

function Dashboard() {
    const [activeTab,setActiveTab] = useState('clubs')

  return (
    <div className='dashboard'>
        <div className='dashboard-side'>
            {/* <div className='dashboard-side-message'>
                <div>Hello Priyanshu!</div>
                <div className='side-message-greet'>Good to see you again</div>
            </div> */}

            {/* <div className='profile-info'>
                <div className='profile-info-name'>Priyanshu Bhardwaj</div>
                <div className='profile-info-email'>priyanshubhradwaj19dec@gmail.com</div>
            </div> */}

            <div className='dashboard-options'>
                <div className={activeTab==='overview'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('overview')}>
                    <AiOutlineDashboard className='dashboard-profile-icon'/>
                    Overview
                </div>
                <div className={activeTab==='feeds'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('feeds')}>
                    <CgFeed className='dashboard-profile-icon'/>
                    Feeds
                </div>
                <div className={activeTab==='clubs'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('clubs')}>
                    <CgCardClubs className='dashboard-profile-icon'/>
                    Clubs
                </div>
                <div className={activeTab==='profile'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('profile')}>
                    <IoSettingsOutline className='dashboard-profile-icon'/>
                    Settings
                </div>
            </div>
        </div>

        <div className='dashboard-main'>
            <div className='dashboard-main-nav'>
                <h3>Dashboard</h3>
                <div className='user-profile'>
                    <RiUser3Fill className='user-profile-icon'/>
                    <div>Priyanshu Bhardwaj</div>
                    <IoIosArrowDown className='user-profile-arrow'/>
                </div>
            </div>
            {
                activeTab==='overview' &&
                <Overview/>
            }
            {
                activeTab==='profile' &&
                <Profile/>
            }
            {
                activeTab==='clubs' &&
                <Clubs/>
            }
        </div>
    </div>
  )
}

export default Dashboard