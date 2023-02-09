const main = document.querySelector('main');
const cards = document.querySelectorAll('.shopping-card');
const infoButtons = document.querySelectorAll('.info-button');
const addCartButtons = document.querySelectorAll('.add-cart-button'); //só defini a classe main-list no primeiro button, terminar a lógica quando criar a page de cart

const category = document.querySelectorAll('.category-sec li');


function pointerCursor(elements) {
    if (elements.length) {
        for (let element of elements) {
            element.addEventListener('mouseover', (event) => {
                event.stopPropagation();
                event.preventDefault();
                element.style.cursor = 'pointer';
            })
        }
    } else {
        elements.addEventListener('mouseover', (event) => {
            event.stopPropagation();
            event.preventDefault();
            elements.style.cursor = 'pointer';
        })
    }
}

function showSelectedCard(card, button) {
    pointerCursor(infoButtons);
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

        const returnButton = document.querySelector('.selected-item-return-button');
        returnButton.addEventListener('click', () => {
            main.replaceChild(shoppingItens, selectedCard)
        });
        returnButton.addEventListener('mouseover', (event) => {
            pointerCursor(returnButton, event)
        })

    })
}

function filterCategory(elements) {
    pointerCursor(elements);
    for (let element of elements) {
        element.addEventListener('click', (event) => {
            let text = element.innerHTML.toUpperCase();
            for (let card of cards) {
                let cardTag = card.children[4].innerHTML.toUpperCase();
                if (text != cardTag) {
                    card.style.display = 'none';
                } else if (text == cardTag) {
                    card.style.display = 'flex'
                }
                if (text === 'ALL ITEMS') {
                    for (card of cards) {
                        card.style.display = 'flex';
                    }
                }
            }
        });
    }
}

//showing details
for (let i = 0; i < cards.length; i++) {
    showSelectedCard(cards[i], infoButtons[i]);
}
//addding to cart
pointerCursor(addCartButtons)

filterCategory(category);