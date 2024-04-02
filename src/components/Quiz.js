import Mcq from './Mcq';
import '../styles/Quiz.css';
/** redux store import */

import { useEffect } from 'react';

export default function Quiz() {
    function onPrev() {
        console.log('Previous question');
    }
    function onNext() {
        console.log('Next question');
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
