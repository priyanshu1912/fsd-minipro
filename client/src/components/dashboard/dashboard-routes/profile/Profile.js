import React,{useState,useEffect} from 'react'
import './Profile.css'
import {AiOutlineMail,AiOutlineLink,AiOutlineLinkedin,AiFillDelete,AiFillEdit} from 'react-icons/ai'
import {IoAddCircleOutline} from 'react-icons/io5'
import NewForm from './NewForm'
import axios from 'axios'

function Profile(props) {
    const [user,setUser] = useState(null)
    const [userProjects,setUserProjects] = useState(null)
    const [userPublications,setUserPublications] = useState(null)
    const [userAchievements,setUserAchievements] = useState(null)

    const [newForm, setNewForm] = useState({
        open: false,
        text: null
    })

    const userData = props.userData

    const addNewProject = (value) => {
        setNewForm({
            ...newForm,
            open:true,
            text: value
        })
    }

    useEffect(()=>{
        getUser()
    },[])

    const getUser = () => {
        axios.get(`http://localhost:5000/user/${userData.userType.toLowerCase()}/${userData.username}`)
        .then(res=>{
          setUser(res.data)
          setUserProjects(res.data.currentProjects)
          setUserPublications(res.data.publications)
          setUserAchievements(res.data.achievements)
        })
        .catch(err=>{
          console.log(err)
        })
    }


    const deleteItem = (item) => {
        const itemjson = JSON.stringify({id: item})
        console.log({id: item})
        axios.delete(`http://localhost:5000/update/${userData.userType.toLowerCase()}/${userData.username}/projects`, itemjson)
        .then(res=>{
            console.log(res.data)
            getUser()
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const updateItem = (item) => {

        // const item1 = {
        //     title: 'priyanshu bhardwaj',
        //     body: item.body,
        //     url: item.url,
        //     _id: item._id
        // }
        
        axios.patch(`http://localhost:5000/update/${userData.userType.toLowerCase()}/${userData.username}/projects`,item)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

        // console.log(item.title)
    }

  return (
    <>
    {
        user &&
        <div className='profile-container'>
        <div className='profile'>
            <div className='profile-inner'>
                <img src={user.profilePhoto}
                className='profile-image'/>
                <div className='profile-info-container'>
                    <div className='profile-info-name'>
                        {user.name}
                    </div>
                </div>
            </div>
        </div>

        <div className='about-container'>
            <div className='about'>
                <div className='about-heading'>Bio <AiFillEdit onClick={()=>addNewProject('bio')} className='edit-button'/></div>
                <div className='bio-container'>
                    {
                        user.bio ?
                        <>{user.bio}</>
                        :
                        <>No bio added</>
                    }
                </div>
            </div>
            <div className='contact'>
                <div>Contact info</div>
                <div className='contact-container'>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div className='contact-element'>
                            <img style={{width:'40px',height:'40px',borderRadius:'100%',objectFit:'contain'}} src="https://news.wirefly.com/sites/phonedog.com/files/styles/blog_entry/public/blog/main_image/2020/10/gmail-new-icon-2.jpg?itok=McR8B1ny"/>
                            <input type='text' className='about-content' value={user.mail}/>
                        </div>
                        <AiFillEdit onClick={()=>addNewProject('mail')} className='social-media-edit'/>
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div className='contact-element'>
                            <img style={{width:'40px',height:'40px',borderRadius:'100%',objectFit:'contain'}} src="https://th.bing.com/th/id/OIP.URJvhubPDm723aF3_zezRwHaGa?pid=ImgDet&w=876&h=758&rs=1"/>
                            <input type='text' className='about-content' value={user.linkedin ? user.linkedin : 'Add linkedin profile'}/>
                        </div>
                        <AiFillEdit onClick={()=>addNewProject('linkedin')} className='social-media-edit'/>
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div className='contact-element'>
                            <img style={{width:'40px',height:'40px',borderRadius:'100%',objectFit:'contain'}} src="https://htxt.co.za/wp-content/uploads/2018/11/github-logo.jpg"/>
                            <input type='text' className='about-content' value={user.github ? user.github : 'Add github profile'}/>
                        </div>
                        <AiFillEdit onClick={()=>addNewProject('github')} className='social-media-edit'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='project-container'>
            <div className='projects'>
                <div style={{display:'flex',alignItems:'center'}}>
                    Current projects 
                    <IoAddCircleOutline className='edit-button' onClick={()=>addNewProject('project')}/>
                </div>
                <div className='projects-inner-container'>
                    {
                        userProjects && userProjects.length===0 ?
                        <>No projects added</>
                        :
                        <>
                        {
                            userProjects &&
                            userProjects.map(item => {
                                return (
                                    <div className='user-project'>
                                        <div style={{display:'flex',alignItems:'center'}}>
                                            {/* <div style={{width:'60px',height:'60px',backgroundColor:'#fff3e0',borderRadius:'10px',marginRight:'0.5vw'}}></div> */}
                                            <img style={{width:'40px',background:'#fff3e0',padding:'10px',borderRadius:'100%',marginRight:'1vw'}} src="https://cdn.onlinewebfonts.com/svg/img_44448.png"/>
                                            <div>
                                                <div className='user-project-title'>{item.title}</div>
                                                <div className='user-project-desc'>{item.body}</div>
                                            </div>
                                        </div>
                                        <div style={{display:'flex',flexDirection:'column'}}>
                                            <AiFillDelete onClick={()=>deleteItem(item._id)} className='project-del'/>
                                            <AiFillEdit onClick={()=>updateItem(item)} className='project-edit'/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </>
                    }
                </div>
            </div>
            <div className='skills'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <div>Publications</div> 
                    <IoAddCircleOutline className='edit-button' onClick={()=>addNewProject('publication')}/>
                </div>
                <div className='publications-inner-container'>
                {
                        userPublications && userPublications.length===0 ?
                        <>No publications added</>
                        :
                        <>
                        {
                            userPublications &&
                            userPublications.map(item => {
                                return (
                                    <div className='user-project'>
                                        <div style={{display:'flex',alignItems:'center'}}>
                                            {/* <div style={{width:'60px',height:'60px',backgroundColor:'#fce4ec',borderRadius:'10px',marginRight:'0.5vw'}}></div> */}
                                            <img style={{width:'40px',background:'#e0f2f1',padding:'10px',borderRadius:'100%',marginRight:'1vw'}} src="https://cdn.onlinewebfonts.com/svg/img_44448.png"/>
                                            <div>
                                                <div className='user-project-title'>{item.title}</div>
                                                <div className='user-project-desc'>{item.body}</div>
                                            </div>
                                        </div>
                                        <div style={{display:'flex',flexDirection:'column'}}>
                                            <AiFillDelete className='project-del'/>
                                            <AiFillEdit className='project-edit'/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </>
                    }
                </div>
            </div>
        </div>

        <div className='project-container'>
            <div className='projects'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <div>Achievements</div>
                    <IoAddCircleOutline className='edit-button' onClick={()=>addNewProject('achievement')}/>
                </div>
                <div className='publications-inner-container'>
                    {
                        userAchievements && userAchievements.length===0 ?
                        <>No achievements added</>
                        :
                        <>
                        {
                            userAchievements &&
                            userAchievements.map(item => {
                                return (
                                    <div className='user-project'>
                                        <div style={{display:'flex',alignItems:'center'}}>
                                            {/* <div style={{width:'60px',height:'60px',backgroundColor:'#f3e5f5',borderRadius:'10px',marginRight:'0.5vw'}}></div> */}
                                            <img style={{width:'40px',height:'40px',objectFit:'cover',background:'#f3e5f5',padding:'10px',borderRadius:'100%',marginRight:'1vw'}} src="https://static.dribbble.com/users/54130/screenshots/6238979/ladder.png"/>
                                            <div>
                                                <div className='user-project-title'>{item.title}</div>
                                                <div className='user-project-desc'>{item.body}</div>
                                            </div>
                                        </div>
                                        <div style={{display:'flex',flexDirection:'column'}}>
                                            <AiFillDelete className='project-del'/>
                                            <AiFillEdit className='project-edit'/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </>
                    }
                </div>
            </div>
            {/* <div className='skills'>
                <div>Links</div>
            </div> */}
        </div>

        {/* <div style={{textAlign:'right'}}>
            <div className='save-button'>Save</div>
        </div> */}

        {
            newForm.open &&
            <NewForm getUser={getUser} user={user} text={newForm.text} setNewForm={setNewForm} newForm={newForm} />
        }
    </div>
    }
    </>
  )
}

export default Profile