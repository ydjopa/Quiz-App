import { shuffleArray } from "./tools";

// Question Type
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

// Get correct and incorrect answer in the same array
export type QuestionState = Question & { answers: string[] };


// Difficulty levels
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

// Fetching Trivia API
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
  return data.results.map((question: Question) => (
    {
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers, 
        question.correct_answer,
       ]),
    }));
};

