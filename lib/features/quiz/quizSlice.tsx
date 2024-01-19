import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IInitialState, IQuizDataResponse } from "./types";
import { shuffleArray } from "@/utils/helper";

export const fetchQuizData = createAsyncThunk<
  IQuizDataResponse,
  void,
  {
    rejectValue: {
      message: string;
    };
  }
>("quiz/fetchQuizData", async () => {
  try {
    const response = await fetch("/json/data.json");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error("Failed to fetch JSON file");
  }
});

const initialState: IInitialState = {
  quizDataList: null,
  userAnswers: [],
  questionNumber: 1,
  allQuestionsNumber: null,
  isLoading: false,
  error: null,
  countdownTime: 10,
  questionAnswers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    restartQuizAction() {
      return initialState;
    },
    answersHandler(state, action) {
      state.questionNumber++;
      state.userAnswers.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.quizDataList = action.payload;
        state.allQuestionsNumber = action.payload.questions.length;
        state.questionAnswers = shuffleArray(
          action.payload.questions[state.questionNumber - 1].answers
        );
      })
      .addCase(fetchQuizData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      });
  },
});
export const { answersHandler, restartQuizAction } = quizSlice.actions;

export default quizSlice.reducer;
