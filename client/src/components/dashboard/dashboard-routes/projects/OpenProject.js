import React,{useState} from 'react'
import './OpenProject.css'
import {BiCheck} from 'react-icons/bi'
import {IoIosClose} from 'react-icons/io'

function OpenProject(props) {
    const {open,setOpen} = props

    const [subscribe,setSubscribe] = useState(false)

    const closeProject = () => {
        setSubscribe(true)

        // setTimeout(()=>{
        //     setOpen({
        //         ...open,
        //         value: false
        //     })
        // },[1500])
    }

  return (
    <div className='open-project'>
        <div className='project-details'>
            <div style={{textAlign:'right'}}>
                <IoIosClose onClick={()=>setOpen({...open,value:false})} style={{fontSize:'25px',cursor:'pointer'}}/>
            </div>

            <div style={{textAlign:'right'}}>
                <div className='available' onClick={closeProject}>
                    {
                        subscribe ?
                        <div className='subscribe-container'>
                            <BiCheck className='subscribe-button'/>
                            <div>Sent</div>
                        </div>
                        :
                        <>I'm available</>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OpenProject