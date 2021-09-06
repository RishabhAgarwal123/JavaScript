import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.state = {
            cursor: 0,
            result: []
        }
    }

    handleKeyDown(e) {
        const { cursor, result } = this.state
        // arrow up/down button should select next/previous list element
        if (e.keyCode === 38 && cursor > 0) {
            this.setState(prevState => ({
                cursor: prevState.cursor - 1
            }))
        } else if (e.keyCode === 40 && cursor < result.length - 1) {
            this.setState(prevState => ({
                cursor: prevState.cursor + 1
            }))
        }
    }

    render() {
        const { cursor } = this.state
        return (
            <div>
                <h1>Home</h1>
                {
                    result.map((item, i) => (
                        <button
                            key={item._id}
                            className={cursor === i ? 'active' : null}
                        >
                            <span>{item}</span>
                        </button>
                    ))
                }
            </div>
        )
    }
}
