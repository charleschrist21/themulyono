import React from 'react'
import {Link} from 'react-router-dom'

//import css
import './navbar.css'

//import image
import imgLogo from '../../Public/logoM.svg'

const Navbar = () => {
   return( 
    <div className="nav-bar">
            <img src={imgLogo} alt="" className="img-logo"/>
            <div className="menu-nav-bar">
                <Link to="/"><p className="link home-menu">Home</p></Link>
                <Link to="/blog"><p className="link blog-menu">Blog</p></Link>
                <Link to="/"><p className="link profile-menu">Profile</p></Link>
            </div>
            <button className="btn-getStd">Get Started</button>
    </div>)
}

export default Navbar