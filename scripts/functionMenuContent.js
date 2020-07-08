import { createList } from './functionCreateList'

function menuContent(){

    const contentDiv = document.querySelector('#content');

    // MAIN MENU

    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');

        const mainMenu = document.createElement('div');
        mainMenu.classList.add('mainMenu');

        // FIRST LIST

            let listTitle = 'Primi Piatti (First Course):';
            let txtList = [];
            txtList.push('Pasta alla Carbonara (Mezze Maniche)');
            txtList.push('Spaghetti all\'Amatriciana');
            txtList.push('Pasta Fave e Guanciale (Rigatoni)');
            txtList.push('Pasta Cavolfiori e Guanciale (Rigatoni)');
            txtList.push('Pasta alla Zozzona (Rigatoni)');
            txtList.push('Vellutata di Castagne con Porcini e Guanciale Croccante');
            txtList.push('Guancialini di Maiale Stufati con Polenta');

            const list1 = createList(listTitle,txtList);
           
        // SECOND LIST

            listTitle = 'Secondi Piatti (Second Course):';
            txtList = [];
            txtList.push('Trippa alla Romana');
            txtList.push('Pollo Ripieno al Forno');
            txtList.push('Lonza di Maiale all\'Arancia');
            txtList.push('Tortino di Pesce Spada');
            txtList.push('Sgombri in Porchetta con Verdure');
            txtList.push('Gulasch con Purè');

            const list2 = createList(listTitle,txtList);


            mainMenu.appendChild(list1);
            mainMenu.appendChild(list2);
            menuContent.appendChild(mainMenu);

    // THIRD LIST

        listTitle = 'Dolci (Desserts):';
        txtList = [];
        txtList.push('Cassata Siciliana');
        txtList.push('Cannoli con Crema alla Ricotta');
        txtList.push('Brioscia cû Tuppu');

        const list3 = createList(listTitle,txtList);

        menuContent.appendChild(list3);
        
    contentDiv.appendChild(menuContent);
    }

export { menuContent }