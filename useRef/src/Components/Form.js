import { useEffect, useRef } from 'react';
import Input from './Input';

export default function Form() {
    const inputRef = useRef(null);
    useEffect(() => {
        // compinent loaded
        inputRef.current.focus();
    }, []);
    return (
        <>
            <p>
                <Input ref={inputRef} type="text" placeholder="Enter something" />
            </p>
        </>
    );
}
