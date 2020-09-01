import Pokemon from "./pokemon.js"
const $btn = document.getElementById('btn-kick')
const $btnLightning = document.getElementById('btn-lightning')

const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 500,
    selectors: 'character',
});

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors: 'enemy',
});

const BtncountJolt = countBtn(10, $btn);
$btn.addEventListener('click', function () {
    BtncountJolt()
    console.log('kick');
    player1.chengeHP(random(60, 20), function (count) {
        console.log(generateLog(player1, player2, count));
    });
    player2.chengeHP(random(20));
    
    
});
const BtnCountLightning = countBtn(2, $btnLightning);
$btnLightning.addEventListener('click', function () {
    BtnCountLightning();
    console.log('kick-Lightning');
    player1.chengeHP(random(20));
    player2.chengeHP(random(20));
    
});

function countBtn(count = 10, el) {
    const innerText = el.innerText;
    el.innerText = `${innerText} (${count})`
    return function () {
        count--;
        if (count === 0) {
            el.disabled = true;
        }
        el.innerText = `${innerText} (${count})`
        return count;
    }
}




function chengeHP(count) {
    this.hp.current -= count;
    
    if (this.hp.current <= 0) {
        this.hp.current = 0;
        alert('Бедный ' + this.name + ' проиграл!');
        $btn.disabled = true;
        $btnLightning.disabled = true;
    }
    this.renderHP();

    const $logs = document.querySelector('#logs');
    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    const $p = document.createElement('p');
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);
    
};

function random(max, min = 0) {
    const num = max - min
    return Math.ceil(Math.random() * num) + min;
};

    
function generateLog(firstPerson, secondPerson, count) {
    const { name, hp: { current, total } } = firstPerson;
    const { name: enemyName } = secondPerson;
    
    const logs = [
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. Урон:${count} [${current}/${total}]`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. Урон:${count} [${current}/${total}]`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. Урон:${count} [${current}/${total}]`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Урон:${count} [${current}/${total}]`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. Урон:${count} [${current}/${total}]`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. Урон:${count} [${current}/${total}]`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника. Урон:${count} [${current}/${total}]`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. Урон:${count} [${current}/${total}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. Урон:${count} [${current}/${total}]`,
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. Урон:${count} [${current}/${total}]`,
    ];
    return logs[random(logs.length) - 1]

    
}

