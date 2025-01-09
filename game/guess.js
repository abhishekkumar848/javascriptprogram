let max = prompt("Guess the max number : ");
let target = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the number : ");
while (true) {
    if (guess== "exit") {
        console.log("You quit the game");
        break;
        
    } 
    if (guess== target){
        console.log("You are right",target);
        break;
        
    }
    else if (guess> target){
        guess = prompt("Too high, guess again : ");
        
    }
    else {
        guess = prompt("Too low, guess again : ");
        
    }

}