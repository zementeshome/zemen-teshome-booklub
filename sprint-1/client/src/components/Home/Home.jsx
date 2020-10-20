import React, { Component } from 'react';
import Header from '../Header/Header';
import fire from '../../fire';
import { db } from '../../fire';
import SearchBooks from '../SearchBooks/SearchBooks';

class Home extends Component { 
    state = {users: [], loggedInUserData: undefined};
    loggedInUser = '';
    // book: '', result: []
    handleLogout = () => {
        fire.auth().signOut();
      };

      //GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyD711ZoA7Yy6HWyZ0lJxDASNR9uJYEOcXc
    
      componentDidMount() {
        // // axios.get('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyD711ZoA7Yy6HWyZ0lJxDASNR9uJYEOcXc')
        // .then(res => {
        //     this.setState({ books: res.items})
        // })
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

    // handleChange = (e) => {
    //     const book = e.target.value
    //     this.setState({
    //         book: book
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     const book = e.target.value
    //     const apiKey = 'AIzaSyD711ZoA7Yy6HWyZ0lJxDASNR9uJYEOcXc'
    //     axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"?key="+apiKey+"&maxResults=40")
    //     .then(data => {
    //     console.log(data)
    //     })
    // }


    render() {
        return (
           <section className="home">
               <Header handleLogout={this.handleLogout}/>
               <SearchBooks />
           </section>
        )
    }
}

export default Home;
