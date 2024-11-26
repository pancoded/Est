const prevButton = document.querySelector('.nav-button.prev');
const nextButton = document.querySelector('.nav-button.next');
const cardsContainer = document.querySelector('.contenedor-cards');
const cards = document.querySelectorAll('.card');
const cardWidth = document.querySelector('.card').offsetWidth + 60;
const visibleCards = 3;
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > -1) {
        currentIndex--;
    } else {
        currentIndex = cards.length - visibleCards + 1;
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - visibleCards + 1) {
        currentIndex++;
    } else {
        currentIndex = -1;
    }
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * cardWidth;
    cardsContainer.style.transform = `translateX(${offset}px)`;
    updateCardStyles();
}

function updateCardStyles() {
    cards.forEach((card, index) => {
        card.classList.remove('lateral', 'central');
        if (index === currentIndex + 1) {
            card.classList.add('central');
        } else {
            card.classList.add('lateral');
        }
    });
}

updateSlider();
