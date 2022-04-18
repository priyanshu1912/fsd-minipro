import React,{useState} from 'react'
import './NewForm.css'
import {IoCloseSharp} from 'react-icons/io5'
import axios from 'axios'
import PulseLoader from "react-spinners/PulseLoader";

function NewForm(props) {
    const {newForm, setNewForm, text, user, getUser} = props

    console.log(newForm)

    const [bio,setBio] = useState({
        bio: user.bio
    })

    const [mail,setMail] = useState({
        url: user.mail
    })

    const [linkedin,setLinkedin] = useState({
        url: user.linkedin
    })

    const [github,setGithub] = useState({
        url: user.github
    })

    const [formData,setFormData] = useState({
        title: '',
        body: '',
        url: ''
    })

    const addData = () => {
        axios.patch(`http://localhost:5000/update/${user.userType.toLowerCase()}/${user.username}/${text}s`,formData)
        .then(res=>{
            console.log(res)
            getUser()
        })
        .catch(err=>{
            console.log(err)
        })

        setNewForm({
            ...newForm,
            open:false
        })

        setFormData({
            title: '',
            body: '',
            url: ''
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const closeNewForm = () => {
        setNewForm({
            ...newForm,
            open:false
        })
    }

    const updateBio = () => {
        axios.patch(`http://localhost:5000/update/${user.userType.toLowerCase()}/${user.username}/bio`,bio)
        .then(res=>{
            console.log(res)
            getUser()
        })
        .catch(err=>{
            console.log(err)
        })

        setNewForm({
            ...newForm,
            open:false
        })
    }

    const updateMail = () => {
        if(text==='mail'){
            axios.patch(`http://localhost:5000/update/${user.userType.toLowerCase()}/${user.username}/url/mail`,mail)
            .then(res=>{
                console.log(res)
                getUser()
            })
            .catch(err=>{
                console.log(err)
            })
    
            setNewForm({
                ...newForm,
                open:false
            })
        }
        if(text==='linkedin'){
            axios.patch(`http://localhost:5000/update/${user.userType.toLowerCase()}/${user.username}/url/linkedin`,linkedin)
            .then(res=>{
                console.log(res)
                getUser()
            })
            .catch(err=>{
                console.log(err)
            })
    
            setNewForm({
                ...newForm,
                open:false
            })
        }
        if(text==='github'){
            axios.patch(`http://localhost:5000/update/${user.userType.toLowerCase()}/${user.username}/url/github`,github)
            .then(res=>{
                console.log(res)
                getUser()
            })
            .catch(err=>{
                console.log(err)
            })
    
            setNewForm({
                ...newForm,
                open:false
            })
        }
    }

  return (
    <div className='newform-container'>
        <form className='newform'>
            {
                text==='mail' || text==='linkedin' || text==='github' ?
                <>
                    <div style={{textAlign:'right',width:'90%',margin:'auto'}}>
                        <IoCloseSharp onClick={closeNewForm} style={{cursor:'pointer',display:'inline-block'}}/>
                    </div>
                    <div className='newform-title'>Update {text}</div>
                    {
                        text==='mail' &&
                        <div>
                            <input rows={3} onChange={e=>setMail({...mail,url:e.target.value})} name='url' value={mail.url} className='newform-input' type='text'/>
                        </div>
                    }
                    {
                        text==='linkedin' &&
                        <div>
                            <input rows={3} onChange={e=>setLinkedin({...linkedin,url:e.target.value})} name='url' value={linkedin.url} className='newform-input' type='text'/>
                        </div>
                    }
                    {
                        text==='github' &&
                        <div>
                            <input rows={3} onChange={e=>setGithub({...github,url:e.target.value})} name='url' value={github.url} className='newform-input' type='text'/>
                        </div>
                    }
                    <div className='add-button' onClick={updateMail}>Update</div>
                </>
                :
                text==='bio' ?
                <>
                    <div style={{textAlign:'right',width:'90%',margin:'auto'}}>
                        <IoCloseSharp onClick={closeNewForm} style={{cursor:'pointer',display:'inline-block'}}/>
                    </div>
                    <div className='newform-title'>Update {text}</div>
                    <div>
                        <textarea rows={3} onChange={e=>setBio({...bio,bio:e.target.value})} name='bio' value={bio.bio} className='newform-input' type='text'/>
                    </div>
                    <div className='add-button' onClick={updateBio}>Update</div>
                </>
                :
                <>
                    <div style={{textAlign:'right',width:'90%',margin:'auto'}}>
                        <IoCloseSharp onClick={closeNewForm} style={{cursor:'pointer',display:'inline-block'}}/>
                    </div>
                    <div className='newform-title'>Add new {text}</div>
                    <div>
                        <input onChange={handleChange} name='title' value={formData.title} className='newform-input' type='text' placeholder='Title'/>
                    </div>
                    <div>
                        <input onChange={handleChange} name='body' value={formData.body} className='newform-input' type='text' placeholder='Description'/>
                    </div>
                    <div>
                        <input onChange={handleChange} name='url' value={formData.url} className='newform-input' type='text' placeholder='Url'/>
                    </div>
                    <div className='add-button' onClick={addData}>Update</div>
                </>
            }
        </form>
    </div>
  )
}

export default NewForm