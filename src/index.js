import './style/style.css';

const main = () => {
    const element = document.createElement('h1');
    element.textContent = 'Hello, webpack!';
    element.classList.add('hello');
    document.body.appendChild(element);
}
window.addEventListener('load', main);
