import React, { Component } from 'react';
import Header from '../Header/Header';
import fire from '../../fire';
import SearchBooks from '../SearchBooks/SearchBooks';
import './Home.scss';

class Home extends Component { 
    handleLogout = () => {
        fire.auth().signOut();
      };

    render() {
        return (
           <section className="home">
               <Header handleLogout={this.handleLogout}/>
                  <img className="home__hero" src={process.env.PUBLIC_URL + '/assets/hero2.svg'} alt="hero of library"/>
               <div className="home__div">
               <div className="home__left-container">
               <div className="home__container">
                  <h1 className="home__header">hey {fire.auth().currentUser?.displayName},</h1>
               <div className="home__text-container">
                  <p className="home__text">welcome to booklub. we're here to help you start your book club journey! please visit the klub page to meet your club members or visit the about page to find out more about how we run things around here.</p>
               </div>
                  <img className="home__image" src={process.env.PUBLIC_URL + '/assets/girl-icon-blue.jpg'} alt="girl reading illustration"/>
               </div>
               </div>
               <div className="home__right-container">
               <div className="home__book-container">
                  <h2 className="home__book">book of the month</h2>
               <div className="home__book-cover-container">
                  <img className="home__book-cover" src={process.env.PUBLIC_URL + '/assets/japanese-short-stories.jpg'} alt="book cover"/>
               </div>
               <div className="home__book-text-container">
                  <p className="home__book-text">"...provides a window into one of the world's most dynamic and challenging literary scenes. beginning with the first writings to assimilate and rework western literary traditions."</p>
               </div>
              </div>
            </div>
          </div>
              <SearchBooks />
           </section>
        )
    }
}

export default Home;
