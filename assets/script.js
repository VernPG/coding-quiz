var quiz = document.querySelector(".quiz");
var startBtn = document.querySelector(".startButton");
var timeEl = document.querySelector(".time");
var questions= document.querySelector(".questions");
var options = document.querySelector("opt");
var submitBtn = document.querySelector("btn");
var score = document.querySelector("score");
var chosenQuestion = "";
var winCounter = 0;
var loseCounter= 0;
var timer;
var timerCount;
var scorecard;

var quest = [
  {
    q: "In The Matrix, does Neo take the blue pill or the red pill?",
    a: "Blue",
    b: "Black",
    c: "Red",
    d: "Yellow",
    answer: "C",
  },

  {
    q: "In Monty Python and the Search for the Holy Grail, King Arthur's Knights of the Round Table include: Sir Bedevere, Sir Lancelot, Sir Galahad, Sir Robin, and ...",
    a: "The Black Knight",
    b: "Sir Not-Appearing-In-This-Film ",
    c: "Tim the Enchanter",
    d: "The Knights Who Say Ni",
    answer: "B",
  },
  {
    q: "What was the first movie to use profanity?",
    a: "Citizen Kane",
    b: "Casablanca",
    c: "All Quiet on the Western Front",
    d: "Gone with the Wind",
    answer: "D",
  },
];

//start button to start timer 
function startGame() {
    isWin = false;
    timerCount = 60;
    startButton.disbaled = true;
    renderQuestions()
    startTimer()
}

// start timer
function startTimer () {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent=timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

let currQuestion = 0
let score = 0

//how to get questions to populate

function renderQuestions(){
  chosenQuestion =quest[Math.floor(Math.random() * quest.length)];

}

//how to ccheck the answer
function checkAns() {
  const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

  if (Questions[currQuestion].a[selectedAns].isCorrect) {
      score++;
      console.log("Correct")
      nextQuestion();
  } else {
      nextQuestion();
  }
}


//how to get the next question to load

function nextQuestion() {
  if (currQuestion < Questions.length - 1) {
      currQuestion++;
      loadQuest();
  } else {
      document.getElementById("opt").remove()
      document.getElementById("quest").remove()
      document.getElementById("btn").remove()
      loadScore();
  }
}

//how to get tally and then scorecard to populate to add initials

function loadScore(){
  const totalScore = document.getElementById("score")
  totalScore.textContent= "Correct, you scored ${score} out of ${Questions.length}"
}

//add event listeners

btn.addEventListener("click", startGame);

