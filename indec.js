const correctAnswere = ["a", "a", "a", "a"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const question = document.querySelectorAll(".question");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  const userAnswere = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  userAnswere.forEach((answere, index) => {
    if (answere === correctAnswere[index]) {
      score +=1;
      question[index].classList.add("correct");
    } else {
        question[index].classList.add("wrong");
    }
  });

  scroll(0, 0);
  result.classList.remove("hide");
  result.querySelector("p").textContent = `you scored ${score}/4`;
});
