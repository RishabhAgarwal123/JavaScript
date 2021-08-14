import React from 'react';
import ReactDom from 'react-dom';

const BookList = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'));