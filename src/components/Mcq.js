import React, { useEffect, useState } from 'react';
import '../styles/Mcq.css';
import { useFetchQestion } from '../hooks/FetchQuestion';
import { useSelector } from 'react-redux';

export default function Mcq() {
    const [checked, setCheck] = useState(undefined);
    const [{ isLoading, apiData, serverError }] = useFetchQestion();
    const questions = useSelector(
        (state) => state.questions.queue[state.questions.trace]
    );
    useEffect(() => {
        console.log(questions);
    });
    function onSelect() {
        setCheck(true);
        console.log('Radio button is selected');
    }
    if (isLoading) return <h3 className="text-light">isLoading</h3>;
    if (serverError)
        return <h3 className="text-light">{serverError || 'Unknown Error'}</h3>;
    return (
        <div className="mcq_body">
            <h2 className="question_title">{questions?.question}</h2>
            <ul key={questions?.id}>
                {questions?.options.map((q, i) => (
                    <li key={i}>
                        <input
                            type="radio"
                            value={checked}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className="radio_lable" htmlFor={`q${i}-option`}>
                            {q}
                        </label>
                        <div className="check checked"></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
