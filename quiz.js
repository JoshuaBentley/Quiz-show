// area where my variable will live
var startButtonEventListener =  document.getElementById("startButton");
var questionOneEventListner = document.getElementById("question1");
var corrctAnswerListner = document.getElementById("correct")
var wrongAnswerListner = document.getElementById("wrong")
var changeToNextQuestion = document.getElementById("nextButton")
var questionTwoEventListner = document.getElementById("question2")

// event listenres live here for now
startButtonEventListener.addEventListener("click", changingToFirstQuestion);
corrctAnswerListner.addEventListener("click", answeringTheQuestion)
wrongAnswerListner.addEventListener("click", answeringTheQuestion)
changeToNextQuestion.addEventListener("click", answeringTheQuestion)

// starting functions here
function changingToFirstQuestion() {
    startButtonEventListener.classList.add("hidden");
    questionOneEventListner.classList.remove("hidden")
    }

function answeringTheQuestion() {
    questionOneEventListner.classList.add("hidden")
    questionTwoEventListner.classList.remove("hidden")

}


function ChangingToOtherQuestions() {

}