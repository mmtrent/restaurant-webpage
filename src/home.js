const createHome = (body) => {

const homeDiv = document.createElement('div');

const homeLogo = document.createElement('img');
homeLogo.src = 'resources/storefrontlogo.jpg';

console.log('homepage');
homeDiv.appendChild(homeLogo);
body.appendChild(homeDiv);

}

export default createHome;