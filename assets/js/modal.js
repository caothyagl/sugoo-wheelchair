document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".wheelchair-types__card:not(.wheelchair-types__card--last)",
  );

  const modal = document.getElementById("productModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalPrice = document.getElementById("modalPrice");
  const modalPriceMonth = document.getElementById("modalPriceMonth");
  const specList = document.getElementById("modalSpecList");

  const mainWrapper = document.querySelector(".main-slide .swiper-wrapper");
  const thumbWrapper = document.querySelector(
    ".thumbnail-slide .swiper-wrapper",
  );

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // ===== TEXT DATA =====
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;
      modalPrice.textContent = Number(card.dataset.price).toLocaleString();
      modalPriceMonth.textContent = Number(
        card.dataset.pricemonth,
      ).toLocaleString();

      // ===== IMAGE DATA =====
      const images = JSON.parse(card.dataset.image);
      const notes = JSON.parse(card.dataset.note);

      mainWrapper.innerHTML = "";
      thumbWrapper.innerHTML = "";
      specList.innerHTML = "";

      images.forEach((src) => {
        mainWrapper.innerHTML += `
          <div class="swiper-slide">
            <img src="${src}" />
          </div>
        `;

        thumbWrapper.innerHTML += `
          <div class="swiper-slide">
            <img src="${src}" />
          </div>
        `;
      });

      notes.forEach((item) => {
        specList.innerHTML += `
          <div class="product-modal__spec-row">
            <dt class="product-modal__spec-term">${item.term}</dt>
            <dd class="product-modal__spec-desc">${item.desc}</dd>
          </div>
        `;
      });

      // ===== INIT SWIPER =====
      initSwiper();

      // ===== OPEN MODAL =====
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  });

  // CLOSE
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

  function initSwiper() {
    if (window.mainSwiper) {
      window.mainSwiper.destroy(true, true);
      window.thumbSwiper.destroy(true, true);
    }

    window.thumbSwiper = new Swiper(".thumbnail-slide", {
      spaceBetween: 10,
      slidesPerView: 4,
      watchSlidesProgress: true,
    });

    window.mainSwiper = new Swiper(".main-slide", {
      spaceBetween: 10,
      thumbs: {
        swiper: window.thumbSwiper,
      },
    });
  }
});
