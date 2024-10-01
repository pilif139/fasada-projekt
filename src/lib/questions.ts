export type QuestionType = {
    pageId: number;
    question: string;
    answers: string[];
    correctAnswer: string | number | boolean | string[];
}

export const questions : QuestionType[] = [
    {
        pageId: 0, //content page id for which this question is
        question: "What's your name?",
        answers: [
            "Filip",
            "John",
            "Arthur",
        ],
        correctAnswer: 0, // index of correct answer in answers array
    },
    {
        pageId: 0,
        question: "What's your age?",
        answers: [
            "20",
            "30",
            "40",
        ],
        correctAnswer: 1,
    },
];