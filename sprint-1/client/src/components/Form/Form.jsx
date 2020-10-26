import React from 'react'
import './Form.scss';
import { db } from '../../fire';
import fire from '../../fire';

class Form extends React.Component {
     state = {
        userId: '',
        hours: '',
        purpose: '',
        genres: [],
        authors: '',
    };

    user = fire.auth().currentUser

    onChange = (e) => {
        this.setState({
            ...this.state,
            hours: e.target.value,
        })
    }

    onPurposeChange = (e) => {
        this.setState({
            ...this.state,
            purpose: e.target.value
        })
    }

    onGenreChange = (e) => {
        let genres = this.state.genres;
        if(e.target.checked){
            genres.push(e.target.value);
        }else{
            const index= genres.findIndex(g=>g === e.target.value)
            if(index>-1){
                genres.splice(index,1);
            }
        }
        this.setState({
            ...this.state,
            genres: genres
        })
    }

    onAuthorChange = (e) => {
        this.setState({
            ...this.state,
            authors: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(fire.auth().currentUser)
        this.setState({
            ...this.state,
            userId: fire.auth().currentUser.email
        })
        db.collection('booklub-users').add({...this.state, userId: fire.auth().currentUser.email}).then(() => {
        this.addUserToKlub()
        })
        this.props.history.push('/home');
    }

    addUserToKlub = () => {
        let klubs = [];
        db.collection('klubs').where("genres", "array-contains-any", this.state.genres).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                klubs.push({id: doc.id, data: doc.data()});
            });
            console.log(klubs);
            if (klubs && klubs.length > 0) {
                let minUsers = klubs[0].data.users?.length || 0
                let klubIndex = 0
                klubs.forEach((value, index) => {
                    if (value.data.users?.length < minUsers) {
                        klubIndex = index
                    }
                })
                let klubToModify = klubs[klubIndex]
                let users = klubToModify?.data.users??[]
                users.push(fire.auth().currentUser.displayName)
                console.log(users, 'updated users')
                db.collection('klubs').doc(klubs[klubIndex].id).update({users: users}).then(() => {
                    db.collection('booklub-users').where('userId', '==', this.user.email).get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) =>{
                            db.collection('booklub-users').doc(doc.id).update({klub: klubToModify.id})
                        })
                    })
                })
            }
        }); 
    }

    render() {
        return (
        <section className="form">
            <div className="form__header-container">
                   <h1 className="form__header">hello</h1>
                   <img className="form__image" src={process.env.PUBLIC_URL + '/assets/book-icon.svg'} alt="book"/>
            </div>
                   <p className="form__info">please fill out the form below so we can get to know you a little better.</p>
            <form onSubmit={this.handleSubmit} name="form__container" action="" method="GET">
                   <p className="form__subheading">how many hours a week to do you spend reading?</p>
            <div className="form__box">
                  <input className="form__input" type="radio" name="radAnswer" value="0" onChange={this.onChange}/>
                  <label className="form__label" htmlFor="zero">0</label>
            </div>
            <div className="form__box">
                 <input className="form__input" type="radio" name="radAnswer" value="1-5" onChange={this.onChange}/>
                 <label className="form__label" htmlFor="one">1-5</label>
            </div>
            <div className="form__box">
                 <input className="form__input" type="radio" name="radAnswer" value="6-10" onChange={this.onChange}/>
                 <label className="form__label" htmlFor="six">6-10</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer" value="11-15" onChange={this.onChange}/>
                <label className="form__label" htmlFor="eleven">11-15</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value="15+" onChange={this.onChange}/>
                <label className="form__label" htmlFor="fifteenPlus">15+</label>
            </div>
                <p className="form__subheading">what are you looking for?</p>
            <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2"  value="to get into reading" onChange={this.onPurposeChange}/>
                <label className="form__label" htmlFor="getInto">to get into reading</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value="to read more" onChange={this.onPurposeChange}/>
                <label className="form__label" htmlFor="readMore">to read more</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value="to meet new people" onChange={this.onPurposeChange}/>
                <label className="form__label" htmlFor="meet">to meet new people</label>
            </div>
                <p className="form__subheading">choose three genres you're interested in</p>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="horror" value="horror" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="horror">horror</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="scienceFiction" value="science fiction" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="scienceFiction">science fiction</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="history" value="history" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="history">history</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="selfHelp" value="self-help" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="selfHelp">self-help</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="politics" value="politics" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="politics">politics</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="" value="literary fiction" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="literaryFiction">literary fiction</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="satire" value="satire" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="satire">satire</label> <br />
            </div>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="philosophy" value="philosophy" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="philosophy">philosophy</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="graphic" value="graphic novels/comic books" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="graphic">graphic novels/comic books</label>
            </div>
            <div className="form__box">
                <input className="form__input" type="checkbox" name="art" value="art/architecture" onChange={this.onGenreChange}/>
                <label className="form__label" htmlFor="art">art/architecture</label>
            </div>
                <p className="form__subheading">let us know who some of your favourite authors are</p>
                <div className="form__input-container">
                <textarea className="form__input-authors" type="text" style={{fontFamily: 'Roboto', fontSize: '13px'}} required placeholder="if you don't have any please type n/a" value={this.state.authors} onChange={this.onAuthorChange}/>
                </div>
            <div className="form__button-container">
                <button className="form__button" type="submit">submit</button>
            </div>
        </form>     
    </section>
   )
  }
}

//FIXME: what brings you and what is your purpose for joining this app, how many hours 


export default Form;
