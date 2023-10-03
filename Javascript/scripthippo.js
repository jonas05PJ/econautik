const quizData =[
  {
    question: "Quelle est la principale caractéristique physique de l'Hippopotame?",
    a: "Peau rugueuse et écailleuse",
    b: "Long cou et pattes fines",
    c: "Bouche large avec de grandes canines",
    d: "Queue longue et touffue",
    correct: "c",
  },
  {
    question: "Où se trouve principalement l'habitat de l'Hippopotame?",
    a: "Forêts d'Amérique du Sud",
    b: "Déserts d'Afrique",
    c: "Rivières et lacs d'Afrique",
    d: "Montagnes d'Asie",
    correct: "c",
  },
  {
    question: "Quel est le régime alimentaire principal de l'Hippopotame?",
    a: "Herbes et végétaux aquatiques",
    b: "Poissons de grande taille",
    c: "Petits mammifères terrestres",
    d: "Fruits tropicaux",
    correct: "a",
  },
  {
    question: "Quelle est la taille moyenne d'un Hippopotame adulte?",
    a: "1,5 mètres",
    b: "3 mètres",
    c: "5 mètres",
    d: "7 mètres",
    correct: "b",
  },
  {
    question: "Quel est le statut de conservation de l'Hippopotame selon l'UICN?",
    a: "En danger critique d'extinction",
    b: "En danger",
    c: "Vulnérable",
    d: "Préoccupation mineure",
    correct: "d",
  },
  {
    question: "Comment l'Hippopotame se nourrit-il?",
    a: "En utilisant ses grandes canines pour chasser des proies",
    b: "En pêchant activement des poissons",
    c: "En broutant des herbes aquatiques et terrestres",
    d: "En chassant des oiseaux aquatiques",
    correct: "c",
  },
  {
    question: "Quelle est la principale menace qui pèse sur les Hippopotames?",
    a: "La destruction de leur habitat par la déforestation",
    b: "La chasse pour l'ivoire de leurs dents",
    c: "La compétition alimentaire avec les crocodiles",
    d: "Les maladies infectieuses",
    correct: "a",
  },
  {
    question: "Combien de petits une femelle Hippopotame donne-t-elle généralement naissance?",
    a: "1 petit",
    b: "2 petits",
    c: "3 petits",
    d: "4 petits",
    correct: "a",
  },
  {
    question: "Quelle est la vitesse de course maximale d'un Hippopotame?",
    a: "10 km/h",
    b: "20 km/h",
    c: "40 km/h",
    d: "60 km/h",
    correct: "a",
  },
  {
    question: "Quelle est la principale utilisation des grandes canines de l'Hippopotame?",
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
  
  