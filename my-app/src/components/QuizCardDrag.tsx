import React, { useState } from "react";
// Types
import { AnswerObject } from '../App'; 

// Styles
import { Wrapper, ButtonWrapper } from './QuizCard.styles'; 
import { AnsWerBox } from './Dustbin';
import { Button } from './Button';
import { Card } from "./Card";



type Props = {
  questions: string;
  answers: string[];
   callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
   moveNext: (id: string) => void
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}


const QuizCard: React.FC<Props> = ({
  questions,
  answers,
    callback,
    moveNext,
  userAnswer,
  questionNumber,
    totalQuestions

}) => (

        <Wrapper>

    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
            <p dangerouslySetInnerHTML={{ __html: questions }} />

            <div className="col-sm-12 MainBox">

                <div className="col-sm-6 QuestionBox" style={{ float: "left" }}>
      {answers.map((answer) => (
        <ButtonWrapper 
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer ?.answer === answer}>

                            <Card key={answer}
                                id={`${answer}`}
                                text={answer} callbackDROP={moveNext} userAnswer={userAnswer ? true : false}/>
                         
                            
        </ButtonWrapper>

                    
      ))}
                </div>
                
                <div className="col-sm-6 AnswerBox" style={{float: "right"}}>
                    <AnsWerBox/>
                </div>
             

            </div>
           
        </Wrapper>

        


);

export default QuizCard;
