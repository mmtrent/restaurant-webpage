const createAboutUs = (body) => {

    // Div variables:
    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.id = 'aboutUsDiv';
    const aboutUsHeader = document.createElement('div');
    const employee0Div = document.createElement('div');
    employee0Div.classList.add('employeeDiv');
    const employee1Div = document.createElement('div');
    employee1Div.classList.add('employeeDiv');
    const employee0PhotoDiv = document.createElement('div');
    employee0PhotoDiv.classList.add('photodiv');
    const employee0Photo = document.createElement('img');
    employee0Photo.src = './resources/fryphoto.jpg';
    const employee0Bio = document.createElement('div');
    const employee1PhotoDiv = document.createElement('div');
    
    const employee1Photo = document.createElement('img');
    employee1Photo.src = './resources/mrpanucciphoto.jpg';
    const employee1Bio = document.createElement('div');
    const employee2PhotoDiv = document.createElement('div');
    const employee2Bio = document.createElement('div');

    // Div content
    aboutUsHeader.id = 'meetthecrew';
    aboutUsHeader.innerText = 'Meet the Crew';



    // Append Divs
    body.appendChild(aboutUsDiv);
    aboutUsDiv.appendChild(aboutUsHeader);
    aboutUsDiv.appendChild(employee0Div);
    employee0Div.appendChild(employee0PhotoDiv);
    employee0Div.appendChild(employee0Bio);
    employee0PhotoDiv.appendChild(employee0Photo);
    employee0Bio.innerText = 'Fry\nDelivery Boy';

    aboutUsDiv.appendChild(employee1Div);
    employee1Div.appendChild(employee1PhotoDiv);
    employee1Div.appendChild(employee1Bio);
    employee1PhotoDiv.appendChild(employee1Photo);
    employee1Bio.innerText = 'Mr. Panucci\nOwner';

}

export default createAboutUs;