import React,{useState} from 'react'
import './Clubs.css'

function Clubs() {
    const [tab,setTab] = useState('your')
  return (
    <div className='clubs'>
        <div style={{display:'flex',alignItems:'center'}}>
            <div onClick={()=>setTab('your')} className={tab==='your'?'active-tab':'unactive-tab'}>Your clubs</div>
            <div onClick={()=>setTab('explore')} className={tab==='explore'?'active-tab':'unactive-tab'}>Explore clubs</div>
        </div>
    </div>
  )
}

export default Clubs