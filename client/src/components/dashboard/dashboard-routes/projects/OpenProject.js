import React,{useState} from 'react'
import './OpenProject.css'
import {BiCheck} from 'react-icons/bi'
import {IoIosClose} from 'react-icons/io'
import axios from 'axios'
import {useStore} from 'react-context-hook'

function OpenProject(props) {
    const {open,setOpen} = props
    const projectDetails = open.data.item

    const [userInfo,setUserInfo] = useStore('user')

    const applyData = {
        name: userInfo.name,
        email: userInfo.email,
        program: userInfo.program
    }

    const [subscribe,setSubscribe] = useState(false)

    const applyProject = () => {
        axios.patch(`http://localhost:5000/projects/${projectDetails._id}/apply`,applyData)
        .then(res=>{
            console.log(res)
            setSubscribe(true)
        }) 
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='open-project'>
        <div className='project-details'>
            <div style={{textAlign:'right'}}>
                <IoIosClose onClick={()=>setOpen({...open,value:false})} style={{fontSize:'25px',cursor:'pointer'}}/>
            </div>

            <div className='openproject-date'>{projectDetails.createdAt.slice(0,projectDetails.createdAt.indexOf('T'))}</div>

            <div style={{display:'flex'}}>
                <img src="https://cdn.onlinewebfonts.com/svg/img_44448.png" className='openproject-image' />
                <div>
                    <div className='openproject-raised'>Raised by - {projectDetails.creator}</div>
                    <div className='openproject-title'>{projectDetails.title}</div>
                    <div className='openproject-desc'>{projectDetails.message}</div>
                    {/* <div>{projectDetails.tags}</div> */}
                </div>
            </div>

            <div style={{textAlign:'right'}}>
                <div className='available' onClick={applyProject}>
                    {
                        subscribe ?
                        <div className='subscribe-container'>
                            <BiCheck className='subscribe-button'/>
                            <div>Sent</div>
                        </div>
                        :
                        <>I'm available</>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OpenProject