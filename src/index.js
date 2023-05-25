import './style/style.css';
import Orca from './orca.png';

const main = () => {
    const element = document.createElement('h1');
    element.textContent = 'Hello, webpack!';
    element.classList.add('hello');
    document.body.appendChild(element);

    const orcaImage = new Image();
    orcaImage.src = Orca;
    document.body.appendChild(orcaImage);
}
window.addEventListener('load', main);
