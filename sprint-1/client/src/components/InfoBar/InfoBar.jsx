import React from 'react';
import './InfoBar.scss';

function InfoBar({ room }) {
    return (
        <section className="infoBar">
            <div className="infoBar__left-inner-container">
            <img className="infoBar__icon" src={process.env.PUBLIC_URL + '/assets/online.png'} alt="online icon"/>
            <h3 className="infoBar__header">{room}</h3>
                </div>
            <div className="infoBar__right-inner-container">
             <a href="/"><img className="infoBar__online-icon"src={process.env.PUBLIC_URL + '/assets/leave.png'} alt="leave icon"/></a>
            </div>
        </section>
        //FIXME: change close and online icon
    )
}

export default InfoBar;
