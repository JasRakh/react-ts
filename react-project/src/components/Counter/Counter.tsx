import {memo, useState} from 'react';
import './Counter.scss'

const Counter = memo(() => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div className="box">
            <div className="box__container">
                <h2>Счетчик:</h2>
                <h1>{counter}</h1>
                <button onClick={() => setCounter(prev => prev - 1)} className="minus">- Минус</button>
                <button onClick={() => setCounter(prev=> prev + 1)} className="plus">Плюс +</button>
            </div>
        </div>
    );
});

export default Counter;