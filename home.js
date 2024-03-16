import React from 'react';
import video from './videos/videoHome.mp4';
import './home.css';


function Home(){

    return(
        <div className="homePage">
            <div className="header">
                <span className="event">Event</span>
                <span className="minded">Minded</span>
                <div className="navbars">
                    <a href="/home">Accueil</a>
                    <a href="/Event">Evenements</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>
            </div>
        </div>        

    )
}

export default Home;