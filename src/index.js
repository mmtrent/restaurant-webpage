import createLayout from './layout';
import './style.css';
import createHome from './home'
import createAboutUs from './aboutUs';
import loadpage from './loadpage';


console.log('Welcome to Panucci\'s Pizza');

// TODO: Create tab switching logic here

const body = createLayout();
createHome(body);
//createAboutUs(body); // TODO: Make this load with tab logic