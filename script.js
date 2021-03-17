var questions = [
    {
        question: "Who created JavaScript?",
        choices: ["Brendan Eich", "Bill Gates", "Dave Shea", "John Resig"],
        answer: "Brendan Eich",
        userAnswer: "",
        outcome: false,
        time: 0
    },
    {
        question: "Which company developed JavaScript?",
        choices: ["Red Hat", "Blizzard", "Netscape", "HP"],
        answer: "Netscape",
        userAnswer: "",
        outcome: false,
        time: 0
    },

];

function startBtn() {
var myVar = setInterval(myTimer, 1000);
    

};
var x = 60;

function myTimer() {

document.getElementById("timer").innerHTML = x;

if(x == 0) {

clearInterval(myVar);

} else if (x > 0) {

x--

}};

//try to get my timer to work whenever user clicks on start button.
    //make a variable for the timer so it counts down to zero.
        //look into the set interval method.
        //everytime a wrong answer is selected the timer loses 10 seconds.





//put in the choices into each selector button
//make the scoreboard button work and lets you see your score kept by it.
//
