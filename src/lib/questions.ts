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
        question: "Co robi fasada?",
        answers: [
            "Przedstawia skomplikowany kod w postaci prostego interfejsu",
            "Umożliwia użytkownikowi zobaczenie kodu źródłowego",
            "Sprawdza poprawność informacji wprowadzanych przez użytkownika",
        ],
        correctAnswer: 0, // index of correct answer in answers array
    },
    {
        id: 1,
        pageId: 0,
        question: "Ile fasad możemy mieć w programie?",
        answers: [
            "tylko jedną ",
            "ile chcemy",
            "zależy od języka programowania",
        ],
        correctAnswer: 1,
    },
    {
        id: 2,
        pageId: 0,
        question: "Jaka fasada przekierowuje użytkownika do kolejnych? ",
        answers: [
            "fasada główna ",
            "fasada podrzędna ",
            "fasada nie może przekierowywać użytkownika",
        ],
        correctAnswer: 0,
    },
    {
        id: 3,
        pageId: 1,
        question: "Jak powinna wyglądać główna fasada? ",
        answers: [
            "powinna zawierać tabelę ",
            "powinna być przejrztysta",
            "nie powinna wyglądać, bo jej nie widać",
        ],
        correctAnswer: 1,
    },
    {
        id: 4,
        pageId: 1,
        question: "Czym jest podsystem?",
        answers: [
            "zbiorem wszystkich fasad",
            "strukturą graficzną strony",
            "klasami i obiektami",
        ],
        correctAnswer: 2,
    },
    {
        id: 5,
        pageId: 2,
        question: "Która z tych cech NIE jest zaletą fasady?",
        answers: [
            "czytelność programu od strony użytkownika",
            "możliwość zablokowania klientowi drogi do bezpośredniego korzystania z kodu",
            "możliwość ograniczenia liczby użytkowników programu",
        ],
        correctAnswer: 2,
    },
    {
        id: 6,
        pageId: 3,
        question: "Która z tych cech jest wadą fasady?",
        answers: [
            "Ograniczanie zależności między klientem, a systemem",
            "Wydłużenie czasu tworzenie kodu",
            "czytelność programu od strony użytkownika",
        ],
        correctAnswer: 1,
    },
    {
        id: 7,
        pageId: 4,
        question: "Kiedy dzwonisz, aby złożyć zamówienie, co lub kto pełni funkcję fasady?",
        answers: [
            "twój telefon",
            "pracownik odbierający telefon",
            "pracownik magazynu",
        ],
        correctAnswer: 1,
    },
    {
        id: 8,
        pageId: 5,
        question: " Jakiej funkcji NIE pełni fasada w aplikacji bankomatowej?",
        answers: [
            "obliczania aktualnego stanu konta bankowego ",
            "łączenia wyborów użytkownika z systemem banku",
            "upraszczania widoku aplikacji bankomatu użytkownikowi",
        ],
        correctAnswer: 0,
    },
    {
        id: 9,
        pageId: 6,
        question: "Jaki element kalkulatora stanowi część fasady?",
        answers: [
            "bateria",
            "system wewnątrz kalkulatora",
            "przyciski",
        ],
        correctAnswer: 2,
    }
];