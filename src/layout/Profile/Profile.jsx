import React from 'react'

// import css
import './Profile.css'

//import image
import myProfile from '../../Public/myAvatar.png'

const Profile = () => {
    return(
        <div className="profile">
           <img src={myProfile} alt="" className="imgProfile" />
           <div className="profile-bio">
                <center><p className="name" >Charles Christian Adi Mulyono</p></center>
                <center><p className="job" >Web Developer</p></center>
                <center><p>21 November 2001</p></center>
                <br />
           </div>
           <div className="profile-detail">
               <div className="detail-isi">
                <p>Hi my Friend, this is my profile web, you can search what you want to read about me.</p>
               </div> 
           </div>
           <div className="profile-detail">
               <div className="detail-isi">
                <p>I am a Web Developer .</p>
               </div> 
           </div>
           <div className="profile-detail">
               <div className="detail-isi">
                <p>Check My <a href="https://github.com/charleschrist21" target="_blank">Github</a> .</p>
               </div> 
           </div>
           <div className="profile-detail">
               <div className="detail-isi">
                <p>My <a href="mailto:charleschrist21@gmail.com" target="_blank">Email</a> .</p>
               </div> 
           </div>
           <div className="profile-detail">
               <div className="detail-isi">
                <p>Thankyou.</p>
               </div> 
           </div>
        </div>
    )
}

export default Profile