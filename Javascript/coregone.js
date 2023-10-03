const quizData =[
    {
      question: "Quelle est la principale caractéristique physique du Corégone blanc du lac Baïkal?",
      a: "Peau rugueuse et écailleuse",
      b: "Long bec pointu",
      c: "Corps allongé et fuselé",
      d: "Nageoires dorsales pointues",
      correct: "c",
    },
    {
      question: "Où se trouve principalement l'habitat du Corégone blanc du lac Baïkal?",
      a: "Océans",
      b: "Rivières et lacs d'Amérique du Nord",
      c: "Lac Baïkal en Sibérie",
      d: "Déserts",
      correct: "c",
    },
    {
      question: "Quel est le régime alimentaire principal du Corégone blanc du lac Baïkal?",
      a: "Algues marines",
      b: "Petits poissons et invertébrés aquatiques",
      c: "Insectes terrestres",
      d: "Herbes aquatiques",
      correct: "b",
    },
    {
      question: "Quelle est la taille moyenne d'un Corégone blanc du lac Baïkal adulte?",
      a: "10 centimètres",
      b: "20 centimètres",
      c: "30 centimètres",
      d: "40 centimètres ou plus",
      correct: "d",
    },
    {
      question: "Quel est le statut de conservation du Corégone blanc du lac Baïkal selon l'UICN?",
      a: "En danger critique d'extinction",
      b: "En danger",
      c: "Vulnérable",
      d: "Préoccupation mineure",
      correct: "d",
    },
    {
      question: "Comment le Corégone blanc du lac Baïkal se nourrit-il?",
      a: "En utilisant son bec pour manger des algues",
      b: "En chassant activement de petits poissons",
      c: "En creusant des terriers pour attraper des proies terrestres",
      d: "En filtrant des particules de nourriture de l'eau",
      correct: "d",
    },
    {
      question: "Quelle est la principale menace qui pèse sur les Corégones blancs du lac Baïkal?",
      a: "La destruction de leur habitat par la déforestation",
      b: "La pollution de l'eau",
      c: "La collecte illégale pour le commerce des animaux de compagnie",
      d: "Les maladies infectieuses",
      correct: "b",
    },
    {
      question: "Combien d'œufs une femelle Corégone blanc du lac Baïkal peut-elle pondre lors de la reproduction?",
      a: "Des centaines d'œufs",
      b: "Des milliers d'œufs",
      c: "Des dizaines de milliers d'œufs",
      d: "Des centaines de milliers d'œufs",
      correct: "d",
    },
    {
      question: "Quelle est la vitesse de nage maximale d'un Corégone blanc du lac Baïkal?",
      a: "1 km/h",
      b: "5 km/h",
      c: "10 km/h",
      d: "20 km/h",
      correct: "c",
    },
    {
      question: "Quelle est la principale utilisation du bec pointu du Corégone blanc du lac Baïkal?",
      a: "La navigation",
      b: "La régulation de la température corporelle",
      c: "La protection contre les prédateurs",
      d: "La capture de proies",
      correct: "d",
    }
  ]
  
  
  
;  
  
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
  
  