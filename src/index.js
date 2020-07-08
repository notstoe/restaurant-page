import { loadPage } from '../scripts/functionLoadPage'
import { homeContent } from '../scripts/functionHomeContent'
import { menuContent } from '../scripts/functionMenuContent'
import { contactContent } from '../scripts/functionContactContent'

loadPage()
homeContent()

const navBarTabs = document.querySelectorAll('.navBarElement');
const contentDiv = document.querySelector('#content');

navBarTabs.forEach((tab) => {tab.addEventListener('click', (e) => {

    navBarTabs.forEach((tab) => tab.classList.remove('activeTab'));
    e.target.classList.add('activeTab');

    contentDiv.removeChild(contentDiv.lastChild);

    switch (e.target.id) {
        case 'home':
            homeContent()
        break;
    
        case 'menu':
            menuContent()
        break;

        case 'contact':
            contactContent()
        break;
    }

    });
});

    // const activeNavBar = document.querySelector('#home');
    // activeNavBar.classList.add('activeTab');