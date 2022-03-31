var wins = 0
var losses = 0
var retry = "y"

function askName() {
    var name = prompt("What is your name?");
    return name;
}
function randomNum() {
    var rand = Math.floor(Math.random() * 10) + 1;
    return rand;
}
function userFun() {
var userTotal = 0;
var stand = "y";
    do {
userTotal = userTotal + randomNum();
stand = prompt(`You currently have ${userTotal}. Would you like another card? Type "y" to draw another card or "n" to stand.`);

} while ((stand == "y") && (stand != "n"));
return userTotal;
}
function comuterFun() {
var computerTotal = 0;
    do {
computerTotal = computerTotal + randomNum();
alert(`The computer has ${computerTotal}`)
} while ( computerTotal <= 15);
return computerTotal;
}
function computerNum(computer, user) {
    if (user == computer){
alert(`You have ${user} and the computer has ${computer}. You tied.`);

}
if (user > 20){
alert(`You went over with ${user}`);
compwin = "y"
userwin = "n"
}
if (computer > 20){
alert(`The computer went over with ${computer}`);
userwin = "y"
compwin = "n"
}
if ((user > computer) && (user <= 20)){
alert(`You win! You had ${user} and the computer had ${computer}`)
userwin = "y"
compwin = "n"
}
if ((computer > user) && (computer <= 20)){
alert(`Sorry the computer won with ${computer}, and you lost with ${user}`)
compwin = "y"
userwin = "n"
}
if (userwin == "y") {
wins = wins + 1
}
if (compwin == "y"){
losses = losses + 1
}
}
function game(name) {
do{
retry = "n";
computerNum( comuterFun(), userFun() );
alert(`${name} currently has won ${wins} times and the computer has won ${losses} times`)
retry = prompt(`Do you want to play again? Type "y" to go again or "n" to stop`)
}while(retry == "y")
}
game(askName());