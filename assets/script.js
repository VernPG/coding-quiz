var quizQuestions = [
  {
    question: "In The Matrix, does Neo take the blue pill or the red pill?",
    options: ["Blue", "Black", "Red", "Yellow"],
    correct: "Red",
  },
  {
    question:
      "In Monty Python and the Search for the Holy Grail, King Arthur's Knights of the Round Table include: Sir Bedevere, Sir Lancelot, Sir Galahad, Sir Robin, and ...",
    options: [
      "The Black Knight",
      "Sir Not-Appearing-In-This-Film",
      "Tim the Enchanter","The Knights Who Say Ni"
    ],
    correct: "Sir Not-Appearing-In-This-Film",
  },

  {
    question: "What was the first movie to use profanity?",
    options: [
      "Citizen Kane",
      "Casablanca",
      "All Quiet on the Western Front",
      "Gone with the Wind",
    ],
    correct: "Gone with the Wind",
  }
];
var questContainer = document.querySelector("#question-container");
var quiz = document.querySelector(".quiz");
var startBtn = document.querySelector(".startButton");
var timerElement = document.querySelector(".time");
var questionArea = document.querySelector("#quest");
var currQuestion = document.querySelector(".questions");
var options = document.querySelector("#opt");
var checkAns = document.querySelector("#btn");
var score = document.querySelector("#score");
var scoreContainer = document.querySelector(".card");
var correct = true;
var incorrect = false;
var chosenQuestion = "";
var winCounter = 0;
var loseCounter = 0;
// var isWin = false;
var timer;
var timerCount;
var scorecard;
var qIndex = 0;


// start timer
function startTimer() {
  timerCount = 10;
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);

  displayQuizQuestions();
}

function displayQuizQuestions() {
  quiz.style.display = "none";
  questContainer.style.display = "block";
  questionArea.innerHTML= "";
  var currQuestion = quizQuestions[qIndex];
  //clear out previous question
  var pTag = document.createElement("p");
  pTag.textContent = currQuestion.question;
  questionArea.appendChild(pTag);

  for (let i = 0; i < currQuestion.options.length; i++) {
    var answer = currQuestion.options[i];
    var btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = displayOptions;
    questionArea.appendChild(btn);
  }
}

function displayOptions(e){
  var currOptions = quizQuestions[qIndex];
  qIndex++;

  if (e.target.textContent === currOptions.correct) {
    alert("Correct Answer")
        // answerIsCorrect();
      } else {
        alert("Wrong Answer")
        
        // answerIsWrong();
      }
  if (qIndex === quizQuestions.length){
    questContainer.style.display = "none";
    scoreContainer.style.display = "block";
    
    
  }
  displayQuizQuestions();
}

// questionArea.addEventListener("click", function (event) {
//   // var currOptions = quizQuestions[qIndex].options;
//   qIndex++;
//   displayQuizQuestions;
//   console.log(event.target.textContent)
  // if (event.target.matches("button")) {
  //   if (event.target.textContent === currOptions.correct) {
  //     answerIsCorrect();
  //   } else {
  //     answerIsWrong();
  //   }
  // }
// });
//start button to start game and timer
// startBtn.addEventListener("click", start);
// startBtn.addEventListener("click", startQuestions);
startBtn.addEventListener("click", startTimer);

//how to check the answer
// function checkAns() {
//   const selectedAns = parseInt(
//     document.querySelector('input[name="answer"]:checked').value
//   );

//   if (questions[currQuestion].a[selectedAns].isCorrect) {
//     score++;
//     console.log("Correct");
//     nextQuestion();
//   } else {
//     nextQuestion();
//   }
// }

//how to get the next question to load

function nextQuestion() {
  if (currQuestion < questions.length - 1) {
    currQuestion++;
    loadQuest();
  } else {
    document.getElementById("opt").remove();
    document.getElementById("quest").remove();
    document.getElementById("btn").remove();
    loadScore();
  }
}

//how to get tally and then scorecard to populate to add initials
function winGame() {
  quiz.textContent = "Winner!";
  winCounter++;
  startBtn.disabled = false;
  setWins();
}

function loseGame() {
  quiz.textContent = "You Lose!";
  loseCounter++;
  startBtn.disabled = false;
  setLosses();
}

function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

function setLosses() {
  loseGame.textContent = loseCounter;
  localStorage.setItem("loseCounter", loseCounter);
}

function getWins() {
  var storedWins = localStorage.getItem("winCount");
  if (storedWins === null) {
    winCounter = 0;
  } else {
    winCounter = storedWins;
  }
  win.textContent = winCounter;
}

//End game?
var resetButton = document.querySelector(".reset-button");
function resetGame() {
  winCounter = 0;
  loseCounter = o;
  setWins();
  setLosses();
}

//add event listeners??????

btn.addEventListener("click", checkAns);

//local storage
function start() {
  scorecard = JSON.parse(localStorage.getItem("scorecard"));
}

function saveChanges() {
  localStorage.setItem("scorecard", JSON.stringify(scorecard));
}

// function loadScore(){
//   const totalScore = document.getElementById("score")
//   totalScore.textContent= "Correct, you scored ${score} out of ${Questions.length}"
// }
