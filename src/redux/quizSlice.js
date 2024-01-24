import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    results: null,
    resultText: "",
  },
  reducers: {
    setQuizResults: (state, action) => {
      state.results = action.payload;
    },
    setResultText: (state, action) => {
      state.resultText = action.payload; // Add this reducer to update result text
    },
  },
});

export const { setQuizResults, setResultText } = quizSlice.actions;

export const selectQuizResults = (state) => state.quiz.results;
export const selectResultText = (state) => state.quiz.resultText; // Selector to access the result text

export default quizSlice.reducer;
