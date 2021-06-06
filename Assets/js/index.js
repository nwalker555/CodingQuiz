var scores = document.getElementById("scores");
var timer = document.getElementById("timer");
var quizTimer = document.getElementById("quiz-time");
var firstPage = document.getElementById("first-page");
var start = document.getElementById("start");
var quiz = document.getElementById("questions");
var selection = document.getElementById("options");
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var finalPage = document.getElementById("final-page");
var submit = document.getElementById("submit");
var questionsEl = document.getElementById("quiz-questions");

var quizTime = 60;
var quizTimeInt;
var questionIndex = 0;
var score;
// var previousQuestion = questions.length - 1;

var questions = [
    {
        title: "What does HTML stand for?",
        choiceA: "Hyper Trainer Marking Language",
        choiceB: "Hypertext Markup Language",
        choiceC: "Hypertext  Marketing Language",
        choiceD: "Hypertext Markup Leveler",
        answer: "Hypertext Markup Language"
    },
    {
        title: "What sign is used to call an element by it's ID?",
        choiceA: "A percent sign",
        choiceB: "A period",
        choiceC: "A dollar Sign",
        choiceD: "A number sign",
        answer: "A number sign"
    },
    {
        title: "What does CSS stand for?",
        choiceA: "Cascading Style Sheets",
        choiceB: "Cascading Style Semantics",
        choiceC: "California Style Sheets",
        choiceD: "Coding Style Stamp",
        answer: "Cascading Style Sheets"
    },
    {
        title: "A container used for storing data values is called a JavaScript ________.",
        choiceA: "Array",
        choiceB: "Function",
        choiceC: "Variable",
        choiceD: "Operator",
        answer: "Variable"
    },
    {
        title: "In CSS, all styling alterations must be placed between _______",
        choiceA: "Curling braces",
        choiceB: "Quotation Marks",
        choiceC: "Parentheses",
        choiceD: "Brackets",
        answer: "Curling braces"
    },
]

function countdown() {
    quizTimer.textContent = quizTime;
    quizTime--;
    if (quizTime <= 0) {
        clearInterval(quizTime = 0);
        quizEnd();
        highScores();
    }
};

function startQuiz() {
    // need timer to start
    quizTimeInt = setInterval(countdown, 1000);
    // need first page to go invisible
    firstPage.setAttribute("class", "hide");
    // need questions div to show
    quiz.removeAttribute("class");
    // need questions to populate in quiz questions
    // need choices to populate in options
    showQuiz()
};

start.addEventListener('click', startQuiz);

function showQuiz() {
    console.log(questionIndex);
    var currentQuestion = questions[questionIndex];
    questionsEl.textContent = currentQuestion.title;
    console.log(currentQuestion.title);
    console.log(currentQuestion.choiceA);
    console.log(currentQuestion.choiceB);
    console.log(currentQuestion.choiceC);
    console.log(currentQuestion.choiceD);
    choiceA.innerHTML = currentQuestion.choiceA;
    choiceB.innerHTML = currentQuestion.choiceB;
    choiceC.innerHTML = currentQuestion.choiceC;
    choiceD.innerHTML = currentQuestion.choiceD;

};

function nextQuestion() {
    var currentQuestion = questions[questionIndex];
    questionIndex++;
    showQuiz(currentQuestion);
}

function checkAnswer() {
    score = 0;
    answer = document.querySelector(".options input:checked");
    console.log(answer);
    if (answer === questions[questionIndex].answer) {
        score++;
        console.log(score);
        questionIndex++;
        showQuiz();
    } else {
        score;
        console.log(score);
        questionIndex++;
        showQuiz();
    }
}

function quizEnd() {
    // hide quiz
    quiz.setAttribute("class", "hide");
    // display final page
    finalPage.removeAttribute("class");
    // get score in the local storage in Score
    submit.addEventListener('click', highScores)
}

function highScores() {

}