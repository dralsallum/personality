import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    results: null,
  },
  reducers: {
    setQuizResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setQuizResults } = quizSlice.actions;

export const selectQuizResults = (state) => state.quiz.results;

export default quizSlice.reducer;
