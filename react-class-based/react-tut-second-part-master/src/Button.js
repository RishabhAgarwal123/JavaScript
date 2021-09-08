import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button type='button' onClick={this.props.handleDelete} style={{ backgroundColor: 'blue', color: '#FFF', fontSize: '1rem' }}>Delete Me</button>
        )
    }
}