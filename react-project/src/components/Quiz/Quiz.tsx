import './Quiz.scss'
import Game from "./Game";
import {questions} from '../../assets/data'

const Quiz = () => {
    return (
        <>
            <div className="quiz">
                <Game quiz={questions}/>
            </div>

        </>
    );
};

export default Quiz;