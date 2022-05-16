//navbar js
function toggleMenu (){
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

//scroll animation
const sr = ScrollReveal({
    origin:'top',
    distance: '85px',
    duration: 2000,
    reseat: true
})

sr.reveal ('.home-text',{})
sr.reveal ('.social',{delay:200})

sr.reveal ('.about-text',{delay:200})
sr.reveal ('.about-img',{})
sr.reveal ('.heading',{})

sr.reveal ('.skill-heading',{})
sr.reveal ('.tecnichal-skills',{delay:200})
sr.reveal ('.soft-skills',{delay:200})

sr.reveal ('.project-container',{})

sr.reveal ('.contact-text',{delay:200})
sr.reveal ('.contact-icons',{delay:300})



//Ventana Pop Up

// Seleccionamos todas las cards
const cards = document.querySelectorAll('.card')

// Añadimos un evento en cada click
cards.forEach((card) => {
    card.addEventListener('click', () => {
        if (card.classList.contains("active")) {
            card.classList.toggle("active");
        } else {
            cards.forEach((card) => card.classList.remove("active"));
            card.classList.add("active");
        }

    })
})








