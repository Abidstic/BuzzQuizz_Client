import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Course_dashboard.css';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userRole, setRole] = useState(null);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8000/api/course/all'
                );
                setCourses(response.data);

                setRole(user.userRole);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="courses-container">
            <h2>All Courses</h2>
            <div className="grid-container">
                {courses?.map((course) => (
                    <div key={course?.CourseID} className="course-card">
                        <h3>{course?.CourseName}</h3>
                        {userRole === 'teacher' && (
                            <Link to={`/create_quiz`} className="btn">
                                Create Exam
                            </Link>
                        )}
                        {userRole === 'student' && (
                            <Link to={`/quiz`} className="btn">
                                Take Exam
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCourses;