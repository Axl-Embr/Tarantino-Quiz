const quizData = [
    {
        question: 'Who doesn\'t tip?',
        a: 'Mr. Black',
        b: 'Mr. White',
        c: 'Mr. Pink',
        d: 'Mr. Blue',
        correct: 'c'
    }, {
        question: 'What was the Mia\'s superability in her show Fox Force Five?',
        a: 'Fireballs',
        b: 'Immortality',
        c: 'Deadliest Knives',
        d: 'Acrobatics',
        correct: 'c'
    }, {
        question: 'What is the correct pronunciation of Matt Damon\'s Bourne character?',
        a: 'Yeson',
        b: 'Mark',
        c: 'Stephen',
        d: 'Jason',
        correct: 'd'
    }, {
        question: 'Did Jamie Foxx like the way the boy died?',
        a: 'Yes',
        b: 'No',
        c: 'The boy lived',
        d: 'He didn\'t know',
        correct: 'a'
    }, {
        question: 'Was the rent ever given in Spider-Man?',
        a: 'Yes',
        b: 'No',
        c: 'The door was never fixed',
        d: 'More cookies were brought',
        correct: 'c'
    }
]

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
        //check to see the answer
    const answer = getSelected();

    console.log(answer);

    //check if the answer is correct
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            //results showing
            quiz.innerHTML = `<h2>You got ${score} of ${quizData.length} correct answers.</h2>
            
            <button onclick="location.reload()">Play Again</button>`;
        }
    }
});