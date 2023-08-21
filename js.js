const questions = [
    {
        question: "1. What is the capital of India?",
        choices: ["Chennai", "New Delhi", "Mumbai", "Kolkata"],
        correctAnswer: "New Delhi"
    },
    {
        question: "2. Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?",
        choices: ["Alan Turing", "Jeff Bezos", "George Boole", "Charles Babbage"],
        correctAnswer: "Alan Turing"
    },
    {
        question: "3.What is part of a database that holds only one type of information?",
        choices: ["Report", "Field", "Record", "File"],
        correctAnswer: "Field"
    },
    {
        question: "4.'OS' computer abbreviation usually means ?",
        choices: ["Order of Significance", "Open Software", "Operating System", "Optical Sensor"],
        correctAnswer: "Operating System"
    },
    {
        question: "5.Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
        choices: ["Flash", "Flange", "Fury", "FRAM"],
        correctAnswer: "Flash"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    choicesElement.innerHTML = '';
    
    current.choices.forEach(choice => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(li);
    });
}

function checkAnswer(choice) {
    const current = questions[currentQuestion];

    if (choice === current.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Complete!";
    choicesElement.innerHTML = '';
    submitButton.style.display = "none";
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();

submitButton.addEventListener("click", () => {
    checkAnswer(null); 
});
