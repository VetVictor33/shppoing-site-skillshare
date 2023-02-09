const cards = document.querySelectorAll('.shopping-card');
const buttons = document.querySelectorAll('.info-button');
const addCartButton = document.querySelectorAll('.add-cart-button .main-list'); //só defini a classe main-list no primeiro button, terminar a lógica quando criar a page de cart

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

        const shoppingItens = document.querySelector('.shopping-itens');
        shoppingItens.style.display = 'none'

        const main = document.querySelector('main');
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
    })
    buttons[i].addEventListener('mouseover', (event) => {
        event.stopPropagation();
        buttons[i].style.cursor = 'pointer';
        console.log('passou')
    })
}