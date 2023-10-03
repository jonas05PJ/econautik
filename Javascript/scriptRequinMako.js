const quizData = [
  {
    question: "Quelle est la principale caractéristique physique du requin mako?",
    a: "Couleur rouge brillante",
    b: "Corps trapu",
    c: "Peau bleu métallique sur le dos",
    d: "Peau noire",
    correct: "c",
  },
  {
    question: "Où se trouve généralement l'habitat du requin mako?",
    a: "Eaux douces",
    b: "Eaux arctiques",
    c: "Eaux océaniques tempérées et tropicales",
    d: "Eaux saumâtres",
    correct: "c",
  },
  {
    question: "Quelle est la vitesse maximale que peut atteindre un requin mako?",
    a: "30 km/h",
    b: "50 km/h",
    c: "80 km/h",
    d: "100 km/h",
    correct: "c",
  },
  {
    question: "De quoi se nourrit principalement le requin mako?",
    a: "Plantes marines",
    b: "Poissons, calmars et céphalopodes",
    c: "Algues",
    d: "Tortues marines",
    correct: "b",
  },
  {
    question: "Comment se reproduisent les requins mako?",
    a: "Reproduction asexuée",
    b: "Ovoviviparité",
    c: "Ponte d'œufs dans un nid",
    d: "Reproduction par division cellulaire",
    correct: "b",
  },
  {
    question: "Quelle est la classification de conservation de l'UICN pour le requin mako?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "c",
  },
  {
    question: "Quel rôle jouent les requins mako dans les écosystèmes marins?",
    a: "Herbivores",
    b: "Pollinisateurs marins",
    c: "Prédateurs régulateurs de poissons",
    d: "Nettoyeurs des fonds marins",
    correct: "c",
  },
  {
    question: "Pourquoi la pêche sportive excessive des requins mako est-elle préoccupante?",
    a: "Elle n'est pas préoccupante, car les requins mako se reproduisent rapidement.",
    b: "Elle peut entraîner une augmentation des populations de requins mako.",
    c: "Elle peut avoir un impact négatif sur les populations de requins mako.",
    d: "Elle est sans danger pour les requins mako en raison de leur robustesse.",
    correct: "c",
  },
  {
    question: "Combien de petits requins mako une femelle peut-elle donner naissance en moyenne?",
    a: "1-2 petits",
    b: "10-15 petits",
    c: "25-30 petits",
    d: "50-60 petits",
    correct: "b",
  },
  {
    question: "Quelle est la couleur de la peau du requin mako sur son ventre?",
    a: "Bleu métallique",
    b: "Blanc argenté",
    c: "Rouge vif",
    d: "Vert olive",
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

