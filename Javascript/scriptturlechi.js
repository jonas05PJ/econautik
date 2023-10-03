const quizData =[
    {
      question: "Quelle est la principale caractéristique physique de la Mauremys sinensis?",
      a: "Carapace lisse et colorée",
      b: "Tête large et aplatie",
      c: "Long cou flexible",
      d: "Nageoires pour la natation",
      correct: "a",
    },
    {
      question: "Où se trouve principalement l'habitat de la Mauremys sinensis?",
      a: "Rivières d'Amérique du Sud",
      b: "Lacs d'Amérique du Nord",
      c: "Asie de l'Est et du Sud-Est",
      d: "Déserts d'Afrique",
      correct: "c",
    },
    {
      question: "Quel est le régime alimentaire principal de la Mauremys sinensis?",
      a: "Algues marines",
      b: "Poissons de grande taille",
      c: "Insectes et petits animaux aquatiques",
      d: "Plantes terrestres",
      correct: "c",
    },
    {
      question: "Quelle est la taille moyenne d'une Mauremys sinensis adulte?",
      a: "10 centimètres",
      b: "20 centimètres",
      c: "30 centimètres",
      d: "40 centimètres",
      correct: "b",
    },
    {
      question: "Quel est le statut de conservation de la Mauremys sinensis selon l'UICN?",
      a: "En danger critique d'extinction",
      b: "En danger",
      c: "Vulnérable",
      d: "Préoccupation mineure",
      correct: "c",
    },
    {
      question: "Comment la Mauremys sinensis chasse-t-elle ses proies?",
      a: "En utilisant son bec pour pêcher des poissons",
      b: "En creusant des terriers pour attraper des proies terrestres",
      c: "En traquant activement les insectes dans l'eau",
      d: "En utilisant des outils pour fouiller le fond de la rivière",
      correct: "a",
    },
    {
      question: "Quelle est la principale menace qui pèse sur la Mauremys sinensis?",
      a: "La destruction de son habitat par la déforestation",
      b: "La pollution de l'eau",
      c: "La chasse pour le commerce des animaux de compagnie",
      d: "Les maladies infectieuses",
      correct: "c",
    },
    {
      question: "Combien de petits une femelle Mauremys sinensis donne-t-elle généralement naissance?",
      a: "1 petit",
      b: "2 petits",
      c: "3 petits",
      d: "4 petits",
      correct: "b",
    },
    {
      question: "Quelle est la vitesse de nage maximale d'une Mauremys sinensis?",
      a: "5 km/h",
      b: "10 km/h",
      c: "20 km/h",
      d: "30 km/h",
      correct: "a",
    },
    {
      question: "Quelle est la principale utilisation de la carapace de la Mauremys sinensis?",
      a: "La régulation de la température corporelle",
      b: "La protection contre les prédateurs",
      c: "La navigation",
      d: "La capture de proies",
      correct: "b",
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
  
  