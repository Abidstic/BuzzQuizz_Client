import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
import Register from './Register';
import Login from './Login';
import { CheckUserExist } from '../helper/helper';
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
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
