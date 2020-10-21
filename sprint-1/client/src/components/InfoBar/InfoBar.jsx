import React from 'react'

function InfoBar({ room }) {
    return (
        <section className="infoBar">
            <div className="infoBar__left-inner-container">
            <img className="infoBar__icon" src={process.env.PUBLIC_URL + '/assets/online.png'} alt="online icon"/>
            <h3 className="infoBar__header">{room}</h3>
                </div>
            <div className="infoBar__right-inner-container">
             <a href="/home"><img src={process.env.PUBLIC_URL + '/assets/leave.png'} alt="leave icon"/></a>
            </div>
        </section>
    )
}

export default InfoBar;
