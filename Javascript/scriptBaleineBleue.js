const quizData = [
  {
    question: "Quelle est la principale caractéristique physique de la Baleine bleue?",
    a: "Peau blanche",
    b: "Petite taille",
    c: "Longueur gigantesque et couleur bleu-gris",
    d: "Queue en forme de croissant",
    correct: "c",
  },
  {
    question: "Où se trouve principalement l'habitat de la Baleine bleue?",
    a: "Océan Atlantique",
    b: "Mers chaudes du Pacifique",
    c: "Océan Arctique",
    d: "Océan Austral",
    correct: "d",
  },
  {
    question: "Quel est le régime alimentaire principal de la Baleine bleue?",
    a: "Algues marines",
    b: "Plancton",
    c: "Poissons de grande taille",
    d: "Méduses",
    correct: "b",
  },
  {
    question: "Quelle est la taille moyenne d'une Baleine bleue adulte?",
    a: "10 mètres",
    b: "20 mètres",
    c: "30 mètres",
    d: "40 mètres",
    correct: "c",
  },
  {
    question: "Quel est le statut de conservation de la Baleine bleue selon l'UICN?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "d",
  },
  {
    question: "Comment la Baleine bleue se nourrit-elle?",
    a: "En utilisant son bec pour pêcher des poissons",
    b: "En creusant dans le sable pour attraper des crustacés",
    c: "En filtrant de grandes quantités de plancton avec ses fanons",
    d: "En chassant activement des proies",
    correct: "c",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les Baleines bleues?",
    a: "La pollution de l'air",
    b: "La perte de leur habitat côtier",
    c: "La surpêche du krill, leur principale source de nourriture",
    d: "Les maladies infectieuses",
    correct: "c",
  },
  {
    question: "Combien de petits une femelle Baleine bleue donne-t-elle généralement naissance?",
    a: "1 petit",
    b: "2 petits",
    c: "3 petits",
    d: "4 petits",
    correct: "a",
  },
  {
    question: "Quelle est la vitesse de nage maximale d'une Baleine bleue?",
    a: "10 km/h",
    b: "20 km/h",
    c: "40 km/h",
    d: "60 km/h",
    correct: "a",
  },
  {
    question: "Quelle est la principale utilisation des fanons de la Baleine bleue?",
    a: "La régulation de la température corporelle",
    b: "La filtration du plancton",
    c: "La propulsion lors de la nage",
    d: "La protection contre les prédateurs",
    correct: "b",
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

