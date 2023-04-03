// List of quiz questions
var questions = [

        {q: 'aa',
        options:   {a: 'bb',
            b: 'ss',
            c: 'dd',
            d: 'ff',},
        ans: 'ff'
    },
        {q: '',
        options:   {a: '',
            b: '',
            c: '',
            d: '',},
        ans: ''
    },
        {q: '',
        options:   {a: '',
            b: '',
            c: '',
            d: '',},
        ans: ''
    },
        {q: '',
        options:   {a: '',
            b: '',
            c: '',
            d: '',},
        ans: ''
    },

        {q: '',
         options:   {a: '',
            b: '',
            c: '',
            d: '',},
        ans: ''
    },
];

var button = document.querySelector(".button");
var answers = document.querySelectorAll(".answer")
var currQuest = document.querySelector(".Question");
var aAns = document.getElementById("a");
var bAns = document.getElementById("b");
var cAns = document.getElementById("c");
var dAns = document.getElementById("d");
var next = document.getElementById("next");
var qCounter = 0;
var time = 300;


// TODO: Load quiz
function loadQuestion() {
    var activeQ = questions[index]
    currQuest.innerHTML = activeQ.q;
    aAns.innerHTML = activeQ.options.a;
    bAns.innerHTML = activeQ.options.b;
    cAns.innerHTML = activeQ.options.c;
    dAns.innerHTML = activeQ.options.d;
    questions.pop(activeQ);
}


//TODO: Timer function


//Progresses through the quiz
loadQuestion();

