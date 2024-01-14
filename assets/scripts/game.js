

// data for questions

const questions = [
    {
    question: 'Which fruit is used to make Cider?',
    options: ['Apple', 'Orange', 'Grapes', 'Kiwi'],
    answer: 'a',}, 
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
    answer: 'b'},
]

// declaring variables

let correctScore = 0;
let wrongScore = 0;
let questionCount = 0;
let totalQuestion = (questions.length);
let buttonLetter = "";
let cardLetter = "";

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
  
    for (let button of buttons) {
        button.addEventListener("click", function() {
            buttonLetter = this.getAttribute("value");
            if (buttonLetter === "start") {
                $("div .welcome").addClass("display_none");
                $("div .question_box").removeClass("display_none"); 
                $("div .flex-container").removeClass("display_none"); 
                $("div.score_board").toggleClass("display_none");                
                setQuestion();
            }
        });            
    }
});

document.addEventListener("DOMContentLoaded", function() {

    let cards = document.getElementsByClassName("box");

    for (let card of cards) {
        card.addEventListener("click", function() {
            cardLetter = this.dataset.id;       
            if  (cardLetter === "a") {
                console.log(cardLetter);
                checkAnswers();
            } else if (cardLetter === "b") {
                checkAnswers();
            } else if (cardLetter === "c") {
                checkAnswers();
            } else if (cardLetter === "d") {
                checkAnswers();
            }
        });
    }   
});

//startGame function() display instruction with start button - hide display for next page - set scores to zero

function startGame() {
    correctScore = 0;
    wrongScore = 0;
    questionCount = 0;
    //$("div .welcome").addClass("display_none");
}

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
    if (cardLetter === questions[questionCount].answer) {
        correctScore++ ;
        questionCount++ ;
        alert('check right answer');
        rightAnswer();       
    } else 
    if  (cardLetter !== questions[questionCount].answer) {
        questionCount++ ;               
    }   
}

// display function () correct/wrong answer with running score - set timer - return to game or end if last question

function rightAnswer() {
    setup_question_feedback_box_right();
    let messageScore = `<h2> Correct <br><br> Answer is ${buttonLetter} <br><br>   
    Your score is ${correctScore} out of ${questionCount} </h2>`;    
    document.getElementById("scoreResult").innerHTML = messageScore;    
    if (questionCount > totalQuestion) {
        alert('end of game');
        }    
    //closeScoreboard();
    alert('should return from closeScoreboard fn');
    //setQuestion();
    }

function wrongAnswer() {
    setupScoreboard();
    let messageScore = `  
    <h2>Wrong</h2>
    <h2>Answer is ${buttonLetter}</h2>  
    <h2>Your score is ${correctScore} out of ${questionCount}</h2>
    `;
    document.getElementById("scoreResult").innerText = messageScore;
    alert('wrong  answer');
    if (questionCount === totalQuestion){
        endofGame();
    }
}

function setup_question_feedback_box_right() {
    // Set up relevant display board showing feedback to user    
    $(document).ready(function(){
        $(".question_feedback_box").removeClass("display_none");
        $(".tick").removeClass("display_none");        
      });
}

function closeScoreboard() {
    // Set up relevant display board showing score
    $(".question_box").toggleClass("display_none");
    $(".flex-container").toggleClass("display_none");    
    $("div.replyAnswer").toggleClass("display_none");         
}

function delayTime() {
    console.log('pause')
}

// endofGame function () notifying end of game, number of questions correctly answered with button to restart quiz

function endofGame() {
    alert('end of game')
}