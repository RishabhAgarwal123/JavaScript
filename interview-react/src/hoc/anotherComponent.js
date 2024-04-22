import React from 'react'
import withLogger from './withLogger'

const anotherComponent = (props) => {
    return (
        <div>Another Component: {props.name}</div>
    )
}

const AnotherWithLogger = withLogger(anotherComponent);

export default AnotherWithLogger;