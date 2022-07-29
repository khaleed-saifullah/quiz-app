// Questions

const quizDB = [
    {
        question: "What does HTML stand for ?",
        a: "Hyper Text Mark Language",
        b: "Hyper Text Marketing Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Markup Leveler",
        ans: "ans3",
    },
    {
        question: "What is the full form of CSS ?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1",
    },
    {
        question: "What is the full form of HTTP ?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        a: "<h6>",
        b: "<head>",
        c: "<h1>",
        d: "<big>",
        ans: "ans3",
    },
    {
        question:
            "What is the correct HTML element for inserting a line break?",
        a: "<break>",
        b: "<newline>",
        c: "<br>",
        d: "<new>",
        ans: "ans3",
    },
];

// Initialize variables

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const startButton = document.querySelector("#start-btn");
const questionContainer = document.querySelector(".quiz-container");
const nextBtn = document.querySelector(".next-btn");
const scoreBoard = document.querySelector(".scorebaord");
const finalScore = document.querySelector("#score");
const playAgain = document.querySelector("#play-again");

let i = 0;
let score = 0;

const quizLength = quizDB.length;
let indexNumberofQuizDB = Array.from(quizDB.keys());

let newQuizIndex = shuffleQuestion(indexNumberofQuizDB);
let questionNumber = Math.floor(indexNumberofQuizDB.length * 0.8);

// Call init function

init();

// Functions

function shuffleQuestion(array) {
    return array.sort(() => Math.random() - 0.5);
}

function init() {
    questionContainer.classList.add("hidden");
    nextBtn.classList.add("hidden");
    scoreBoard.classList.add("hidden");
}

function startGame() {
    startButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
}

const loadQuestion = (e) => {
    const questionList = quizDB[newQuizIndex[e]];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

// Call loadQuestion function

loadQuestion(i);

// Actions

startButton.addEventListener("click", startGame);
submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    let newQuizIndexValue = newQuizIndex[i];
    if (checkedAnswer === quizDB[newQuizIndexValue].ans) {
        score++;
    }

    i++;

    deselectAll();

    if (i < questionNumber) {
        loadQuestion(i);
    } else {
        scoreBoard.classList.remove("hidden");
        questionContainer.classList.add("hidden");
        nextBtn.classList.add("hidden");
        finalScore.innerText = score;
    }
});

playAgain.addEventListener("click", () => {
    location.reload();
});
