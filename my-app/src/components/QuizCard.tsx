import React from 'react';

// Types
import { AnswerObject } from '../App'; 

// Styles
import { Wrapper, ButtonWrapper } from './QuizCard.styles'; 

type Props = {
  questions: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const QuizCard: React.FC<Props> = ({
  questions,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: questions }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper 
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        > 
          <button disabled={userAnswer ? true: false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuizCard;
