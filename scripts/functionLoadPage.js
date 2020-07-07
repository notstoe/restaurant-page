function loadPage(){

    const contentDiv = document.querySelector('#content');
    
    const pageTitle = document.createElement('h1');
    pageTitle.setAttribute('id','pageTitle');
    pageTitle.textContent = 'Ce Vole Er Guanciale';
    contentDiv.appendChild(pageTitle);

}

export { loadPage }