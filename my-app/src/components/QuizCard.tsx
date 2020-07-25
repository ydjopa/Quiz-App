import React from 'react';

type Props = {
  questions: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
}

const QuizCard: React.FC<Props> = ({
  questions, 
  answers, 
  callback, 
  userAnswer, 
  questionNumber, 
  totalQuestions 
}) => (
<div>
  <p className="number">
    Question: {questionNumber} / {totalQuestions}
  </p>
  <p dangerouslySetInnerHTML={{ __html: questions }} />
  <div>
    {answers.map(answer => (
      <div>
        <button disabled={userAnswer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer}} />
        </button>
      </div>
    ))}
  </div>
</div>
);

export default QuizCard;
