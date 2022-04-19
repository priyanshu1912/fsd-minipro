import React,{useState,useEffect} from 'react'
import './OpenClub.css'
import {IoSend} from 'react-icons/io5'
import {useStore} from 'react-context-hook'
import PulseLoader from "react-spinners/PulseLoader";
import {IoIosClose} from 'react-icons/io'
import axios from 'axios'
import {MdError,MdCheckCircle} from 'react-icons/md'

function OpenClub(props) {
    const {open,setOpen} = props

    const [popup,setPopup] = useState({
        value: false,
        data: null 
    })

    const [clubData,setClubData] = useStore('clubData') 
    const [userInfo,setUserInfo] = useStore('user')  

    const [postData,setPostData] = useState({
        content:'',
        username: sessionStorage.getItem('username'),
        image: sessionStorage.getItem('profilePhoto')
    })
    const [loading,setLoading] = useState(false)

    const post = (id) => {
        setLoading(true)

        // console.log(id)
        // console.log(postData)
        axios.post(`http://localhost:5000/club/${id}/createPost`,postData)
        .then(res=>{
            console.log(res.data)
            // if(res.data.status===200){
            //     //setLoading(false)
            //     setOpen({
            //         ...open,
            //         value: false
            //     })
            // }
                setPopup({
                    ...popup,
                    value: true,
                    data: res.data.message
                })

                setLoading(false)

                setOpen({
                    ...open,
                    value: false
                })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            setPopup(false)
        },2500)
    },[popup.value])

  return (
      <div className='openclub-background'>
          {
            popup.value &&
            <div className='error-container'>
                {/* {
                    message.type==='error' ? 
                    <MdError style={{color:'red',fontSize:'35px',marginRight:'0.5vw'}}/> 
                    : 
                    <MdCheckCircle style={{color:'green',fontSize:'35px',marginRight:'0.5vw'}}/>
                } */}
                <MdCheckCircle style={{color:'green',fontSize:'35px',marginRight:'0.5vw'}}/> 
                <div className='error-message'>{popup.data}</div>
            </div>
        }
            <div className='openclub-container'>
                <div style={{textAlign:'right'}}>
                    <IoIosClose style={{cursor:'pointer',fontSize:'25px'}} onClick={()=>setOpen({...open,value:false})}/>
                </div>
                <div className='openclub-name'>{open.data.name} post</div>
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