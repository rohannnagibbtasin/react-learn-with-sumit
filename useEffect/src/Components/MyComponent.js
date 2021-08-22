import { useEffect, useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const tick = () => {
        console.log('time running');
        setDate(new Date());
    };
    useEffect(() => {
        console.log('title');
        document.title = `Clicked ${count} times`;
    }, [count]);
    useEffect(() => {
        console.log('start timer');
        const interval = setInterval(tick, 1000);

        // do the clean up - stop the timer

        return () => {
            console.log('Component unmounted');
            clearInterval(interval);
        };
    }, []);
    const addClick = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}
