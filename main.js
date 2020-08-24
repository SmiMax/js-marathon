const $btn = document.getElementById('btn-kick')

const character = {
    name: 'Pikachu',
    defaultHP: 150,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbarHp: document.getElementById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    renderHP: renderHP,
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
}

$btn.addEventListener('click', function () {
    console.log('kick')
    
    chengeHP(random(20), character);
    chengeHP(random(20), enemy);
});

function init() {
    console.log('Start game')
    renderHP.call(character);
    renderHP.call(enemy);;
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

function chengeHP(count, person) {
    if (person.damageHP <= count) {
        person.damageHP = 0;
        alert('Бедный ' + person.name + ' проиграл!');
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
    }
    renderHP.call(person);
    
};

function random(num) {
    return Math.ceil(Math.random() * num)
};

init();
