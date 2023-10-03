const quizData =[
    {
      question: "Quelle est la principale caractéristique physique de l'Anguille européenne?",
      a: "Peau rugueuse et écailleuse",
      b: "Long bec pointu sans mâchoires",
      c: "Nageoires dorsales pointues",
      d: "Queue en forme de croissant",
      correct: "b",
    },
    {
      question: "Où se trouve principalement l'habitat de l'Anguille européenne?",
      a: "Océans",
      b: "Rivières et lacs d'Europe",
      c: "Déserts",
      d: "Montagnes",
      correct: "b",
    },
    {
      question: "Quel est le régime alimentaire principal de l'Anguille européenne?",
      a: "Algues marines",
      b: "Petits poissons et invertébrés aquatiques",
      c: "Insectes terrestres",
      d: "Herbes aquatiques",
      correct: "b",
    },
    {
      question: "Quelle est la taille moyenne d'une Anguille européenne adulte?",
      a: "20 centimètres",
      b: "50 centimètres",
      c: "1 mètre",
      d: "1,5 mètres ou plus",
      correct: "d",
    },
    {
      question: "Quel est le statut de conservation de l'Anguille européenne selon l'UICN?",
      a: "En danger critique d'extinction",
      b: "En danger",
      c: "Vulnérable",
      d: "Préoccupation mineure",
      correct: "a",
    },
    {
      question: "Comment l'Anguille européenne se nourrit-elle?",
      a: "En utilisant son bec pour manger des algues",
      b: "En chassant activement de petits poissons",
      c: "En creusant des terriers pour attraper des proies terrestres",
      d: "En filtrant des particules de nourriture de l'eau",
      correct: "d",
    },
    {
      question: "Quelle est la principale menace qui pèse sur les Anguilles européennes?",
      a: "La destruction de leur habitat par la déforestation",
      b: "La pollution de l'eau",
      c: "La pêche excessive",
      d: "Les maladies infectieuses",
      correct: "c",
    },
    {
      question: "Combien d'œufs une femelle Anguille européenne peut-elle pondre lors de la reproduction?",
      a: "Des centaines d'œufs",
      b: "Des milliers d'œufs",
      c: "Des dizaines de milliers d'œufs",
      d: "Des centaines de milliers d'œufs",
      correct: "d",
    },
    {
      question: "Quelle est la vitesse de nage maximale d'une Anguille européenne?",
      a: "10 km/h",
      b: "20 km/h",
      c: "40 km/h",
      d: "60 km/h",
      correct: "a",
    },
    {
      question: "Quelle est la principale utilisation du bec pointu de l'Anguille européenne?",
      a: "La navigation",
      b: "La régulation de la température corporelle",
      c: "La protection contre les prédateurs",
      d: "La capture de proies",
      correct: "c",
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
  
  