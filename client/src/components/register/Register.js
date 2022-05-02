import React, { useState, useEffect } from 'react'
import './Register.css'
import { VscPerson, VscOrganization } from 'react-icons/vsc'
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineLock, AiOutlineMail, AiOutlineBook } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MdError, MdCheckCircle } from 'react-icons/md'
import PulseLoader from "react-spinners/PulseLoader";

function Register() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [message, setMessage] = useState({
        type: '',
        value: ''
    })
    const [errors, setErrors] = useState(null)

    const [registerData, setRegisterData] = useState({
        userType: 'Faculty',
        username: '',
        name: '',
        email: '',
        password: '',
        profilePhoto: '',
        program: ''
    })

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setError(false)
    //     },2000)
    // },[isError])

    const registerUser = (e) => {
        e.preventDefault()
        console.log({ registerData })

        axios.post('http://localhost:5000/register', registerData)
            .then(res => {
                const data = res.data
                if (data.status === 200) {
                    setError(true)
                    setTimeout(() => {
                        navigate('/login')
                    }, 1500)
                }
                if (data.status === 400) {
                    // setMessage({...message,type:'error',value:data.message})
                    // setError(true)
                    setNext(false)
                    setErrors(data.errors)
                }
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }

    // const registerAsChange = (value) => {
    //     setRegisterAs(value)
    //     setRegisterData({
    //         ...registerData,
    //         type: value
    //     })
    // }


    const [next, setNext] = useState(false)
    const [avatar, setAvatar] = useState()

    const changeAvatar = (value) => {
        setAvatar(value)
        setRegisterData({
            ...registerData,
            profilePhoto: value
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
                    <MdCheckCircle style={{ color: 'green', fontSize: '35px', marginRight: '0.5vw' }} />
                    <div className='error-message'>User created successfully</div>
                </div>
            }
            <div className='login-form'>
                {
                    next === false ?
                        <>
                            <div className='login-heading'>AMISOCIAL register</div>
                            <div className='login-as-container'>
                                <div className={registerData.userType === 'Faculty' ? 'login-as-icons-active' : 'login-as-icons-unactive'} onClick={() => setRegisterData({ ...registerData, userType: 'Faculty' })}>
                                    <VscPerson className='login-as-icon' />
                                    <div>faculty</div>
                                </div>
                                <div className={registerData.userType === 'Student' ? 'login-as-icons-active' : 'login-as-icons-unactive'} onClick={() => setRegisterData({ ...registerData, userType: 'Student' })}>
                                    <VscOrganization className='login-as-icon' />
                                    <div>student</div>
                                </div>
                            </div>

                            <form>
                                <div className='form-element'>
                                    <div className='form-input-title'>Your name</div>
                                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid lightgrey', paddingLeft: '1vw' }}>
                                        <AiOutlineUserAdd />
                                        <input className='form-element-input' type="text" placeholder='Enter name' name='name' value={registerData.name} onChange={handleRegisterChange} />
                                    </div>
                                    <div className='field-error'>{errors && errors.name}</div>
                                </div>

                                <div className='form-element'>
                                    <div className='form-input-title'>Username</div>
                                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid lightgrey', paddingLeft: '1vw' }}>
                                        <AiOutlineUser />
                                        <input className='form-element-input' type="text" placeholder='Enter username' name='username' value={registerData.username} onChange={handleRegisterChange} />
                                    </div>
                                    <div className='field-error'>{errors && errors.username}</div>
                                </div>

                                <div className='form-element'>
                                    <div className='form-input-title'>Email-id</div>
                                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid lightgrey', paddingLeft: '1vw' }}>
                                        <AiOutlineMail />
                                        <input className='form-element-input' type="text" placeholder='Enter email' name='email' value={registerData.email} onChange={handleRegisterChange} />
                                    </div>
                                    <div className='field-error'>{errors && errors.email}</div>
                                </div>

                                <div className='form-element'>
                                    <div className='form-input-title'>Program</div>
                                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid lightgrey', paddingLeft: '1vw' }}>
                                        <AiOutlineBook />
                                        <input className='form-element-input' type="text" placeholder='Enter program' name='program' value={registerData.program} onChange={handleRegisterChange} />
                                    </div>
                                </div>

                                <div className='form-element'>
                                    <div className='form-input-title'>Password</div>
                                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid lightgrey', paddingLeft: '1vw' }}>
                                        <AiOutlineLock />
                                        <input className='form-element-input' type="password" placeholder='Enter password' name='password' value={registerData.password} onChange={handleRegisterChange} />
                                    </div>
                                    <div className='field-error'>{errors && errors.password}</div>
                                </div>
                            </form>

                            <div className='form-element'>
                                <div className='form-login-button' onClick={() => setNext(true)}>
                                    Next
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className='login-heading'>Select an avatar</div>
                            <div className='avatars'>
                                <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt='1'
                                    className={avatar === 'https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png' ? 'selected-avatar' : 'unselected-avatar'}
                                    onClick={() => changeAvatar('https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png')} />

                                <img src="https://th.bing.com/th/id/R.47e108b2aecf920b7818f3afc483ec96?rik=DRdxpbqhHTIF8A&riu=http%3a%2f%2falbaniandubs.weebly.com%2fuploads%2f5%2f7%2f8%2f2%2f57825701%2fwalter-spies-in-disguise-2019_orig.png&ehk=RTcJunS39qQ1MWAHdI9q7keWNgx5l4PhhWT8LkC62QE%3d&risl=&pid=ImgRaw&r=0" alt='2'
                                    className={avatar === 'https://th.bing.com/th/id/R.47e108b2aecf920b7818f3afc483ec96?rik=DRdxpbqhHTIF8A&riu=http%3a%2f%2falbaniandubs.weebly.com%2fuploads%2f5%2f7%2f8%2f2%2f57825701%2fwalter-spies-in-disguise-2019_orig.png&ehk=RTcJunS39qQ1MWAHdI9q7keWNgx5l4PhhWT8LkC62QE%3d&risl=&pid=ImgRaw&r=0' ? 'selected-avatar' : 'unselected-avatar'}
                                    onClick={() => changeAvatar('https://th.bing.com/th/id/R.47e108b2aecf920b7818f3afc483ec96?rik=DRdxpbqhHTIF8A&riu=http%3a%2f%2falbaniandubs.weebly.com%2fuploads%2f5%2f7%2f8%2f2%2f57825701%2fwalter-spies-in-disguise-2019_orig.png&ehk=RTcJunS39qQ1MWAHdI9q7keWNgx5l4PhhWT8LkC62QE%3d&risl=&pid=ImgRaw&r=0')} />

                                <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-2-600x600.png" alt='3'
                                    className={avatar === 'https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-2-600x600.png' ? 'selected-avatar' : 'unselected-avatar'}
                                    onClick={() => changeAvatar('https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-2-600x600.png')} />

                                <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars.png" alt='4'
                                    className={avatar === 'https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars.png' ? 'selected-avatar' : 'unselected-avatar'}
                                    onClick={() => changeAvatar('https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars.png')} />
                            </div>
                            <div className='form-element'>
                                <div className='form-login-button' onClick={registerUser}>
                                    {
                                        loading ?
                                            <PulseLoader color='#2196f3' size={5} />
                                            :
                                            'Done'
                                    }
                                </div>
                            </div>
                            <div className='back' onClick={() => setNext(false)}>
                                Back
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Register