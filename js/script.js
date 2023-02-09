const itens = document.querySelectorAll('.shopping-card');



for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', (event) => {
        event.stopPropagation();

        let child = itens[i].children;

        let imgSrc = child[0].src;
        let title = child[1].innerHTML;
        let price = child[2].innerHTML;
        let description = child[3].innerHTML;

        localStorage.setItem('img', imgSrc);
        localStorage.setItem('title', title);
        localStorage.setItem('price', price);
        localStorage.setItem('description', description);

        console.log(i, imgSrc, title, price, description)
        window.location.href = '../pages/products-details/item-details.html'
    })
}