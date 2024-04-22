import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const WithAuthentication = (WrapperCompoenent) => {
    return function WithAuth(props) {
        const history = useHistory();
        useEffect(() => {
            const isAuthenticaed = true;
            if (!isAuthenticaed) history.push('/login');
        }, []);
        return <WrapperCompoenent {...props} />
    }
}

export default WithAuthentication