import React from 'react';

// Types
import { AnswerObject } from '../App'; 

// Styles
//import { Wrapper, ButtonWrapper } from './QuizCard.styles'; 

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
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: questions }} />
    <div>
      {answers.map((answer) => (
        <div key={answer}> 
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuizCard;
