const form = document.querySelector("#book");
const status = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.hidden = false;
});

const items = [...document.querySelectorAll(".faq-item")];

items.forEach((item) => {
  const button = item.querySelector("button");

  button.addEventListener("click", () => {
    const willOpen = button.getAttribute("aria-expanded") !== "true";

    items.forEach((other) => {
      const otherButton = other.querySelector("button");
      const open = other === item && willOpen;
      otherButton.setAttribute("aria-expanded", String(open));
      other.classList.toggle("is-open", open);
    });
  });
});

new Swiper(".quotes-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  rewind: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: ".quote-nav-prev",
    nextEl: ".quote-nav-next",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
