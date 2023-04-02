// List of quiz questions
var questions = [

        {q: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    },
        {q: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    },
        {q: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    },
        {q: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    },

        {q: '',
        a: '',
        b: '',
        c: '',
        d: '',
        ans: ''
    },
];

var button = document.querySelector(".button");
var answers = document.querySelectorAll(".answer")
var currQuest = document.querySelector(".Question");
var aAns = document.getElementById(".a_text");
var bAns = document.getElementById(".b_text")
var cAns = document.getElementById(".c_text")
var dAns = document.getElementById(".d_text")
var start = document.getElementById("start")
var qCounter = 0;
var time = 300;


// TODO: Load quiz
function loadQuestion() {
    
    clearLastQ()

    var qData = questions[qCounter]

    currQuest.innerHTML = qData.q
    aAns.innerText = qData.a
    bAns.innerText = qData.b
    cAns.innerText = qData.c
    dAns.innerText = qData.d
}

function clearLastQ() {
    answers.forEach(answers => answers.checked = false)
}

