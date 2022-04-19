import React,{useState,useEffect} from 'react'
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
import {useLocation,useNavigate} from 'react-router-dom'
import logo from '../../assets/Amisocial-logo.png'
import {MdError,MdCheckCircle} from 'react-icons/md'

function Dashboard() {
    const location = useLocation()
    const navigate = useNavigate()

    const [popup,setPopup] = useState(false)

    const userData = location.state.data

    const [activeTab,setActiveTab] = useState('dashboard')


    const logout = () => {
        sessionStorage.removeItem('username')
        setPopup(true)

        setTimeout(()=>{
            setPopup(false)
        },2000)

        window.location.reload()
    }

    useEffect(()=>{
        const username = sessionStorage.getItem('username')

        if(!username){
            navigate('/login')
        }
    },[])

  return (
    <div className='dashboard'>
        {
            popup &&
            <div className='error-container'>
                {/* {
                    message.type==='error' ? 
                    <MdError style={{color:'red',fontSize:'35px',marginRight:'0.5vw'}}/> 
                    : 
                    <MdCheckCircle style={{color:'green',fontSize:'35px',marginRight:'0.5vw'}}/>
                } */}
                <MdCheckCircle style={{color:'green',fontSize:'35px',marginRight:'0.5vw'}}/> 
                <div className='error-message'>logout successful</div>
            </div>
        }
        <div className='dashboard-side'>
            <div className='profile-info'>
                <img src={logo} style={{width:'100px'}}/>
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

            <div style={{textAlign:'center',position:'absolute',bottom:'10vh',right:'0',left:'0'}}>
                <div className='logout' onClick={()=>logout()}>Log out</div>
            </div>
        </div>

        <div className='dashboard-main'>
            <DashboardNav userData={userData}/>
            
            {
                activeTab==='dashboard' &&
                <Overview userData={userData}/>
            }
            {
                activeTab==='profile' &&
                <Profile userData={userData}/>
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