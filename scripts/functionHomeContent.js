function homeContent(){

    const contentDiv = document.querySelector('#content');

    const contentHome = document.createElement('div');
    contentHome.classList.add('homePageContent');

    // FIRST PARAGRAPH

        const chefsName = document.createElement('a');
            chefsName.classList.add('italicTxt');
            chefsName.setAttribute('id','chefName');
            chefsName.setAttribute('href','');
            chefsName.textContent = 'Gustavo Tonin';
    
        const restaurantDescrip = document.createElement('p');
            restaurantDescrip.setAttribute('id','descriptionRestaurant');
            const part1txt = document.createTextNode('Ce Vole Er Guanciale is a restaurant specialized in recipes using a pork cut called Guanciale. The most famous meal of the house is the classical chef\'s ');
            const part2txt = document.createTextNode(' Pasta Alla Carbonara. Some say people only start living after tasting it.');

            restaurantDescrip.appendChild(part1txt);
            restaurantDescrip.appendChild(chefsName);
            restaurantDescrip.appendChild(part2txt);

        contentHome.appendChild(restaurantDescrip);

    // IMAGE

        const carbonaraImg = document.createElement('img');
            carbonaraImg.setAttribute('src', 'assets/carbonara.jpg');
            carbonaraImg.setAttribute('id', 'carbonaraImg');
            carbonaraImg.setAttribute('alt', 'Carbonara Pasta');
            contentHome.appendChild(carbonaraImg);

    // QUOTE
        const quoteChef = document.createElement('p');
            const quoteChefPart1 = document.createTextNode('No, no! Use only the yolk. -');
            const chefsNameQuote = document.createElement('span');
                chefsNameQuote.textContent = 'Tonin, G.';
                chefsNameQuote.style.fontStyle = 'italic';
            quoteChef.classList.add('quoteChef');

            quoteChef.appendChild(quoteChefPart1);
            quoteChef.appendChild(chefsNameQuote);
        
        contentHome.appendChild(quoteChef);
        
    // SECOND PARAGRAPH

        const guancialeDescript = document.createElement('p');
            guancialeDescript.setAttribute('id','descriptionGuanciale');

        const guancialeLink = document.createElement('a');
            guancialeLink.setAttribute('href', 'https://en.wikipedia.org/wiki/Guanciale');
            guancialeLink.classList.add('italicTxt');
            guancialeLink.textContent = 'gwan-chee-AH-lay';

            const guancialetxt1 = document.createTextNode('\"Guanciale\" is a traditional italian cured meat. Pronounced ');
            const guancialetxt2 = document.createTextNode(' the name refers to one of the few cuts taken from the head of the pig, the jowl or cheek: "guancia" - Italian for cheek, hence, Guanciale!');

            guancialeDescript.appendChild(guancialetxt1);
            guancialeDescript.appendChild(guancialeLink);
            guancialeDescript.appendChild(guancialetxt2);

            contentHome.appendChild(guancialeDescript);
        
    contentDiv.appendChild(contentHome);
}

export { homeContent }