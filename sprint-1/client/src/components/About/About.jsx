import React from 'react'
import { Link } from 'react-router-dom';
import './About.scss';

class About extends React.Component {
    render() {
    return (
        <section className="about">
             <Link to="/home"><img className="about__logo" src={process.env.PUBLIC_URL + '/assets/logo1.svg'} alt="booklub logo"/></Link>
             {/* <span className="about__line"></span> */}
            {/* <h1>about us</h1> */}
            <h1 className="about__header"><span>about us</span></h1>
            <div className="about__container">
            <div className="about__text-container">
            <p className="about__text-first">booklub is a new way to enjoy an old tradition</p>
            <p className="about__text-second">in these unprecedented times, starting an online book club is a great way to stay connected and participate in discussions that can take your mind off of everyday life.</p>
            <p className="about__text-third">whatever your reason was for joining booklub, you've come to the right place. our goal is to connect you with with people who have the same interests as you and keep you engaged. we're here to guide you on your literary journey.</p>
            </div>
            <div className="about__image-container">
            <img className="about__image" src={process.env.PUBLIC_URL + '/assets/book-icon.svg'} alt="book"/>
            </div>
            </div>
            </section>
    )
  }
}
export default About;