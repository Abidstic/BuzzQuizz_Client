import { createSlice } from '@reduxjs/toolkit';

/** create reducer */
export const otherReducer = createSlice({
    name: 'other',
    initialState: {
        courseId: null,
        quizId: null,
    },
    reducers: {
        setCourseId: (state, action) => {
            state.courseId = action.payload;
        },
        setQuizID: (state, action) => {
            state.quizId = action.payload;
        },
    },
});

export const { setCourseId, setQuizID } = otherReducer.actions;

export default otherReducer.reducer;
