export default function displayMenu() {
    const content = document.getElementById('content');

    class Dish {
        constructor(name, price) {
            this.name = name;
            this.price = price;
            this.ingredients = '';
        }
    }

    const bolognaSandwich = new Dish('Bologna Sandwich', '$49');
    bolognaSandwich.ingredients = `Oscar Meyer bologna, miracle whip, stale wonder bread, cut in half, *`;

    const cornDawgs = new Dish('Corn Dawgs', '$40');
    cornDawgs.ingredients = 'corn, dawgs, side of bbq sauce, a bistro favorite!, *';

    const famousChili = new Dish('Famous Chili, $100');
    famousChili.ingredients = 'baked beans, chicken broth, dissolved Kraft singles, choice of meat, *';

    const brendanBuffet = new Dish("Brendan's Buffet", '$500');
    brendanBuffet.ingredients = 'Watch George of the Jungle himself eat his choice of bistro dishes, all Brendan can eat, leftovers up for grabs';

    const disclaimer = '* = For Bren Dog only. Please note customers are still responsible for the dish price.'

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