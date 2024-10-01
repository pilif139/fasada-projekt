export type QuestionType = {
    id: number;
    pageId: number;
    question: string;
    answers: string[];
    correctAnswer: number;
}

export const questions : QuestionType[] = [
    {
        id: 0,
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
        id: 1,
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