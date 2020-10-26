import React from 'react'
import { Link } from 'react-router-dom';
import fire, { db } from '../../fire';
import './Klub.scss';
import Join from '../Join/Join';
import AddEvent from '../AddEvent/AddEvent';
import { FaRegUserCircle } from 'react-icons/fa';

class Klub extends React.Component {

    state = {
        users: []
    }

    user = fire.auth().currentUser
    
    componentDidMount() {
    if (!this.user) {
        this.props.history.push('/')
    } else {
        this.displayKlub();
     }
    }

    displayKlub = () => {
        db.collection('booklub-users').where('userId', '==', this.user?.email).get().then((querySnapshot) => {
            console.log(querySnapshot)
            querySnapshot.forEach((doc) =>{
              let klub = doc.data().klub
              console.log(klub)
              db.collection('klubs').doc(klub).get().then((doc) => {
                    if (doc.exists) {
                console.log(doc.data())
                      this.setState({
                          users: [...doc.data().users]
                        })
                    }
              })
        })
    })
}
    render() {
    return (
        <section className="klub">
            <Link to="/home"><img className="klub__logo" src={process.env.PUBLIC_URL + '/assets/logo1.svg'} alt="booklub logo"/></Link>
                <h1 className="klub__header">welcome,</h1>
            <div className="klub__members">
                {this.state.users?.map((user) => 
                    <p className="klub__member-name" key={user.id}><FaRegUserCircle style={{width: '40%'}}/> {user}</p>
                )}
            </div>
        <AddEvent />
    <Join />
</section>
    )
  }
}
export default Klub;