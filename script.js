const app = {
    init: () => {
        this.burgerMenu = document.querySelector('.page-hamburger');
        this.navigation = document.querySelector('.page-navigation');
        this.navigationLinks = document.querySelectorAll('.page-navigation__link');

         // Bind events
        this.burgerMenu.addEventListener('click', this.toggleNavigation);
        this.navigationLinks.forEach(link => link.addEventListener('click', this.closeNavigation));

        return this;
    },

    toggleNavigation: toggleNavigation = () => {
        this.navigation.classList.toggle('visible');
    },
    
    closeNavigation: closeNavigation = () => {
        this.navigation.classList.remove('visible');
    }
}

app.init();