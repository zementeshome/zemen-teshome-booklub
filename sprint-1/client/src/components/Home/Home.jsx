import React, { Component } from 'react';
import Header from '../Header/Header';
import fire from '../../fire';
import { db } from '../../fire';

class Home extends Component { 
    state = {users: [], loggedInUserData: undefined}
    loggedInUser = 'zemen@live.ca'
    handleLogout = () => {
        fire.auth().signOut();
      };
    
      componentDidMount() {
          db.collection('booklub-users').onSnapshot((snapshot) => {
            // console.log(snapshot.docs)
            snapshot.docs.map((doc) => {
const data = doc.data();
if(data.userId === this.loggedInUser){
    this.setState({
        loggedInUserData: data
    })
}
else{

    this.setState({
        users: [...this.state.users, doc.data()]

    });
}
            }
                // console.log(doc.data())
            );

          })
          
      }

    render() {
        return (
           <section className="home">
               <Header handleLogout={this.handleLogout}/>
           </section>
        )
    }
}

export default Home;
