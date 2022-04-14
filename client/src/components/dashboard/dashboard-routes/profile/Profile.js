import React from 'react'
import './Profile.css'
import {AiOutlineEdit,AiOutlineMail,AiOutlineLink,AiOutlineLinkedin} from 'react-icons/ai'

function Profile() {
  return (
    <>
    {/* <div>Profile settings</div>

    <form className='profile-settings-form'>
        <div className='form-element'>
            <div className='form-input-title'>Name</div>
            <input type="text" className='form-element-input'/>
        </div>

        <div className='form-element'>
            <div className='form-input-title'>Email-id</div>
            <input type="text" className='form-element-input'/>
        </div>

        <div className='form-element'>
            <div className='form-input-title'>Password</div>
            <input type="text" className='form-element-input'/>
        </div>

        <div>
            <button className='update-profile-button' type='submit'>Update profile</button>
        </div>
    </form> */}

    <div className='profile-container'>
        <div className='profile'>
            <div className='profile-inner'>
                <img src="https://th.bing.com/th/id/OIP.wQXfxYT-sTJyhTCa7akaWAAAAA?pid=ImgDet&rs=1" 
                className='profile-image'/>
                <div className='profile-info-container'>
                    <div className='profile-info-name'>
                        Priyanshu Bhardwaj
                    </div>
                </div>
            </div>
        </div>

        <div className='about-container'>
            <div className='about'>
                <div className='about-heading'>Bio <AiOutlineEdit className='edit-button'/></div>
                <div className='about-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet porro tempore quibusdam laudantium ipsa similique eos blanditiis facere perferendis!</div>
            </div>
            <div className='contact'>
                <div>Contact info</div>
                <div>
                    <div className='contact-element'>
                        <AiOutlineMail className='contact-icon'/> priyanshu@gmail.com
                    </div>
                    {/* <div className='contact-element'>
                        <AiOutlineLink className='contact-icon'/> www.priyanshu.com
                    </div> */}
                    <div className='contact-element'>
                        <AiOutlineLinkedin className='contact-icon'/> priyanshu1912
                    </div>
                </div>
            </div>
        </div>

        <div className='project-container'>
            <div className='projects'>
                <div>Current projects</div>
            </div>
            <div className='skills'>
                <div>Publications</div>
            </div>
        </div>

        <div className='project-container'>
            <div className='projects'>
                <div>Achievements</div>
            </div>
            <div className='skills'>
                <div>Links</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile