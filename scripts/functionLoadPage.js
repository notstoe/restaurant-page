function loadPage(){

    const contentDiv = document.querySelector('#content');
    
    const pageTitle = document.createElement('h1');
        pageTitle.setAttribute('id','pageTitle');
        pageTitle.textContent = 'Ce Vole Er Guanciale';
        contentDiv.appendChild(pageTitle);

    const navBar = document.createElement('div');
        navBar.classList.add('containerNavBar');

        const homeElement = document.createElement('div');
            homeElement.classList.add('navBarElement', 'activeTab');
            homeElement.setAttribute('id', 'home');
            homeElement.textContent = 'Home';
        const menuElement = document.createElement('div');
            menuElement.classList.add('navBarElement');
            menuElement.setAttribute('id', 'menu');
            menuElement.textContent = 'Menu';
        const contactElement = document.createElement('div');
            contactElement.classList.add('navBarElement');
            contactElement.setAttribute('id', 'contact');
            contactElement.textContent = 'Contact';

        navBar.appendChild(homeElement);
        navBar.appendChild(menuElement);
        navBar.appendChild(contactElement);
    
        contentDiv.appendChild(navBar);    

}

export { loadPage }