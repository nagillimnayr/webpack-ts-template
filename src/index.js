const main = () => {
    const element = document.createElement('h1');
    element.textContent = 'Hello, webpack!';
    document.body.appendChild(element);
}
window.addEventListener('load', main);
