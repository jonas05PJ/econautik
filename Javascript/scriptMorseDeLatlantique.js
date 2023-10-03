const quizData = [
  {
    question: "Quelle est la principale caractéristique physique du Morse de l'Atlantique?",
    a: "Longues dents pointues",
    b: "Museau effilé",
    c: "Peau lisse et grisâtre",
    d: "Queue longue",
    correct: "a",
  },
  {
    question: "Où se trouve principalement l'habitat du Morse de l'Atlantique?",
    a: "Océan Indien",
    b: "Côtes de l'Amérique du Nord",
    c: "Arctique et Atlantique Nord",
    d: "Mer Méditerranée",
    correct: "c",
  },
  {
    question: "Quel est le régime alimentaire principal du Morse de l'Atlantique?",
    a: "Algues marines",
    b: "Poissons et crustacés",
    c: "Méduses",
    d: "Phytoplancton",
    correct: "b",
  },
  {
    question: "Quelle est la taille moyenne d'un Morse de l'Atlantique adulte?",
    a: "2 mètres",
    b: "3 mètres",
    c: "4 mètres",
    d: "5 mètres",
    correct: "c",
  },
  {
    question: "Quel est le statut de conservation du Morse de l'Atlantique selon l'UICN?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "d",
  },
  {
    question: "Comment le Morse de l'Atlantique chasse-t-il ses proies?",
    a: "Il chasse activement les poissons",
    b: "Il creuse dans le sable pour attraper les crustacés",
    c: "Il plonge sous l'eau et attrape les poissons avec ses dents",
    d: "Il utilise des outils pour fouiller le fond marin",
    correct: "c",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les Morses de l'Atlantique?",
    a: "La perte d'habitat due à la déforestation",
    b: "La chasse pour leur graisse et leur ivoire",
    c: "La pollution marine",
    d: "Les maladies infectieuses",
    correct: "c",
  },
  {
    question: "Combien de petits une femelle Morse de l'Atlantique donne-t-elle généralement naissance?",
    a: "1 petit",
    b: "2 petits",
    c: "3 petits",
    d: "4 petits",
    correct: "b",
  },
  {
    question: "Quelle est la vitesse de nage maximale d'un Morse de l'Atlantique?",
    a: "5 km/h",
    b: "10 km/h",
    c: "20 km/h",
    d: "30 km/h",
    correct: "b",
  },
  {
    question: "Comment les Morses de l'Atlantique communiquent-ils entre eux?",
    a: "En chantant des chansons",
    b: "En émettant des sons sous-marins",
    c: "En utilisant des signaux lumineux",
    d: "En dansant sous l'eau",
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

