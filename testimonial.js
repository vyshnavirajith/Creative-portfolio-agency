

const testimonialCards = document.querySelectorAll('.card');

testimonialCards.forEach(card => {

    card.addEventListener('click', () => {

        card.style.background = "#1e293b";

    });

});

