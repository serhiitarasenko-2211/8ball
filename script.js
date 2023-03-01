const answerContainer = document.querySelector(".answer");
const start = document.querySelector(".start");
const input = document.querySelector(".question");
const eight = document.querySelector(".eight");

class Magic8Ball {
  constructor() {
    this.answers = [
      "It is certain",
      "Without a doubt",
      "You may rely on it",
      "Yes, definitely",
      "It is decidedly so",
      "As I see it, yes",
      "Most likely",
      "Yes",
      "Outlook good",
      "Signs point to yes",
      "Reply hazy, try again",
      "Better not tell you now",
      "Ask again later",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "Outlook not so good",
      "My sources say no",
      "Very doubtful",
      "My reply is no",
    ];
  }
  shake() {
    const randomIndex = Math.floor(Math.random() * this.answers.length);
    return this.answers[randomIndex];
  }
}

const magic8Ball = new Magic8Ball();

start.addEventListener("click", function () {
  if (input.value === "" || input.value.length < 2) {
    alert("Enter your question");
  } else {
    eight.style.display = "none";
    answerContainer.style.display = "block";
    answerContainer.textContent = magic8Ball.shake();
    input.value = "";
  }
});
