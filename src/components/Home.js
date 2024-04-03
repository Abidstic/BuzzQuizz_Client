import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    function navigateToQuiz() {
        navigate('/quiz');
    }
    function navigateToRegister() {
        navigate('/register');
    }
    return (
        <div className="home_body">
            <div className="header_body">
                <div className="app_title"> BuzzQuizz</div>
                <div>
                    <button onClick={navigateToRegister}>Register</button>
                </div>
            </div>
            <div className="body_layout">
                <div className="title_body">
                    Give Your Academic Exams
                    <br /> with <br />
                    BuzzQuizz
                </div>
                <div className="exam_btn">
                    <button onClick={navigateToQuiz}>Take Exam</button>
                </div>
            </div>
        </div>
    );
}
