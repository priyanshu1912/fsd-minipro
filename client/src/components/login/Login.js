import React,{useState} from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import {VscPerson,VscOrganization} from 'react-icons/vsc'
import {AiOutlineUser,AiOutlineLock} from 'react-icons/ai'

function Login() {
    const navigate = useNavigate()
    // const [loginAs,setLoginAs] = useState('mentor')

    const [loginData,setLoginData] = useState({
        type: 'mentor',
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

  return (
    <div className='login-page'>
        <form className='login-form' onSubmit={loginUser}>
            <div className='login-heading'>AMISOCIAL login</div>
            <div className='login-as-container'>
                <div className={loginData.type==='mentor'?'login-as-icons-active':'login-as-icons-unactive'} onClick={()=>setLoginData({...loginData,type:'mentor'})}>
                    <VscPerson className='login-as-icon'/>
                    <div>mentor</div>
                </div>
                <div className={loginData.type==='student'?'login-as-icons-active':'login-as-icons-unactive'} onClick={()=>setLoginData({...loginData,type:'student'})}>
                    <VscOrganization className='login-as-icon'/>
                    <div>student</div>
                </div>
            </div>
            <div className='form-element'>
                <div className='form-input-title'>Email-id</div>
                <div style={{display:'flex',alignItems:'center',border:'1px solid lightgrey',paddingLeft:'1vw'}}>
                    <AiOutlineUser/>
                    <input className='form-element-input' type="text" placeholder='Enter email-id' name='email' value={loginData.email} onChange={handleLoginChange}/>
                </div>
            </div>

            <div className='form-element'>
                <div className='form-input-title'>Password</div>
                <div style={{display:'flex',alignItems:'center',border:'1px solid lightgrey',paddingLeft:'1vw'}}>
                    <AiOutlineLock/>
                    <input className='form-element-input' type="text" placeholder='Enter password' name='password' value={loginData.password} onChange={handleLoginChange}/>
                </div>
            </div>

            <div className='form-element' onClick={loginUser}>
                <div className='form-login-button' type='submit'>Log in</div>
            </div>

            <div className='not-registered'>
                Not a member? <span><Link to='/register' className='register-link'>Create an account</Link></span>
            </div>
        </form>
    </div>
  )
}

export default Login