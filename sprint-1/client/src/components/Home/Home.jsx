import React, { Component } from 'react';
import Header from '../Header/Header';
import fire from '../../fire';
import { db } from '../../fire';
import SearchBooks from '../SearchBooks/SearchBooks';

class Home extends Component { 
    state = {users: [], loggedInUserData: undefined, userFullName: ''};
    loggedInUser = '';

    handleLogout = () => {
        fire.auth().signOut();
      };

  getUser =  fire.auth().onAuthStateChanged(user => {
    // console.log('getUser', user);
        if (user) { 
         let firebaseUser = {
             uid: user.uid,
             name: user.fullName,
             email: user.email
          };
          this.setState({ uid: firebaseUser.uid });
        }
        this.displayUser();
      });  

    //   docRef = () => {
    //     db.firestore().collection('booklub-users').doc(this.state.uid)
    // } 

    // console.log(this.state.uid)
    //     db.collection('booklub-users')
    //       .doc(`${this.state.uid}`)
    //       .get()
    //       .then(function (doc) {
    //           if (doc.exists) {
    //               const { fullName } = doc.data();
      
    //               this.setState({
    //                   userFullName: fullName
    //               })
    //             } else {
    //               // doc.data() will be undefined in this case
    //               console.log("No such document!", doc);
    //           }
    //       }).catch(function (error) {
    //           console.log("Error getting document:", error);
    //       });

    // where("email", "==", fire.auth().currentUser.email)

     displayUser = () => { 
         db.collection('booklub-users').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
            // doc.email === fire.auth().currentUser.email
              if (doc.exists) {
                const { fullName } = doc.data();
      
                  this.setState({
                      userFullName: fullName
                  })
                } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!", doc);
              }
            })
          }).catch(function (error) {
              console.log("Error getting document:", error);
          });
        }

      componentDidMount() {
          db.collection('booklub-users').onSnapshot((snapshot) => {
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

    //   unsubscribe = firebase.firestore().collection('messages').where('user', "==", this.props.user.uid).onSnapshot(this.onCollectionUpdate)

    //   getCurrentUser = () => {
    //     db.fire().collection('booklub-users').where('fullName', "==", this.props.fullName.uid).onSnapshot(this.onCollectionUpdate)
    //   

    


    render() {
        return (
           <section className="home">
               <Header handleLogout={this.handleLogout}/>
               <h1>Hello {this.state.userFullName}</h1>
               <SearchBooks />
           </section>
        )
    }
}

export default Home;
