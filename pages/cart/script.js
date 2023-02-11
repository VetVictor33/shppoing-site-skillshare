const mainDiv = document.querySelector('.main-div');
const lastDiv = document.querySelector('.last-div');
const itemPriceField = document.querySelector('.total-price');

let totalPrice = 0;

function getLocalStorage() {
    const localStorageArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        localStorageArray.push({ key, value });
    }
    return localStorageArray
}


function placeCart() {
    let localStorageArray = getLocalStorage();

    for (let i = 0; i < localStorage.length; i++) {
        detailsDiv = document.createElement('div');
        itemImgDiv = document.createElement('div');
        itemImg = document.createElement('img');
        itemDetailsDiv = document.createElement('div');
        positionDiv = document.createElement('div');
        itemNameDiv = document.createElement('div');
        itemNameSpan = document.createElement('span');
        itemPriceDiv = document.createElement('div');
        itemPriceSpan = document.createElement('span');
        removeBtn = document.createElement('button');


        detailsDiv.classList.add('details');
        itemImgDiv.classList.add('item-img');
        itemDetailsDiv.classList.add('item-details');
        itemNameDiv.classList.add('item-name');
        itemPriceDiv.classList.add('item-price');
        removeBtn.classList.add('remove-button');

        mainDiv.appendChild(detailsDiv);
        detailsDiv.appendChild(itemImgDiv);
        itemImgDiv.appendChild(itemImg);
        detailsDiv.appendChild(itemDetailsDiv);
        itemDetailsDiv.appendChild(positionDiv);
        positionDiv.appendChild(itemNameDiv);
        itemNameDiv.appendChild(itemNameSpan);
        positionDiv.appendChild(itemPriceDiv);
        itemPriceDiv.appendChild(itemPriceSpan);
        itemDetailsDiv.appendChild(removeBtn);

        itemNameSpan.innerHTML = localStorageArray[i].key;
        itemPriceSpan.innerHTML = localStorageArray[i].value;

        removeBtn.innerHTML = 'Remove';

        mainDiv.insertBefore(detailsDiv, lastDiv);

        switch (localStorageArray[i].key.toLowerCase()) {
            case 'game controller':
                itemImg.src = '../../assets/controller.jpg';
                break;
            case 'white headphones':
                itemImg.src = '../../assets/headphones.jpg';
                break;
            case 'canon camera':
                itemImg.src = '../../assets/camera.jpg';
                break;
            case 'yeti microphone':
                itemImg.src = '../../assets/microphone.jpg';
                break;
            case 'cabels':
                itemImg.src = '../../assets/cables.jpg';
                break;
            case 'camera lenses':
                itemImg.src = '../../assets/lenses.jpg';
                break;
            default:
                console.log('switch caiu no default', localStorageArray[i].key.toLowerCase());
        }

    }
}


placeCart();
let removeBtns = document.querySelectorAll('.remove-button');
pointerCursor(removeBtns);

function remove() {
    let itensDetails = document.querySelectorAll('.details');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', () => {
            let itemName = itensDetails[i].children[1].children[0].children[0].children[0].innerHTML;
            localStorage.removeItem(itemName);

            itensDetails[i].remove();
            printAmout();
            totalPrice = 0;
            getTotalPrice();
        })
    }
}

function getTotalPrice() {
    const arrayPrices = [];
    const localStorageArray = getLocalStorage();
    for (let storage of localStorageArray) {
        const currentItemPrice = parseFloat(storage.value);
        arrayPrices.push(currentItemPrice);

    }
    for (price of arrayPrices) {
        totalPrice += price;
    }
    totalPrice = totalPrice.toFixed(2);
    itemPriceField.innerHTML = `$${totalPrice}`
}

remove();
getTotalPrice();