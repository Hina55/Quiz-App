
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));


var introVideo = 'media/logo_reveal.mp4';
var rightAnswer = 'Good, right answer!';
var wrongAnswer = 'Sorry, wrong answer!';
var playNowButton = 'PLAY NOW';
var skipButtonText = 'NEXT QUESTION';
var playAgainButton = 'PLAY AGAIN';
var answerResult = 0;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'Entomology is the science that studies?',
        choice1: 'Behavior of human beings',
        choice2: 'Insects',
        choice3: 'The origin and history of technical and scientific terms',
        choice4: 'The formation of rocks',
        answer: 2,
        didYouKnow: 'The branch of zoology concerned with the study of insects.',
    },
    {
        question: "Nuclear sizes are expressed in a unit named?",
        choice1: "Fermi",
        choice2: "angstrom",
        choice3: "newton",
        choice4: "tesla",
        answer: 1,
        didYouKnow: 'Fermi - A unit of length equal to 10-15 meter, used in nuclear physics. It is similar to the diameter of a proton.',
    },
    {
        question: "Lux is the SI unit of?",
        choice1: "intensity of illumination",
        choice2: "luminous efficiency",
        choice3: "luminous flux",
        choice4: "luminous intensity",
        answer: 1,
        didYouKnow: 'The SI unit of intensity of illumination (illuminance) is the lux. An illuminance of 1.0 lux is produced by 1.0 lumen of light shining on an area of 1.0 m^2.',
    },
    {
        question: "Which of the following is not a vector quantity?",
        choice1: "Velocity",
        choice2: "Speed",
        choice3: "Displacement",
        choice4: "Torque",
        answer: 2,
        didYouKnow: 'A vector quantity is a quantity which has both magnitude and direction. Speed is a scalar quantity but not the vector quantity.',
    },
    {
        question: "It is more difficult to walk on ice than on a concrete road because?",
        choice1: "there is very little friction between the ice and feet pressing it",
        choice2: "ice is soft when compared to concrete",
        choice3: "there is more friction between the ice and feet",
        choice4: "None of these",
        answer: 1,
        didYouKnow: 'It is the friction between the feet and the ground that helps us to walk. Without this friction we would slip and fall',
    },
];





