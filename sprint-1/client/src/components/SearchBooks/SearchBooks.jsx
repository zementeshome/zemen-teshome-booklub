import React, { useState } from 'react'
import axios from 'axios';
import './SearchBooks.scss';

function SearchBooks() {

// const [user, setUser] = useState('');

     //GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyD711ZoA7Yy6HWyZ0lJxDASNR9uJYEOcXc

const [book, setBook] = useState('');
const [result, setResult] = useState([]);
const [apiKey, setApiKey] = useState('AIzaSyD711ZoA7Yy6HWyZ0lJxDASNR9uJYEOcXc')

  const handleChange = (e) => {
        const book = e.target.value
        setBook(book);
    }

   const handleSubmit = (e) => {
        e.preventDefault()
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
        .then(data => {
            console.log(data.data.items)
        setResult(data.data.items)
        })
    }

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit}>
            <div className="search__container">
                <label className="search__label" htmlFor="search__input">
                       <input className="search__input" type="text" autoComplete="off" onChange={handleChange}/></label><br />
                       <button className="search__button" type="submit">search for books</button>
                       </div>
               </form>
               {result.map(book => (
                  <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer"><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/> </a>
               ))}
        </section>
    )
}

export default SearchBooks;
