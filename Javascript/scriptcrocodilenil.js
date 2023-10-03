const quizData =[
    {
      question: "Quelle est la principale caractéristique physique du Crocodile du Nil?",
      a: "Peau douce et écailles colorées",
      b: "Museau court et large",
      c: "Nageoires dorsales pointues",
      d: "Long cou flexible",
      correct: "b",
    },
    {
      question: "Où se trouve principalement l'habitat du Crocodile du Nil?",
      a: "Rivières d'Amérique du Sud",
      b: "Lacs d'Amérique du Nord",
      c: "Cours d'eau en Afrique",
      d: "Océans du Pacifique",
      correct: "c",
    },
    {
      question: "Quel est le régime alimentaire principal du Crocodile du Nil?",
      a: "Algues marines",
      b: "Poissons de grande taille",
      c: "Calmars",
      d: "Animaux terrestres et aquatiques",
      correct: "d",
    },
    {
      question: "Quelle est la taille moyenne d'un Crocodile du Nil adulte?",
      a: "1 mètre",
      b: "2 mètres",
      c: "3 mètres",
      d: "4 mètres",
      correct: "c",
    },
    {
      question: "Quel est le statut de conservation du Crocodile du Nil selon l'UICN?",
      a: "En danger critique d'extinction",
      b: "En danger",
      c: "Vulnérable",
      d: "Préoccupation mineure",
      correct: "d",
    },
    {
      question: "Comment le Crocodile du Nil chasse-t-il ses proies?",
      a: "En utilisant son bec pour pêcher des poissons",
      b: "En grimpant aux arbres pour attraper des oiseaux",
      c: "En utilisant la technique de l'embuscade dans l'eau",
      d: "En creusant des terriers pour piéger les proies terrestres",
      correct: "c",
    },
    {
      question: "Quelle est la principale menace qui pèse sur les Crocodiles du Nil?",
      a: "La destruction de leur habitat par la déforestation",
      b: "La concurrence alimentaire avec les hippopotames",
      c: "La chasse pour leur peau et leurs organes",
      d: "Les maladies infectieuses",
      correct: "c",
    },
    {
      question: "Combien de petits une femelle Crocodile du Nil donne-t-elle généralement naissance?",
      a: "1 petit",
      b: "2 petits",
      c: "3 petits",
      d: "4 petits",
      correct: "b",
    },
    {
      question: "Quelle est la vitesse de nage maximale d'un Crocodile du Nil?",
      a: "5 km/h",
      b: "10 km/h",
      c: "20 km/h",
      d: "30 km/h",
      correct: "a",
    },
    {
      question: "Quelle est la principale utilisation des nageoires du Crocodile du Nil?",
      a: "La navigation",
      b: "La régulation de la température corporelle",
      c: "La propulsion lors de la nage",
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
  
  