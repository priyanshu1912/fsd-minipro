import React,{useState,useEffect} from 'react'
import './Projects.css'
import {BsArrowRightShort} from 'react-icons/bs'
import OpenProject from './OpenProject'
import axios from 'axios'

function Projects() {
    const [projects,setProjects] = useState(null)
    const [open,setOpen] = useState({
        value: false,
        data: null
    })

    const openProject = (value) => {
        setOpen({
            ...open,
            value: true,
            data: value
        })
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/projects')
        .then(res=>{
            setProjects(res.data.projects)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

  return (
    <div>
        <div className='project-heading'>Projects</div>
        <div className='projects-container'>
            {
                projects && projects.length !==0 ?
                <>
                {
                    projects.map(item => {
                        return (
                            <div className='project'>
                                <div className='project-image-container'>
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_44448.png" className='project-image'/>
                                    <div className='project-time'>{item.createdAt.slice(0,item.createdAt.indexOf('T'))}</div>
                                </div>
                                <div>
                                    <div className='professor-name'>Raised by - {item.creator}</div>
                                    <div className='project-name'>{item.title}</div>
                                    <div className='project-info'>{item.message}</div>
                                    {/* <div>{item.tags}</div> */}
                                </div>
                                <div className='explore-project'>
                                    <div onClick={()=>openProject({item})}>Explore</div> 
                                    <BsArrowRightShort/>
                                </div>
                            </div>
                        )
                    })
                }
                </>
                :
                <>No ongoing projects</>
            }

            {
                open.value &&
                <OpenProject open={open} setOpen={setOpen}/>
            }
        </div>        
    </div>
  )
}

export default Projects