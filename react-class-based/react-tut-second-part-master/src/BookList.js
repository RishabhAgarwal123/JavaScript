import React, { Component } from "react";
import Book from "./Book";
import books from './BookData';
export default class Booklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: books
        }
    }
    // state = {
    //     books: books
    // };

    handleDelete = (id) => {
        this.setState({
            books: this.state.books.filter((book) => book.id !== id)
        })
        console.log(id);
    }

    render() {
        return (
            <section>
                <h3>This is our Booklist</h3>
                {
                    this.state.books.map(item => <Book key={item.id} info={item} handleDelete={this.handleDelete} />)
                }
            </section>
        );
    }
}
