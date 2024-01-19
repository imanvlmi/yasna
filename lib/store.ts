import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./features/quiz/quizSlice";

const store = configureStore({
  reducer: {
    quiz: quizSlice,
  },
});
export default store;

export type AppStore = ReturnType<any>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
