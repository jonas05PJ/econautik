const quizData = [
  {
    question: "Quelle est la principale caractéristique physique du Manchot empereur?",
    a: "Plumes noires et blanches",
    b: "Bec jaune et pointu",
    c: "Longues ailes pour le vol",
    d: "Queue en éventail",
    correct: "a",
  },
  {
    question: "Où se trouve principalement l'habitat du Manchot empereur?",
    a: "Antarctique",
    b: "Arctique",
    c: "Océans tropicaux",
    d: "Australie",
    correct: "a",
  },
  {
    question: "Quel est le régime alimentaire principal du Manchot empereur?",
    a: "Poissons de grande taille",
    b: "Phytoplancton",
    c: "Calmars et krill",
    d: "Algues marines",
    correct: "c",
  },
  {
    question: "Quelle est la taille moyenne d'un Manchot empereur adulte?",
    a: "20 centimètres",
    b: "50 centimètres",
    c: "1 mètre",
    d: "1,2 mètre",
    correct: "d",
  },
  {
    question: "Quel est le statut de conservation du Manchot empereur selon l'UICN?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "d",
  },
  {
    question: "Comment le Manchot empereur chasse-t-il ses proies?",
    a: "En plongeant à grande profondeur pour attraper des poissons",
    b: "En grignotant des algues marines",
    c: "En utilisant son bec pointu pour pêcher des petits poissons",
    d: "En se nourrissant de méduses",
    correct: "a",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les Manchots empereurs?",
    a: "La destruction de leur habitat par la déforestation",
    b: "La surpêche des poissons",
    c: "Le changement climatique et la fonte des glaces",
    d: "Les maladies infectieuses",
    correct: "c",
  },
  {
    question: "Combien de temps en moyenne le Manchot empereur peut-il rester sous l'eau lors de ses plongées pour se nourrir?",
    a: "5 minutes",
    b: "15 minutes",
    c: "30 minutes",
    d: "1 heure",
    correct: "b",
  },
  {
    question: "Comment les Manchots empereurs se protègent-ils du froid de l'Antarctique?",
    a: "En construisant des igloos",
    b: "En se regroupant en grandes colonies pour se réchauffer mutuellement",
    c: "En portant des combinaisons isolantes",
    d: "En se couvrant de boue",
    correct: "b",
  },
  {
    question: "Quelle est la période de reproduction typique des Manchots empereurs?",
    a: "En été",
    b: "En automne",
    c: "En hiver",
    d: "En toute saison",
    correct: "c",
  }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}
function  deselectAnswers(){
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function  getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if(answerEl.checked){
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    
    if(currentQuiz < quizData.length){
      loadQuiz()
    } else {
      quiz.innerHTML = `<div class="title">
      <img src="images/icone/question.png"><h2>&nbsp DynaQuiz &nbsp&lt;/&gt;</h2>
    </div>
    <h2 style="text-align: center;"> Tu as répondu correctement à ${score} des ${quizData.length} questions du quiz!</h2>
      
      <button onclick="location.reload()" id="btn">reinitialiser</button>`
    }
  }
})

