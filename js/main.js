$("#playNowButton").on("click", function() {
    $("#playNowButton").hide()
            var mydiv = $("#startquizz");
            var myvideo = $("<video id='myfileplayer' src='media/logo_reveal.mp4' width='100%' height='100%' control='0' autoplay='1'></video>");
            mydiv.append(myvideo);
                $("#myfileplayer").on("ended", function() {
                    document.getElementById("playcontain").style.display = "none";
                    
                    document.getElementById("myfileplayer").style.display = "none";
                    document.getElementById("gameContain").style.visibility = "visible";
                    });
        
    });


//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};
          
getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return      document.getElementById("gameContain").style.display = "none", 
                    document.getElementById("nextQuestbtn").style.visibility = "hidden", 
                    document.getElementById("playAgainBtnn").style.visibility = "visible",
                    document.getElementById("number").style.visibility = "hidden",
                    $('#endContain').animate({ "margin-right": 0 }, "slow");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        answerResult = currentQuestion.answer;
    });
});

startGame();

function nextQuest(){
    $('#endContain').animate({ "margin-right": -2000 }, "slow");
    getNewQuestion();
    clearTimeout(intervalID);
}

function playAgain(){
window.location.reload();
}

function ShowAnswerDiv(event,ans) {

       if (ans == answerResult) {
         event.style.backgroundColor = 'green';
        //setting the previous Btn background after 1 second

          setTimeout(function() {
          event.style.backgroundColor = '#434F65';
        }, 1000);
          document.getElementById("ansFeedback").innerText = rightAnswer;
         document.getElementById("knowText").innerText = currentQuestion.didYouKnow;
         $('#endContain').animate({ "margin-right": 0 }, "slow");
         countdown(count);

        }
        else
        {
        event.style.backgroundColor = 'red';
        //setting the previous Btn background after 1 second

        setTimeout(function() {
          event.style.backgroundColor = '#434F65';
        }, 1000);
       
        //highlighting the right answer option if user selected the wrong one
        if(answerResult == 1){
        choiceResult1.style.backgroundColor = 'green';
        setTimeout(function() {
          choiceResult1.style.backgroundColor = '#434F65';
          
        }, 1000);
      }
        if(answerResult == 2){
        choiceResult2.style.backgroundColor = 'green';
        setTimeout(function() {
          choiceResult2.style.backgroundColor = '#434F65';
          
        }, 1000);
      }

        if(answerResult == 3){
        choiceResult3.style.backgroundColor = 'green';
        setTimeout(function() {
          choiceResult3.style.backgroundColor = '#434F65';
          
        }, 1000);
      }

        if(answerResult == 4){
        choiceResult4.style.backgroundColor = 'green';
        setTimeout(function() {
          choiceResult4.style.backgroundColor = '#434F65';
         
        }, 1000);
      }
      document.getElementById("ansFeedback").innerText = wrongAnswer;
         document.getElementById("knowText").innerText = currentQuestion.didYouKnow;
         $('#endContain').animate({ "margin-right": 0 }, "slow"); 
         countdown(count);
  } 
}

//Calls countdown function
var count = 10;
var intervalID;

//counts and redirect
function countdown(timer) {
    //Keeps the interval ID for later clear
    
    intervalID = setInterval(function () {

        display(timer);
        timer = timer - 1;

        if (timer < 0) {
            //Clears the timeout 
            clearTimeout(intervalID);
            $('#endContain').animate({ "margin-right": -2000 }, "slow");
            getNewQuestion();
        }

    }, 1000);


}

//Modifies the countdown display
function display(timer) {
    document.getElementById("number").innerHTML = timer;
}




