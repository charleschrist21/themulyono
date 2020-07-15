import React from 'react'

//import image
import icWeb from '../../Public/icWeb.svg'
import icAnd from '../../Public/icNa.svg'
import icUx from '../../Public/icUx.svg'

// import css
import './Blog.css'

const Blog = () => {
    return(
    <div className="blog">
        <div className="sidebar">
            <div className="sidebar-menu">
                <div className="sidebar-icon">
                    <img src={icWeb} className="icWeb" alt=""/>
                </div>
                <p className="sidebar-link">Web Portofolio</p>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-icon">
                    <img src={icAnd} className="icAnd" alt=""/>
                </div>
                <p className="sidebar-link">Android Portofolio</p>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-icon">
                    <img src={icUx} className="icUx" alt=""/>
                </div>
                <p className="sidebar-link">UI/UX Portofolio</p>
            </div>
        </div>
        <div className="mainbar">
            <form action="">
                <input type="text" placeholder="Search Portofolio Example" id="" className="search-bar"/>
            </form>
            <div className="short-mainbar">
                <div className="showing">
                    <p>Showing 10 Data</p>
                </div>
                <div className="shortby">
                    <p className="abs">Short By: </p><p> Date</p>
                </div>
                <button className="btn-filter">Filter</button>
            </div>
            <div className="main-content">
                <div className="isi-main-content">
                    <p className="title-isi">Tumbas</p>
                    <button className="btn-tipe">Market</button>
                    <div className="img-main">

                    </div>
                    <a href="" className="maker">Admin</a>
                </div>
                <div className="isi-main-content">
                    <p className="title-isi">Tumbas</p>
                    <button className="btn-tipe">Market</button>
                    <div className="img-main">

                    </div>
                    <a href="" className="maker">Admin</a>
                </div>
                <div className="isi-main-content">
                    <p className="title-isi">Tumbas</p>
                    <button className="btn-tipe">Market</button>
                    <div className="img-main">

                    </div>
                    <a href="" className="maker">Admin</a>
                </div>
                <div className="isi-main-content">
                    <p className="title-isi">Tumbas</p>
                    <button className="btn-tipe">Market</button>
                    <div className="img-main">

                    </div>
                    <a href="" className="maker">Admin</a>
                </div>
                <div className="isi-main-content">
                    <p className="title-isi">Tumbas</p>
                    <button className="btn-tipe">Market</button>
                    <div className="img-main">

                    </div>
                    <a href="" className="maker">Admin</a>
                </div>
                <div className="isi-main-content">
                    <p className="title-isi">Tumbas</p>
                    <button className="btn-tipe">Market</button>
                    <div className="img-main">

                    </div>
                    <a href="" className="maker">Admin</a>
                </div>
                <div className="isi-main-content">
                    <p className="title-isi">Tumbas</p>
                    <button className="btn-tipe">Market</button>
                    <div className="img-main">

                    </div>
                    <a href="" className="maker">Admin</a>
                </div>
                <div className="isi-main-content">
                    <p className="title-isi">Tumbas</p>
                    <button className="btn-tipe">Market</button>
                    <div className="img-main">

                    </div>
                    <a href="" className="maker">Admin</a>
                </div>

                
            </div>
        </div>
    </div>
)}

export default Blog