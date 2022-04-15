import React,{useState} from 'react'
import './Clubs.css'
import ExploreClubs from './ExploreClubs'
import YourClubs from './YourClubs'

function Clubs() {
    const [tab,setTab] = useState('your')
  return (
    <div className='clubs'>
        <div style={{display:'flex',alignItems:'center',color:'grey'}}>
            <div onClick={()=>setTab('your')} className={tab==='your'?'active-tab':'unactive-tab'}>Your clubs</div>
            <div onClick={()=>setTab('explore')} className={tab==='explore'?'active-tab':'unactive-tab'}>Explore clubs</div>
        </div>

        {
          tab==='your' &&
          <YourClubs/>
        }
        {
          tab==='explore' &&
          <ExploreClubs/>
        }
    </div>
  )
}

export default Clubs