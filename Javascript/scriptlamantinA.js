const quizData =[
    {
      question: "Quelle est la principale caractéristique physique des Lamantins des Antilles?",
      a: "Peau rugueuse et écailleuse",
      b: "Museau allongé avec des moustaches",
      c: "Nageoires dorsales pointues",
      d: "Longues ailes pour voler",
      correct: "b",
    },
    {
      question: "Où se trouve principalement l'habitat des Lamantins des Antilles?",
      a: "Océan Indien",
      b: "Rivières d'Amérique du Sud",
      c: "Lacs d'Amérique du Nord",
      d: "Eaux côtières des Antilles",
      correct: "d",
    },
    {
      question: "Quel est le régime alimentaire principal des Lamantins des Antilles?",
      a: "Poissons de grande taille",
      b: "Phytoplancton",
      c: "Calmars",
      d: "Plantes aquatiques",
      correct: "d",
    },
    {
      question: "Quelle est la taille moyenne d'un Lamantin des Antilles adulte?",
      a: "1 mètre",
      b: "2 mètres",
      c: "3 mètres",
      d: "4 mètres",
      correct: "c",
    },
    {
      question: "Quel est le statut de conservation des Lamantins des Antilles selon l'UICN?",
      a: "En danger critique d'extinction",
      b: "En danger",
      c: "Vulnérable",
      d: "Préoccupation mineure",
      correct: "a",
    },
    {
      question: "Comment les Lamantins des Antilles se nourrissent-ils?",
      a: "En chassant activement des proies",
      b: "En utilisant leur bec pour arracher des plantes aquatiques",
      c: "En filtrant de petits poissons",
      d: "En mordant des méduses",
      correct: "b",
    },
    {
      question: "Quelle est la principale menace qui pèse sur les Lamantins des Antilles?",
      a: "La destruction de leur habitat côtier",
      b: "La concurrence alimentaire avec les tortues marines",
      c: "La surpêche",
      d: "Les éruptions volcaniques sous-marines",
      correct: "a",
    },
    {
      question: "Combien de petits une femelle Lamantin des Antilles donne-t-elle généralement naissance?",
      a: "1 petit",
      b: "2 petits",
      c: "3 petits",
      d: "4 petits",
      correct: "a",
    },
    {
      question: "Quelle est la vitesse de nage maximale d'un Lamantin des Antilles?",
      a: "5 km/h",
      b: "10 km/h",
      c: "20 km/h",
      d: "30 km/h",
      correct: "a",
    },
    {
      question: "Quelle est la principale utilisation des nageoires des Lamantins des Antilles?",
      a: "La navigation",
      b: "La régulation de la température corporelle",
      c: "La propulsion lors de la nage",
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
  
  