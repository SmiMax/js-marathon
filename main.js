import Pokemon from "./pokemon.js"
import { pokemons } from "./pokemons.js"
import { random, generateLog, countBtn} from "./utils.js"

const pokemon1 = pokemons[randomP(pokemons)];
const pokemon2 = pokemons[randomP(pokemons)];

function randomP(item) {
    return Math.ceil(Math.random() * item.length)
}



const player1 = new Pokemon({
    ...pokemon1,
    selectors: 'player1',
});

const player2 = new Pokemon({
    ...pokemon2,
    selectors: 'player2',
});

const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button')
    $btn.innerText = item.name;
    const btnCount = countBtn(item.maxCount, $btn);
    $btn.addEventListener('click', () => {
        btnCount();
        chengeHP(random(maxDamage, minDamage));
    })
    $control.appendChild($btn);

});






// function chengeHP(count) {
//     this.hp.current -= count;
    
//     if (this.hp.current <= 0) {
//         this.hp.current = 0;
//         alert('Бедный ' + this.name + ' проиграл!');
//         $btn.disabled = true;
//         $btnLightning.disabled = true;
//     }
//     this.renderHP();

//     const $logs = document.querySelector('#logs');
//     const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
//     const $p = document.createElement('p');
//     $p.innerText = log;
//     $logs.insertBefore($p, $logs.children[0]);
    
// };
    

