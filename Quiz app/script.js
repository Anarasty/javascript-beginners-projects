// "use strict";

const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.textContent = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "2", correct: false },
      { text: "6", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "3 + 3",
    answers: [
      { text: "4", correct: false },
      { text: "1", correct: false },
      { text: "6", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "5 + 5",
    answers: [
      { text: "10", correct: true },
      { text: "20", correct: false },
      { text: "15", correct: false },
      { text: "55", correct: false },
    ],
  },
  {
    question: "1 + 1",
    answers: [
      { text: "3", correct: false },
      { text: "1", correct: false },
      { text: "0", correct: false },
      { text: "2", correct: true },
    ],
  },
];
