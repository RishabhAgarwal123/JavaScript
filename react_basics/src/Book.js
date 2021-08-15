import React from 'react'

const Book = (props) => {
    const clickHandler = () => {
        alert(`Book Title`);
    }
    const handleAuthor = (author) => {
        alert(`Author is ${author}`);
    }
    // Using destructuring
    // const { image, title, author } = props.book;
    const { image, title, author } = props; // because we are sending data as spread operator 
    return <article>
        <img src={image} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Title</button>
        <button type="button" onClick={() => handleAuthor(author)}>Check Author</button>
    </article>
}

export default Book
