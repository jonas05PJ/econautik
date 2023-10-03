const quizData = [
  {
    question: "Quelle est la principale caractéristique physique du Dauphin de l'Indo-Pacifique?",
    a: "Taches noires sur le dos",
    b: "Long bec effilé",
    c: "Nageoires dorsales proéminentes",
    d: "Peau rose",
    correct: "a",
  },
  {
    question: "Où se trouve principalement l'habitat du Dauphin de l'Indo-Pacifique?",
    a: "Côtes de l'Amérique du Nord",
    b: "Rivières d'eau douce",
    c: "Océan Indien et Pacifique",
    d: "Lacs d'Europe",
    correct: "c",
  },
  {
    question: "Quel est le régime alimentaire principal du Dauphin de l'Indo-Pacifique?",
    a: "Petits poissons et céphalopodes",
    b: "Algues marines",
    c: "Poissons de grande taille",
    d: "Plancton",
    correct: "a",
  },
  {
    question: "Quelle est la taille moyenne d'un Dauphin de l'Indo-Pacifique adulte?",
    a: "1 mètre",
    b: "2 mètres",
    c: "3 mètres",
    d: "4 mètres",
    correct: "b",
  },
  {
    question: "Quel est le statut de conservation du Dauphin de l'Indo-Pacifique selon l'UICN?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "c",
  },
  {
    question: "Comment le Dauphin de l'Indo-Pacifique communique-t-il?",
    a: "En utilisant des signaux lumineux",
    b: "En émettant des ultrasons",
    c: "En chantant des chansons",
    d: "En dansant sous l'eau",
    correct: "b",
  },
  {
    question: "Quel est le mode de reproduction typique du Dauphin de l'Indo-Pacifique?",
    a: "Ovoviviparité",
    b: "Oviparité",
    c: "Viviparité",
    d: "Parthénogenèse",
    correct: "a",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les Dauphins de l'Indo-Pacifique?",
    a: "La dégradation de leurs nageoires dorsales",
    b: "La chasse pour leur viande",
    c: "La pollution marine et la perte d'habitat",
    d: "La concurrence alimentaire avec les baleines",
    correct: "c",
  },
  {
    question: "À quelle vitesse maximale un Dauphin de l'Indo-Pacifique peut-il nager?",
    a: "20 km/h",
    b: "40 km/h",
    c: "60 km/h",
    d: "80 km/h",
    correct: "c",
  },
  {
    question: "Combien de temps peut rester un Dauphin de l'Indo-Pacifique sous l'eau sans respirer?",
    a: "5 minutes",
    b: "20 minutes",
    c: "1 heure",
    d: "24 heures",
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

