import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
import Register from './Register';
import Login from './Login';
import Course from './Course';
import QuestionCreator from './Question';
import AllCourses from './Course_dashborad';

import { CheckUserExist, CheckUserAdmin } from '../helper/UserVerify';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/quiz',
        element: (
            <CheckUserExist>
                <Quiz />
            </CheckUserExist>
        ),
    },
    {
        path: '/result',
        element: (
            <CheckUserExist>
                <Result />
            </CheckUserExist>
        ),
    },
    {
        path: '/register',
        element: <Register></Register>,
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/course',
        element: <Course></Course>,
    },
    {
        path: '/create_questions',
        element: <QuestionCreator></QuestionCreator>,
    },
    {
        path: '/course_view',
        element: <AllCourses></AllCourses>,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
