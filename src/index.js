import './style/style.css';
import printMe from './print';
import { doc } from 'prettier';

const main = () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello, webpack!';
  h1.classList.add('hello');
  document.body.appendChild(h1);

  const btn = document.createElement('button');
  btn.textContent = 'Click me!';
  btn.addEventListener('click', printMe);
  document.body.appendChild(btn);
};
window.addEventListener('load', main);
