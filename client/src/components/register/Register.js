import React,{useState} from 'react'
import './Register.css'
import {VscPerson,VscOrganization} from 'react-icons/vsc'

function Register() {

    const [registerAs,setRegisterAs] = useState('mentor')

    const [registerData,setRegisterData] = useState({
        type:registerAs,
        name:'',
        email:'',
        password:''
    })

    const registerUser = (e) => {
        e.preventDefault()
        console.log({registerData})
    }

    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]:e.target.value
        })
    }

    const registerAsChange = (value) => {
        setRegisterAs(value)
        setRegisterData({
            ...registerData,
            type: value
        })
    }


  return (
    <div className='login-page'>
        <div className='login-form'>
            <div className='login-heading'>Register as</div>
            <div className='login-as-container'>
                <div className={registerAs==='mentor'?'login-as-icons-active':'login-as-icons-unactive'} onClick={() => registerAsChange('mentor')}>
                    <VscPerson className='login-as-icon'/>
                    <div>mentor</div>
                </div>
                <div className={registerAs==='student'?'login-as-icons-active':'login-as-icons-unactive'} onClick={() => registerAsChange('student')}>
                    <VscOrganization className='login-as-icon'/>
                    <div>student</div>
                </div>
            </div>

            <form onSubmit={registerUser}>
                <div className='form-element'>
                    <div className='form-input-title'>Your name</div>
                    <input className='form-element-input' type="text" placeholder='Enter name' name='name' value={registerData.name} onChange={handleRegisterChange}/>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>Email-id</div>
                    <input className='form-element-input' type="text" placeholder='Enter email' name='email' value={registerData.email} onChange={handleRegisterChange}/>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>Password</div>
                    <input className='form-element-input' type="text" placeholder='Enter password' name='password' value={registerData.password} onChange={handleRegisterChange}/>
                </div>

                <div className='form-element'>
                    <button className='form-login-button' type='submit'>Register</button>
                </div>
                </form>
        </div>
    </div>
  )
}

export default Register