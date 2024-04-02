import React from 'react';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home_body">
            <div className="title_body">
                Give Your Academic Exams
                <br /> with <br />
                BuzzQuizz
            </div>
            <div className="exam_btn">
                <button>Take Exam</button>
            </div>
        </div>
    );
}
