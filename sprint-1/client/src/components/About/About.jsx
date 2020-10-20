import React from 'react'
import { Link } from 'react-router-dom';
import './About.scss';

class About extends React.Component {
    render() {
    return (
        <section className="about">
             <Link to="/home"><img className="about__logo" src={process.env.PUBLIC_URL + '/assets/logo1.svg'} alt="booklub logo"/></Link>
            <h1>About</h1>
            </section>
    )
  }
}
//TODO: Need a back to home button
export default About;