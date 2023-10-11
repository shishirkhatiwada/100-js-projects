let computerGuess;
let maxGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("Output");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio('./music/newOne.mp3');

const init = ()=>{
    computerGuess = Math.floor(Math.random() * 100);
    console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};

const startGame = ()=>{
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

//start new game Button
const startNewGame = ()=>{
    document.getElementById("newGameButton").style.display = "inline";
    // document.getElementById("inputBox").style.display="none";
    userNumberUpdate.setAttribute('disabled', true);
}

const newGameBegin = ()=>{
    window.location.reload();
}

//main logic of our App
const compareGuess = ()=>{
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    //check the value low or high
    if(userGuess.length < maxGuess){
        if(userNumber > computerGuess){
        userGuessUpdate.innerHTML = "Your Guess Is High 😲"
        userNumberUpdate.value = "";
    }
    else if(userNumber < computerGuess){
        userGuessUpdate.innerHTML = "Your Guess Is Low 😧"
        userNumberUpdate.value = "";
    }
    else{
        userGuessUpdate.innerHTML = "Its Correct 😄"
        userNumberUpdate.value = "";
        audio.play();
        startNewGame();
    }
}
else{
    if(userNumber > computerGuess){
        userGuessUpdate.innerHTML = `You Losses & Correct Number is ${computerGuess}`
        userNumberUpdate.value = "";
        startNewGame();
    }
    else if(userNumber < computerGuess){
        userGuessUpdate.innerHTML = `You Losses & Correct Number is ${computerGuess}`
        userNumberUpdate.value = "";
        startNewGame();
    }
    else{
        userGuessUpdate.innerHTML = "Its Correct 😄"
        userNumberUpdate.value = "";
        audio.play();
        startNewGame();
    }
}

    document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = ()=>{
    maxGuess = 10;
    startGame();
}
const hardMode = ()=>{
    maxGuess = 5;
    startGame();
}