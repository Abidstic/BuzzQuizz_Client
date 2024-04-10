import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function attempts_Number(result) {
    return result.filter((r) => r !== undefined).length;
}
export function earn_points(result, answers) {
    return result
        .map((elements, i) => answers[i] === elements)
        .filter((i) => i)
        .map((i) => 10)
        .reduce((prev, curr) => prev + curr, 0);
}
export function flag_result(totalpoints, earnPoints) {
    return (totalpoints * 50) / 100 < earnPoints;
}
/** check user auth  */
export function CheckUserExist({ children }) {
    const auth = useSelector((state) => state.user.userId);
    return auth ? children : <Navigate to={'/login'} replace={true}></Navigate>;
}
