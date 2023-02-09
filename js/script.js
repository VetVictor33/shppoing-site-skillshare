const main = document.querySelector('main');
const cards = document.querySelectorAll('.shopping-card');
const buttons = document.querySelectorAll('.info-button');
const addCartButtons = document.querySelectorAll('.add-cart-button'); //só defini a classe main-list no primeiro button, terminar a lógica quando criar a page de cart

function showSelectedCard(card, button) {
    button.addEventListener('click', (event) => {
        event.stopPropagation();

        let child = card.children;

        let imgSrc = child[0].src;
        let title = child[1].innerHTML;
        let price = child[2].innerHTML;
        let description = child[3].innerHTML;

        /* ----outra forma de fazer, porém trocando de page e usando o local storage
        localStorage.setItem('img', imgSrc);
        localStorage.setItem('title', title);
        localStorage.setItem('price', price);
        localStorage.setItem('description', description);

        console.log(i, imgSrc, title, price, description)
        window.location.href = '../pages/products-details/item-details.html'
        */

        const shoppingItens = document.querySelector('.shopping-itens');
        //shoppingItens.style.display = 'none'

        const section = document.createElement('section');
        const article = document.createElement('article');
        const img = document.createElement('img');
        const divDetails = document.createElement('div');
        const divText = document.createElement('div');
        const spanTitle = document.createElement('span');
        const spanPrice = document.createElement('span');
        const spanDescription = document.createElement('span');
        const addCartButtonDetail = document.createElement('button');
        const returnButtonDetail = document.createElement('button');
        const buttonDiv = document.createElement('div');

        img.src = imgSrc;
        spanTitle.textContent = title;
        spanPrice.textContent = price;
        spanDescription.textContent = description;
        addCartButtonDetail.textContent = 'Add to Cart';
        returnButtonDetail.textContent = 'Return to Shop';

        main.appendChild(section);
        section.appendChild(article);
        article.appendChild(img);
        article.appendChild(divDetails);
        divDetails.appendChild(divText);
        divText.appendChild(spanTitle);
        divText.appendChild(spanPrice);
        divText.appendChild(spanDescription);
        divDetails.appendChild(buttonDiv);
        buttonDiv.appendChild(addCartButtonDetail);
        buttonDiv.appendChild(returnButtonDetail);

        section.classList.add('selected-shopping-itens');
        article.classList.add('selected-shopping-card');
        divDetails.classList.add('selected-card-details');
        divText.classList.add('selected-card-text');
        spanTitle.classList.add('selected-card-title');
        spanPrice.classList.add('selected-card-price');
        spanDescription.classList.add('selected-card-description');
        buttonDiv.classList.add('buttons-div', 'selected-buttons-div');
        addCartButtonDetail.classList.add('selected-item-add-cart-button', 'add-cart-button')
        returnButtonDetail.classList.add('selected-item-return-button')

        const selectedCard = document.querySelector('.selected-shopping-itens');

        main.replaceChild(selectedCard, shoppingItens)

        document.querySelector('.selected-item-return-button').addEventListener('click', () => {
            main.replaceChild(shoppingItens, selectedCard)
        });
    })
}
function pointerCursor(element, event) {
    event.stopPropagation();
    event.preventDefault();
    element.style.cursor = 'pointer';
}
/*function showAllCards() {
    const selectedCardSection = document.querySelector('.selected-shopping-itens');
    selectedCardSection.remove
}*/

for (let i = 0; i < cards.length; i++) {
    buttons[i].addEventListener('mouseover', (event) => {
        pointerCursor(buttons[i], event)
    })
    showSelectedCard(cards[i], buttons[i]);
}

for (let i = 0; i < addCartButtons.length; i++) {
    addCartButtons[i].addEventListener('mouseover', (event) => {
        pointerCursor(addCartButtons[i], event)
    })
}

console.log(addCartButtons)