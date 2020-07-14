import React from 'react'

// import css
import './Home.css'

//import image
import imgTitle from '../../Public/imgFire.svg'
import imgWe from '../../Public/weWith.svg'
import ilusOne from '../../Public/ilusOne.svg'
import imgPor from '../../Public/webPor.svg'
import gitIc from '../../Public/gitIc.svg'
import icMore from '../../Public/icMore.svg'
import ilusAnd from '../../Public/ilusAnd.svg'
import ilusUI from '../../Public/ilusUI.svg'

const Home = () => {
    return(
        <div className="home">
            <div className="utama-home">
                <div className="title-utama">
                    <div className="theM-title">
                        <img src={imgTitle} alt=""/>
                        <p>The Mulyono's</p>
                    </div>
                    <div className="work-with-we">
                        <img src={imgWe} alt=""/>
                    </div>
                    <div className="btn-work-with">
                        <button className="lets-try">Let's Try</button>
                        <button className="look-more">Look More</button>
                    </div>
                </div>
                <div className="img-ilus">
                    <img src={ilusOne} alt=""/>
                </div>
            </div>
            <h2 className="h2-title">Make Your Profesional Website</h2>
            <div className="web-home">
                <img src={imgPor} alt="" className="img-porto" />
                <div className="web-home-detail">
                    <div className="porto-web">
                        <p className="p-satu">Best Services</p>
                    </div>
                    <div className="porto-web porto-dua">
                        <div className="total">
                            <p className="total-nbr">77</p>
                            <p className="por-text">Portofolio</p>
                        </div>
                        <div className="git-link">
                        <img src={gitIc} alt=""/>
                            <p> Check Portofolio <a href="">Github</a></p>
                        </div>
                    </div>
                    <div className="porto-web porto-tiga">
                        <div className="text-look-more">
                            <div className="why-should-we">
                                <p>Why Should We</p>
                            </div>
                            <div className="why-detail">
                                <p>Best in the world, <br/>Trusted, <br/>no one can changes, </p>
                            </div>
                            <div className="find-more">
                                <img src={icMore} className="ic-more" alt=""/> <p>Find out more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="android-porto">
                    <img src={ilusAnd} alt=""/>
                    <div className="title-android">
                        <p>Make Your <br/>Android Apps</p>
                    </div>
                    <div className="android-detail">
                        <p>we can make your android apps, <br/>more than more, <br/>first in class</p>
                    </div>
                    <div className="find-more">
                        <img src={icMore} className="ic-more" alt=""/> <p>Find out more</p>
                    </div>
                </div>
                <div className="UI-porto">
                    <img src={ilusUI} alt="" className="ilus-ui" />
                    <div className="ui-title">
                        <p>UI / UX</p>
                    </div>
                    <div className="ui-detail">
                        <p>Change Your UI/UX, <br/>with we</p>
                    </div>
                    <div className="find-more">
                        <img src={icMore} className="ic-more" alt=""/> <p>Find out more</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home