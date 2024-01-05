// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// data for questions

var questions = [
    {
    question: 'Which fruit is used to make Cider?',
    options: ['Apple', 'Orange', 'Grapes', 'Kiwi'],
    answer: 'c',}, 
    {
    question: 'Which fruit is used to make Wine?',
    options: ['Banana', 'Pineapple', 'Apple', 'Grapes'],
    answer: 'd',}, 
    {
    question: 'Which fruit has a yellow skin?',
    options: ['Orange', 'Banana', 'Blueberries', 'Grapes'],
    answer: 'b'}, 
    {
    question: 'Which vegetable shares the same name of a capital city?',
    options: ['Mushroom', 'Cabbage', 'Brussel Sprout', 'Broccoli'],
    answer: 'c'}, 
    {
    question: 'Which vegetable can grow in the dark?',
    options: ['Brussel Sprout', 'Mushroom', 'Cabbage', 'Tomato'],
    answer: 'd'},
]

// declaring variables

let correctScore = 0;
let wrongScore = 0;
let questionCount = 0;
let totalQuestion = (questions.length);
let buttonLetter ;

setQuestion();

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            buttonLetter = this.getAttribute("value");
            if (buttonLetter === "a") {
                checkAnswers();
            }
            else
            if (buttonLetter === "b") {
                checkAnswers();
            }
            else
            if (buttonLetter === "c") {
                checkAnswers();
            }
            else
            if (buttonLetter === "d") {
                checkAnswers();
            }
        });            
    }
});


//startGame function() display instruction with start button - hide display for next page - set scores to zero

// setQuestion function() set questions with answer buttons

function setQuestion() {
    document.getElementById("question_card").innerText = questions[questionCount].question;
    document.getElementById("card_a").innerText = questions[questionCount].options[0];
    document.getElementById("card_b").innerText = questions[questionCount].options[1];
    document.getElementById("card_c").innerText = questions[questionCount].options[2];
    document.getElementById("card_d").innerText = questions[questionCount].options[3];
    }

// check if button = right answer add score

function checkAnswers () {
    if (buttonLetter === questions[questionCount].answer) {
        correctScore++ ;
        questionCount++ ;
        console.log(buttonLetter, correctScore, questionCount); 
        }
    else {
        console.log('wrong answer');
        questionCount++ ;          
    }

    if (totalQuestion === questionCount) {
        endofGame();        
    }
}

// display function () correct/wrong answer with running score - set timer - return to game or end if last question

// endofGame function () notifying end of game, number of questions correctly answered with button to restart quiz

function endofGame() {
    console.log('end game');
}