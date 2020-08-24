const $btn = document.getElementById('btn-kick')
const $btnLightning = document.getElementById('btn-kick-lightning')



const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    defaultMana: 100,
    damageMana: 100,
    elHP: document.getElementById('health-character'),
    elProgressbarHp: document.getElementById('progressbar-character'),
    elMana: document.getElementById('mana-health-character'),
    elProgressbarMana: document.getElementById('mana-progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbarHp: document.getElementById('progressbar-enemy')
}

$btn.addEventListener('click', function () {
    console.log('kick')
    
    chengeMana(20, character);

    chengeHP(random(2), character);
    chengeHP(random(2), enemy);
});

$btnLightning.addEventListener('click', function () {
    console.log('kick-lightning')

        chengeHP(random(50), enemy);
        chengeHP(random(20), character);
        chengeMana(-100, character)
        $btnLightning.disabled = true;    
});

function init() {
    console.log('Start game')
    renderHP(character);
    renderHP(enemy);
    renderMana(character);
};

function renderMana(person) {
    renderManaLife(person);
    renderProgressbarMana(person);
};

function renderManaLife(person) {

    person.elMana.innerText = person.damageMana + '/' + person.defaultMana;

};

function renderProgressbarMana(person) {
    person.elProgressbarMana.style.width = person.damageMana + '%'

};


function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
};

function renderHPLife(person) {
    
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
    
};

function renderProgressbarHP(person) {
    person.elProgressbarHp.style.width = person.damageHP + '%'
    
};

function chengeHP(count, person) {
    if (person.damageHP <= count) {
        person.damageHP = 0;
        alert('Бедный ' + person.name + ' проиграл!');
        $btn.disabled = true;
        $btnLightning.disabled = true;
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
    
};

function chengeMana(count, person) {
    person.damageMana += count;

    if (person.damageMana >= person.defaultMana  ) {
        person.damageMana = person.defaultMana
        $btnLightning.disabled = false;
    }
    
 
    renderMana(person);

};

function random(num) {
    return Math.ceil(Math.random() * num)
};

init();
