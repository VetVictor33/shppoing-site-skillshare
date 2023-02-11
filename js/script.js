const main = document.querySelector('main');
const cards = document.querySelectorAll('.shopping-card');
const infoButtons = document.querySelectorAll('.info-button');
//const addCartButtons = document.querySelectorAll('.add-cart-button'); //só defini a classe main-list no primeiro button, terminar a lógica quando criar a page de cart
const shoppingItens = document.querySelector('.shopping-itens');
const category = document.querySelectorAll('.category-sec li');
const prices = document.querySelectorAll('.price-sec li');
const searchInput = document.querySelector('#header-search');

//let totalCartItens = localStorage.getItem('totalItens');
//const cartItensCounter = document.querySelector('.cart-itens-counter');

/*function addCart() {
    pointerCursor(addCartButtons);
    for (let i = 0; i < addCartButtons.length; i++) {
        addCartButtons[i].addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
            const priceFloat = parseFloat(cards[i].children[2].innerHTML.slice(1));
            const title = cards[i].children[1].innerHTML;

            totalCartItens++;
            localStorage.setItem(totalCartItens + title, priceFloat);
            localStorage.setItem('totalItens', totalCartItens);
            printAmout();
        })
    }
}*/

/*function printAmout() {
    if (totalCartItens < 1) {
        cartItensCounter.style.display = 'none';
    } else {
        cartItensCounter.style.display = 'flex';
        document.querySelector('.total-cart-itens').innerHTML = totalCartItens;
    }
}*/

/*function pointerCursor(elements) {
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
}*/

function showSelectedCard(cards, buttons) {
    pointerCursor(infoButtons);
    for (let i = 0; i < cards.length; i++) {

        buttons[i].addEventListener('click', (event) => {
            event.stopPropagation();

            let child = cards[i].children;

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
            pointerCursor(returnButton);
            returnButton.addEventListener('click', () => {
                main.replaceChild(shoppingItens, selectedCard)
            });

            const botao = document.querySelector('.add-cart-button');
            //---------------------AQUIIIIIIIII
            pointerCursor(botao)
            botao.addEventListener('click', (event) => {
                event.stopPropagation();
                event.preventDefault();
                const priceFloat = parseFloat(cards[i].children[2].innerHTML.slice(1));
                const titlee = cards[i].children[1].innerHTML;

                totalCartItens++;
                localStorage.setItem(titlee, priceFloat);
                printAmout();
            })

        })
    }
}

function filterCategory(elements) {
    pointerCursor(elements);
    for (let element of elements) {
        element.addEventListener('click', (event) => {
            let text = element.innerHTML.toUpperCase();
            for (let card of cards) {
                let cardTag = card.children[4].innerHTML.toUpperCase();
                if (!cardTag.includes(text)) {
                    card.style.display = 'none';
                } else if (cardTag.includes(text)) {
                    card.style.display = 'flex'
                }
                if (text === 'ALL ITEMS') {
                    for (card of cards) {
                        card.style.display = 'flex';
                    }
                }
                const selectedCard = document.querySelector('.selected-shopping-itens')
                if (selectedCard) {
                    main.replaceChild(shoppingItens, selectedCard);
                }
            }
        });
    }
}

function filterPrice() {
    pointerCursor(prices);
    const lowerCut = 90;
    const higherCut = 150;
    for (let i = 0; i < prices.length; i++) {
        prices[i].addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
            if (i === 0) {
                for (let card of cards) {
                    const priceString = card.children[2].innerHTML;
                    const priceFloat = parseFloat(priceString.slice(1));
                    if (priceFloat < lowerCut) {
                        card.style.display = 'flex'
                    } else {
                        card.style.display = 'none'
                    }
                }
            } else if (i == 1) {
                for (let card of cards) {
                    const priceString = card.children[2].innerHTML;
                    const priceFloat = parseFloat(priceString.slice(1));
                    if (priceFloat > lowerCut && priceFloat < higherCut) {
                        card.style.display = 'flex'
                    } else {
                        card.style.display = 'none'
                    }
                }
            } else if (i == 2) {
                for (let card of cards) {
                    const priceString = card.children[2].innerHTML;
                    const priceFloat = parseFloat(priceString.slice(1));
                    if (priceFloat > higherCut) {
                        card.style.display = 'flex'
                    } else {
                        card.style.display = 'none'
                    }
                }
            }
        })
    }

}

function search(input) {
    input.addEventListener('keydown', (event) => {
        const keyword = event.target.value.toUpperCase();
        for (let card of cards) {
            const title = card.children[1].innerHTML.toUpperCase();
            if (title.includes(keyword)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    })
}

showSelectedCard(cards, infoButtons);

filterCategory(category);

filterPrice();

search(searchInput);
/*
addCart();

printAmout();*/