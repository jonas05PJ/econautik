const quizData =[
    {
      question: "Quelle est la principale caractéristique physique de la Tortue peinte d'Australie?",
      a: "Carapace lisse et brillante",
      b: "Peau recouverte d'écailles colorées",
      c: "Bec long et pointu",
      d: "Queue touffue",
      correct: "b",
    },
    {
      question: "Où se trouve principalement l'habitat de la Tortue peinte d'Australie?",
      a: "Forêts d'Amérique du Sud",
      b: "Déserts d'Afrique",
      c: "Rivières et lacs d'Australie",
      d: "Montagnes d'Asie",
      correct: "c",
    },
    {
      question: "Quel est le régime alimentaire principal de la Tortue peinte d'Australie?",
      a: "Algues marines",
      b: "Insectes terrestres",
      c: "Petits poissons et crustacés",
      d: "Herbes aquatiques",
      correct: "c",
    },
    {
      question: "Quelle est la taille moyenne d'une Tortue peinte d'Australie adulte?",
      a: "10 centimètres",
      b: "20 centimètres",
      c: "30 centimètres",
      d: "40 centimètres ou plus",
      correct: "d",
    },
    {
      question: "Quel est le statut de conservation de la Tortue peinte d'Australie selon l'UICN?",
      a: "En danger critique d'extinction",
      b: "En danger",
      c: "Vulnérable",
      d: "Préoccupation mineure",
      correct: "b",
    },
    {
      question: "Comment la Tortue peinte d'Australie se nourrit-elle?",
      a: "En utilisant son bec pour manger des algues",
      b: "En chassant activement de petits poissons",
      c: "En creusant des terriers pour attraper des proies terrestres",
      d: "En fouillant le fond de l'eau à la recherche de nourriture",
      correct: "d",
    },
    {
      question: "Quelle est la principale menace qui pèse sur les Tortues peintes d'Australie?",
      a: "La destruction de leur habitat par la déforestation",
      b: "La pollution de l'eau",
      c: "La collecte illégale pour le commerce des animaux de compagnie",
      d: "Les maladies infectieuses",
      correct: "c",
    },
    {
      question: "Combien d'œufs une femelle Tortue peinte d'Australie peut-elle pondre lors de la reproduction?",
      a: "1 à 5 œufs",
      b: "10 à 20 œufs",
      c: "30 à 50 œufs",
      d: "Plus de 100 œufs",
      correct: "c",
    },
    {
      question: "Quelle est la vitesse de nage maximale d'une Tortue peinte d'Australie?",
      a: "1 km/h",
      b: "5 km/h",
      c: "10 km/h",
      d: "20 km/h",
      correct: "b",
    },
    {
      question: "Quelle est la principale utilisation du bec pointu de la Tortue peinte d'Australie?",
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
  
  