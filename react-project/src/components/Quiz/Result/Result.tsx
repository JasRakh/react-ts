import './Result.scss'
import {FC} from "react";
import { QuestionProps } from '../../interfaces.tsx'

interface IResultProps{
    score: number;
    quiz: QuestionProps[];
}
const Result: FC<IResultProps> = ({score, quiz}) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="img"/>
            <h2>{`Вы отгадали ${score} ответа из ${quiz.length}`}</h2>
            <button onClick={() => window.location.reload()}>Попробовать снова</button>
        </div>
    );
};

export default Result;