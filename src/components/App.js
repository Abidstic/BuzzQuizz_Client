import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
import Register from './Register';
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
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
