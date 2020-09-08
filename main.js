import Pokemon from "./pokemon.js"
import { random, generateLog, countBtn} from "./utils.js"

class Game {
    getPokemons = async () => {
        const responce = await fetch(`https://reactmarathon-api.netlify.app/api/pokemons`);
        const body = await responce.json();
        return body;
    };
    
    start = async () => {
        const pokemons = await this.getPokemons();
        console.log(pokemons)

        let pokemon1 = pokemons[randomP(pokemons)];
        let pokemon2 = pokemons[randomP(pokemons)];

        function randomP(item) {
            return Math.ceil(Math.random() * item.length - 1)
        };

        let player1 = new Pokemon({
            ...pokemon1,
            selectors: 'player1',
        });

        let player2 = new Pokemon({
            ...pokemon2,
            selectors: 'player2',
        });

        const $control = document.querySelector('.control');

        player2.attacks.forEach(item => {
            const $btn = document.createElement('button');
            $btn.classList.add('button')
            $btn.innerText = item.name;
            const btnCount = countBtn(item.maxCount, $btn);
            $btn.addEventListener('click', () => {
                btnCount();
                player2.chengeHP(random(item.maxDamage, item.minDamage));
            })
            $control.appendChild($btn);

        });

        player1.attacks.forEach(item => {
            const $btn = document.createElement('button');
            $btn.classList.add('button')
            $btn.innerText = item.name;
            const btnCount = countBtn(item.maxCount, $btn);
            $btn.addEventListener('click', () => {
                btnCount();
                player1.chengeHP(random(item.maxDamage, item.minDamage));
            })
            $control.appendChild($btn);
            
        });
        
    };
};

const game = new Game();
game.start();




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
