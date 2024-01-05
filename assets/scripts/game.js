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
}

// addScores function()

// display function () correct/wrong answer with running score - set timer - return to game or end if last question

// endofGame function () notifying end of game, number of questions correctly answered with button to restart quiz