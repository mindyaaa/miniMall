'strict mode'


function loadItems() {
    return fetch('data/data.json')
    .then((res) => res.json())
    .then((json) => json.items)
}

function displayItems(items) {
    const itemList = document.querySelector('.items');
    // const html = items.map((item) => createHTMLString(item)).join('');
    // console.log(html);
    itemList.innerHTML = items.map((item) => createHTMLString(item)).join('');
}


function createHTMLString(item) {
    return `
    <li class="mainList">
        <img class="listImg" src="${item.image}" alt="" />
        <span class="gender">${item.gender}</span>
        <span class="size">${item.size}</span>
    </li>
    `
}

loadItems()
.then((items) => {
    console.log(items);
    displayItems(items);
    // setEventListeners(items)
})
.catch(console.log('error'))