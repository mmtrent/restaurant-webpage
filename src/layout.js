import loadpage from './loadpage'

const createLayout = () => {

    const content = document.getElementById('content');

    const body = document.createElement('div');
    body.classList.add('body');
    body.id = "body";

    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = 'resources/panuccis_logo.png';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const homeLink = document.createElement('input');
    homeLink.setAttribute("type", "button");
    homeLink.setAttribute("value", "Home");
    homeLink.classList.add('menubuttons');
    homeLink.id = 'homebutton';
    homeLink.addEventListener('click', function() {
        loadpage('home', body);
    });

    const aboutUsLink = document.createElement('input');
    aboutUsLink.setAttribute("type", "button");
    aboutUsLink.setAttribute("value", "About Us");
    aboutUsLink.classList.add('menubuttons');
    aboutUsLink.id = 'aboutusbutton';
    aboutUsLink.addEventListener('click', function() {
        loadpage('aboutUs', body);
    });

    const contactLink = document.createElement('input');
    contactLink.setAttribute("type", "button");
    contactLink.setAttribute("value", "Contact");
    contactLink.classList.add('menubuttons');
    contactLink.id = 'contactbutton';
    contactLink.addEventListener('click', function() {
        loadpage('contact');
    });

    menu.appendChild(homeLink);
    menu.appendChild(aboutUsLink);
    menu.appendChild(contactLink);

    content.appendChild(header);
    header.appendChild(logo);
    header.appendChild(menu);
    content.appendChild(body);

    return body;
}

export default createLayout;