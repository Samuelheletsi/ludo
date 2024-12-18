const button = document.querySelector("button");
const showWinner = document.querySelector("h1");
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

button.addEventListener("click", () => {
  const randomPlayer1 = Math.floor(Math.random() * 6) + 1;
  const randomPlayer2 = Math.floor(Math.random() * 6) + 1;

  const randomImage1 = `/images/dice${randomPlayer1}.png`;
  const randomImage2 = `/images/dice${randomPlayer2}.png`;

  image1.setAttribute("src", randomImage1);
  image2.setAttribute("src", randomImage2);

  if (randomPlayer1 > randomPlayer2) {
    showWinner.textContent = "🚩 Player 1 Wins!";
  } else if (randomPlayer1 === randomPlayer2) {
    showWinner.textContent = "It's a Draw!";
  } else {
    showWinner.textContent = "🚩 Player 2 Wins!";
  }
});
