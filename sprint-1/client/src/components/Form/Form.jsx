import React from 'react'
import './Form.scss';

class Form extends React.Component {

    state = {
        value: ''
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <section className="form">
                <h1 className="form__header">welcome</h1>
                {/* <div className="form__welcome-container">
                    <p className="form__welcome-message">welcome to</p>
                    <img className="form__welcome-logo" src={process.env.PUBLIC_URL + '/assets/logo2.svg'} alt="booklub logo"/>
                </div> */}
                <p className="form__info">please fill out the form below so we can get to know you a little better.</p>
                <form onSubmit={this.handleSubmit} name="form__container" action="" method="GET">
                <p className="form__subheading">how many hours a week to do you spend reading?</p>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer" value="" onChange={this.onChange}/>
                <label className="form__label" for="zero">0</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer" value=""/>
                <label className="form__label" for="one">1-5</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer" value=""/>
                <label className="form__label" for="six">6-10</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer" value=""/>
                <label className="form__label" for="eleven">11-15</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value=""/>
                <label className="form__label" for="fifteenPlus">15+</label>
                </div>
                <p className="form__subheading">what are you looking for?</p>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value=""/>
                <label className="form__label" for="getInto">to get into reading</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value=""/>
                <label className="form__label" for="readMore">to read more</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="radAnswer2" value=""/>
                <label className="form__label" for="meet">to meet new people</label>
                </div>
                <p className="form__subheading">choose three genres you're interested in</p>
                <div className="form__box">
                <input className="form__input" type="radio" name="horror" value=""/>
                <label className="form__label" for="horror">horror</label><br />
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="scienceFiction" value=""/>
                <label className="form__label" for="scienceFiction">science fiction</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="history" value=""/>
                <label className="form__label" for="history">history</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="selfHelp" value=""/>
                <label className="form__label" for="selfHelp">self-help</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="politics" value=""/>
                <label className="form__label" for="politics">politics</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="" value="literaryFiction"/>
                <label className="form__label" for="literaryFiction">literary fiction</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="satire" value=""/>
                <label className="form__label" for="satire">satire</label> <br />
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="philosophy" value=""/>
                <label className="form__label" for="philosophy">philosophy</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="graphic" value=""/>
                <label className="form__label" for="graphic">graphic novels/comic books</label>
                </div>
                <div className="form__box">
                <input className="form__input" type="radio" name="art" value=""/>
                <label className="form__label" for="art">art/architecture</label>
                </div>
                <p className="form__subheading">let us know who some of your favourite authors are</p>
                <input className="form__input-authors" type="text" value="" required placeholder="if you don't have any please type n/a"/>
                <button className="form__button" type="submit">submit</button>
                </form>     
            </section>
            // form takes them to a page where they can join new klub
        )
    }
}

export default Form;
