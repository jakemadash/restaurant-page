'use strict';

import displayHome from './modules/home.js';
import displayMenu from './modules/menu.js';
import displayContact from './modules/contact.js';

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
        if (button.textContent == 'Home') {
            clearContent();
            displayHome();
        }
        else if (button.textContent == 'Menu') {
            clearContent();
            displayMenu();
        }
        else if (button.textContent == 'Contact') {
            clearContent();
            displayContact();
        }
    })
})