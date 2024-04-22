import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const WithAuthorization = (WrappedComponent) => {
    return function WithAuthor(props) {
        const history = useHistory();
        useEffect(() => {
            const permission = true; // check for permission
            if (!permission) history.push('/unauthor');
        }, []);
        return <WrappedComponent {...props} />
    }
}

export default WithAuthorization