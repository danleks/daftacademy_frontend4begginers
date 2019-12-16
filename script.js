// Handle hamburger menu animations
const hamburger = document.querySelector('.page-hamburger');
const hamburgerBars = document.querySelector('.page-hamburger__inner');

hamburger.addEventListener('click', (e) => {
    const navigation = document.querySelector('.page-navigation');
    const isNavLink = e.target.classList.contains('page-navigation__link');    
    
    hamburgerBars.classList.add('page-hamburger__inner--active');
    hamburgerBars.classList.toggle('page-hamburger__inner--close');
     
    navigation.classList.toggle('visible');    
    if (isNavLink) navigation.classList.remove('visible');    
});

// Hide concerts section button
const concerts = document.querySelector('.concerts');

concerts.addEventListener('click', (e) => {
    const isButton = e.target.classList.contains('button');

    if (isButton) {
        const button = e.target;
        const text = document.createElement('span');
        text.classList.add('concerts__success');
        text.innerText = 'Have fun!';
        e.target.parentNode.replaceChild(text, button);
    };
});

// Modal handler
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalEmail = document.querySelector('.modal__email');
const modalTopic = document.querySelector('.modal__topic');
const modalCloseButton = document.querySelector('.modal__close');

modalCloseButton.addEventListener('click', () => {
    backdrop.classList.remove('backdrop--visible');
    modal.classList.remove('modal--visible');
    document.body.style.overflowY = 'auto';
});

const modalHandler = (email, topic) => {
    backdrop.classList.add('backdrop--visible');
    modal.classList.add('modal--visible');
    modalEmail.innerText = `Email: \n ${email}`;
    modalTopic.innerText = `Topic: \n ${topic}`;
    document.body.style.overflowY = 'hidden';
};

// Handle form object and values
const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('.form__input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    if (formData) {
        const formObject = Object.fromEntries(formData);
        console.log(formObject);

        const formDataArray = [];
        for (let key in formObject) {
            formDataArray.push(formObject[key]);
        }

        modalHandler(formDataArray[0], formDataArray[1]);
        formInputs.forEach(input => input.value = '');
    }   
});

// Handle gallery imgs animations
const gallery = document.querySelector('.gallery');

gallery.addEventListener('mouseover', (e) => {
    const image = e.target.classList.contains('gallery__image');
    if (image) e.target.classList.add('gallery__image--filter');
});