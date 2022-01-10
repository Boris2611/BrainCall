const clickSound = new Audio("click.wav");
const callSound = new Audio("call.wav");

let answer = []; // User's numbers
let numbers = [];// Random numbers
let num;
let number;
let numbersString = ''; // This numbers will reveal on start

const n1 = () => {num = 1; input()};
const n2 = () => {num = 2; input()};
const n3 = () => {num = 3; input()};
const n4 = () => {num = 4; input()};
const n5 = () => {num = 5; input()};
const n6 = () => {num = 6; input()};
const n7 = () => {num = 7; input()};
const n8 = () => {num = 8; input()};
const n9 = () => {num = 9; input()};
const n0 = () => {num = 0; input()};





function start() {
    numbersString = '';
    number = '';
    answer = [];
    numbers = [];

    document.getElementById("answer").innerHTML= "";

    document.getElementById("showWin").style.visibility = "hidden";
    document.getElementById("showEnd").style.visibility = "hidden";
    document.getElementById("showStart").style.visibility = "hidden";
    for (let i = 0; i < 10; i++) {
        q = Math.floor(Math.random() * 10);
        numbers.push(q);
        q = q.toString();
        numbersString += q;
    }

    document.getElementById("numberShowStart").innerHTML = numbersString;
    document.getElementById("showNum").style.visibility = "visible";


    console.log(numbersString)
}

function hide() {
    document.getElementById("showNum").style.visibility = "hidden";
}



function input() {
    clickSound.play();
    answer.push(num);
    number = 0;
    for (var i = 0; i < answer.length; i++) {
        number += answer[i];
        number = number.toString();
        console.log(number)
        document.getElementById("answer").innerHTML = number;
    }
}


function call() {
    callSound.play()
    console.log(numbersString);

    if (number == numbersString) {
        console.log("win")
        document.getElementById("showWin").style.visibility = "visible";
    }

    else {
        console.log("lose")
        document.getElementById("numberShowIncorrect").innerHTML = "Wrong: " + number;
        document.getElementById("numberShowCorrect").innerHTML = "Correct: " + numbersString;
        document.getElementById("showEnd").style.visibility = "visible";
    }

}