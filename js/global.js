const addCartButtons = document.querySelectorAll('.add-cart-button')
const cartItensCounter = document.querySelector('.cart-itens-counter');
let totalCartItens = localStorage.length;

function addCart() {
    pointerCursor(addCartButtons);
    for (let i = 0; i < addCartButtons.length; i++) {
        addCartButtons[i].addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
            const priceFloat = parseFloat(cards[i].children[2].innerHTML.slice(1));
            const title = cards[i].children[1].innerHTML;
            localStorage.setItem(title, priceFloat);
            printAmout();
        })
    }
}

function printAmout() {
    totalCartItens = localStorage.length;
    if (totalCartItens < 1) {
        cartItensCounter.style.display = 'none';
    } else {
        cartItensCounter.style.display = 'flex';
        document.querySelector('.total-cart-itens').innerHTML = totalCartItens;
    }
}

function pointerCursor(elements) {
    if (elements.length) {
        for (let element of elements) {
            element.addEventListener('mouseover', (event) => {
                event.stopPropagation();
                event.preventDefault();
                element.style.cursor = 'pointer';
            })
        }
    } else if (elements.innerHTML) {
        console.log(elements)
        elements.addEventListener('mouseover', (event) => {
            event.stopPropagation();
            event.preventDefault();
            elements.style.cursor = 'pointer';
        })
    }
}

addCart();

printAmout();