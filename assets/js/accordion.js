document.querySelectorAll(".c-faq__question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".c-faq__item");
    const answer = item.querySelector(".c-faq__answer");

    if (item.classList.contains("is-open")) {
      answer.style.maxHeight = null;
      item.classList.remove("is-open");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      item.classList.add("is-open");
    }
  });
});
