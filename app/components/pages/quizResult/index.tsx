"use client";
import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { restartQuizAction } from "@/lib/features/quiz/quizSlice";
import { IUserAnswer } from "./types";
const Button = dynamic(() => import("../../atom/button"), {
  ssr: false,
});

const QuizResult = () => {
  const router = useRouter();

  const quizData = useAppSelector((store) => store.quiz);

  const dispatch = useAppDispatch();

  const answeredQuestionPercent =
    (quizData.userAnswers.filter((item: IUserAnswer) => item.is_correct)
      .length *
      100) /
    quizData.userAnswers.length;

  const restartQuiz = useCallback(() => {
    dispatch(restartQuizAction());
    router.push("/");
  }, [dispatch, router]);

  return (
    <div className="text-center mt-60">
      <div className="mb-9">
        <span>
          You have answered <strong>{answeredQuestionPercent}%</strong> of the
          questions.
        </span>
      </div>
      <Button title="Restart" onClick={restartQuiz} />
    </div>
  );
};

export default QuizResult;
