import React,{useEffect,useState} from 'react'
import './ExploreClubs.css'
import axios from 'axios'
import {useStore} from 'react-context-hook'
import {MdError,MdCheckCircle} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'

function ExploreClubs() {
    const [popup,setPopup] = useState({
        value: false,
        message: null
    })

    const [userInfo,setUserInfo] = useStore('user')
    const [allClubs,setAllClubs] = useState(null)
    console.log(allClubs)

    const joinClub = (value) => {
        axios.post(`http://localhost:5000/club/${userInfo._id}/join/${value}`)
        .then(res => {
            console.log(res.data.message)

            setPopup({
                ...popup,
                value: true,
                message: res.data.message
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/club')
        .then(res=>{
            setAllClubs(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    useEffect(()=>{
        setTimeout(()=>{
            setPopup(false)
        },2500)
    },[popup.value])

  return (
    <div className='explore-clubs'>
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
                <div className='error-message'>{popup.message}</div>
            </div>
        }
        {
            allClubs && allClubs.length !==0 ?
            <>
            {
                allClubs.map(item => {
                    return (
                        <div className='your-club'>
                            <div style={{display:'flex',alignItems:'center',width:'80%'}}>
                                <img src='https://secureservercdn.net/198.71.233.1/fc7.e85.myftpupload.com/wp-content/uploads/2019/01/color-swatch-multicolored-1536x1536.png' alt='grp-img'
                                className='your-club-image'/>
                                <div>
                                    <div className='your-club-faculty'>Faculty - {item.faculty}</div>
                                    <div className='your-club-name'>{item.name}</div>
                                    <div className='your-club-desc'>
                                        {item.description}
                                        <div className='your-club-members'>
                                            <IoIosPeople className='members-icon'/>
                                            <div>{item.students.length} students enrolled</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='join-club' onClick={()=>joinClub(item._id)}>join club</div>
                        </div>
                    )
                })
            }
            </>
            :
            <>No clubs to display</>
        }
    </div>
  )
}

export default ExploreClubs