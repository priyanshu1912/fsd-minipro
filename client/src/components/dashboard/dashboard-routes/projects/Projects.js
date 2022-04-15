import React from 'react'
import './Projects.css'
import {BsArrowRightShort} from 'react-icons/bs'

function Projects() {
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
                    <div>Explore</div> 
                    <BsArrowRightShort/>
                </div>
            </div>

            <div className='project'>
                <div className='project-image-container'>
                    <img src="https://external-preview.redd.it/KcyghIJF1DCg0pZayz-WVeYq82u7F9zSULjwPfiAwmY.jpg?auto=webp&s=c96c39311959dbda2ecafcc1042816b141a0e9eb" className='project-image'/>
                    <div className='project-time'>FEW SECONDS AGO</div>
                </div>
                <div>
                    <div className='professor-name'>professor name</div>
                    <div className='project-name'>PROJECT NAME</div>
                    <div className='project-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ratione.</div>
                </div>
                <div className='explore-project'>
                    <div>Explore</div> 
                    <BsArrowRightShort/>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Projects