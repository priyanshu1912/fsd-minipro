import React,{useState} from 'react'
import './Profile.css'
import {AiOutlineEdit,AiOutlineMail,AiOutlineLink,AiOutlineLinkedin} from 'react-icons/ai'
import {IoAddCircleOutline} from 'react-icons/io5'
import NewForm from './NewForm'

function Profile(props) {
    const [bioDisabled,setBioDisabled] = useState(true)

    const [newForm, setNewForm] = useState({
        open: false,
        text: ''
    })

    const userData = props.userData
    const userProjects = userData.currentProjects
    console.log(userData)

    const addNewProject = (value) => {
        setNewForm({
            ...newForm,
            open:true,
            text: value
        })
    }

  return (
    <>
    <div className='profile-container'>
        <div className='profile'>
            <div className='profile-inner'>
                <img src={userData.profilePhoto}
                className='profile-image'/>
                <div className='profile-info-container'>
                    <div className='profile-info-name'>
                        {userData.name}
                    </div>
                </div>
            </div>
        </div>

        <div className='about-container'>
            <div className='about'>
                <div className='about-heading'>Bio <AiOutlineEdit onClick={()=>setBioDisabled(false)} className='edit-button'/></div>
                <textarea disabled={bioDisabled} type='text' rows='5' className='about-content' placeholder='Bio not added' />
            </div>
            <div className='contact'>
                <div>Contact info</div>
                <div>
                    <div className='contact-element'>
                        <AiOutlineMail className='contact-icon'/> 
                        <input type='text' className='about-content' value={userData.email}/>
                    </div>
                    {/* <div className='contact-element'>
                        <AiOutlineLink className='contact-icon'/> www.priyanshu.com
                    </div> */}
                    <div className='contact-element'>
                        <AiOutlineLinkedin className='contact-icon'/> 
                        <input type='text' className='about-content' value='Linkedin profile'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='project-container'>
            <div className='projects'>
                <div style={{display:'flex',alignItems:'center'}}>
                    Current projects 
                    <IoAddCircleOutline className='edit-button' onClick={()=>addNewProject('project')}/>
                </div>
                <div className='projects-inner-container'>
                    {
                        userProjects.length===0 ?
                        <>No projects added</>
                        :
                        userProjects.map(item => {
                            return (
                                <>
                                <div>{item.title}</div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className='skills'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <div>Publications</div> 
                    <IoAddCircleOutline className='edit-button' onClick={()=>addNewProject('publication')}/>
                </div>
                <div className='publications-inner-container'>
                    No publications added
                </div>
            </div>
        </div>

        <div className='project-container'>
            <div className='projects'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <div>Achievements</div>
                    <IoAddCircleOutline className='edit-button' onClick={()=>addNewProject('achievement')}/>
                </div>
            </div>
            {/* <div className='skills'>
                <div>Links</div>
            </div> */}
        </div>

        {/* <div style={{textAlign:'right'}}>
            <div className='save-button'>Save</div>
        </div> */}

        {
            newForm.open &&
            <NewForm userData={userData} text={newForm.text} setNewForm={setNewForm} newForm={newForm} />
        }
    </div>
    </>
  )
}

export default Profile