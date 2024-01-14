// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

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
            else if 
                (buttonLetter === "a") {
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

let cards = document.getElementsByClassName("box");

for (let card of cards) {
    card.addEventListener("click", function() {
        console.log ('it is a div');
    })
};

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
    if (buttonLetter === questions[questionCount].answer) {
        correctScore++ ;
        questionCount++ ;
        alert('check right answer');
        rightAnswer();       
    } else 
    if  (buttonLetter !== questions[questionCount].answer) {
        questionCount++ ;               
    }   
}

// display function () correct/wrong answer with running score - set timer - return to game or end if last question

function rightAnswer() {
    setupScoreboard();
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

function setupScoreboard() {
    // Set up relevant display board showing score
    alert('set up score board')
    $("div.question_box").toggleClass("display_none");
    $("div.flex-container").toggleClass("display_none");    
    $("div.replyAnswer").toggleClass("display_none");
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