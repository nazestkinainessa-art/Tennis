//Главная ( блок Тренеры)
const trainersList = document.querySelector(".trainers-list");
const btnNext = document.querySelector(".arrow-next");
const btnPrev = document.querySelector(".arrow-prev");

btnNext.addEventListener("click", function () {
  const firstItem = trainersList.firstElementChild;
  trainersList.appendChild(firstItem);
});

btnPrev.addEventListener("click", function () {
  const lastItem = trainersList.lastElementChild;
  trainersList.prepend(lastItem);
});

//Главная (блок с ценами и абонементами)
const modalButtons = document.querySelectorAll("[data-modal]");
const overlay = document.querySelector(".modal-overlay");
const closeButtons = document.querySelectorAll(".modal-close");

modalButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    overlay.classList.add("modal-overlay--visible");
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.classList.add("modal-window--visible");
  });
});

closeButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modal = this.closest(".modal-window");
    modal.classList.remove("modal-window--visible");
    overlay.classList.remove("modal-overlay--visible");
  });
});

//Главная ( блок с услугами )
const servicesSection = document.querySelector(".cafe-section");
const servicesSlider = servicesSection.querySelector(".services-slider");
const serviceNext = servicesSection.querySelector(".arrow-next");
const servicePrev = servicesSection.querySelector(".arrow-prev");

serviceNext.addEventListener("click", function () {
  const currentCard = servicesSlider.firstElementChild;
  servicesSlider.appendChild(currentCard);
});

servicePrev.addEventListener("click", function () {
  const currentCard = servicesSlider.lastElementChild;
  servicesSlider.prepend(currentCard);
});
