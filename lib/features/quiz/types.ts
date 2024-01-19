export interface IInitialState {
  quizDataList: IQuizDataResponse | null;
  userAnswers: {
    is_correct: boolean;
    questionNumber: number;
    text: string;
  }[];
  questionNumber: number;
  allQuestionsNumber: number | null;
  isLoading: boolean;
  error: string | null;
  countdownTime: number;
  questionAnswers: { is_correct: boolean; text: string }[];
}

export interface IQuizDataResponse {
  questions: {
    question: string;
    answers: {
      text: string;
      is_correct: boolean;
    }[];
  }[];
}
