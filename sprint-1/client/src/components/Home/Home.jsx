import React, { Component } from 'react';
import Header from '../Header/Header';
import fire from '../../fire';
// import { db } from '../../fire';
import SearchBooks from '../SearchBooks/SearchBooks';
import './Home.scss';

class Home extends Component { 
    state = {users: [], loggedInUserData: undefined, userFullName: ''};
    loggedInUser = '';

    handleLogout = () => {
        fire.auth().signOut();
      };

//   getUser = fire.auth().onAuthStateChanged(user => {
//         if (user) { 
//             console.log(user);
//         //   this.setState({ uid: firebaseUser.uid });
//         }
        
//       });  
//     componentDidMount() {
//     //   const userId = fire.auth().currentUser.uid
//         db.collection('booklub-users').get().then(snapshot => {
//            snapshot.docs.forEach(doc => {
//              if (doc.exists) {
//                const { fullName } = doc.data();
//                     this.setState({
//                      userFullName: fullName
//                  })
//                } else {
//                  console.log("No such document!", doc);
//              }
            
//            })
//          }).catch(function (error) {
//              console.log("Error getting document:", error);
//          });
//     }




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

//       componentDidMount() {
//           db.collection('booklub-users').onSnapshot((snapshot) => {
//             snapshot.docs.map((doc) => {
//             const data = doc.data();
//             if(data.userId === this.loggedInUser){
//             this.setState({
//                 loggedInUserData: data
//          })
//     }
//         else{
//         this.setState({
//             users: [...this.state.users, doc.data()]
//     });
// }
//             }
//             );
//           })   
//       }

    //   unsubscribe = firebase.firestore().collection('messages').where('user', "==", this.props.user.uid).onSnapshot(this.onCollectionUpdate)

    //   getCurrentUser = () => {
    //     db.fire().collection('booklub-users').where('fullName', "==", this.props.fullName.uid).onSnapshot(this.onCollectionUpdate)
    //   

    


    render() {
        return (
           <section className="home">
               <Header handleLogout={this.handleLogout}/>
               {/* <span className="home__line"></span> */}
               <img className="home__hero" src={process.env.PUBLIC_URL + '/assets/hero2.svg'} alt="hero of library"/>
               <div className="home__div">
               <div className="home__left-container">
               <div className="home__container">
               <h1 className="home__header">hey {fire.auth().currentUser?.displayName},</h1>
               <div className="home__text-container">
               <p className="home__text">welcome to booklub. we're here to help your start your book club journey by connecting you with like-minded readers. please visit the klub page to meet your klub members and find out more about how we run things around here.</p>
               </div>
               <img className="home__image" src={process.env.PUBLIC_URL + '/assets/girl-icon.svg'} alt="girl reading illustration"/>
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
            {/* <span className="home__text-line"></span> */}
             <SearchBooks />
           </section>
        )
    }
}

//TODO: add a hover to nav bar?

export default Home;
