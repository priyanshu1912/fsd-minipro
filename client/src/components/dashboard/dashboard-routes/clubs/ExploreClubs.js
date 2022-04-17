import React,{useEffect,useState} from 'react'
import './ExploreClubs.css'
import axios from 'axios'
import {useStore} from 'react-context-hook'

function ExploreClubs() {
    const [userInfo,setUserInfo] = useStore('user')
    const [allClubs,setAllClubs] = useState(null)
    console.log(allClubs)

    const joinClub = (value) => {
        axios.post(`http://localhost:5000/club/${userInfo._id}/join/${value}`)
        .then(res => {
            console.log(res)
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

  return (
    <div className='explore-clubs'>
        {
            allClubs && allClubs.length !==0 ?
            <>
            {
                allClubs.map(item => {
                    return (
                        <div className='your-club'>
                            <div style={{display:'flex',alignItems:'center',width:'80%'}}>
                                <img src='https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-monster-square-avatar-funny-cartoon-monster-cyclops-face-vector-halloween-monster-square-avatar-175919095.jpg' alt='grp-img'
                                className='your-club-image'/>
                                <div>
                                    <div className='your-club-faculty'>Faculty - {item.faculty}</div>
                                    <div className='your-club-name'>{item.name}</div>
                                    <div className='your-club-desc'>
                                        {item.description}
                                        <div>{item.students.length} students enrolled</div>
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