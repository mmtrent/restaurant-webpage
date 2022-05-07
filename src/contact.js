const createContact = (body) => {

    // Div variables
    const contactDiv = document.createElement('div');
    const contactHeader = document.createElement('div');
    contactHeader.id = 'contactHeader';
    const contactBody = document.createElement('div');
    contactBody.id = 'contactBody';


    // Div content
    contactHeader.innerText = 'Contact Us';
    contactBody.innerText = 'Hours:\n10:00AM - 10:00PM\n7 Days a Week\n\nManhattan, Old New York'

    // Append divs
    body.appendChild(contactDiv);
    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactBody);

}

export default createContact;