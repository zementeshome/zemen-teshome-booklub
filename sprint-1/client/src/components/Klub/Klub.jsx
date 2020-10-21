import React from 'react'
import { db } from '../../fire'
import { Link } from 'react-router-dom';
import fire from '../../fire';
import './Klub.scss';
import Join from '../Join/Join';
import Chat from '../Chat/Chat';

class Klub extends React.Component {

    state = {
        user: ''
    }

    // user = () => {
    //     this.state.user
    // }

    authorizeListener = (user) => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                {this.userId = user.uid}
            } else {
                console.log('no user is signed in')
            }
        })
    // componentDidMount() {
    //     const booklub = fire.database().ref('booklub-users')
    //     booklub.child(this.userId).child('fullName').once('value').then(data => {
    //         let name = data.val();
    //         if(data.val() !== null) {
    //             console.log(data.val())
    //         }
    //         this.setState({
    //             fullName: name
    //         })
    //     })
        // db.collection('booklub-users').ref(fire.auth().currentUser).once('value').then(snapshot => {
        //     console.log(snapshot.val())
 

    // componentDidMount() {
    //     db.collection('booklub-users').ref(fire.auth().currentUser).once('value').then(snapshot => {
    //         console.log(snapshot.val())
    //     })
    //     db.collection('booklub-users').get().then(snapshot => {
    //         // // console.log(snapshot);
    //         // const users = [];
    //         // if (snapshot.)
    //         // snapshot.forEach( doc => {
    //         //     const data = doc.data()
    //         //     users.push(data)
    //         })
    //         this.setState({
    //             users: users
    //         })
    //     })
    // }

    // viewUser = () => {
    //     db.collection('booklub-users').get().then((snapshot) => {
    //         snapshot.forEach(doc => {
    //             if (doc.exists) {
    //                 this.setState(prevState => ({
    //                     fullName: [...prevState.fullName, doc.data]
    //                 }))
    //             }
    //         })
    //     })
    // }
    // username = () => {
    //     db.collection('booklub-users').get(this.state.fullName)
    //  
   }

    render() {
    return (
        <section className="klub">
            <Link to="/home"><img className="klub__logo" src={process.env.PUBLIC_URL + '/assets/logo1.svg'} alt="booklub logo"/></Link>
            <h1>Hey</h1>
            <Join />
            </section>
    )
  }
}

//  <h1>Hey {this.state.users && this.state.users.filter((users)=> users.fullName === this.state.users.fullName) {
    // return (
    //     <p>{users.fullName}</p>
    //     )
    // })}</h1>

export default Klub;