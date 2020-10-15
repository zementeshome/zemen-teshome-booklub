import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <section className="form">
                <h1 className="form__header">welcome</h1>
                <p className="form__info">please fill out the form below so we can get to know you a little better.</p>
                <form action="form__container">
                <p className="form__subheading">how many hours a week to do you spend reading?</p>
                <input className="form__input" type="radio" name="zero" value="zero"/>
                <label className="form__label" for="zero">0</label>
                <input className="form__input" type="radio" name="one" value="one"/>
                <label className="form__label" for="one">1-5</label>
                <input className="form__input" type="radio" name="six" value="six"/>
                <label className="form__label" for="six">6-10</label>
                <input className="form__input" type="radio" name="eleven" value="eleven"/>
                <label className="form__label" for="eleven">11-15</label>
                <input className="form__input" type="radio" name="fifteenPlus" value="fifteenPlus"/>
                <label className="form__label" for="fifteenPlus">15+</label>
                <p className="form__subheading">what are you looking for?</p>
                <input className="form__input" type="radio" name="getInto" value="getInto"/>
                <label className="form__label" for="getInto">to get into reading</label>
                <input className="form__input" type="radio" name="readMore" value="readMore"/>
                <label className="form__label" for="readMore">to read more</label>
                <input className="form__input" type="radio" name="meet" value="meet"/>
                <label className="form__label" for="meet">to meet new people</label>
                <p className="form__subheading">choose three genres you like/are interested in</p>
                <input className="form__input" type="radio" name="horror" value="horror"/>
                <label className="form__label" for="horror">horror</label>
                <input className="form__input" type="radio" name="scienceFiction" value="scienceFiction"/>
                <label className="form__label" for="scienceFiction">science fiction</label> 
                <input className="form__input" type="radio" name="history" value="history"/>
                <label className="form__label" for="history">history</label> 
                <input className="form__input" type="radio" name="selfHelp" value="selfHelp"/>
                <label className="form__label" for="selfHelp">self-help</label> 
                <input className="form__input" type="radio" name="politics" value="politics"/>
                <label className="form__label" for="politics">politics</label> 
                <input className="form__input" type="radio" name="literaryFiction" value="literaryFiction"/>
                <label className="form__label" for="literaryFiction">literary fiction</label> 
                <input className="form__input" type="radio" name="satire" value="satire"/>
                <label className="form__label" for="satire">satire</label> 
                <input className="form__input" type="radio" name="philosophy" value="philosophy"/>
                <label className="form__label" for="philosophy">philosophy</label> 
                <input className="form__input" type="radio" name="graphic" value="graphic"/>
                <label className="form__label" for="graphic">graphic novels/comic books</label> 
                <input className="form__input" type="radio" name="art" value="art"/>
                <label className="form__label" for="art">art/architecture</label>  
                <p className="form__subheading">let us know who your favourite authors are</p>
                </form>     
            </section>
            // form takes them to a page where they can join new klub
        )
    }
}

export default Form;
