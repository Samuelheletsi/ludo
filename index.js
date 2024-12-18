let randomPlayer1 = Math.floor(Math.random() * 6)+ 1;
let randomPlayer2 = Math.floor(Math.random() * 6)+ 1;

let randomImage1 = "/images/dice" + randomPlayer1 + ".png";
let randomImage2 = "/images/dice" + randomPlayer2 + ".png";

const button = document.querySelector("button");


button.addEventListener("click", ()=>{
    window.location.reload();
})

const showWinner= document.querySelector("h1");
const image1= document.querySelector(".img1");
const image2= document.querySelector(".img2");

image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);

if(randomImage1 > randomImage2){
showWinner.textContent = "🚩 Player1 Wins"
}
else if(randomImage1 == randomImage2){
    showWinner.textContent = "Draw"
}
else{
showWinner.textContent = "🚩 Player2 Wins"
}


