const quizData = [
  {
    question: "Quelle est la principale caractéristique physique du Marsouin du golfe de Californie?",
    a: "Peau rose",
    b: "Nageoires dorsales pointues",
    c: "Corps trapu",
    d: "Taches noires sur le dos",
    correct: "b",
  },
  {
    question: "Où se trouve principalement l'habitat du Marsouin du golfe de Californie?",
    a: "Côtes de l'Amérique du Nord",
    b: "Rivières d'eau douce",
    c: "Golfe de Californie",
    d: "Eaux glacées de l'Arctique",
    correct: "c",
  },
  {
    question: "Quel est le régime alimentaire principal du Marsouin du golfe de Californie?",
    a: "Poissons de grande taille",
    b: "Méduses",
    c: "Petits poissons et céphalopodes",
    d: "Plancton",
    correct: "c",
  },
  {
    question: "Quelle est la taille moyenne d'un Marsouin du golfe de Californie adulte?",
    a: "1 mètre",
    b: "2 mètres",
    c: "3 mètres",
    d: "4 mètres",
    correct: "a",
  },
  {
    question: "Quel est le statut de conservation du Marsouin du golfe de Californie selon l'UICN?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "a",
  },
  {
    question: "Comment le Marsouin du golfe de Californie se nourrit-il?",
    a: "En chassant activement des proies",
    b: "En utilisant son bec pour pêcher des poissons",
    c: "En filtrant de petits poissons et céphalopodes",
    d: "En creusant des terriers sous-marins",
    correct: "c",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les Marsouins du golfe de Californie?",
    a: "La concurrence alimentaire avec les orques",
    b: "La pollution marine et les filets de pêche",
    c: "La perte d'habitat due à la déforestation",
    d: "Le réchauffement climatique",
    correct: "b",
  },
  {
    question: "Combien de petits une femelle Marsouin du golfe de Californie donne-t-elle généralement naissance?",
    a: "1 petit",
    b: "2 petits",
    c: "3 petits",
    d: "4 petits",
    correct: "a",
  },
  {
    question: "Quelle est la vitesse de nage maximale d'un Marsouin du golfe de Californie?",
    a: "10 km/h",
    b: "20 km/h",
    c: "30 km/h",
    d: "40 km/h",
    correct: "c",
  },
  {
    question: "Pourquoi le Marsouin du golfe de Californie est-il en danger critique d'extinction?",
    a: "En raison de sa grande abondance",
    b: "En raison de la surpêche",
    c: "En raison de sa taille imposante",
    d: "En raison de sa longue espérance de vie",
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

