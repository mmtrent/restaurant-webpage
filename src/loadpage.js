import createHome from "./home";
import createAboutUs from "./aboutUs";
import createContact from "./contact";

const loadpage = (page, body) => {
    // Clear current body contents
    body = document.getElementById('body');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    // Remove underlines from menu selections before selecting new page
    const menubuttons = document.getElementsByClassName('menubuttons');
    for (let i = 0; i < menubuttons.length; i++) {
        menubuttons[i].classList.remove('activepage');
    }


    if (page == 'home') {
        createHome(body);
        const button = document.getElementById('homebutton');
        button.classList.add('activepage');
    }

    
    if (page == 'aboutUs') {
        createAboutUs(body);
        const button = document.getElementById('aboutusbutton');
        button.classList.add('activepage');
    }

    if (page == 'contact') {
        createContact(body);
        const button = document.getElementById('contactbutton');
        button.classList.add('activepage');
    }

}

export default loadpage;
