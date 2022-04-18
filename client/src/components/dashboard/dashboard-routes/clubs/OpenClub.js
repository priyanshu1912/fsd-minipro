import React,{useState} from 'react'
import './OpenClub.css'
import {IoSend} from 'react-icons/io5'
import {useStore} from 'react-context-hook'
import PulseLoader from "react-spinners/PulseLoader";
import {IoIosClose} from 'react-icons/io'
import axios from 'axios'

function OpenClub(props) {
    const {open,setOpen} = props

    const [clubData,setClubData] = useStore('clubData') 
    const [userInfo,setUserInfo] = useStore('user')  

    const [postData,setPostData] = useState({
        content:'',
        username: userInfo.username,
        image: userInfo.profilePhoto
    })
    const [loading,setLoading] = useState(false)

    console.log({postData})

    const post = (id) => {
        // setLoading(true)
        axios.post(`http://localhost:5000/club/${id}/createPost`,postData)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
      <div className='openclub-background'>
            <div className='openclub-container'>
                <div style={{textAlign:'right'}}>
                    <IoIosClose style={{cursor:'pointer',fontSize:'25px'}} onClick={()=>setOpen({...open,value:false})}/>
                </div>
                <div className='openclub-name'>{open.data.name}</div>
                <textarea placeholder='Type your message' className='openclub-textarea' rows={4} onChange={e=>setPostData({...postData,content:e.target.value})} />
                <div style={{textAlign:'right'}}>
                    {
                        loading ?
                        <PulseLoader color='#2196f3' size={5}/>
                        :
                        <IoSend onClick={()=>post(open.data._id)} className='send-button'/>
                    }
                </div>
            </div>
    </div>
  )
}

export default OpenClub