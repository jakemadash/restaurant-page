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

    const famousChili = new Dish('Famous Chili', '$100');
    famousChili.ingredients = 'baked beans, chicken broth, dissolved Kraft singles, choice of meat, *';

    const brendanBuffet = new Dish("Brendan's Buffet", '$500');
    brendanBuffet.ingredients = 'Watch George of the Jungle himself eat his choice of bistro dishes, all Brendan can eat, leftovers up for grabs';

    const disclaimer = '* = For Bren Dog only. Please note customers are still responsible for the dish price.'

    const dishes = [bolognaSandwich, cornDawgs, famousChili, brendanBuffet];

    for (const dish of dishes) {
        // Create page elements
        const container = document.createElement('div');
        const name = document.createElement('h3');
        const price = document.createElement('p');
        const ingredients = document.createElement('div');

        // Add content to elements
        name.textContent = dish.name;
        price.textContent = dish.price;
        ingredients.textContent = dish.ingredients;

        // Add elements to page
        content.append(container, ingredients);
        container.append(name, price);
    }

    content.append(disclaimer);
}