import { useEffect, useState } from 'react';

export default function Time() {
    const [date, setDate] = useState(new Date());
    const tick = () => {
        setDate(new Date());
    };
    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <p>Time : {date.toLocaleTimeString()}</p>
            <button type="button" onClick={() => clearInterval(interval)}>
                Cleanup
            </button>
        </>
    );
}
