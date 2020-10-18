import React from 'react'
import './Form.scss';
import { db } from '../../fire';

class Form extends React.Component {

    state = {
        authors: '',
        genres: [],
        hours: '',
        purpose: '',
        userId: ''
    };

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
            const index= genres.findIndex(g=>g == e.target.value)
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
        e.preventDefault()
        db.collection('booklub-users').add(this.state).then(() => {

        })
        // console.log(this.state)
    }

    // useEffect(() => {
    //     db.collection('booklub-users').onSnapshot
    // }, []);

    render() {
        return (
            <section className="form">
                <h1 className="form__header">welcome</h1>
                <p className="form__info">please fill out the form below so we can get to know you a little better.</p>
                <form onSubmit={this.handleSubmit} name="form__container" action="" method="GET">
                <input className="form__user" value={this.state.userId} type="text" name="userId" onChange={ (e) => this.setState({userId: e.target.value})}></input>
                <p className="form__subheading">how many hours a week to do you spend reading?</p>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer" value="0" onChange={this.onChange}/>
                <label className="form__label" for="zero">0</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer" value="1-5" onChange={this.onChange}/>
                <label className="form__label" for="one">1-5</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer" value="6-10" onChange={this.onChange}/>
                <label className="form__label" for="six">6-10</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer" value="11-15" onChange={this.onChange}/>
                <label className="form__label" for="eleven">11-15</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value="15+" onChange={this.onChange}/>
                <label className="form__label" for="fifteenPlus">15+</label>
                </div>
                <p className="form__subheading">what are you looking for?</p>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2"  value="to get into reading" onChange={this.onPurposeChange}/>
                <label className="form__label" for="getInto">to get into reading</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value="to read more" onChange={this.onPurposeChange}/>
                <label className="form__label" for="readMore">to read more</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value="to meet new people" onChange={this.onPurposeChange}/>
                <label className="form__label" for="meet">to meet new people</label>
                </div>
                <p className="form__subheading">choose three genres you're interested in</p>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="horror" value="horror" onChange={this.onGenreChange}/>
                <label className="form__label" for="horror">horror</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="scienceFiction" value="science fiction" onChange={this.onGenreChange}/>
                <label className="form__label" for="scienceFiction">science fiction</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="history" value="history" onChange={this.onGenreChange}/>
                <label className="form__label" for="history">history</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="selfHelp" value="self-help" onChange={this.onGenreChange}/>
                <label className="form__label" for="selfHelp">self-help</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="politics" value="politics" onChange={this.onGenreChange}/>
                <label className="form__label" for="politics">politics</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="" value="literary fiction" onChange={this.onGenreChange}/>
                <label className="form__label" for="literaryFiction">literary fiction</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="satire" value="satire" onChange={this.onGenreChange}/>
                <label className="form__label" for="satire">satire</label> <br />
                </div>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="philosophy" value="philosophy" onChange={this.onGenreChange}/>
                <label className="form__label" for="philosophy">philosophy</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="graphic" value="graphic novels/comic books" onChange={this.onGenreChange}/>
                <label className="form__label" for="graphic">graphic novels/comic books</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="checkbox" name="art" value="art/architecture" onChange={this.onGenreChange}/>
                <label className="form__label" for="art">art/architecture</label>
                </div>
                <p className="form__subheading">let us know who some of your favourite authors are</p>
                <input className="form__input-authors" type="text" style={{fontFamily: 'Roboto', fontSize: '13px'}}required placeholder="if you don't have any please type n/a" value={this.state.authors} onChange={this.onAuthorChange}/>
                <button className="form__button" type="submit">submit</button>
                </form>     
            </section>
            // form takes them to a page where they can join new klub
        )
    }
}

export default Form;
