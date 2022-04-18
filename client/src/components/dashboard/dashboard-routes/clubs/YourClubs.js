import React,{useState,useEffect} from 'react'
import './YourClubs.css'
import {useStore} from 'react-context-hook'
import axios from 'axios'
import OpenClub from './OpenClub'

function YourClubs(props) {
    const [clubData,setClubData] = useStore('clubData')
    const [selected,setSelected] = useStore('selected')
    const [userInfo,setUserInfo] = useStore('user')

    const [clubs,setClubs] = useState(null)
    console.log({clubs})

    const {post,setPost} = props

    const [open,setOpen] = useState({
        value: false,
        data: null 
    })

    const leaveClub = (id) => {
        axios.post(`http://localhost:5000/club/${userInfo._id}/leave/${id}`)
        .then(res=>{
            console.log(res)
            //getClubs()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const getClubs = () => {
        axios.get('http://localhost:5000/club')
        .then(res=>{
            const data = res.data
            //console.log({data})
            setClubs(data.filter(item => item.students.includes('625b973da035c0ba0404b9b4')))
        })
        .catch(err=>{
          console.log(err)
        })
    }

    useEffect(()=>{
        getClubs()
    },[])


    const openProjectModal = (data) => {
        setOpen({
            ...open,
            value: true,
            data: data
        })
    }

  return (
    <div className='your-club-container'>
        {
            clubs && clubs.length !==0 ?
            <>
            {
                clubs.map(item => {
                    return (
                        <div className='your-club'>
                            <div style={{display:'flex',alignItems:'center',width:'80%'}}>
                                <img src='https://secureservercdn.net/198.71.233.1/fc7.e85.myftpupload.com/wp-content/uploads/2019/01/color-swatch-multicolored-1536x1536.png' alt='grp-img'
                                className='your-club-image'/>
                                <div>
                                    <div className='your-club-faculty'>faculty - {item.faculty}</div>
                                    <div className='your-club-name' onClick={()=>openProjectModal(item)}>{item.name}</div>
                                    <div className='your-club-desc'>
                                        {item.description}
                                        <div className='your-club-members'>{item.students.length} students enrolled</div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={()=>leaveClub(item._id)} className='remove-club'>exit club</div>
                        </div>
                    )
                })
            }
            </>
            :
            <div style={{color:'grey',fontSize:'2.2vh'}}>Not a member of any club</div>
        }

        {
            open.value &&
            <OpenClub open={open} setOpen={setOpen}/>
        }
    </div>
  )
}

export default YourClubs