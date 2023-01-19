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


// 버튼

function navBtnClickHandler(event,items) {
    // console.dir(e.target);
    // console.log(e.target.className);
    const className = event.target.className;
    // console.log(className);

    const filtered = items.filter((item) => item.type === className || item.color === className);
    displayItems(filtered);
    }

function setEventListeners(items) {
    const homeLogo = document.querySelector('#homeLogo');
    homeLogo.addEventListener('click', () => displayItems(items));

    const navButton = document.querySelector('.navBar');
    navButton.addEventListener('click', (event) => navBtnClickHandler(event, items));
}

loadItems()
.then((items) => {
    console.log(items);
    displayItems(items);
    setEventListeners(items)
})
.catch(console.log('error'));

