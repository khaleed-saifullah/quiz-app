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
];
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

let questionCount = 0;
let score = 0;

init();

startButton.addEventListener("click", startGame);

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

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

loadQuestion();

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

submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
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
