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
    {
        id: 2,
        pageId: 1,
        question: "question 1",
        answers: [
            "answer 1",
            "answer 2 dskaopdjapjdasopdjkasopdjasopdjasfaospfjaopfj asopfjafoajsfaopjfa. fisoapjasiofja. osadjapr opjsa pojasf jnposf. sjodpadajd fpojasf jpofa pojfasaopfja.",
            "answer 3",
        ],
        correctAnswer: 0,
    },
    {
        id: 3,
        pageId: 2,
        question: "question 2",
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
        ],
        correctAnswer: 1,
    }
];