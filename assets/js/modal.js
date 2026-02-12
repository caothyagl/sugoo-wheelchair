document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".wheelchair-types__card:not(.wheelchair-types__card--last)",
  );
  const modal = document.getElementById("productModal");

  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalImage = document.getElementById("modalImage");
  const modalPrice = document.getElementById("modalPrice");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;
      modalImage.src = card.dataset.image;
      modalPrice.textContent = Number(card.dataset.price).toLocaleString();

      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  });

  // close
  document
    .querySelector(".product-modal__close")
    .addEventListener("click", closeModal);
  document
    .querySelector(".product-modal__overlay")
    .addEventListener("click", closeModal);

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
});
