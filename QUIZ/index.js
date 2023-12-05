const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Qual é a maior lua de Júpiter?",
    answers: [
      { text: "a) Ganimedes", correct: false },
      { text: "b) Titã", correct: false },
      { text: "c) Ío", correct: false },
      { text: "d) Lua de Júpiter não possui luas.", correct: true }
    ]
  },
  {
    question: "O que é um exoplaneta?",
    answers: [
      { text: "a) Um planeta anão", correct: false },
      { text: "b) Uma lua de Plutão", correct: false },
      { text: "c) Um planeta no nosso sistema solar", correct: false },
      { text: "d) Um planeta que orbita uma estrela fora do nosso sistema solar.", correct: true }
    ]
  },
  {
    question: 'Qual é a estrela mais próxima da Terra?',
    answers: [
      { text: 'a) Polaris', correct: false },
      { text: 'b) Aldebaran', correct: false },
      { text: 'c) Antares', correct: false },
      { text: 'd) Proxima Centauri', correct: true }
    ]
  },
  {
    question: 'O que é um cometa?',
    answers: [
      { text: 'a) Uma estrela cadente', correct: false },
      { text: 'b) Um planeta pequeno', correct: false },
      { text: 'c) Um objeto composto por gelo, poeira e rocha que orbita o Sol.', correct: true },
      { text: 'd) Uma lua de Marte', correct: false }
    ]
  },
  {
    question: 'O que causa as estações do ano na Terra?',
    answers: [
      { text: 'a) A inclinação do eixo da Terra em relação ao Sol.', correct: true },
      { text: 'b) A inclinação do eixo da Terra', correct: false },
      { text: 'c) A órbita da Lua', correct: false },
      { text: 'd) A inclinação do  eixo da lua', correct: false }
    ]
  },
  {
    question: 'Qual é o maior planeta do sistema solar?',
    answers: [
      { text: 'a) Terra', correct: false },
      { text: 'b) Júpiter', correct: true },
      { text: 'c) Netuno', correct: false },
      { text: 'd) Saturno', correct: false }
    ]
  },
  {
    question: 'O que é uma galáxia espiral?',
    answers: [
      { text: 'a) Uma galáxia sem estrelas', correct: false },
      { text: 'b) Uma galáxia em forma de disco com braços espirais visíveis.', correct: true },
      { text: 'c) Uma galáxia próxima da Terra', correct: false },
      { text: 'd) Uma galáxia semelhante a um buraco negro.', correct: false },
    ]
  },
]