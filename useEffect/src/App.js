import React, { useState } from 'react';
import MyComponent from './Components/MyComponent';

export default function App() {
    const [show, setShow] = useState(true);
    return (
        <>
            <div>{show && <MyComponent />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? 'Hide post ' : 'Show post'}
                </button>
            </p>
        </>
    );
}
