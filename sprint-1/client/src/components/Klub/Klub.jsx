import React from 'react'
import { db } from '../../fire'
import fire from '../../fire';

class Klub extends React.Component {

    state = {
        users: '',
    }

    authorizeListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('user is signed in')
            } else {
                console.log('no user is signed in')
            }
        })
    }

    getCurrentUser = () => {
        db.collection('booklub-users').ref(fire.auth().currentUser).once('value').then(snapshot => {
            console.log(snapshot.val())
    })

    // componentDidMount() {
    //     db.collection('booklub-users').ref(fire.auth().currentUser).once('value').then(snapshot => {
    //         console.log(snapshot.val())
    //     })
        // db.collection('booklub-users').get().then(snapshot => {
        //     // // console.log(snapshot);
        //     // const users = [];
        //     if (snapshot.)
        //     snapshot.forEach( doc => {
        //         const data = doc.data()
        //         users.push(data)
        //     })
        //     this.setState({
        //         users: users
        //     })
        // })
    }

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
    //     }

    render() {
    return (
        <div>
            <h1>Hey</h1>
        </div>
    )
  }
}

//  <h1>Hey {this.state.users && this.state.users.filter((users)=> users.fullName === this.state.users.fullName) {
    // return (
    //     <p>{users.fullName}</p>
    //     )
    // })}</h1>
//TODO: Need a back to home button
export default Klub;