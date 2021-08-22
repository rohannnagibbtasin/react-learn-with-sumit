import { useCallback, useMemo, useState } from 'react';
import Button from './Components/Button';
import ShowCount from './Components/ShowCount';
import Title from './Components/Title';

export default function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prev) => prev + 1);
    }, []);
    const incrementByFive = useCallback(() => {
        setCount2((prev) => prev + 5);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i;
        while (i < 100000000000000000000000000000000000000000000000000000000000000000) i += 1;
        return count1 % 2 === 0;
    }, [count1]);

    return (
        <div className="app">
            <Title />
            <ShowCount count={count1} title="Counter 1(click to increment one) :" />
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <Button handleClick={incrementByOne}>Increment by one </Button>
            <hr />
            <ShowCount count={count2} title="Counter 2(click to increment five) :" />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    );
}
