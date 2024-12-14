import React from 'react'
import Room from './Room'

function Rooms() {
    return (
        <div className="create-post view smaller-margin">
            <div className="upper">
                <div className="title">
                    <div className="icon">
                        <img src="img/icons/video-room.svg" alt />
                    </div>
                    <span>Rooms</span>
                </div>
                <a href>
                    create 
                </a>
            </div>
            <div className="owl-carousel owl-theme rooms">
               
                <Room img="img/avatar/hero.png"/>
                <Room img="img/avatar/1.jpg"/>
                <Room img="img/avatar/2.jpg"/>
                <Room img="img/avatar/3.jpg"/>
                <Room img="img/avatar/4.jpg"/>
                <Room img="img/avatar/5.jpg"/>                
                <Room img="img/avatar/6.jpg"/>

            </div>
        </div>
    )
}

export default Rooms
