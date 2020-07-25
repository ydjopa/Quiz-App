// React
import React, { useState } from 'react';

// API 
import { fetchQuizQuestions } from './api'; 

// Components
import QuizCard from './components/QuizCard';

// Types
import { Difficulty } from './api';


const Total_Questions = 10;

// const App = () => {}
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score. setScore] = useState(0);
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
     <h1>TRIVIA QUIZ</h1>
     <button className="start" onClick={startQuiz}>
       Start Question
     </button>
     <p className="score">Score:</p>
     <p>Question Generator ...</p>
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
