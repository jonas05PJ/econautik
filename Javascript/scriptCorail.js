const quizData = [
  {
    question: "Quelle est la principale caractéristique physique du corail?",
    a: "Couleur rouge éclatante",
    b: "Structure squelettique calcaire",
    c: "Tentacules urticants",
    d: "Peau rugueuse",
    correct: "b",
  },
  {
    question: "Où se trouve principalement l'habitat du corail?",
    a: "Eaux douces des rivières",
    b: "Eaux glacées de l'Arctique",
    c: "Récifs coralliens dans les océans",
    d: "Lacs alpins",
    correct: "c",
  },
  {
    question: "Quel est le principal rôle écologique des récifs coralliens?",
    a: "Fournir un abri pour les poissons prédateurs",
    b: "Détruire les écosystèmes marins",
    c: "Fournir de la nourriture aux oiseaux de mer",
    d: "Soutenir une grande biodiversité marine",
    correct: "d",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les récifs coralliens?",
    a: "Le réchauffement climatique et le blanchissement corallien",
    b: "La surpêche des poissons",
    c: "L'érosion des plages",
    d: "La pollution atmosphérique",
    correct: "a",
  },
  {
    question: "Quelle est la composition principale des polypes de corail?",
    a: "Plantes marines",
    b: "Algues unicellulaires",
    c: "Petits invertébrés",
    d: "Cnidaire",
    correct: "d",
  },
  {
    question: "Quelle est la fonction des zooxanthelles dans la relation entre les coraux et les algues?",
    a: "Protéger les coraux contre les prédateurs",
    b: "Fournir des nutriments aux coraux par photosynthèse",
    c: "Fournir un habitat pour les poissons-clowns",
    d: "Décomposer les déchets coralliens",
    correct: "b",
  },
  {
    question: "Quel processus permet aux coraux de construire leurs récifs?",
    a: "Photosynthèse",
    b: "Calcification",
    c: "Respiration",
    d: "Fermentation",
    correct: "b",
  },
  {
    question: "Quelle est la signification du blanchissement corallien?",
    a: "Le corail devient plus coloré",
    b: "Les coraux perdent leurs pigments et deviennent blancs",
    c: "Les coraux se multiplient rapidement",
    d: "Les coraux attaquent d'autres organismes marins",
    correct: "b",
  },
  {
    question: "Quelle est la plus grande barrière de corail du monde?",
    a: "La Grande Barrière de Corail en Australie",
    b: "Les Maldives en Asie du Sud",
    c: "Le récif de Tubbataha aux Philippines",
    d: "Les Keys de Floride aux États-Unis",
    correct: "a",
  },
  {
    question: "Comment les coraux se reproduisent-ils généralement?",
    a: "Par la ponte d'œufs dans l'eau",
    b: "Par la division cellulaire",
    c: "Par la pollinisation",
    d: "Par la reproduction asexuée",
    correct: "a",
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

