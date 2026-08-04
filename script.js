let currentQuestion = 0;
let score = 0;
let answered = false;

const questions = [
    {
        question: "HTML ka full form kya hai?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyper Tool Markup Language",
        d: "None",
        correct: "a"
    },
    {
        question: "CSS ka use kis liye hota hai?",
        a: "Database",
        b: "Design ke liye",
        c: "Server banane ke liye",
        d: "Operating System",
        correct: "b"
    }
];
let questionElement = document.querySelector("#question")
let OptionA = document.querySelector("#OptionA")
let OptionB = document.querySelector("#OptionB")
let OptionC = document.querySelector("#OptionC")
let OptionD = document.querySelector("#OptionD")
let result = document.querySelector("#result");


function showQuestion() {
    let currentQuiz = questions[currentQuestion];
    questionElement.innerHTML = currentQuiz.question;
    OptionA.innerHTML = currentQuiz.a;
    OptionB.innerHTML = currentQuiz.b;
    OptionC.innerHTML = currentQuiz.c;
    OptionD.innerHTML = currentQuiz.d;


    OptionA.classList.remove("correct", "wrong");
    OptionB.classList.remove("correct", "wrong");
    OptionC.classList.remove("correct", "wrong");
    OptionD.classList.remove("correct", "wrong");

    OptionA.classList.remove("selected");
    OptionB.classList.remove("selected");
    OptionC.classList.remove("selected");
    OptionD.classList.remove("selected");

    OptionA.disabled = false;
    OptionB.disabled = false;
    OptionC.disabled = false;
    OptionD.disabled = false;


    //

}
function showcorrectAnswer() {
    let currentQuiz = questions[currentQuestion];
    if (currentQuiz.correct === "a") {
        OptionA.classList.add("correct");
    }
    else if (currentQuiz.correct === "b") {
        OptionB.classList.add("correct");
    }
    else if (currentQuiz.correct === "c") {
        OptionC.classList.add("correct");
    }
    else if (currentQuiz.correct === "d") {
        OptionD.classList.add("correct");
    }

}
function disableOption() {
    OptionA.disabled = true;
    OptionB.disabled = true;
    OptionC.disabled = true;
    OptionD.disabled = true;
}
showQuestion();

OptionA.addEventListener("click", () => {
    let currentQuiz = questions[currentQuestion];
    OptionA.classList.remove("selected");
    answered = true;
    if (currentQuiz.correct === "a") {
        score++;
        OptionA.classList.add("correct");
        console.log("Correct Answer");
    }
    else {
        OptionA.classList.add("wrong");
        showcorrectAnswer();
        console.log("Wrong Answer");
    }
    disableOption();
})
OptionB.addEventListener("click", () => {
    let currentQuiz = questions[currentQuestion];
    OptionA.classList.remove("selected");
    answered = true;
    if (currentQuiz.correct === "b") {
        score++;
        OptionB.classList.add("correct");
        showcorrectAnswer();
        console.log("Correct Answer");
    }
    else {
        OptionB.classList.add("wrong");
        showcorrectAnswer();
        console.log("Wrong Answer");
    }
    disableOption();
})
OptionC.addEventListener("click", () => {
    let currentQuiz = questions[currentQuestion];
    OptionA.classList.remove("selected");
    answered = true;
    if (currentQuiz.correct === "c") {
        score++;
        OptionC.classList.add("correct");
        console.log("Correct Answer");
    }
    else {
        OptionC.classList.add("wrong");
        showcorrectAnswer();
        console.log("Wrong Answer");
    }
    disableOption();
})
OptionD.addEventListener("click", () => {
    let currentQuiz = questions[currentQuestion];
    OptionA.classList.remove("selected");
    answered = true;
    if (currentQuiz.correct === "d") {
        score++;
        OptionD.classList.add("correct");
        console.log("Correct Answer");
    }
    else {
        OptionD.classList.add("wrong");
        showcorrectAnswer();
        console.log("Wrong Answer");
    }
    disableOption();
})

document.querySelector("#next-btn").addEventListener("click", () => {

    if (!answered) {
        console.log("Pehle answer select karo");
    }
    else {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            answered = false;
            showQuestion();
        }
        else {
            result.innerHTML = `Your Score: ${score} / ${questions.length}`;
        }
    }

});

document.querySelector("#restart-btn").addEventListener("click", () => {
    currentQuestion = 0;
    answered = false;
    result.innerHTML = "";
    showQuestion();
    score = 0;
});


//  
let names = Object.values(questions[0])
let randomName = names[Math.floor(Math.random() * names.length)];

// console.log(randomName);
