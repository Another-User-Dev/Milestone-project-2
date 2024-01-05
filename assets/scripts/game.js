// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let buttonLetter = this.getAttribute("value");
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
    console.log('check answer');
}

// addScores function()

// display function () correct/wrong answer with running score - set timer - return to game or end if last question

// endofGame function () notifying end of game, number of questions correctly answered with button to restart quiz

// data for questions

var questions = {
    question: 'Which fruit is used to make Cider?',
    options: [Apple, Orange, Grapes, Kiwi],
    answer: 'a',
    question: 'Which fruit is used to make Wine?',
    options: [Banana, Grapes, Apple, Grapes],
    answer: 'd',
    question: 'Which fruit is used to make Wine?',
    options: [Banana, Grapes, Apple, Grapes],
    answer: 'd',
    question: 'Which fruit is used to make Wine?',
    options: [Banana, Grapes, Apple, Grapes],
    answer: 'd',
    question: 'Which fruit is used to make Wine?',
    options: [Banana, Grapes, Apple, Grapes],
    answer: 'd'}
