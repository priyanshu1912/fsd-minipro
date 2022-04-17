import React,{useState} from 'react'
import './Projects.css'
import {BsArrowRightShort} from 'react-icons/bs'
import OpenProject from './OpenProject'

function Projects() {
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
  return (
    <div>
        <div className='project-heading'>Projects</div>
        <div className='projects-container'>
            <div className='project'>
                <div className='project-image-container'>
                    <img src="https://cdn.onlinewebfonts.com/svg/img_44448.png" className='project-image'/>
                    <div className='project-time'>FEW SECONDS AGO</div>
                </div>
                <div>
                    <div className='professor-name'>professor name</div>
                    <div className='project-name'>PROJECT NAME</div>
                    <div className='project-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ratione.</div>
                </div>
                <div className='explore-project'>
                    <div onClick={()=>openProject('data')}>Explore</div> 
                    <BsArrowRightShort/>
                </div>
            </div>

            {
                open.value &&
                <OpenProject open={open} setOpen={setOpen}/>
            }
        </div>        
    </div>
  )
}

export default Projects