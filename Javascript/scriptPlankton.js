const quizData = [
  {
    question: "Quelle est la principale caractéristique du plancton?",
    a: "Il est constitué de poissons de petite taille",
    b: "Il est composé d'organismes microscopiques ou de petites tailles",
    c: "Il est toujours prédateur",
    d: "Il habite uniquement les eaux profondes",
    correct: "b",
  },
  {
    question: "Quel est le principal rôle du plancton dans les écosystèmes marins?",
    a: "Prédateur des poissons",
    b: "Fournisseur de nourriture pour de nombreuses espèces",
    c: "Créateur de récifs coralliens",
    d: "Producteur d'oxygène dans l'air",
    correct: "b",
  },
  {
    question: "Quelle est la catégorie principale du plancton qui effectue la photosynthèse?",
    a: "Zooplancton",
    b: "Phytoplancton",
    c: "Bactérioplancton",
    d: "Holoplancton",
    correct: "b",
  },
  {
    question: 'Quelle est la signification du terme "plancton"?',
    a: "Organismes errants",
    b: "Petits animaux",
    c: "Animaux marins",
    d: "Plantes aquatiques",
    correct: "a",
  },
  {
    question: "Quel est le plus grand organisme planctonique du monde?",
    a: "Krill antarctique",
    b: "Plancton végétal géant",
    c: "Cyanobactéries",
    d: "Physonectes",
    correct: "a",
  },
  {
    question: "Quel est le rôle du zooplancton dans la chaîne alimentaire marine?",
    a: "Il produit de l'oxygène par la photosynthèse",
    b: "Il se nourrit de phytoplancton et devient une source de nourriture pour de nombreux prédateurs marins",
    c: "Il décompose les déchets organiques dans l'eau",
    d: "Il aide les poissons à se déplacer",
    correct: "b",
  },
  {
    question: "Quel est l'organisme planctonique bioluminescent qui produit de la lumière dans les océans?",
    a: "Méduse",
    b: "Étoile de mer",
    c: "Dinoflagellé",
    d: "Plancton végétal",
    correct: "c",
  },
  {
    question: "Comment se déplacent généralement les organismes planctoniques dans l'eau?",
    a: "À pied",
    b: "En sautant",
    c: "En nageant ou en dérivant avec les courants",
    d: "En volant",
    correct: "c",
  },
  {
    question: "Quelle est la zone de l'océan où la production de plancton est généralement la plus élevée en raison de l'apport de nutriments?",
    a: "La zone pélagique",
    b: "La zone abyssale",
    c: "La zone upwelling",
    d: "La zone bathyale",
    correct: "c",
  },
  {
    question: "Quel organisme planctonique est responsable de la formation de certaines marées rouges toxiques?",
    a: "Cyanobactéries",
    b: "Krill",
    c: "Foraminifères",
    d: "Plancton végétal",
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

