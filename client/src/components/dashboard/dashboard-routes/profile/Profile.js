import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <>
    <div>Profile settings</div>

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
    </form>
    </>
  )
}

export default Profile