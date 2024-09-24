export type QuestionType = {
    question: string;
    answers: string[];
    correctAnswer: string | number | boolean | string[];
}

export const questions : QuestionType[] = [
    {
        question: "What's your name?",
        answers: [
            "Filip",
            "John",
            "Arthur",
        ],
        correctAnswer: 0, // index of correct answer in answers array
    },
];