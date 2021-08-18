
const quizDB = [
    {
        questions: "Q1.Which one of the following given statements possibly contains the error?",
        a: "select * from emp where empid = 10003",
        b: "elect empid from emp where empid = 10006",
        c: "select empid from emp",
        d: "select empid where empid = 1009 and Lastname = 'GELLER'",
        ans: "ans4",
    },
    {
        questions: "Q2.What do you mean by one to many relationships?",
        a: "One class may have many teachers",
        b: "One teacher can have many classes",
        c: "Many classes may have many teachers",
        d: "Many teachers may have many classes",
        ans: "ans2",
    },
    {
        questions: "Q3.A Database Management System is a type of _________software.",
        a: "It is a type of system software",
        b: "It is a kind of application software",
        c: "It is a kind of general software",
        d: "Both A and C",
        ans: "ans1",
    },
    {
        questions: "Q4.If David’s age is 27 years old in 2011. What was his age in 2003?",
        a: "17 years",
        b: "37 years",
        c: "20 years",
        d: "19 years",
        ans: "ans4",
    },
    {
        questions: "Q5.How many years are there in a decade?",

        a: "5",
        b: "10",
        c: "15",
        d: "20",
        ans: "ans2",
    }

];

const submit = document.querySelector(".submit");
const question = document.getElementById("questions");
const op1 = document.getElementById('opt1');
const op2 = document.getElementById('opt2');
const op3 = document.getElementById('opt3');
const op4 = document.getElementById('opt4');
const showscore = document.getElementById('showscore');
// const score = document.getElementById('score');


const answers = document.querySelectorAll('.answer');
// this selector return array of all elements with class answer

const itr = quizDB[0];
question.textContent = itr.questions;
op1.textContent = itr.a;
op2.textContent = itr.b;
op3.textContent = itr.c;
op4.textContent = itr.d;


quesIdx = 0;
marks = 0;
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
        //checks if an radio element is active or not

    });
    return answer;

}


const loadquest = (quizDB) => {
    const itr = quizDB;
    question.textContent = itr.questions;
    op1.textContent = itr.a;
    op2.textContent = itr.b;
    op3.textContent = itr.c;
    op4.textContent = itr.d;

}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);

}

submit.addEventListener('click', () => {

    let actualAnswer = quizDB[quesIdx].ans;
    // let currAns = `ans${answer + 1}`;

    if (actualAnswer == getCheckAnswer()) {
        marks++;
    };

   
    quesIdx++;
    deselectAll();
    if (quesIdx >= quizDB.length) {

        // score.textContent = `you got ${marks}/5`;
        showscore.innerHTML = `
        <h3> You Scored ${marks}/5!!!! </h3>
        <button id="btn" onclick="location.reload()">Play Again</button>
        `;
        // location.reload() usr to reload the page
        showscore.classList.remove('scoreArea');
    }
    else loadquest(quizDB[quesIdx]);


});



// playAgain.addEventListener('click',()=>{
//     marks=0;
//     quesIdx=0;
//     loadquest(quizDB[0]);
//     showscore.classList.add('scoreArea');
// });


