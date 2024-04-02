import React from 'react';
import '../styles/Result.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
export default function Result() {
    const dispatch = useDispatch();
    function onRestart() {
        console.log('Restart the exam');
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    }
    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            <div className="result flex-center">
                <div className="flex">
                    <span>Username</span>
                    <span className="bold">Abid</span>
                </div>
                <div className="flex">
                    <span>Total Quiz Points : </span>
                    <span className="bold">100</span>
                </div>
                <div className="flex">
                    <span>Total Questions : </span>
                    <span className="bold">10</span>
                </div>
                <div className="flex">
                    <span>Total Attempts : </span>
                    <span className="bold">3</span>
                </div>
                <div className="flex">
                    <span>Total Earn Points : </span>
                    <span className="bold">50</span>
                </div>
                <div className="flex">
                    <span>Quiz Result</span>
                    <span
                        style={{ color: `${true ? '#01440d' : '#ff2a66'}` }}
                        className="bold"
                    >
                        {true ? 'Passed' : 'Failed'}
                    </span>
                </div>
            </div>
            <div className="start">
                <Link className="btn" to={'/'} onClick={onRestart}>
                    Restart
                </Link>
            </div>
            {/* <div className="container">
                {/* result table */}
            {/* <ResultTable></ResultTable>
            </div> */}{' '}
        </div>
    );
}
