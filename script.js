const app = {
    init: () => {
        this.burgerMenu = document.querySelector('.page-hamburger');
        this.navigation = document.querySelector('.page-navigation');
        this.navigationItems = document.querySelector('.page-navigation__items');

         // Bind events
        this.burgerMenu.addEventListener('click', this.toggleNavigation);
        this.navigationItems.addEventListener('click', this.closeNavigation);

        return this;
    },

    toggleNavigation: toggleNavigation = () => {
        this.navigation.classList.toggle('visible');
    },
    
    closeNavigation: closeNavigation = (e) => {
        let navigationLink = e.target.classList[0].includes('page-navigation__link');
        if (navigationLink) this.navigation.classList.remove('visible');
    }
}

app.init();