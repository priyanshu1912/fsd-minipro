import React,{useState} from 'react'
import './Dashboard.css'
import {IoSettingsOutline} from 'react-icons/io5'
import {IoMdArrowDropdown} from 'react-icons/io'
import {AiOutlineDashboard,AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {CgFeed,CgCardClubs} from 'react-icons/cg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Overview from './dashboard-routes/overview/Overview'
import Profile from './dashboard-routes/profile/Profile'
import Clubs from './dashboard-routes/clubs/Clubs'
import DashboardNav from '../dashboard-nav/DashboardNav'
import Projects from './dashboard-routes/projects/Projects'

function Dashboard(props) {
    console.log(props)
    const [activeTab,setActiveTab] = useState('dashboard')

  return (
    <div className='dashboard'>
        <div className='dashboard-side'>
            <div className='profile-info'>
                <div className='profile-info-name'>AMISOCIAL</div>
            </div>

            <div className='dashboard-options'>
                <div className={activeTab==='dashboard'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('dashboard')}>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <CgFeed className='dashboard-profile-icon'/>
                        Dashboard
                    </div>
                    <MdKeyboardArrowRight className='profile-option-arrow'/>
                </div>

                <div className={activeTab==='clubs'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('clubs')}>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <CgCardClubs className='dashboard-profile-icon'/>
                        Clubs
                    </div>
                    <MdKeyboardArrowRight className='profile-option-arrow'/>
                </div>

                <div className={activeTab==='projects'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('projects')}>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <AiOutlineFundProjectionScreen className='dashboard-profile-icon'/>
                        Projects
                    </div>
                    <MdKeyboardArrowRight className='profile-option-arrow'/>
                </div>

                <div className={activeTab==='profile'?'dashboard-option-active':'dashboard-option-unactive'} onClick={()=>setActiveTab('profile')}>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <IoSettingsOutline className='dashboard-profile-icon'/>
                        Profile
                    </div>
                    <MdKeyboardArrowRight className='profile-option-arrow'/>
                </div> 
            </div>
        </div>

        <div className='dashboard-main'>
            <DashboardNav/>
            
            {
                activeTab==='dashboard' &&
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
            {
                activeTab==='projects' &&
                <Projects/>
            }
        </div>
    </div>
  )
}

export default Dashboard