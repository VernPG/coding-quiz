var quiz = document.querySelector(".quiz");
var startBtn = document.querySelector(".startButton");
var timerElement = document.querySelector(".time");
var questions= document.querySelector("quest");
var options = document.querySelector("opt");
var checkAns = document.querySelector("btn");
var score = document.querySelector("score");
var correct = true
var incorrect = false
var chosenQuestion = "";
var winCounter = 0;
var loseCounter= 0;
var isWin = false;
var timer;
var timerCount;
var scorecard;

var quest = [
  {
    question: "In The Matrix, does Neo take the blue pill or the red pill?",
    answers:[
    {text: "Blue", answer:false},
    {text: "Black",answer:false},
    {text: "Red",answer: true,},
    {text: "Yellow",answer:false}
    // { answer: "C",}
  ]
  },
  {
    question: "In Monty Python and the Search for the Holy Grail, King Arthur's Knights of the Round Table include: Sir Bedevere, Sir Lancelot, Sir Galahad, Sir Robin, and ...",
    answers: [
    {text: "The Black Knight",answer:false},
    {text: "Sir Not-Appearing-In-This-Film", answer: true,},
    {text: "Tim the Enchanter",answer:false},
    {text: "The Knights Who Say Ni",answer:false}
    // answer: "B",
  ]
  }]
//   },
//   {
//     q: "What was the first movie to use profanity?",
//     a: "Citizen Kane",
//     b: "Casablanca",
//     c: "All Quiet on the Western Front",
//     d: "Gone with the Wind",
//     answer: "D",
//   },
// ];

//start button to start game and timer 

function start() {
  scorecard = JSON.parse(localStorage.getItem("scorecard"))
}
function saveChanges() {
  localStorage.setItem("scorecard", JSON.stringify(scorecard))
}

startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", startTimer);

// start timer
function startTimer () {
  timerCount= 10;
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent=timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}


function startQuiz (){
  var quest= document.getElementById ("questions", quest);
 


}



//how to check the answer
function checkAns() {
  const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

  if (questions[currQuestion].a[selectedAns].isCorrect) {
      score++;
      console.log("Correct")
      nextQuestion();
  } else {
      nextQuestion();
  }
}


//how to get the next question to load

function nextQuestion() {
  if (currQuestion < questions.length - 1) {
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
function winGame() {
  quiz.textContent = "Winner!";
  winCounter++
  startBtn.disabled = false;
  setWins()
}

function loseGame() {
  quiz.textContent = "You Lose!";
  loseCounter++
  startBtn.disabled = false;
  setLosses()
}

function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

function getWins(){
  var storedWins = localStorage.getItem("winCount");
  if (storedWins === null) {
    winCounter = 0;
  } else {
    winCounter = storedWins;
}
    win.textContent=winCounter;
}

//End game?
var resetButton = document.querySelector(".reset-button");
function resetGame() {
  winCounter=0;
  loseCounter=o;
  setWins()
  setLosses()
}


//add event listeners??????


btn.addEventListener("click", checkAns);




// function loadScore(){
//   const totalScore = document.getElementById("score")
//   totalScore.textContent= "Correct, you scored ${score} out of ${Questions.length}"
// }