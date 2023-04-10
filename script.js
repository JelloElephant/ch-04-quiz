// List of quiz questions
var questions = [

        {q: 'Which HTML element is used to put the JavaScript code?',
        options:   {a: '<script>',
            b: '<javascript>',
            c: '<js>',
            d: '<scripting>',},
        ans: '<script>'
    },
        {q: 'The "function" and " var" are known as:',
        options:   {a: 'Keywords',
            b: 'Data types',
            c: 'Declaration statements',
            d: 'Prototypes',},
        ans: 'Declaration statements'
    },
        {q: 'In the JavaScript, which one of the following is not considered as an error:',
        options:   {a: 'Syntax error',
            b: 'Missing of semicolons',
            c: 'Missing of Bracket',
            d: 'Division by zero',},
        ans: 'Division by zero'
    },
        {q: 'Suppose we have a text "human" that we want to convert into string without using the "new" operator. Which is the correct way from the following to do so:',
        options:   {a: 'Both human.toString() and String(human)',
        b: 'toString()',
        c: 'String(human)',
        d: 'String newvariable="human"',},
        ans: 'Both human.toString() and String(human)'
    },

        {q: 'What happens if the return statement has no related expression?',
        options:   {a: 'It will throw a exception',
        b: 'It will return a undefined value',
        c: 'It will return the 0 as the value',
        d: 'It will throw a error',},
        ans: 'It will return a undefined value'
    },
];


var currQuest = document.querySelector(".Question");
var aAns = document.getElementById(".a_text");
var bAns = document.getElementById(".b_text");
var cAns = document.getElementById(".c_text");
var dAns = document.getElementById(".d_text");
var next = document.getElementById("next");
var options = document.getElementsByName('answer');
var timeEl = document.querySelector(".timer");
var qCounter = 0;
var numCorr = 0;
var time = 100;


// Load quiz question and options, then remove question from list
function loadQuestion(index) {
    var activeQ = questions[index]
    currQuest.textContent = activeQ.q;
    aAns.textContent = activeQ.options.a;
    bAns.textContent = activeQ.options.b;
    cAns.textContent = activeQ.options.c;
    dAns.textContent = activeQ.options.d;
}

// Function to check if User is same as question answer
function ansCheck() {
    var curQ = questions[qCounter];
    var curQAns = curQ.ans;
    var options = document.getElementsByName('answer');

    //Compairs user answer with correct answer
    options.forEach((answer) => {
        if (answer.checked === true && answer.labels[0].textContent === curQAns) {
            //Add to numCorr if user is right
            numCorr++;

        }else if (answer.checked && answer.labels[0].textContent !== curQAns) {
            //lose time if incorrect
            time-= 15;
        }
    })
}

//Timer function
function Timer() {
    var timerInt = setInterval(function() {

        timeEl.textContent = time + " remaining";
        time--;

        if (time <= 0) {
            clearInterval(timerInt);
        }
    }, 1000)
}



// Start the Quiz
function startQuiz() {
    document.querySelector(".quizHome").style.display = 'none';
    document.querySelector(".inProgress").style.display = "flex";
    Timer();
    loadQuestion(qCounter);
}


//Progresses through the quiz
function handleNext() {
    //Check to see if user is correct
    ansCheck();
    clearLast();
    
    qCounter++;
    if (qCounter < questions.length) {
        loadQuestion(qCounter);
    } else if (qCounter === questions.length) {
        document.querySelector(".inProgress").style.display = "none";
        document.querySelector(".complete").style.display = "flex";
    }

}


//Function to clear last selection
function clearLast() {
    var options = document.getElementsByName('answer');
    for (var i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


// Function on save button to save and print player score on page
function saveScore() {
    var user = document.getElementById('pName');
    
    var playerHS = {
        "userName": user.value,
        "userScore": numCorr,
    }
    
    localStorage.setItem("HighScore", JSON.stringify(playerHS));

    printScore();

}


// Get High Score info and display on page
function printScore() {
 
    document.querySelector('.playerInfo').style.display = 'none';
    document.querySelector('.highScore').style.display = 'flex'

    var final =  JSON.parse(localStorage.getItem("HighScore"));
    
    document.querySelector('.highScore').textContent =  final.userName + " : " + final.userScore + "/" + questions.length;
}