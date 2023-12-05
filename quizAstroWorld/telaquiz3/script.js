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
        question: "Qual é o diâmetro aproximado da Terra?",
        options: ["12.742 quilômetros", "15.000 quilômetros", "10.000 quilômetros", "14.000 quilômetros"],
        correct: "12.742 quilômetros"
    },
    {
        question: "Qual é a composição principal da atmosfera terrestre?",
        options: ["Hélio e hidrogênio", "Nitrogênio e oxigênio", "Dióxido de carbono e metano", "Árgon e criptônio"],
        correct: "Nitrogênio e oxigênio"
    },
    {
        question: "Que papel crucial a atmosfera terrestre desempenha?",
        options: ["Fornecer nutrientes para plantas", "Proteger a superfície dos raios solares nocivos", "Regular a temperatura interna da Terra", "Criar um ambiente propício para a vida marinha"],
        correct: "Proteger a superfície dos raios solares nocivos"
    },
    {
        question: "Qual é a porcentagem aproximada da superfície terrestre coberta por oceanos?",
        options: ["40%", "61%", "71%", "85%"],
        correct: "71%"
    },
    {
        question: "O que determina a ocorrência das estações do ano na Terra?",
        options: ["Inclinação do eixo da Terra", "Distância da Terra ao Sol", "Velocidade de rotação da Terra", "Composição atmosférica"],
        correct: "Inclinação do eixo da Terra"
    },

    {
       
            
                question: "Qual é a principal causa da cor avermelhada de Marte?",
                options: ["Presença de óxido de carbono", "Desertos de areia vermelha", "Presença de óxido de ferro", "Algas vermelhas na superfície"],
                correct: "Presença de óxido de ferro"
            },
            {
                question: "O que compõe principalmente a atmosfera marciana?",
                options: ["Oxigênio e nitrogênio", "Dióxido de carbono", "Metano e argônio", "Vapor d'água e nitrogênio"],
                correct: "Dióxido de carbono"
            },
            {
                question: "Qual é a principal evidência procurada pelas missões não tripuladas em Marte?",
                options: ["Geologia marciana", "Sinais de vida passada ou presente", "Composição atmosférica", "Presença de calotas polares"],
                correct: "Sinais de vida passada ou presente"
            },
        
            {
                question: "Quais são os elementos predominantes na composição do Sol?",
                options: ["Oxigênio e nitrogênio", "Hidrogênio e hélio", "Ferro e níquel", "Carbono e oxigênio"],
                correct: "Hidrogênio e hélio"
            },
            {
                question: "O que é a fotosfera do Sol?",
                options: ["Camada interna do núcleo solar", "Camada atmosférica externa", "Camada visível e emissora de luz", "Região de fusão nuclear"],
                correct: "Camada visível e emissora de luz"
            },
            {
                question: "Qual fenômeno está associado à atividade solar na fotosfera?",
                options: ["Ejeções de massa coronal", "Formação de crateras solares", "Congelamento de regiões solares", "Liberação de gases solares"],
                correct: "Ejeções de massa coronal"
            },
            {
                question: "Como o campo magnético do Sol influencia as atividades solares?",
                options: ["Induz a formação de manchas solares", "Aumenta a temperatura da coroa solar", "Previne erupções solares", "Causa eclipses solares"],
                correct: "Induz a formação de manchas solares"
            },
            {
                question: "Qual é o papel da radiação solar na sustentação da vida na Terra?",
                options: ["Aquecimento das camadas atmosféricas", "Geração de ventos solares", "Condução de ondas sonoras", "Fotossíntese e sustentação da vida"],
                correct: "Fotossíntese e sustentação da vida"
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
