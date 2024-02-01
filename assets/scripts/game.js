

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
    {
    question: 'Which gold fruit is on top of St. Paul\'s Cathedral?',
    options: ['Pineapple', 'Melon', 'Grapes', 'Orange'],
    answer: 'a'},
];


// declaring variables

let correctScore = 0;
let wrongScore = 0;
let questionCount = 0;
const totalQuestion = (questions.length);
const correctedIndex = 1;
let buttonLetter = "";
let cardLetter = "";
let enableOptions = true;

setQuestion();
set_displayScoreboard();
setScoreboard(); 

// Wait for the DOM to finish loading before running the game
// Get Div elements and add event listeners to them
// Main loop for setting up questions, answer options, question feedback and replay quiz.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("feedback");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            buttonLetter = this.dataset.next;           
                if (buttonLetter === "next_question") {
                    resetFontawesome();
                    close_question_feedback_box_right();
                    close_question_feedback_box_wrong();
                    enableOptions = true;
                    
                if (questionCount < totalQuestion) {
                    setScoreboard();                        
                    setQuestion();
                    reset_answer_cards();
                } else {
                    document.getElementById("current_score").textContent = correctScore;
                    endofQuiz();
                    }
            } else if (buttonLetter === "replay_quiz") {
                  close_endofQuiz();
                  reset_answer_cards();
                 restartGame();                   
                }
        });      
    }

    let cards = document.getElementsByClassName("box");
    for (let card of cards) {
        card.addEventListener("mouseover", changecoloursCardhover);
        card.addEventListener("mouseout", revertcoloursCardhover);
        card.addEventListener("click", function() {
            if (enableOptions) {
                cardLetter = this.dataset.id;       
                this.style.borderLeft  = "16px solid blue";    
                if  (cardLetter === "a") {
                    checkAnswers();
                } else if (cardLetter === "b") {
                    checkAnswers();
                } else if (cardLetter === "c") {
                    checkAnswers();
                } else if (cardLetter === "d") {
                    checkAnswers();
                }
            }
        });
    } 

    // Set up listeners for JavaScript mouse hover 
    
    let feedbackBoxes = document.getElementsByClassName("feedback");
    for (let feedbackBox of feedbackBoxes) {
        feedbackBox.addEventListener('mouseover', changecoloursHover);
        feedbackBox.addEventListener('mouseout', revertcoloursHover);
    }
    
});    


//startGame function() display instruction with start button - hide display for next page - set scores to zero

function restartGame() {
    correctScore = 0;
    wrongScore = 0;
    questionCount = 0;
    setQuestion();
    setScoreboard();
}

// setQuestion function() set up question and answer options

function setQuestion() {
    document.getElementById("question_card").innerText = questions[questionCount].question;
    document.getElementById("card_a").innerText = questions[questionCount].options[0];
    document.getElementById("card_b").innerText = questions[questionCount].options[1];
    document.getElementById("card_c").innerText = questions[questionCount].options[2];
    document.getElementById("card_d").innerText = questions[questionCount].options[3];
    reset_answer_cards();    
}

// set Score board data

function setScoreboard() {
    document.getElementById("current_score").textContent = correctScore;
    document.getElementById("question_index").textContent = (questionCount + correctedIndex);
    document.getElementById("numberofquestions").textContent = totalQuestion;
}

// check if card has right answer add score

function checkAnswers () {
    enableOptions = false;
    setColour_card ();
    if (cardLetter === questions[questionCount].answer) {
        correctScore++;
        questionCount++;
        rightAnswer();
    } else if (cardLetter !== questions[questionCount].answer) {
        questionCount++;
        wrongScore++; 
        wrongAnswer();              
    }   
}

// turn the card with correct option to green

function setColour_card () {
    let answerLetter = "";
    answerLetter = questions[questionCount].answer;
    if (answerLetter === "a") { 
        document.getElementById("box_a").style.backgroundColor = "green";
    }
    if (answerLetter === "b") { 
        document.getElementById("box_b").style.backgroundColor = "green";
    }
    if (answerLetter === "c") { 
        document.getElementById("box_c").style.backgroundColor = "green";
    }
    if (answerLetter === "d") { 
        document.getElementById("box_d").style.backgroundColor = "green";
    }    
}

// The two functions below give feedback on answered question

function rightAnswer() {   
    setup_question_feedback_box_right();     
}

function wrongAnswer() {
    setup_question_feedback_box_wrong();}

// Show header score board

function set_displayScoreboard() {       
    $(document).ready(function(){
        $(".question_feedback_box").addClass("display_none");        
    });
}

// Set up relevant display board showing feedback to user 

function setup_question_feedback_box_right() {       
    $(document).ready(function(){
        $(".question_feedback_box").removeClass("display_none");
        $(".tick").removeClass("display_none"); 
        $("#feedback").text("Correct");       
    });
}
    
// Set up relevant display board showing feedback to user 

function close_question_feedback_box_right() {     
    $(document).ready(function(){
        $(".question_feedback_box").addClass("display_none");
        $(".tick").addClass("display_none");        
    });
}

// Set up relevant display board showing feedback to user  

function setup_question_feedback_box_wrong() {  
    $(document).ready(function(){        
        $(".question_feedback_box").removeClass("display_none");
        $(".xmark").removeClass("display_none");
        $("#feedback").text("Wrong");        
    });
}

// lose relevant display board showing feedback to user

function close_question_feedback_box_wrong() {       
    $(document).ready(function(){
        $(".question_feedback_box").addClass("display_none");
        $(".xmark").addClass("display_none");        
    });
}

// reset Fontawesome to default value - toggleClass guidance came from jQuery documentation

function resetFontawesome() {
    $(document).ready(function(){
        $(".tick").toggleClass("display_none", true); 
        $(".xmark").toggleClass("display_none", true);        
    });
}

// reset styling for div answer cards

function reset_answer_cards() {
    document.getElementById("box_a").style.backgroundColor = "transparent";
    document.getElementById("box_b").style.backgroundColor = "transparent";
    document.getElementById("box_c").style.backgroundColor = "transparent";
    document.getElementById("box_d").style.backgroundColor = "transparent";
    $(document).ready(function(){
        $('.box').css('border-left', '2px solid purple');        
    });    
}

// open end of quiz section to see final score with option to replay quiz

function endofQuiz() {
    enableOptions = false; // disable flag for listening events to answer cards
    $(document).ready(function(){
        $(".quiz_ended").removeClass("display_none");
        $("#final_score").text(correctScore);        
    });
}

function close_endofQuiz() {
    enableOptions = true; // activate flag for listen events to answer cards
    $(document).ready(function(){
        $(".quiz_ended").addClass("display_none");            
    });
}

// Hover styling for feedback boxes

function changecoloursHover() {
    this.style.backgroundColor = "purple";
    this.style.color = "white";
}

function revertcoloursHover() {
    this.style.backgroundColor = "#ffa500";
    this.style.color = "black";
}

// Hover styling for answer boxes

function changecoloursCardhover() {
    this.style.backgroundColor = "purple";
    this.style.color = "white";
}

function revertcoloursCardhover() {
    this.style.backgroundColor = "whitesmoke";
    this.style.color = "black";
}