const $btn = document.getElementById('btn-kick')
const $btnLightning = document.getElementById('btn-lightning')
const elKickLightning = document.getElementById('kick-lightning');
const elKickThunderJolt = document.getElementById('kick-thunder-jolt');
const countKicker = countKick()
const maxKick1 = 10;
const maxKick2 = 2;


const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbarHp: document.getElementById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    renderHP: renderHP,
    chengeHP: chengeHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbarHp: document.getElementById('progressbar-enemy'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    renderHP: renderHP,
    chengeHP: chengeHP,
}

$btn.addEventListener('click', function () {
    
    console.log('kick')
    character.chengeHP(random(20));
    enemy.chengeHP(random(20));
    countKicker(maxKick1, elKickThunderJolt);
    
});

$btnLightning.addEventListener('click', function () {
    
    console.log('kick-Lightning');
    character.chengeHP(random(40));
    enemy.chengeHP(random(40));
    countKicker(maxKick2, elKickLightning);
});

function init() {
    console.log('Start game')
    character.renderHP();
    enemy.renderHP();
    renderKick(0, maxKick2, elKickLightning);
    renderKick(0, maxKick1, elKickThunderJolt);
};

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
};

function renderHPLife() {
    
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
};

function renderProgressbarHP() {
    this.elProgressbarHp.style.width = this.damageHP / this.defaultHP * 100 + '%'  
};

function chengeHP(count) {
    this.damageHP -= count;
    
    if (this.damageHP <= 0) {
        this.damageHP = 0;
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

function random(num) {
    return Math.ceil(Math.random() * num)
};
function countKick() {
    let click = 0
   
    return function (max, element) {
        click++
        
        renderKick(click,max , element);
            
        console.log(click);
    }
}
function renderKick(nowKick,maxKick,element) {

    if (nowKick === maxKick) {
        element == document.getElementById('kick-thunder-jolt') ? $btn.disabled = true : $btnLightning.disabled = true;         
        }
    element.innerText = (maxKick - nowKick) + '/' + maxKick ;
}
    
function generateLog(firstPerson, secondPerson, count) {
    
    const logs = [
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. Урон:${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    ];
    return logs[random(logs.length) - 1]

    
}

init();
