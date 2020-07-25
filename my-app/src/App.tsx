// React Import
import React, { useState } from 'react';

// API Import
import { fetchQuizQuestions } from './api'; 

// Components Import
import QuizCard from './components/QuizCard';

// Types Import
import { QuestionState, Difficulty } from './api';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const Total_Questions = 10;

// const App = () => {}
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(Total_Questions, Difficulty.EASY))

  const startQuiz = async () => {

  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

}

  const nextQuestion = () => {

  }


  return (
    <div className="App">
     <h1>TRIVIA FUN QUIZ</h1>
     <button className="start" onClick={startQuiz}>
       Start Quiz
     </button>
     <p className="score">Score:</p>
     <p>Loading ...</p>
     {/* <QuizCard 
      questionNumber={number + 1}
      totalQuestions={Total_Questions}
      question={questions[number].question}
      answers={questions[number].answers} 
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
     /> 
     */} 
     <button className="next" onClick={nextQuestion}>
       Next Question
     </button>
    </div>
  );
}

export default App;
