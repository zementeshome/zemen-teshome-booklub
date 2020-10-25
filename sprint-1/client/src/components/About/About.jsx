import React from 'react'
import { Link } from 'react-router-dom';
import './About.scss';

class About extends React.Component {
    render() {
    return (
        <section className="about">
             <Link to="/home"><img className="about__logo" src={process.env.PUBLIC_URL + '/assets/logo1.svg'} alt="booklub logo"/></Link>
             {/* <span className="about__line"></span> */}
            <h1>about us</h1>
            <p className="about__text">booklub is a klub, that's it!</p>
            <img className="about__image" src={process.env.PUBLIC_URL + '/assets/book-icon.svg'} alt="book"/>
            </section>
    )
  }
}
export default About;