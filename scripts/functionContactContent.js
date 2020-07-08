function contactContent(){

    const contentDiv = document.querySelector('#content');

    const contactContent = document.createElement('div');
        contactContent.classList.add('contactContent');

        // PHONE INFO
        
        const phoneInfo = document.createElement('div');
            phoneInfo.classList.add('phoneInfo');

            const phoneTitle = document.createElement('h1');
            phoneTitle.textContent = 'Book a table with us and enjoy!';
            const txtBeforeNum = document.createTextNode('Call us on: ');
            const phoneNum = document.createElement('span');
                phoneNum.setAttribute('id','phone');
                phoneNum.textContent = '(39) 999-999-9999';
            
            phoneInfo.appendChild(phoneTitle);
            phoneInfo.appendChild(txtBeforeNum);
            phoneInfo.appendChild(phoneNum);

        // EMAIL INFO

        const emailInfo = document.createElement('div');
            emailInfo.classList.add('emailInfo');

            const emailTitle = document.createElement('h1');
            emailTitle.textContent = 'And if the line is busy, don\'t worry!';
            const txtBeforeEmail = document.createTextNode('You can reach us on: ');
            const email = document.createElement('span');
                email.setAttribute('id','email');
                email.textContent = 'cevuoleerguanciale@fictional.com';
            
            emailInfo.appendChild(emailTitle);
            emailInfo.appendChild(txtBeforeEmail);
            emailInfo.appendChild(email);


        contactContent.appendChild(phoneInfo);
        contactContent.appendChild(emailInfo);

        // DISCLAIMER

        const disclaimer = document.createElement('p');
            disclaimer.classList.add('disclaimer');

            const disclaimerTxt1 = document.createTextNode('This is a fictional restaurant page built by ');
            const linkGithub = document.createElement('a');
                linkGithub.setAttribute('href', 'https://github.com/notstoe');
                linkGithub.setAttribute('id', 'github');
                linkGithub.textContent = '@notstoe';
            
            disclaimer.appendChild(disclaimerTxt1);
            disclaimer.appendChild(linkGithub);

            contactContent.appendChild(disclaimer);
    
        contentDiv.appendChild(contactContent);
}

export { contactContent }