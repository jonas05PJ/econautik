const quizData =[
    {
      question: "Quelle est la principale caractéristique physique du Poisson-truite du lac Tahoe?",
      a: "Peau rugueuse et écailleuse",
      b: "Long bec pointu",
      c: "Corps allongé et fuselé",
      d: "Nageoires dorsales pointues",
      correct: "c",
    },
    {
      question: "Où se trouve principalement l'habitat du Poisson-truite du lac Tahoe?",
      a: "Océans",
      b: "Rivières et lacs de la Sierra Nevada en Californie",
      c: "Lac Tahoe en Californie et au Nevada",
      d: "Déserts",
      correct: "c",
    },
    {
      question: "Quel est le régime alimentaire principal du Poisson-truite du lac Tahoe?",
      a: "Algues marines",
      b: "Petits poissons et invertébrés aquatiques",
      c: "Insectes terrestres",
      d: "Crustacés et poissons juvéniles",
      correct: "d",
    },
    {
      question: "Quelle est la taille moyenne d'un Poisson-truite du lac Tahoe adulte?",
      a: "15 centimètres",
      b: "30 centimètres",
      c: "45 centimètres",
      d: "60 centimètres ou plus",
      correct: "d",
    },
    {
      question: "Quel est le statut de conservation du Poisson-truite du lac Tahoe selon l'UICN?",
      a: "En danger critique d'extinction",
      b: "En danger",
      c: "Vulnérable",
      d: "Préoccupation mineure",
      correct: "d",
    },
    {
      question: "Comment le Poisson-truite du lac Tahoe se nourrit-il principalement?",
      a: "En utilisant son bec pour manger des algues",
      b: "En chassant activement de petits poissons",
      c: "En filtrant des particules de nourriture de l'eau",
      d: "En creusant des terriers pour attraper des proies terrestres",
      correct: "b",
    },
    {
      question: "Quelle est la principale menace qui pèse sur les Poissons-truites du lac Tahoe?",
      a: "La destruction de leur habitat par la déforestation",
      b: "La pollution de l'eau",
      c: "La collecte illégale pour le commerce des animaux de compagnie",
      d: "Les changements climatiques",
      correct: "b",
    },
    {
      question: "Combien d'œufs une femelle Poisson-truite du lac Tahoe peut-elle pondre lors de la reproduction?",
      a: "Des centaines d'œufs",
      b: "Des milliers d'œufs",
      c: "Des dizaines de milliers d'œufs",
      d: "Des centaines de milliers d'œufs",
      correct: "c",
    },
    {
      question: "Quelle est la vitesse de nage maximale d'un Poisson-truite du lac Tahoe?",
      a: "1 km/h",
      b: "5 km/h",
      c: "10 km/h",
      d: "20 km/h",
      correct: "c",
    },
    {
      question: "Quelle est la principale utilisation des nageoires dorsales pointues du Poisson-truite du lac Tahoe?",
      a: "La navigation",
      b: "La régulation de la température corporelle",
      c: "La protection contre les prédateurs",
      d: "La propulsion dans l'eau",
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
   function fenetre()

{
  let model=document.getElementById("mv-demo");

  let grand=window.open(model,grand,width="300px")
   
}