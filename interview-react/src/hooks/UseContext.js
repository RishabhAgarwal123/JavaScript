import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedComponent() {
// useContext is used to consume context in React. Context allows you to share values across components without having to pass 
// props down multiple levels.
    const theme = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>
            This component is using the {theme} theme.
        </div>
    );
}

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <ThemedComponent />
        </ThemeContext.Provider>
    );
}

export default App;
