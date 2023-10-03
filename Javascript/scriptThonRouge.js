const quizData = [
  {
    question: "Quelle est la principale caractéristique physique du thon rouge du sud?",
    a: "Peau rayée",
    b: "Corps trapu",
    c: "Nageoires courtes",
    d: "Couleur vert vif",
    correct: "a",
  },
  {
    question: "Où se trouve généralement l'habitat du thon rouge du sud?",
    a: "Eaux froides de l'Arctique",
    b: "Eaux douces des rivières",
    c: "Eaux tempérées et tropicales",
    d: "Eaux saumâtres des estuaires",
    correct: "c",
  },
  {
    question: "Quel est le régime alimentaire principal du thon rouge du sud?",
    a: "Plancton",
    b: "Petits poissons et céphalopodes",
    c: "Algues marines",
    d: "Insectes terrestres",
    correct: "b",
  },
  {
    question: "Quelle est la taille maximale atteinte par le thon rouge du sud?",
    a: "1 mètre",
    b: "2 mètres",
    c: "3 mètres",
    d: "4 mètres",
    correct: "d",
  },
  {
    question: "Comment le thon rouge du sud se déplace-t-il sur de longues distances?",
    a: "À pied",
    b: "En sautant",
    c: "En nageant",
    d: "En volant",
    correct: "c",
  },
  {
    question: "Pourquoi le thon rouge du sud est-il considéré comme une espèce en danger?",
    a: "En raison de sa grande abondance",
    b: "En raison de sa taille imposante",
    c: "En raison de la surpêche",
    d: "En raison de son habitat limité",
    correct: "c",
  },
  {
    question: "Quel est le rôle écologique important du thon rouge du sud?",
    a: "Détruire les récifs coralliens",
    b: "Réguler les populations de méduses",
    c: "Maintenir l'équilibre des écosystèmes marins",
    d: "Dépolluer les océans",
    correct: "c",
  },
  {
    question: "Quelle est la méthode de reproduction du thon rouge du sud?",
    a: "Ovoviviparité",
    b: "Ponte d'œufs dans un nid",
    c: "Reproduction asexuée",
    d: "Viviparité",
    correct: "a",
  },
  {
    question: "Quel est l'effet de la surpêche sur les populations de thon rouge du sud?",
    a: "Elle n'a aucun effet",
    b: "Elle augmente la population de thon rouge du sud",
    c: "Elle diminue les populations de thon rouge du sud",
    d: "Elle rend les thons plus gros",
    correct: "c",
  },
  {
    question: "Quelle est la couleur de la chair du thon rouge du sud, ce qui le rend précieux pour la cuisine?",
    a: "Verte",
    b: "Blanche",
    c: "Rouge",
    d: "Jaune",
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

