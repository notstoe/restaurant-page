function createList(titleStr, strArr){

    const list = document.createElement('ul');

        const listTitle = document.createElement('p');
        listTitle.classList.add('listTitle');
        listTitle.textContent = titleStr;
        list.appendChild(listTitle);

        for (let i = 0; i < strArr.length; i++) {
            const listElement = document.createElement('li');
            listElement.classList.add('listElement');
            listElement.textContent = strArr[i];
            list.appendChild(listElement);
        }

    return list
}

export { createList }