// List of quiz questions
var questions = [

        {q: 'aa',
        options:   {a: 'bb',
            b: 'ss',
            c: 'dd',
            d: 'ff',},
        ans: 'ff'
    },
        {q: '2 check',
        options:   {a: 'in',
            b: 'in',
            c: 'corr',
            d: 'in',},
        ans: 'corr'
    },
        {q: '3 check',
        options:   {a: 'in',
            b: 'in',
            c: 'in',
            d: 'corr',},
        ans: 'corr'
    },
        {q: '4 check',
        options:   {a: 'corr',
        b: 'in',
        c: 'in',
        d: 'in',},
    ans: 'corr'
    },

        {q: '5 check',
        options:   {a: 'in',
        b: 'corr',
        c: 'in',
        d: 'in',},
    ans: 'corr'
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
var time = 300;


// Load quiz question and options, then remove question from list
function loadQuestion(index) {
    var activeQ = questions[index]
    currQuest.innerHTML = activeQ.q;
    aAns.innerHTML = activeQ.options.a;
    bAns.innerHTML = activeQ.options.b;
    cAns.innerHTML = activeQ.options.c;
    dAns.innerHTML = activeQ.options.d;
}

// Function to check if User is same as question answer
function ansCheck() {
    var curQ = questions[qCounter];
    var curQAns = curQ.ans;
    var options = document.getElementsByName('answer');
    var corrAns = null;

    options.forEach((answer) => {
        if (answer.value === curQAns) {
            corrAns = answer.labels[0].id
        } 
    })

    if (aAns.checked === false && bAns.checked === false && cAns.checked === false && dAns.checked === false) {

    }
   

    //Compairs user answer with correct answer
    options.forEach((answer) => {
        if (answer.checked === true && answer.value === curQAns) {
            //Add to numCorr if user is right
            numCorr++;

        }else if (answer.checked && answer.value !== curQAns) {
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

        if (time == 0) {
            clearInterval(timerInt);
        }
    }, 1000)
}

//Progresses through the quiz
function handleNext() {

    document.querySelector(".quizHome").style.display = 'none';
    document.querySelector(".inProgress").style.display = "flex";
    Timer();
    //Check to see if user is correct
    ansCheck();
    clearLast();
    
    if (qCounter <= questions.length) {
        loadQuestion(qCounter);
        qCounter++;
    } else if (time === 0 || qCounter === 4) {
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



var highScore = localStorage.setItem(document.getElementById('pName'), value);

