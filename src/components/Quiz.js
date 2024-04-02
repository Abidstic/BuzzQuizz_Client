import Mcq from './Mcq';
import '../styles/Quiz.css';
/** redux store import */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/**import functions from hooks */
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';
export default function Quiz() {
    const { queue, trace } = useSelector((state) => state.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(trace);
    });

    function onPrev() {
        console.log('Previous question');
        if (trace > 0) {
            dispatch(MovePrevQuestion());
        }
    }
    function onNext() {
        console.log('Next question');
        if (trace < queue.length) {
            dispatch(MoveNextQuestion());
        }
    }

    return (
        <div className="quiz_body">
            <h1 className="course_title">Software engineering 101</h1>
            <Mcq />

            <div className="grid">
                <button className="btn prev" onClick={onPrev}>
                    Prev
                </button>
                :
                <button className="btn next" onClick={onNext}>
                    Next
                </button>
            </div>
        </div>
    );
}
