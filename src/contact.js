export default function displayContact() {
    const content = document.getElementById('content');

    // Create page elements
    const header = document.createElement('h1');
    const brendanEating = document.createElement('img');
    const statement = document.createElement('div');

    // Add content to elements
    header.textContent = "Brendan's Bistro";
    brendanEating.setAttribute('src', '../src/brendan-eating.jpg');
    brendanEating.setAttribute('alt', 'brendan-eating');
    statement.textContent = "Hi, my name is Brendan, and I love to eat. Come on down to my bistro where you can watch me eat as well as have some food of your own if there's any left over.";

    // Add elements to page
    content.append(header, brendanEating, statement);
}