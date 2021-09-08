import React, { Component } from "react";
// import Button from './Button';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            count: 0,
            showInfo: false
        }
    }

    handleClick() { // Need to bind normal function because normal function get it's own 'this' so we need to bind with global 'this'
        console.log(this.state.count)
    }

    // No need to bind arrow function because it's don't  have it's own 'this' method it's uses it's parent 'this'
    // handleClick = () => { 
    //     console.log('Clicked')
    //     console.log(this.state.count)
    // }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    reset = () => {
        this.setState({ count: 0 })
    }

    toggleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        // console.log(this.props);
        const { title, author, img, id } = this.props.info;
        const checkAuthorInfo = (status) => {
            if (status) {
                return <p>Author : {author} </p>
            } else {
                return null;
            }
        }
        return (
            <article className='book'>
                <img src={img} width='160' alt={title} />
                <div>
                    <h3>Title : {title}</h3>
                    <h5>Author : {author}</h5>
                    <h4>Count : {this.state.count}</h4>
                    {/* <button type='button' onClick={this.handleClick}>Add</button> */}
                    <button type='button' onClick={this.increment}>INCREMENT</button>
                    <button type='button' onClick={this.decrement}>DECREMENT</button>
                    <button type='button' onClick={this.reset}>RESET</button>
                    <button type='button' onClick={() => this.props.handleDelete(id)}>Delete Me</button>
                    <button type='button' onClick={this.toggleInfo} >Toggle Info</button>
                    {/* <Button handleDelete={this.props.handleDelete} /> */}
                    {
                        this.state.showInfo && <p>{title}</p>
                    }
                    {checkAuthorInfo(this.state.showInfo)}
                </div>
            </article>
        );
    }
}
