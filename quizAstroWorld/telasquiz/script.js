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
        question: "Quem foi o astrônomo heliocêntrico que propôs a teoria de que a Terra gira em torno do Sol",
        options: ["Aristóteles", "Ptolomeu", "Nicolau Copérnico", "Kepler"],
        correct: "Nicolau Copérnico"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Júpiter", "Marte", "Vênus"],
        correct: "Júpiter"
    },
    {
        question: "Quem desenvolveu as leis do movimento planetário, contribuindo significativamente para a astronomia",
        options: ["Galileu Galilei", "Johannes Kepler", " Tycho Brahe", "Hipátia de Alexandria"],
        correct: "Johannes Kepler"
    },
    {
        question: "Qual teoria do sistema solar, proposta por Nicolau Copérnico, desafiou a visão geocêntrica prevalecente",
        options: ["Sistema Heliocêntrico", "Sistema Geocêntrico", "Modelo Tychoniano", "Teoria Copernicana"],
        correct: "Sistema Heliocêntrico"
    },
    {
        question: "Qual o menor planeta do Sistema Solar?",
        options: ["Mercúrio", "Terra", "Marte", "Vênus"],
        correct: "Mercúrio"
    },
    {
        question: "Qual é a principal responsabilidade de um Astrônomo Observacional",
        options: [" Projetar naves espaciais", "Desenvolver modelos matemáticos", "Observar o céu e coletar dados sobre objetos astronômicos", "Estudar as propriedades físicas dos objetos celestes"],
        correct: "Observar o céu e coletar dados sobre objetos astronômicos"
    },
    {
        question: "Qual a formação geralmente necessária para se tornar um Astronauta?",
        options: ["Graduação em engenharia aeroespacial", "Doutorado em astronomia", "Bacharelado em biologia", "Treinamento específico para astronautas"],
        correct: "Graduação em engenharia aeroespacial"
    },

    {
        question: "Qual era a ocupação principal de Hipátia de Alexandria, uma figura proeminente na história da astronomia",
        options: ["Política", "Filosofia", "Medicina", "Comércio"],
        correct: "Filosofia"
    },
        
    
   
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
