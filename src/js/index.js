import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('Hi there 👋');



const buttonDodaj = document.querySelector('.button__plus--js');
const buttonUsun = document.querySelector('.button__minus--js');
const counterDigit = document.querySelector('.licznik--js');
// const statystyki = document.querySelector('.statystyki--js');
const key = new Date().toISOString().slice(0, 10)


console.log('buttonDodaj');
console.log('buttonUsun');
console.log(counterDigit.innerHTML);
console.log(statystyki.innerHTML);


if (!localStorage.getItem(key)) {
    localStorage.setItem(key, 0)
    counterDigit.innerHTML = '0'
} else {
    counterDigit.innerHTML = localStorage.getItem(key);

}


buttonDodaj.addEventListener('click', (e) => {
        localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
        counterDigit.innerHTML = localStorage.getItem(key);
    }
)

buttonUsun.addEventListener('click', (e) => {
        const currentValue = parseInt(localStorage.getItem(key));
        if (currentValue > 0) {
            localStorage.setItem(key, localStorage.getItem(key) - 1)
            counterDigit.innerHTML = localStorage.getItem(key)

        }
    }
)
