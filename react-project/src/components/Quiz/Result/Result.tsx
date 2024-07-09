import './Result.scss'
import {FC} from "react";

interface IResultProps{
    score: number;
    quiz: { title: string, variants: string[], correct: number }[];
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