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
      "Tim the Enchanter",
      "The Knights Who Say Ni",
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
  },
];
var questContainer = document.querySelector("#question-container");
var quiz = document.querySelector(".quiz");
var startBtn = document.querySelector(".startButton");
var timerElement = document.querySelector(".time");
var questionArea = document.querySelector("#quest");
var currQuestion = document.querySelector(".questions");
var options = document.querySelector("#opt");
var checkAns = document.querySelector("#btn");
var scorePageEl = document.querySelector("#score");
var score = document.querySelector(".correct-incorrect-container");
var scoreContainer = document.querySelector(".results");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var resetBtn = document.querySelector(".restart-button");
var scoreAreaEl = document.querySelector("#scoreArea");
var inNameEl = document.querySelector("#inName");
var buttonDivEl = document.querySelector("#saveButton");
var highScoreEl = document.querySelector("#highScores");
var correct = true;
var incorrect = false;
var chosenQuestion = "";
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
var scorecard;
var qIndex = 0;

function init() {
  getWins();
  getLosses();
}
function startQuiz() {
  isWin = false;
  timerCount = 30;
  startBtn.disabled = true;
  displayQuizQuestions();
  startTimer();
  getWins();
  getLosses();
}
function winQuiz() {
  questContainer.textContent = "Winner!";
  winCounter++;
  startBtn.disabled = false;
  setWins();
}
function loseQuiz() {
  questContainer.textContent = "GAME OVER";
  loseCounter++;
  startBtn.disabled = true;
  setLosses();
}

function startTimer() {
  timerCount = 30;
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winQuiz();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      loseQuiz();
    }
  }, 1000);

  displayQuizQuestions();
}

function displayQuizQuestions() {
  if (qIndex < quizQuestions.length) {
    quiz.style.display = "none";
    questContainer.style.display = "block";
    questionArea.innerHTML = "";
    var currQuestion = quizQuestions[qIndex];
    var pTag = document.createElement("p");
    console.log(currQuestion);
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
}

function displayOptions(e) {
  var currOptions = quizQuestions[qIndex];
  qIndex++;
  if (e.target.textContent === currOptions.correct) {
    winCounter++;
    alert("Correct Answer");
  } else {
    loseCounter++;
    alert("Wrong Answer");
  }
  if (qIndex === quizQuestions.length) {
    questContainer.style.display = "none";
    scoreContainer.style.display = "block";
    displayScore();
    win.textContent = winCounter;
    lose.textContent = loseCounter;
    setWins();
    setLosses();
  }
  displayQuizQuestions();
}
function quizOver() {
  clearInterval(timerCount);
  timerElement.innerHTML = "Finished";
  displayScore();
  savedScore();
  getWins();
  getLosses();
}
function displayScore() {
  questContainer.replaceWith(scorePageEl);
  scoreAreaEl.innerText = "Final Score:" + winCounter;
  let inputSpan = document.createElement("span");
  initTextEl = document.createElement("input");
  initTextEl.setAttribute("id", "initails-input");
  initTextEl.setAttribute("type", "text");
  initTextEl.setAttribute("name", "iniatials");
  initTextEl.setAttribute("placeholder", "Enter Initials here");
  inputSpan.append(initTextEl);

  let btnSpan = document.createElement("span");
  saveButtonEl = document.createElement("button");
  saveButtonEl.setAttribute("id", "save-btn");
  saveButtonEl.setAttribute("class", "save-btn");
  saveButtonEl.setAttribute("type", "submit");
  saveButtonEl.textContent = "Save Score";
  btnSpan.append(saveButtonEl);
  inNameEl.append(inputSpan, btnSpan);

  inNameEl.addEventListener("displayScore", viewHighScores);
}
function viewHighScoresEl(e) {
  e.preventDefault();
  var name = document.querySelector("#initails-input").value;
  savedInit(name);
  scorePageEl.replaceWith(highScoreEl);
  loadSaveScores();
}
var savedScore = function () {
  localStorage.setItem("score", JSON.stringify(score));
};
var savedInit = function (initails) {
  localStorage.setItem("initails", JSON.stringify(initails));
};
function loadSaveScores() {
  var savedScore = localStorage.getItem("score");
  var savedInit = localStorage.getItem("initails");

  savedScore = JSON.parse(savedScore);
  savedInit = JSON.parse(savedInit);

  document.getElementById("highScores").innerHTML =
    savedInit + " - " + savedScore;
}
function setWins() {
  localStorage.setItem("winCounter", winCounter);
}

function setLosses() {
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

function getLosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function resetQuiz() {
  winCounter = 0;
  loseCounter = 0;
  qIndex = 0;
  document.getElementsByClassName("results")[0].style.display = "none";
  scorePageEl.style.display = "none";
  questContainer.className.replace("card results hide", "card results show");
  // getWins();
  // getLosses();
  startTimer();
}

//add event listeners??????
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", startTimer);
// buttonDivEl.addEventListener("click", loadSaveScores);

//local storage
function start() {
  scorecard = JSON.parse(localStorage.getItem("scorecard"));
}

function saveChanges() {
  localStorage.setItem("scorecard", JSON.stringify(scorecard));
}
