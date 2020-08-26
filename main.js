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
    enemy.chengeHP( random(20));
});

function init() {
    console.log('Start game')
    character.renderHP();
    enemy.renderHP();
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
    }
    this.renderHP();
};

function random(num) {
    return Math.ceil(Math.random() * num)
};

init();
