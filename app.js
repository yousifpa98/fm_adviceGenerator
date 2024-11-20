const fetchQuote = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Issue fetching Advice");
      }
      return res.json();
    })
    .then((data) => {
      const adviceElement = document.getElementById("advice");
      adviceElement.innerText = `"${data.slip.advice}"`;
      const id = document.getElementById("adviceId");
      id.innerText = `#${data.slip.id}`;
    })
    .catch((err) => {
      adviceElement.innerText = "Issue thinking of Advice. Please try again.";
    });
};

fetchQuote();

const adviceBtn = document.getElementById("getAdvice");

adviceBtn.addEventListener("click", fetchQuote);
