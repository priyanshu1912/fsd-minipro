import React,{useState} from 'react'
import './NewForm.css'
import {IoCloseSharp} from 'react-icons/io5'
import axios from 'axios'

function NewForm(props) {
    const {newForm, setNewForm, text, userData} = props

    const [formData,setFormData] = useState({
        title: '',
        body: '',
        url: ''
    })

    const addData = () => {
        console.log({formData})

        axios.patch(`http://localhost:5000/update/${userData.userType.toLowerCase()}/${userData.username}/${text}s`,formData)
        .then(res=>{
            console.log(res)
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

  return (
    <div className='newform-container'>
        <form className='newform'>
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
            <div className='add-button' onClick={addData}>Add</div>
        </form>
    </div>
  )
}

export default NewForm