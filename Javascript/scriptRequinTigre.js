const quizData = [
  {
    question: "Quelle est la principale caractéristique physique du Requin tigre?",
    a: "Rayures noires et blanches sur tout le corps",
    b: "Peau lisse et argentée",
    c: "Yeux globuleux",
    d: "Museau pointu et allongé",
    correct: "a",
  },
  {
    question: "Où se trouve principalement l'habitat du Requin tigre?",
    a: "Océan Atlantique",
    b: "Lacs d'eau douce",
    c: "Océan Pacifique",
    d: "Rivières d'eau douce",
    correct: "c",
  },
  {
    question: "Quel est le régime alimentaire principal du Requin tigre?",
    a: "Algues marines",
    b: "Méduses",
    c: "Poissons de grande taille et mammifères marins",
    d: "Plancton",
    correct: "c",
  },
  {
    question: "Quelle est la taille moyenne d'un Requin tigre adulte?",
    a: "2 mètres",
    b: "3 mètres",
    c: "4 mètres",
    d: "5 mètres",
    correct: "b",
  },
  {
    question: "Quel est le statut de conservation du Requin tigre selon l'UICN?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "c",
  },
  {
    question: "Comment le Requin tigre chasse-t-il ses proies?",
    a: "Il les attrape avec ses dents acérées",
    b: "Il les écrase avec son museau",
    c: "Il les encercle en groupe",
    d: "Il les attire avec de la lumière bioluminescente",
    correct: "a",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les Requins tigres?",
    a: "La destruction de leur habitat",
    b: "La pollution de l'air",
    c: "La perte de leurs rayures",
    d: "La surpêche pour leurs nageoires et leur chair",
    correct: "d",
  },
  {
    question: "Combien de petits une femelle Requin tigre donne-t-elle généralement naissance?",
    a: "1 petit",
    b: "2 petits",
    c: "3 petits",
    d: "4 petits",
    correct: "c",
  },
  {
    question: "Quelle est la vitesse de nage maximale d'un Requin tigre?",
    a: "20 km/h",
    b: "40 km/h",
    c: "60 km/h",
    d: "80 km/h",
    correct: "a",
  },
  {
    question: "Quelle est la principale utilisation des nageoires de Requin tigre?",
    a: "La navigation",
    b: "La régulation de la température corporelle",
    c: "La reproduction",
    d: "La stabilité en nage",
    correct: "d",
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

