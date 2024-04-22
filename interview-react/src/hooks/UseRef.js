import React, { useRef } from 'react';

function InputFocus() {
    // useRef is used to persist a mutable value that doesn't trigger a re-render when it changes. It's also commonly used to get 
    // a reference to a DOM element.
    const inputRef = useRef(null);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Access the DOM element directly
        }
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus the Input</button>
        </div>
    );
}

export default InputFocus;
