import React, { Component } from 'react';
import Header from '../Header/Header';
import fire from '../../fire';
import { db } from '../../fire';
import axios from 'axios';

class Home extends Component { 
    state = {users: [], loggedInUserData: undefined}
    loggedInUser = '';
    handleLogout = () => {
        fire.auth().signOut();
      };
    
      componentDidMount() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyD711ZoA7Yy6HWyZ0lJxDASNR9uJYEOcXc')
        .then(res => {
            this.setState({ books: res.items})
        })
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
