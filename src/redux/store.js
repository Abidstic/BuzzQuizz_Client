import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import questionReducer from './question_reducer';
import resultReducer from './result_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    questions: questionReducer,
    result: resultReducer,
    user: userReducer,
});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
