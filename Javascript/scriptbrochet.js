const quizData =[
    {
      question: "Quelle est la principale caractéristique physique du Brochet?",
      a: "Corps fin et allongé",
      b: "Nageoires dorsales pointues",
      c: "Peau couverte d'écailles colorées",
      d: "Bec long et pointu",
      correct: "d",
    },
    {
      question: "Où se trouve principalement l'habitat du Brochet?",
      a: "Océans",
      b: "Rivières et lacs d'Amérique du Sud",
      c: "Eaux douces en Amérique du Nord et en Europe",
      d: "Déserts",
      correct: "c",
    },
    {
      question: "Quel est le régime alimentaire principal du Brochet?",
      a: "Algues marines",
      b: "Calmars",
      c: "Poissons et autres animaux aquatiques",
      d: "Insectes terrestres",
      correct: "c",
    },
    {
      question: "Quelle est la taille moyenne d'un Brochet adulte?",
      a: "10 centimètres",
      b: "30 centimètres",
      c: "60 centimètres",
      d: "1 mètre ou plus",
      correct: "d",
    },
    {
      question: "Quel est le statut de conservation du Brochet selon l'UICN?",
      a: "En danger critique d'extinction",
      b: "En danger",
      c: "Vulnérable",
      d: "Préoccupation mineure",
      correct: "d",
    },
    {
      question: "Comment le Brochet chasse-t-il ses proies?",
      a: "En utilisant ses nageoires pour piéger les poissons",
      b: "En creusant des terriers dans le sable pour attraper des proies",
      c: "En se cachant dans les algues pour attraper des proies qui passent",
      d: "En nageant rapidement pour capturer des poissons",
      correct: "d",
    },
    {
      question: "Quelle est la principale menace qui pèse sur les Brochets?",
      a: "La destruction de leur habitat par la déforestation",
      b: "La pollution de l'eau",
      c: "La chasse pour la pêche sportive",
      d: "Les maladies infectieuses",
      correct: "b",
    },
    {
      question: "Combien d'œufs une femelle Brochet peut-elle pondre lors de la reproduction?",
      a: "10 à 20 œufs",
      b: "50 à 100 œufs",
      c: "200 à 500 œufs",
      d: "Plus de 1 000 œufs",
      correct: "d",
    },
    {
      question: "Quelle est la vitesse de nage maximale d'un Brochet?",
      a: "5 km/h",
      b: "10 km/h",
      c: "20 km/h",
      d: "30 km/h",
      correct: "c",
    },
    {
      question: "Quelle est la principale utilisation du bec pointu du Brochet?",
      a: "La régulation de la température corporelle",
      b: "La protection contre les prédateurs",
      c: "La navigation",
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
  
  