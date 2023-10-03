const quizData = [
  {
    question: "Quelle est la principale caractéristique physique de la Raie manta géante?",
    a: "Queue longue et pointue",
    b: "Taches blanches sur le dos",
    c: "Grande envergure et nageoires céphaliques en forme de cornes",
    d: "Peau rugueuse",
    correct: "c",
  },
  {
    question: "Où se trouve principalement l'habitat de la Raie manta géante?",
    a: "Eaux douces des rivières",
    b: "Zones côtières tropicales",
    c: "Profondeurs océaniques",
    d: "Lacs d'eau douce",
    correct: "b",
  },
  {
    question: "Quel est le régime alimentaire principal de la Raie manta géante?",
    a: "Poissons de grande taille",
    b: "Méduses",
    c: "Krill et plancton",
    d: "Algues marines",
    correct: "c",
  },
  {
    question: "Quelle est la taille moyenne d'une Raie manta géante adulte?",
    a: "2 mètres",
    b: "5 mètres",
    c: "10 mètres",
    d: "15 mètres",
    correct: "b",
  },
  {
    question: "Quel est le statut de conservation de la Raie manta géante selon l'UICN?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "c",
  },
  {
    question: "Comment la Raie manta géante se nourrit-elle?",
    a: "En chassant activement des proies",
    b: "En utilisant ses nageoires céphaliques pour filtrer le plancton",
    c: "En piquant ses proies avec sa queue",
    d: "En grignotant des algues des récifs",
    correct: "b",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les Raies manta géantes?",
    a: "La destruction de leurs zones d'alimentation",
    b: "La surpêche pour leurs ailerons et leur viande",
    c: "La concurrence alimentaire avec les requins",
    d: "Le blanchissement des coraux",
    correct: "b",
  },
  {
    question: "Combien de petits une Raie manta géante donne-t-elle généralement naissance?",
    a: "1-2 petits",
    b: "5-10 petits",
    c: "20-30 petits",
    d: "50-60 petits",
    correct: "a",
  },
  {
    question: "Quelle est la vitesse de nage maximale d'une Raie manta géante?",
    a: "10 km/h",
    b: "20 km/h",
    c: "30 km/h",
    d: "40 km/h",
    correct: "c",
  },
  {
    question: "Quelle est la principale attraction pour le tourisme lié aux Raies mantas géantes?",
    a: "Leur peau colorée",
    b: "Leur comportement territorial",
    c: "La possibilité de les observer en plongée",
    d: "Leurs cris sonores",
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

