const quizData = [
  {
    question: "What is the capital of France?",
    a: "London",
    b: "Berlin",
    c: "Paris",
    d: "Madrid",
    answer: "c",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    a: "F. Scott Fitzgerald",
    b: "Harper Lee",
    c: "J.K. Rowling",
    d: "Stephen King",
    answer: "b",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Venus",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    answer: "b",
  },
  {
    question: "What is the chemical symbol for water?",
    a: "Wo",
    b: "Wa",
    c: "H2O",
    d: "We",
    answer: "c",
  },
  {
    question: "Which element is represented by the symbol 'Fe'?",
    a: "Iron",
    b: "Gold",
    c: "Silver",
    d: "Zinc",
    answer: "a",
  },
];

const questionEl = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const btn = document.querySelector(".btn");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

btn.addEventListener("click", () => {
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("You finished!");
  }
});
