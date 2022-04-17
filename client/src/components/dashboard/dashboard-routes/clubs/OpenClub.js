import React,{useState} from 'react'
import './OpenClub.css'
import {IoSend} from 'react-icons/io5'
import {useStore} from 'react-context-hook'
import PulseLoader from "react-spinners/PulseLoader";

function OpenClub() {
    const [clubData,setClubData] = useStore('clubData')  
    const [postData,setPostData] = useState('')
    const [loading,setLoading] = useState(false)

    const post = () => {
        setLoading(true)
        console.log({postData})
        setTimeout(()=>{
            setLoading(false)
        },1500)
    }

  return (
    <div className='openclub-container'>
        <div className='openclub-name'>{clubData}</div>
        <textarea placeholder='Type your message' className='openclub-textarea' rows={4} onChange={e=>setPostData(e.target.value)}/>
        <div style={{textAlign:'right'}}>
            {
                loading ?
                <PulseLoader color='#2196f3' size={5}/>
                :
                <IoSend onClick={post} className='send-button'/>
            }
        </div>
    </div>
  )
}

export default OpenClub