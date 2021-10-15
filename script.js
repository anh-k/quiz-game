class Quiz {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

class Question {
    constructor(question) {
        this.question = question;
    }
}

class Answer {
    constructor(trueAnswer, falseAnswer) {
        this.trueAnswer = trueAnswer;
        this.falseAnswer = falseAnswer;
    }
}

let questionArray = [];
let numberOfQuestions = 0;
let score = 0;
let addButton = document.getElementById("add-button");
let okButton = document.getElementById("ok-button");
let confirmButton = document.getElementById("confirm-button");
let questionLabel = document.getElementById("question-label")
let answerOne = document.getElementById("answerOne");
let answerTwo = document.getElementById("answerTwo");
answerOne.style.visibility = "hidden";
answerTwo.style.visibility = "hidden";
document.getElementById("question").style.visibility = "hidden";
document.getElementById("input-answers").style.visibility = "hidden";

answerOne.addEventListener("click", () => {
    let buttonAnswer = answerOne.innerHTML;
    console.log(buttonAnswer);
    if (buttonAnswer == questionArray[numberOfQuestions].answer.trueAnswer) {
        score++;
    }
    numberOfQuestions++;
    displayQuiz();
});

answerTwo.addEventListener("click", () => {
    let buttonAnswer = answerTwo.innerHTML;
    console.log(buttonAnswer);

    if (buttonAnswer == questionArray[numberOfQuestions].answer.trueAnswer) {
        score++;
    }
    numberOfQuestions++;
    displayQuiz();
});

okButton.onclick = () => {
    numberOfQuestions = document.getElementById("input-number").value;
    document.getElementById("number-question").parentNode.removeChild(document.getElementById("number-question"));
    document.getElementById("question").style.visibility = "visible";
    document.getElementById("input-answers").style.visibility = "visible";
}

addButton.onclick = () => {
    addQuiz();
}

function addQuiz() {
    let questionInput = document.getElementById("input-question").value;
    let trueAnswerInput = document.getElementById("true-answer").value;
    let falseAnswerInput = document.getElementById("false-answer").value;

    let question = new Question(questionInput);
    let answer = new Answer(trueAnswerInput, falseAnswerInput);
    let quiz = new Quiz(question, answer);
    questionArray.push(quiz);

    document.getElementById("input-question").value = "";
    document.getElementById("true-answer").value = "";
    document.getElementById("false-answer").value = "";

    document.getElementById("question-size").innerHTML = `Nombre de questions dans le quiz: ${questionArray.length}`

    if (numberOfQuestions == questionArray.length) {
        document.getElementById("page-one").parentNode.removeChild(document.getElementById("page-one"));
        numberOfQuestions = 0;
        displayQuiz();
    }
}

function displayQuiz() {
    if (numberOfQuestions < questionArray.length) {
        let questionCounter = document.getElementById("question-counter");
        questionCounter.innerHTML = `${numberOfQuestions + 1} / ${questionArray.length}`
        questionLabel.innerHTML = questionArray[numberOfQuestions].question.question;

        if (Math.round(Math.random()) == 1) {
            answerOne.innerHTML = questionArray[numberOfQuestions].answer.trueAnswer;
            answerTwo.innerHTML = questionArray[numberOfQuestions].answer.falseAnswer;
        }
        else {
            answerOne.innerHTML = questionArray[numberOfQuestions].answer.falseAnswer;
            answerTwo.innerHTML = questionArray[numberOfQuestions].answer.trueAnswer;
        }
        answerOne.style.visibility = "visible";
        answerTwo.style.visibility = "visible";
    } else {
        displayScore();
    }
}

function displayScore() {
    document.getElementById("page-two").parentNode.removeChild(document.getElementById("page-two"));
    let sectionOne = document.getElementById("section-one");
    let scoreTitle = document.createElement("h2");
    let scoreLabel = document.createElement("p");
    scoreTitle.innerHTML = "Score final : ";
    scoreLabel.innerHTML = score;
    sectionOne.appendChild(scoreTitle);
    sectionOne.appendChild(scoreLabel);
}


