import React, { useEffect, useState } from 'react';
import '../styles/Mcq.css';
import { useFetchQestion } from '../hooks/FetchQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../hooks/setResult';

export default function Mcq({ onChecked }) {
    const [checked, setChecked] = useState(undefined);
    const [{ isLoading, apiData, serverError }] = useFetchQestion();
    const trace = useSelector((state) => state.questions.trace);
    const result = useSelector((state) => state.result.result);
    const dispatch = useDispatch();
    const questions = useSelector(
        (state) => state.questions.queue[state.questions.trace]
    );
    useEffect(() => {
        dispatch(updateResult({ trace, checked }));
    }, [checked]);

    function onSelect(i) {
        onChecked(i);
        setChecked(i);
        dispatch(updateResult({ trace, checked }));
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
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className="radio_lable" htmlFor={`q${i}-option`}>
                            {q}
                        </label>
                        <div
                            className={`check ${
                                result[trace] == i ? 'checked' : ''
                            }`}
                        ></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
