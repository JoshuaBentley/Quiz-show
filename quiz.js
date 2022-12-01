// area where my variable will live
var startButtonEventListener =  document.getElementById("startButton");
var questionOneEventListner = document.getElementById("question1");
var corrctAnswerListner = document.getElementById("correct");
var wrongAnswerOneListner = document.getElementById("wrong1");
var wrongAnswerTwoListner = document.getElementById("wrong2");
var wrongAnswerThreeListner = document.getElementById("wrong3");
var changeToNextQuestion = document.getElementById("nextButton");
var questionTwoEventListner = document.getElementById("question2");
var timerCountDown = document.getElementById("timeleft")
var timer = 200; 

// event listenres live here for now
startButtonEventListener.addEventListener("click", startingTheGame);
corrctAnswerListner.addEventListener("click", answeringQuestionOne);
wrongAnswerOneListner.addEventListener("click", answeringQuestionOne);
wrongAnswerTwoListner.addEventListener("click", answeringQuestionOne);
wrongAnswerThreeListner.addEventListener("click", answeringQuestionOne);
changeToNextQuestion.addEventListener("click", chnagingQuestions);

// starting functions here
function startingTheGame() {
    startButtonEventListener.classList.add("hidden");
    questionOneEventListner.classList.remove("hidden");
    // setCountDown
    }

function answeringQuestionOne() {
    changeToNextQuestion.classList.remove("hidden");
}

function chnagingQuestions() {
    questionOneEventListner.classList.add("hidden")
    questionTwoEventListner.classList.remove("hidden")
}

function selectingAnswer() {
    wrongAnswerOneListner.style.color = "red";
    wrongAnswerTwoListner.style.color = "red";
    wrongAnswerThreeListner.style.color = "red";
    corrctAnswerListner.style.color = "green";
   return answeringQuestionOne() 
}
/*
function setCountDown() {
    timerCountDown.textContent = "Time to finish quiz: " + timer + " seconds";
    return startingTheGame()
}
*/  

function questionsForTheQuiz()  {
    
    
}