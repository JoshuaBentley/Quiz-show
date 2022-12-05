
var startButton = document.getElementById("start");
var nextButton = document.getElementById("next");
var answerButton = document.getElementById("answerButtons");
var questionsContainer = document.getElementById("questionsContainer");
var questionForQuiz = document.getElementById("question")
var timer = 200;
var timerCountDown = document.getElementById("timer")
var shuffleQuestions, currentQuestion;


startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    console.log("click")
    console.log(currentQuestion)
    currentQuestion++
    console.log(currentQuestion)
    settingQuestions()
})


function startQuiz() {
    startButton.classList.add("hidden")
    shuffleQuestions = quizArray.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionsContainer.classList.remove("hidden")
    settingQuestions()
    timerControl()
}

function settingQuestions() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestion])
  
}

function showQuestion(question) {
    questionForQuiz.innerText = question.questions
    question.answer.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        console.log(button)
        button.classList.add("unanswered")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } 
        
        button.addEventListener("click", selectingAnswers)
        answerButton.appendChild(button)
    });   
}

function selectingAnswers(e) {
        var selectedAnswer = e.target
        var correct = selectedAnswer.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButton.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
        if (shuffleQuestions.length > currentQuestion + 1) {
            nextButton.classList.remove("hidden")
        } else {
            startButton.innerText = "Play Again"
            startButton.classList.remove("hidden")
        }
}       

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
 
function resetState() {
    nextButton.classList.add('hidden')
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

var quizArray = [
    {
        questions: "What does HTML stand for?", 
        answer: [
            {text: "How To Make Loonies", correct: false},
            {text: "Hyper Text Markup Language", correct: true},  
            {text: "Hyper Text Market Language", correct: false}, 
            {text: "Trick question, it doesn't stand for anything.", correct: false}
        ]
    },
    {
        questions: "What does JS stand for?", 
        answer: [
            {text: "JazzScript", correct: false},
            {text: "Java Script", correct: false},  
            {text: "Javascript", correct: false}, 
            {text: "JavaScript", correct: true}
        ]
    },
    {
        questions: "What does CSS stand for?", 
        answer: [
            {text: "Cascading Style System", correct: false},
            {text: "Colorful Style Sheet", correct: false},  
            {text: "Cascading Style Sheet", correct: true}, 
            {text: "Colorful Style system", correct: false}
        ]    
    }
]

function timerControl() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      timerCountDown.innerText = timer + " Time left to finish quiz.";
  
      if(timer === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        ;
      }
  
    }, 1000);
  }


