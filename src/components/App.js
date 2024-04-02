import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/quiz',
        element: <Quiz></Quiz>,
    },
    {
        path: '/result',
        element: <Result></Result>,
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
