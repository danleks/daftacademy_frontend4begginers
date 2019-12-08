const app = {
    init: () => {
        this.body = document.querySelector('body');
        this.burgerMenu = document.querySelector('.page-hamburger');
        this.navigation = document.querySelector('.page-navigation');
        this.navigationItems = document.querySelector('.page-navigation__items');
        this.concerts = document.querySelector('.concerts');
        this.form = document.querySelector('.form');
        this.formInputs = document.querySelectorAll('.form__input');
        this.backdrop = document.querySelector('.backdrop');
        this.modal = document.querySelector('.modal');
        this.modalEmail = document.querySelector('.modal__email');
        this.modalTopic = document.querySelector('.modal__topic');
        this.modalCloseButton = document.querySelector('.modal__close');

         // Bind events
        this.burgerMenu.addEventListener('click', this.toggleNavigationHandler);
        this.navigationItems.addEventListener('click', this.closeNavigationHandler);
        this.concerts.addEventListener('click', this.hideConcersButtonHandler);
        this.modalCloseButton.addEventListener('click', this.modalCloseButtonHandler);
        this.form.addEventListener('submit', this.formObjectHandler);
        this.form.addEventListener('formdata', this.formValuesHandler);

        return this;
    },

    toggleNavigationHandler: toggleNavigationHandler = () => {
        this.navigation.classList.toggle('visible');
    },
    
    closeNavigationHandler: closeNavigationHandler = (e) => {
        let navigationLink = e.target.classList[0].includes('page-navigation__link');
        if (navigationLink) this.navigation.classList.remove('visible');
    },

    hideConcersButtonHandler: hideConcersButtonHandler = (e) => {
        let button = e.target.classList[0].includes('button');
        if (button) {
            const text = document.createElement('span');
            text.classList.add('concerts__success');
            text.innerText = 'Have fun!';
            e.target.parentNode.replaceChild(text, e.target);
        }        
    },

    modalCloseButtonHandler: modalCloseButtonHandler = () => {
        this.backdrop.classList.remove('backdrop--visible');
        this.modal.classList.remove('modal--visible');
        this.body.style.overflowY = 'auto';
    },

    modalHandler: modalHandler = (email, topic) => {
        this.backdrop.classList.add('backdrop--visible');
        this.modal.classList.add('modal--visible');

        this.modalEmail.innerText = `Email: \n ${email}`;
        this.modalTopic.innerText = `Topic: \n ${topic}`;
        this.body.style.overflowY = 'hidden';
    },

    formObjectHandler: formObjectHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(this.form);
    },

    formValuesHandler: formValuesHandler = (e) => {
        let data = e.formData;
        if (data) {
            let formObject = Object.fromEntries(data);
            console.log(formObject);
            console.log(`Email: ${formObject.email}, Topic: ${formObject.topic}`);
            const formDataArray = [];
    
            for (let key in formObject) {
                formDataArray.push(formObject[key]);
            }

            this.modalHandler(formDataArray[0], formDataArray[1]);
            this.formInputs.forEach(input => input.value = '');
        }
       
    }
}

app.init();