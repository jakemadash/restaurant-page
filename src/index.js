'use strict';

import displayHome from './modules/home.js';
import displayMenu from './modules/menu.js';
import displayContact from './modules/contact.js';
import './modules/style.css';

displayHome();

const content = document.getElementById('content');
function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {

        clearContent();

        if (button.textContent == 'Home') {
            displayHome();
        }
        else if (button.textContent == 'Menu') {
            displayMenu();
        }
        else if (button.textContent == 'Contact') {
            displayContact();
        }
    })
})