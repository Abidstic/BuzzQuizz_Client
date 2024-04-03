import React, { useState } from 'react';
import '../styles/Register.css';
import { Navigate } from 'react-router-dom';
import { setCourseName } from '../redux/question_reducer';
import { setUserId } from '../redux/result_reducer';
import { useDispatch } from 'react-redux';

export default function Register() {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        userName: '',
        courseName: '',
    });

    const handleInputChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        setValues((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.userName && values.courseName) {
            setValid(true);
            dispatch(setCourseName(values.courseName));
            dispatch(setUserId(values.userName));
        }
        setSubmitted(true);
    };
    return (
        <div className="register_body">
            <form className="register_form" onSubmit={handleSubmit}>
                {submitted && valid && (
                    <Navigate to={'/'} replace="true"></Navigate>
                )}
                {!valid && (
                    <input
                        className="form_field"
                        type="text"
                        placeholder="Username"
                        name="userName"
                        value={values.userName}
                        onChange={handleInputChange}
                    />
                )}

                {submitted && !values.userName && (
                    <span id="first-name-error">Please enter a user name</span>
                )}

                {!valid && (
                    <input
                        className="form_field"
                        type="text"
                        placeholder="Course name"
                        name="courseName"
                        value={values.courseName}
                        onChange={handleInputChange}
                    />
                )}

                {submitted && !values.courseName && (
                    <span id="last-name-error">Please enter a course name</span>
                )}
                {!valid && (
                    <button className="form_field" type="submit">
                        Register
                    </button>
                )}
            </form>
        </div>
    );
}
