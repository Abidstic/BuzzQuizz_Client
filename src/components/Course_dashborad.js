import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Course_dashboard.css';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8000/api/course/all'
                );
                setCourses(response.data);
                console.log(response.data);
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
                        <Link to={`/course/${course.CourseID}`} className="btn">
                            View Course
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCourses;
