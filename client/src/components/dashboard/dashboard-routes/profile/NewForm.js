import React,{useState} from 'react'
import './NewForm.css'
import {IoCloseSharp} from 'react-icons/io5'
import axios from 'axios'
import PulseLoader from "react-spinners/PulseLoader";

function NewForm(props) {
    const {newForm, setNewForm, text, userData, getUser} = props

    const [bio,setBio] = useState()

    const [formData,setFormData] = useState({
        title: '',
        body: '',
        url: ''
    })

    const addData = () => {
        axios.patch(`http://localhost:5000/update/${userData.userType.toLowerCase()}/${userData.username}/${text}s`,formData)
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
        axios.patch(`http://localhost:5000/update/${userData.userType.toLowerCase()}/${userData.username}/bio`,bio)
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
                    <div>
                        <input rows={3} onChange={e=>setBio(e.target.value)} name={text} className='newform-input' type='text'/>
                    </div>
                    <div className='add-button' onClick={updateBio}>Update</div>
                </>
                :
                text==='bio' ?
                <>
                    <div style={{textAlign:'right',width:'90%',margin:'auto'}}>
                        <IoCloseSharp onClick={closeNewForm} style={{cursor:'pointer',display:'inline-block'}}/>
                    </div>
                    <div className='newform-title'>Update {text}</div>
                    <div>
                        <textarea rows={3} onChange={e=>setBio(e.target.value)} name='bio' value={bio} className='newform-input' type='text'/>
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