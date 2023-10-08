// Quiz data definition
const quizData = [
  {
    question: "What is the main physical characteristic of the Crab from Lake Qaraoun?",
    a: "Elongated and streamlined body",
    b: "Hard and articulated carapace",
    c: "Long pointed beak",
    d: "Sharp dorsal fins",
    correct: "b",
  },
  {
    question: "Where is the primary habitat of the Crab from Lake Qaraoun?",
    a: "Oceans",
    b: "Rivers and lakes in North America",
    c: "Lake Qaraoun in Lebanon",
    d: "Deserts",
    correct: "c",
  },
  {
    question: "What is the main diet of the Crab from Lake Qaraoun?",
    a: "Marine algae",
    b: "Small fish and aquatic invertebrates",
    c: "Land insects",
    d: "Aquatic detritus",
    correct: "d",
  },
  {
    question: "What is the average size of an adult Crab from Lake Qaraoun?",
    a: "5 centimeters",
    b: "10 centimeters",
    c: "15 centimeters",
    d: "20 centimeters or more",
    correct: "c",
  },
  {
    question: "What is the conservation status of the Crab from Lake Qaraoun according to the IUCN?",
    a: "Critically endangered",
    b: "Endangered",
    c: "Vulnerable",
    d: "Least concern",
    correct: "b",
  },
  {
    question: "How does the Crab from Lake Qaraoun primarily feed?",
    a: "Using its pincers to catch prey",
    b: "Actively hunting small fish",
    c: "Filtering food particles from the water",
    d: "Nibbling on algae on rocks",
    correct: "c",
  },
  {
    question: "What is the primary threat to Crabs from Lake Qaraoun?",
    a: "Habitat destruction due to deforestation",
    b: "Water pollution",
    c: "Illegal collection for the pet trade",
    d: "Infectious diseases",
    correct: "b",
  },
  {
    question: "How many eggs can a female Crab from Lake Qaraoun lay during reproduction?",
    a: "Hundreds of eggs",
    b: "Thousands of eggs",
    c: "Tens of thousands of eggs",
    d: "Hundreds of thousands of eggs",
    correct: "d",
  },
  {
    question: "What is the maximum movement speed of a Crab from Lake Qaraoun?",
    a: "1 km/h",
    b: "5 km/h",
    c: "10 km/h",
    d: "20 km/h",
    correct: "a",
  },
  {
    question: "What is the primary use of the pincers of the Crab from Lake Qaraoun?",
    a: "Navigation",
    b: "Regulating body temperature",
    c: "Protection against predators",
    d: "Capturing prey and defense",
    correct: "d",
  }
];

// Selecting HTML elements
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// Initializing variables
let currentQuiz = 0;
let score = 0;

// Loading the initial quiz
loadQuiz();

// Function for loading the quiz
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Function for deselecting answers
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

// Function for getting the selected answer
function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Event listener for the submit button
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<div class="title">
      <img src="images/icone/question.png"><h2>&nbsp DynaQuiz &nbsp&lt;/&gt;</h2>
    </div>
    <h2 style="text-align: center;"> You answered correctly to ${score} out of ${quizData.length} quiz questions!</h2>
      <button onclick="location.reload()" id="btn">Reset</button>`;
    }
  }
});
