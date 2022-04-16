import React,{useState} from 'react'
import './NewForm.css'
import {IoCloseSharp} from 'react-icons/io5'

function NewForm(props) {
    const {newForm, setNewForm, text} = props

    const [formData,setFormData] = useState({
        title: '',
        description: '',
        link: ''
    })

    const addData = () => {
        console.log({formData})

        setNewForm({
            ...newForm,
            open:false
        })

        setFormData({
            title: '',
            description: '',
            link: ''
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
                <input onChange={handleChange} name='description' value={formData.description} className='newform-input' type='text' placeholder='Description'/>
            </div>
            <div>
                <input onChange={handleChange} name='link' value={formData.link} className='newform-input' type='text' placeholder='Link'/>
            </div>
            <div className='add-button' onClick={addData}>Add</div>
        </form>
    </div>
  )
}

export default NewForm