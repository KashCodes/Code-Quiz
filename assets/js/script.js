/* GLOBAL VARIABLES */ 

// Variables to keep track of quiz state..................................................................................................................

// index's for loops
var currentQuestionIndex = 0;
var currentAnswerIndex = 0;
// var ref in the clearInterval (stop timer event)
var timer;
// var ref in timerCountdown event (start timer at 75s)
var seconds = 75;

// Variables for DOM references..........................................................................................................................

// var within the DOM selecting the id=#time
var timerCountdown = document.querySelector("#time");
// // timer starts at page load
// var timer = setInterval(countdown, 1000)
// var ref to startQuiz button
var startQuizBtn = document.querySelector('#start-quiz-btn')
var titleScreen = document.querySelector('#start-quiz')
var quizScreen = document.querySelector('.questions')
var endScreen = document.querySelector('.highscore')





/* GLOBAL FUNCTIONS */



// function pageLoad () {
//   // Hides final scoreboard
//   endScreen.style.display = "none";
//   quizScreen.style.display = "none";
//   console.log(pageLoad)
//  };




// // log start of timer
// console.log(timerCountdown);
// //Countdown Timer function
// var countdown = function() {
//   // event to start timer in string w/ 'Time:' + (var seconds)
//   //timerCountdown.textContent = "Time:" + seconds;
//   // log var seconds countdown in realtime
//   console.log("seconds");
//   // tells countdown to subtract
//   seconds--;
//   // if loop for when timer hits 0 to stop
//     if(seconds === -1){
//       // event to stop timer w/in if loop parameters (0)
//       clearInterval(timer);
//       // inform user time is up!
//       timerCountdown.textContent = "Time is up!";
//   };
// };

// // function to start the quiz 
// function startQuiz() {
//   getQuestion();
//   // timer starts at page load
//   var timer = setInterval(countdown, 1000);
//   // event to start timer in string w/ 'Time:' + (var seconds)
//   timerCountdown.textContent = "Time:" + seconds;
//   // log var seconds countdown in realtime
//   console.log("seconds");
//   // tells countdown to subtract
//   seconds--;
//   if(seconds === -1){
//     // event to stop timer w/in if loop parameters (0)
//     clearInterval(timer);
//     // inform user time is up!
//     timerCountdown.textContent = "Time is up!";
// };
// }



// function to get the question
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion)

  // update title with current questions
  var titleEl = document.getElementById("quiz-question");
  titleEl.textContent = currentQuestion.quizQuestion;

  // clear out any old question choices
  answersEl.innerHTML = "";

  // Loop over choices
  currentQuestion.answers.forEach(function(answer, i) {
    // create new button for each choice
    var answerNode = document.createElement("button");
    answerNode.setAttribute("class", "btn");
    answerNode.setAttribute("value", answer)

    answerNode.textContent = i +1 + ". " + answer;

    // attach click event listener to each answer
    answerNode.onclick = questionClick;

    // display on the page 
    answersEl.appendChild(answerNode);
  });
   
  //   // update question section with question - Grab class/element first
  //   var quizQuestionEl = document.querySelector('#quiz-question');
  //   console.log(quizQuestionEl)
  // if (currentQuestionIndex > 0) {
  //   currentQuestionIndex++; 
  //   // update text content with question
  //   quizQuestionEl.textContent = questions.quizQuestion;
  //   document.querySelector("#quiz-questions").append(questions.quizQuestion);
  //   quizQuestionEl.replace("#quiz-question", questions.quizQuestions)
  //   console.log(quizQuestion); }

};

// function getAnswer(answers) {
//   // get question answers from array
//   var answerOptions = questions[currentAnswerIndex];
//   console.log(answerOptions)
//   if(currentAnswerIndex < 0) {
//     currentAnswerIndex++; 
//       // update section with answers - grab class/element first
//       quizScreen = document.querySelector('#options');
//       // create answer buttons 
//       var answerButton = document.createElement('li, button');
//       answerButton.className=".btn"
//       // update HTML content with answers from array
//       quizScreen.textContent = answers[answerOptions]
//       console.log(quizScreen)
//       answerButton.append('li, button')
//       console.log(quizScreen)
//       console.log(answerButton)
//   }
    
//       //answerOptionsEl.innerHTML = 

//       // loop over question options
//     // currentQuestion.options.forEach(function (choice))
// }





// function to validate correct answer on click 

// end quiz function (if timer runs out, hide questions, show end screen, final score)

// save high score function

// quiz end function (restart options display high scores)


// startQuiz.addEventListener("click", startQuiz)






getQuestion();
// getAnswer();
// pageLoad();
