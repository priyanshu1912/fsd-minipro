import React, { useState, useEffect } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { VscPerson, VscOrganization } from 'react-icons/vsc'
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import { MdError, MdCheckCircle } from 'react-icons/md'
import axios from 'axios'
import PulseLoader from "react-spinners/PulseLoader";

function Login() {
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        userType: 'Faculty',
        username: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [message, setMessage] = useState({
        type: '',
        value: ''
    })

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 2000)
    }, [isError])

    const loginUser = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log({ loginData })

        axios.post('http://localhost:5000/login', loginData)
            .then(res => {
                console.log(res.data)
                const data = res.data
                if (data.status === 200) {
                    setLoading(false)
                    navigate('/dashboard', { state: data })
                }
                if (data.status === 400) {
                    setMessage({ ...message, type: 'error', value: data.message })
                    setError(true)
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='login-page'>
            {
                isError &&
                <div className='error-container'>
                    {/* {
                    message.type==='error' ? 
                    <MdError style={{color:'red',fontSize:'35px',marginRight:'0.5vw'}}/> 
                    : 
                    <MdCheckCircle style={{color:'green',fontSize:'35px',marginRight:'0.5vw'}}/>
                } */}
                    <MdError style={{ color: 'red', fontSize: '35px', marginRight: '0.5vw' }} />
                    <div className='error-message'>{message.value}</div>
                </div>
            }
            <form className='login-form' onSubmit={loginUser}>
                <div className='login-heading'>AMISOCIAL login</div>
                <div className='login-as-container'>
                    <div className={loginData.userType === 'Faculty' ? 'login-as-icons-active' : 'login-as-icons-unactive'} onClick={() => setLoginData({ ...loginData, userType: 'Faculty' })}>
                        <VscPerson className='login-as-icon' />
                        <div>faculty</div>
                    </div>
                    <div className={loginData.userType === 'Student' ? 'login-as-icons-active' : 'login-as-icons-unactive'} onClick={() => setLoginData({ ...loginData, userType: 'Student' })}>
                        <VscOrganization className='login-as-icon' />
                        <div>student</div>
                    </div>
                </div>
                <div className='form-element'>
                    <div className='form-input-title'>Username</div>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid lightgrey', paddingLeft: '1vw' }}>
                        <AiOutlineUser />
                        <input className='form-element-input' type="text" placeholder='Enter username' name='username' value={loginData.username} onChange={handleLoginChange} />
                    </div>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>Password</div>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid lightgrey', paddingLeft: '1vw' }}>
                        <AiOutlineLock />
                        <input className='form-element-input' type="password" placeholder='Enter password' name='password' value={loginData.password} onChange={handleLoginChange} />
                    </div>
                </div>

                <div className='form-element' onClick={loginUser}>
                    <div className='form-login-button' type='submit'>
                        {
                            loading ?
                                <PulseLoader color='#2196f3' size={5} />
                                :
                                'Log in'
                        }
                    </div>
                </div>

                <div className='not-registered'>
                    Not a member? <span><Link to='/register' className='register-link'>Create an account</Link></span>
                </div>
            </form>
        </div>
    )
}

export default Login