import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
    return (
        <section className="bookList">
            {/* <Book image={firstBook.image} title={firstBook.title} author={firstBook.author} />
            <Book image={secondBook.image} title={secondBook.title} author={secondBook.author} /> */}
            {books.map((book) => {
                // Using spread operator means we are sending each property seperately
                return <Book key={book.id} {...book} /> // This will spead out all the properties of book
                // return <Book key={book.id} book={book} />
            })}
        </section>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'));