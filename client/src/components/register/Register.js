import React,{useState} from 'react'
import './Register.css'
import {VscPerson,VscOrganization} from 'react-icons/vsc'

function Register() {

    const [registerAs,setRegisterAs] = useState('Student')
    const [registerStudentData,setRegisterStudentData] = useState({
        name:'',
        email:'',
        college:'',
        // phone:'',
        program:'',
        semester:'',
        password:''
    })

    const [registerCollegeData,setRegisterCollegeData] = useState({
        name:'',
        college:'',
        email:'',
        password:''
    })

    const registerStudent = (e) => {
        e.preventDefault()
        console.log({registerStudentData})
    }

    const registerCollege = (e) => {
        e.preventDefault()
        console.log({registerCollegeData})
    }

    const handleRegisterStudentChange = (e) => {
        setRegisterStudentData({
            ...registerStudentData,
            [e.target.name]:e.target.value
        })
    }

    const handleRegisterCollegeChange = (e) => {
        setRegisterCollegeData({
            ...registerCollegeData,
            [e.target.name]:e.target.value
        })
    }


  return (
    <div className='login-page'>
        <div className='login-form'>
            <div className='login-heading'>Register as</div>
            <div className='login-as-container'>
                <div className={registerAs==='Student'?'login-as-icons-active':'login-as-icons-unactive'} onClick={()=>setRegisterAs('Student')}>
                    <VscPerson className='login-as-icon'/>
                    <div>Student</div>
                </div>
                <div className={registerAs==='College'?'login-as-icons-active':'login-as-icons-unactive'} onClick={()=>setRegisterAs('College')}>
                    <VscOrganization className='login-as-icon'/>
                    <div>College</div>
                </div>
            </div>
            {/* <div className='register-as'>
                <div className={registerAs==='Student'?'active-register':'register-option'} onClick={()=>setRegisterAs('Student')}>
                    Student
                </div>
                <div className={registerAs==='College'?'active-register':'register-option'} onClick={()=>setRegisterAs('College')}>
                    College
                </div>
            </div> */}

            {
                registerAs==='Student' &&
                <form onSubmit={registerStudent}>
                <div className='form-element'>
                    <div className='form-input-title'>Your name</div>
                    <input className='form-element-input' type="text" placeholder='Enter name' name='name' value={registerStudentData.name} onChange={handleRegisterStudentChange}/>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>Email-id</div>
                    <input className='form-element-input' type="text" placeholder='Enter email' name='email' value={registerStudentData.email} onChange={handleRegisterStudentChange}/>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>College</div>
                    <input className='form-element-input' type="text" placeholder='Enter college' name='college' value={registerStudentData.college} onChange={handleRegisterStudentChange}/>
                </div>

                {/* <div className='form-element'>
                    <div className='form-input-title'>Contact no.</div>
                    <input className='form-element-input' type="text" placeholder='Enter contact no.' name='phone' value={registerStudentData.phone} onChange={handleRegisterStudentChange}/>
                </div> */}

                <div className='form-element'>
                    <div className='form-input-title'>Program</div>
                    <input className='form-element-input' type="text" placeholder='Enter program' name='program' value={registerStudentData.program} onChange={handleRegisterStudentChange}/>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>Semester</div>
                    <input className='form-element-input' type="text" placeholder='Enter semester' name='semester' value={registerStudentData.semester} onChange={handleRegisterStudentChange}/>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>Password</div>
                    <input className='form-element-input' type="text" placeholder='Enter password' name='password' value={registerStudentData.password} onChange={handleRegisterStudentChange}/>
                </div>

                <div className='form-element'>
                    <button className='form-login-button' type='submit'>Register</button>
                </div>
                </form>
            }

            {
                registerAs==='College' &&
                <form onSubmit={registerCollege}>
                <div className='form-element'>
                    <div className='form-input-title'>Your name</div>
                    <input className='form-element-input' type="text" placeholder='Enter name' name='name' value={registerCollegeData.name} onChange={handleRegisterCollegeChange}/>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>College name</div>
                    <input className='form-element-input' type="text" placeholder='Enter college' name='college' value={registerCollegeData.college} onChange={handleRegisterCollegeChange}/>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>Email-id</div>
                    <input className='form-element-input' type="text" placeholder='Enter email' name='email' value={registerCollegeData.email} onChange={handleRegisterCollegeChange}/>
                </div>

                <div className='form-element'>
                    <div className='form-input-title'>Password</div>
                    <input className='form-element-input' type="text" placeholder='Enter password' name='password' value={registerCollegeData.password} onChange={handleRegisterCollegeChange}/>
                </div>

                {/* <div className='form-element'>
                    <div className='form-input-title'>Confirm password</div>
                    <input className='form-element-input' type="text" placeholder='Enter password again' name='password' value={registerCollegeData.password} onChange={handleRegisterCollegeChange}/>
                </div> */}

                <div className='form-element'>
                    <button className='form-login-button' type='submit'>Register</button>
                </div>
                </form>
            }
        </div>
    </div>
  )
}

export default Register