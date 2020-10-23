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
               <span className="home__line"></span>
               <h1 className="home__header">hey {fire.auth().currentUser?.displayName},</h1>
               <div className="home__text-container">
               <p className="home__text">welcome to booklub. we're here to connect you with like-minded readers and start your book club journey. please visit the klub page to meet your klub members. if you want to know more about how we run things, click here.</p>
               </div>
               <img className="home__hero" src={process.env.PUBLIC_URL + '/assets/hero2.svg'} alt="hero of library"/>
               <SearchBooks />
           </section>
        )
    }
}

export default Home;
