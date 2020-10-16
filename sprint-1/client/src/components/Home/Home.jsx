import React, { Component } from 'react';
import Header from '../Header/Header';
import fire from '../../fire';

class Home extends Component { 
    
    handleLogout = () => {
        fire.auth().signOut();
      };

    render() {
        return (
           <section className="home">
               <Header handleLogout={this.handleLogout}/>
           </section>
        )
    }
}

export default Home;
