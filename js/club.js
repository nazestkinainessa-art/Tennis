// О клубе (блок с фото кортами)
const courtsSection = document.querySelector('.courts');
const courtsSlider = courtsSection.querySelector('.courts-slider');
const courtsNext = courtsSection.querySelector('.arrow-next');
const courtsPrev = courtsSection.querySelector('.arrow-prev');

courtsNext.addEventListener('click', function () {
    const currentCard = courtsSlider.firstElementChild;
    courtsSlider.appendChild(currentCard);
});

courtsPrev.addEventListener('click', function () {
    const currentCard = courtsSlider.lastElementChild;
    courtsSlider.prepend(currentCard);
});

//О клубе (блок правила)

const rulesMenu = document.querySelectorAll('.rules-menu li');
const rulesText = document.querySelectorAll('.rule-text');

rulesMenu.forEach(function(item) {
    item.addEventListener('click', function() {
        rulesMenu.forEach(function(btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        const tabNumber = this.getAttribute('data-tab');
        rulesText.forEach(function(text) {
            text.classList.remove('active');
        });
        const activeText = document.querySelector(`.rule-text[data-rule="${tabNumber}"]`);
        activeText.classList.add('active');
    });
});