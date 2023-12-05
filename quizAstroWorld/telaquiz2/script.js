let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
    {
        question: "O que a inércia representa na primeira lei de Newton?",
        options: ["Resistência de um corpo à alteração de seu estado de repouso ou movimento", "Força resultante sobre um corpo em movimento", "Capacidade de um objeto de permanecer em movimento indefinidamente", "Atração entre corpos massivos"],
        correct: "Resistência de um corpo à alteração de seu estado de repouso ou movimento"
    },
    {
        question: "Qual fenômeno é explicado pela terceira lei de Newton?",
        options: ["Força de atrito estático", "Deslocamento de objetos em órbita", "Movimento de projéteis", "Movimento de um barco ao remar para trás na água"],
        correct: "Movimento de um barco ao remar para trás na água"
    },
    {
        question: "O que a Teoria da Relatividade de Einstein abordou em relação à gravidade?",
        options: ["Origem da gravidade", "Influência da gravidade na curvatura do espaço-tempo", "Descoberta de novas leis gravitacionais", "Incompatibilidade entre gravidade e outras forças fundamentais"],
        correct: "Influência da gravidade na curvatura do espaço-tempo"
    },
    {
        question: "Como as Leis de Newton proporcionam uma base sólida para entender o movimento e as interações entre corpos?",
        options: ["Descrevendo a natureza da luz", "Formalizando as relações entre massa e energia", "Quantificando as propriedades magnéticas dos corpos", "Abordando o comportamento de partículas subatômicas"],
        correct: "Quantificando as propriedades magnéticas dos corpos"
    },
    {
        question: "O que é a inércia?",
        options: ["Capacidade de um objeto em repouso de permanecer em repouso", "Tendência de um objeto em movimento a permanecer em movimento", "Resistência de um corpo à mudança em seu estado de repouso ou movimento", "Força que age entre todos os objetos com massa"],
        correct: "Resistência de um corpo à mudança em seu estado de repouso ou movimento"
    },
    {
        question: "Como a força gravitacional entre dois corpos é afetada se a distância entre eles for dobrada?",
        options: ["Aumenta quatro vezes", "Diminui para um quarto", "Permanece a mesma", "Aumenta pela metade"],
        correct: "Diminui para um quarto"
    },

    {
        question: "O que é fundamental para a interpretação da dinâmica do movimento e das interações entre corpos no universo?",
        options: ["Leis da Termodinâmica", "Leis de Kepler", "Leis de Newton", "Leis da Gravidade"],
        correct: "Leis de Newton"
    },
    {
        question: "Qual filósofo e cientista formalizou e quantificou o conceito de gravidade no século XVII?",
        options: ["Aristóteles", "Galileu Galilei", "Isaac Newton", "Albert Einstein"],
        correct: "Isaac Newton"
    },
    {
        question: "Qual a primeira lei de Newton, também conhecida como Lei da Inércia, aborda?",
        options: ["Força Magnética", "Força Gravitacional", "Inércia e Mudança de Estado", "Aceleração Centrípeta"],
        correct: "Inércia e Mudança de Estado"
    },
    {
        question: "Como a Teoria da Relatividade de Albert Einstein expandiu nossa compreensão das leis físicas?",
        options: ["Introduziu novas leis gravitacionais", "Unificou a teoria eletromagnética", "Descreveu o comportamento de partículas subatômicas", "Incorporou a gravidade à geometria do espaço-tempo"],
        correct: "Incorporou a gravidade à geometria do espaço-tempo"
    },
    {
        question: "O que a segunda lei de Newton relaciona?",
        options: ["Força e Aceleração", "Massa e Gravidade", "Ação e Reação", "Carga Elétrica e Magnetismo"],
        correct: "Força e Aceleração"
    },
    {
        question: "Qual conceito é essencial para decifrar os mistérios do universo, desde a mecânica terrestre até os fenômenos astrofísicos?",
        options: ["Eletrostática", "Gravidade Quântica", "Relatividade Geral", "Energia Nuclear"],
        correct: "Relatividade Geral"
    }

    
        
    
   
];

    

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", () => {
    questionCount += 1;

    if (questionCount === quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Você acertou " + scoreCount + " de " + quizArray.length + " questões";
    } else {
        countOfQuestion.innerHTML = questionCount + 1 + " de " + quizArray.length + " Questões";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
});

const timerDisplay = () => {
    count = 21; 
    timeLeft.innerHTML = `${count - 1}s`;

    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count - 1}s`; 

        if (count === 1) { 
            clearInterval(countdown);
       
            questionCount += 1;

            if (questionCount === quizArray.length) {
                displayContainer.classList.add("hide");
                scoreContainer.classList.remove("hide");
                userScore.innerHTML = "Você acertou " + scoreCount + " de " + quizArray.length + " questões";
            } else {
                countOfQuestion.innerHTML = questionCount + 1 + " de " + quizArray.length + " Questões";

                quizDisplay(questionCount);
                count = 21; 
                clearInterval(countdown);
                timerDisplay();
            }
        }
    }, 1000);
};



const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater() {
    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)"> ${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)"> ${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)"> ${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)"> ${i.options[3]}</button>  
        `;

        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        options.forEach((element) => {
            if (element.innerText === quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;    
    });
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
