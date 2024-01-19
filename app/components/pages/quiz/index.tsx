"use client";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import Card from "../../atom/card";
import Countdown from "../../atom/countdown";
import Progress from "../../atom/progress";
import CircleSign from "../../atom/circleSign";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { answersHandler, fetchQuizData } from "@/lib/features/quiz/quizSlice";
import { useRouter } from "next/navigation";
import { IAnswer } from "./types";

const QuizPage = () => {
  const dispatch = useAppDispatch();

  const quizData = useAppSelector((store) => store.quiz);

  const router = useRouter();

  const questionNumber = quizData.questionNumber;

  const handlerSelectedAnswer = useCallback(
    (item: IAnswer) => {
      dispatch(
        answersHandler({
          text: item.text,
          is_correct: item.is_correct,
          questionNumber,
        })
      );
      if (quizData.questionNumber === quizData.allQuestionsNumber) {
        router.push("/quiz/result");
      } else {
        router.push(`/quiz/${quizData.questionNumber + 1}`);
      }
    },
    [
      dispatch,
      questionNumber,
      quizData.questionNumber,
      quizData.allQuestionsNumber,
      router,
    ]
  );

  const finishedTime = useCallback(() => {
    dispatch(
      answersHandler({
        text: "No Answer",
        is_correct: false,
        questionNumber: quizData.questionNumber,
      })
    );
    if (quizData.questionNumber === quizData.allQuestionsNumber) {
      router.push("/quiz/result");
    } else {
      router.push(`/quiz/${quizData.questionNumber + 1}`);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchQuizData());
  }, []);

  return (
    <div className="px-20">
      <Card
        text={
          quizData.quizDataList?.questions[quizData.questionNumber - 1]
            ?.question
        }
        backgroundColor="bg-blue-300"
      />

      <div className="mt-10 flex justify-center">
        <Countdown
          seconds={quizData.countdownTime}
          handleCountdownFinish={finishedTime}
          label="Counter Time"
        />
      </div>

      <div className="grid grid-cols-5 mt-3">
        <div className="max-w-[300px] col-start-3">
          <Progress
            percent={
              (quizData.questionNumber * 100) / quizData.allQuestionsNumber
            }
          />
        </div>
      </div>

      <div className="mt-4 ">
        {quizData.questionAnswers?.map(
          (item: IAnswer, index: number): ReactElement => (
            <Card
              className={
                "mt-2 max-w-[650px] flex-grow cursor-pointer mr-auto ml-auto"
              }
              key={index}
              text={item.text}
              backgroundColor="bg-blue-100"
              onClick={() => {
                handlerSelectedAnswer(item);
              }}
            />
          )
        )}
      </div>

      <div className="mt-10 text-center">
        {Array.from({ length: quizData.allQuestionsNumber })?.map(
          (_, index: number): ReactElement => {
            return (
              <CircleSign
                key={index}
                color={
                  quizData.userAnswers[index]
                    ? quizData.userAnswers[index]?.is_correct === true
                      ? "success"
                      : "fail"
                    : "white"
                }
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default QuizPage;
