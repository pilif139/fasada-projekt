export type QuestionType = {
    type: "text" | "number" | "checkbox";
    question: string;
    answers: string[] | number[] | boolean[];
    correctAnswer: string | number | boolean | string[];
}

export const questions = [
    {
        question: "What's your name?",
        answers: [
            "Filip",
            "John",
            "Arthur",
        ],
        correctAnswer: 0, // index of correct answer in answers array
    }];