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
    return logs[random(logs.length) - 1];


};

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
export { random, generateLog, countBtn};
