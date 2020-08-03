// React Import
import React, { useState } from 'react';

// API Import
import { fetchQuizQuestions } from './api';

// Components Import
import QuizCard from './components/QuizCardDrag';

// Types Import
import { QuestionState, Difficulty } from './api';

// Styles
import { GlobalStyle, Wrapper } from './AppDrag.styles';
//Dragable 
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'




export type AnswerObject = {
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
    const [endOfQuiz, setEndOfQuiz] = useState(true);

    //console.log(questions);

    const startQuiz = async () => {
        setLoading(true);
        setEndOfQuiz(false);

        const newQuestions = await fetchQuizQuestions(
            Total_Questions,
            Difficulty.EASY
        );

        // Don't forget to do the Error handing 
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };


    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!endOfQuiz) {
            // Users answer
            const answer = e.currentTarget.value;
            // Check answer against correct answer
            const correct = questions[number].correct_answer === answer;
            // Add score if answer is correct
            if (correct) setScore(prev => prev + 1);
            // Save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]
            );
        }
    };

    const checkAnswerNew = (id: string) => {
        if (!endOfQuiz) {
            // Users answer
            const answer = id;
            // Check answer against correct answer
            const correct = questions[number].correct_answer === answer;
            // Add score if answer is correct
            if (correct) setScore(prev => prev + 1);
            // Save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]
            );
        }
    };

    const nextQuestion = () => {
        // Move on to the next question if not the last question
        const nextQuestion = number + 1;

        if (nextQuestion === Total_Questions) {
            setEndOfQuiz(true);
        } else {
            setNumber(nextQuestion);
            //debugger;
            document.getElementsByClassName("opacitycss")[0].childNodes[0].childNodes[0].childNodes[0].textContent = "Select Answer";
            
        }
    };


    return (
        <>
            <GlobalStyle />
            <div className="container py-5 my-5">
                <Wrapper>

                    <h1>TRIVIA FUN QUIZ -Drag</h1>
                    {endOfQuiz || userAnswers.length === Total_Questions ? (
                        <button className="start" onClick={startQuiz}>
                            Start Quiz
          </button>
                    ) : null}
                    {!endOfQuiz ? <p className="score">Your Score: {score}</p> : null}
                    {loading && <h3>Loading ...</h3>}
                    {!loading && !endOfQuiz && (
                     
                        <DndProvider backend={HTML5Backend}>
                            <QuizCard
                                questionNumber={number + 1}
                                totalQuestions={Total_Questions}
                                questions={questions[number].question}
                                answers={questions[number].answers}
                                userAnswer={userAnswers ? userAnswers[number] : undefined}
                                callback={checkAnswer}
                                moveNext={checkAnswerNew}
                            />
                        </DndProvider> 
                    
                    )}
                    {!endOfQuiz &&
                        !loading &&
                        userAnswers.length === number + 1 &&
                        number !== Total_Questions - 1 ? (
                            <button className="next" onClick={nextQuestion}>
                                Next Question
          </button>
                        ) : null}
                </Wrapper>
            </div>
        </>
    );

}




export default App;
