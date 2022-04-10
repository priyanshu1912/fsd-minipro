import React,{useState} from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import {VscPerson,VscOrganization} from 'react-icons/vsc'

function Login() {
    const navigate = useNavigate()

    const [loginData,setLoginData] = useState({
        email:'',
        password:''
    })

    const loginUser = (e) => {
        e.preventDefault()
        console.log({loginData})
        navigate('/dashboard')
    }

    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        })
    }

    const [loginAs,setLoginAs] = useState('mentor')


  return (
    <div className='login-page'>
        <form className='login-form' onSubmit={loginUser}>
            <div className='login-heading'>Login as</div>
            <div className='login-as-container'>
                <div className={loginAs==='mentor'?'login-as-icons-active':'login-as-icons-unactive'} onClick={()=>setLoginAs('mentor')}>
                    <VscPerson className='login-as-icon'/>
                    <div>mentor</div>
                </div>
                <div className={loginAs==='student'?'login-as-icons-active':'login-as-icons-unactive'} onClick={()=>setLoginAs('student')}>
                    <VscOrganization className='login-as-icon'/>
                    <div>student</div>
                </div>
            </div>
            <div className='form-element'>
                <div className='form-input-title'>Email-id</div>
                <input className='form-element-input' type="text" placeholder='Enter email' name='email' value={loginData.email} onChange={handleLoginChange}/>
            </div>

            <div className='form-element'>
                <div className='form-input-title'>Password</div>
                <input className='form-element-input' type="text" placeholder='Enter password' name='password' value={loginData.password} onChange={handleLoginChange}/>
            </div>

            <div className='form-element'>
                <button className='form-login-button' type='submit'>Log in</button>
            </div>

            <div className='not-registered'>
                Not registered? <span><Link to='/register' className='register-link'>Create an account</Link></span>
            </div>
        </form>
    </div>
  )
}

export default Login