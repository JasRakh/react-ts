import './Game.scss'
import {FC, useState} from "react";
import Result from "../Result";
import {IQuizProps} from "../../interfaces.tsx";

const Game: FC<IQuizProps> = ({quiz}) => {
    const [step, setStep] = useState<number>(0);
    const [score, setScore] = useState<number>(0);

    const clickHandler = (index:number) => {
        if(index === quiz[step].correct) setScore(prev => prev + 1)
        setStep(prev => prev +  1)
    }

    const percentage = Math.round(step / quiz.length * 100)
    return (
        (step !== quiz.length) ?
            <div>
                <div className="progress">
                    <div style={{width: `${percentage}%`}} className="progress__inner"></div>
                </div>
                <div>
                    <h2>{quiz[step].title}</h2>
                    <ul>
                        {quiz[step].variants.map((val, index) => (
                            <li onClick={() => clickHandler(index)} key={index}>{val}</li>
                        ))}
                    </ul>
                </div>
            </div>
        : <Result score={score} quiz={quiz} />
    );
};

export default Game;