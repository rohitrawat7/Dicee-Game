var randomNumber1 = Math.floor(Math.random()*6) + 1; //gives a random number between 1 and 6.

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; 

var randomDicePath1 = "./images/" + randomDiceImage1;

document.querySelector(".img1").setAttribute("src",randomDicePath1);

var randomNumber2 = Math.floor(Math.random()*6) + 1; //gives a random number between 1 and 6.

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 

var randomDicePath2 = "./images/" + randomDiceImage2;

document.querySelector(".img2").setAttribute("src",randomDicePath2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a tie";
}
