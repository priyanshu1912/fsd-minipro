import React from 'react'
import './Clubs.css'

function Clubs() {
  return (
    <>
    <div>Your clubs</div>
    <div className='clubs-container'>
        <div className='club'>
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                style={{
                    borderRadius:'5px',
                    width:'100%',
                    height:'20vh',
                    objectFit:'cover'
                }}
            />
            <div className='club-details'>
                <div className='club-name'>Club Name</div>
                <div className='club-desc'>Culpa eu anim excepteur commodo fugiat ullamco ipsum nisi aliquip esse quis aliqua tempor elit.</div>
                <div className='club-info'>
                    <div className='club-members'>
                        <div>120 students enrolled</div>                    
                    </div>
                    <button className='club-join-button'>join club</button>
                </div>
            </div>
        </div>

        <div className='club'>
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                style={{
                    borderRadius:'5px',
                    width:'100%',
                    height:'20vh',
                    objectFit:'cover'
                }}
            />
            <div className='club-details'>
                <div className='club-name'>Club Name</div>
                <div className='club-desc'>Culpa eu anim excepteur commodo fugiat ullamco ipsum nisi aliquip esse quis aliqua tempor elit.</div>
                <div className='club-info'>
                    <div className='club-members'>
                        <div>120 students enrolled</div>                    
                    </div>
                    <button className='club-join-button'>join club</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Clubs