import React,{useState} from 'react'
import './Clubs.css'
import ExploreClubs from './ExploreClubs'
import OpenClub from './OpenClub'
import YourClubs from './YourClubs'

function Clubs() {
    const [tab,setTab] = useState('your')
    const [post,setPost] = useState(false)

  return (
    <div className='clubs'>
        <div style={{display:'flex',alignItems:'center',color:'grey'}}>
            <div onClick={()=>setTab('your')} className={tab==='your'?'active-tab':'unactive-tab'}>Your clubs</div>
            <div onClick={()=>setTab('explore')} className={tab==='explore'?'active-tab':'unactive-tab'}>Explore clubs</div>
        </div>

        <div style={{width:'100%',display:'flex',marginTop:'5vh',justifyContent:'space-between'}}>
          <div style={{width:'50%',paddingRight:'1vw'}}>
            {
              tab==='your' &&
              <YourClubs post={post} setPost={setPost}/>
            }
            {
              tab==='explore' &&
              <ExploreClubs post={post} setPost={setPost}/>
            }
          </div>

          {/* <div style={{width:'50%'}}>
            {
              post &&
              <OpenClub/>
            }
          </div> */}
        </div>
    </div>
  )
}

export default Clubs