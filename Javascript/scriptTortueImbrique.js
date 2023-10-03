const quizData = [
  {
    question: "Quelle est la caractéristique physique distinctive de la Tortue imbriquée?",
    a: "Carapace verte",
    b: "Carapace noire",
    c: "Carapace ridée",
    d: "Carapace imbriquée",
    correct: "d",
  },
  {
    question: "Où se trouvent principalement les zones de nidification de la Tortue imbriquée?",
    a: "Côtes arctiques",
    b: "Côtes océaniques tempérées",
    c: "Eaux profondes de l'océan",
    d: "Déserts",
    correct: "b",
  },
  {
    question: "Quel est le régime alimentaire principal de la Tortue imbriquée?",
    a: "Algue marine",
    b: "Méduses",
    c: "Poissons",
    d: "Plantes terrestres",
    correct: "b",
  },
  {
    question: "Quelle est la taille moyenne d'une Tortue imbriquée adulte?",
    a: "30 centimètres",
    b: "1 mètre",
    c: "2 mètres",
    d: "3 mètres",
    correct: "c",
  },
  {
    question: "Pourquoi la Tortue imbriquée est-elle nommée ainsi?",
    a: "En raison de son comportement agressif",
    b: "En raison de sa capacité à s'enrouler dans sa carapace",
    c: "En raison de la structure imbriquée de sa carapace",
    d: "En raison de son régime alimentaire",
    correct: "c",
  },
  {
    question: "Quel est le statut de conservation de la Tortue imbriquée selon l'UICN?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "a",
  },
  {
    question: "Comment les Tortues imbriquées contribuent-elles à l'écosystème marin?",
    a: "En détruisant les récifs coralliens",
    b: "En régulant les populations de poissons",
    c: "En creusant des terriers sur les plages",
    d: "En transportant des matériaux sur terre",
    correct: "b",
  },
  {
    question: "Quel est le mode de reproduction typique des Tortues imbriquées?",
    a: "Ovoviviparité",
    b: "Oviparité",
    c: "Viviparité",
    d: "Parthénogenèse",
    correct: "b",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les Tortues imbriquées?",
    a: "La destruction de leur habitat terrestre",
    b: "La chasse pour leur viande et leurs œufs",
    c: "Les prédateurs marins",
    d: "Les tempêtes",
    correct: "b",
  },
  {
    question: "Quelle est la durée de vie moyenne d'une Tortue imbriquée?",
    a: "20 ans",
    b: "50 ans",
    c: "100 ans",
    d: "150 ans",
    correct: "b",
  },
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

