class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbarHP = document.getElementById(`progressbar-${name}`);
        this.elName = document.getElementById(`name-${name}`);
        this.elImg = document.getElementById(`sprite-${name}`)
        this.elBtn = document.querySelectorAll('button')
    }    
}

class Pokemon extends Selectors {
    constructor({ id, name, hp, type,selectors,attacks = [], img }) {
        super(selectors);
        this.id = id;
        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.attacks = attacks;
        this.img = img;
        this.renderHP();
        this.renderSpecifications();
    };
    
    chengeHP = (count,cb ) => {
    this.hp.current -= count;

    if (this.hp.current <= 0) {
        this.hp.current = 0;
        alert('Бедный ' + this.name + ' проиграл!');
        console.log(this.elBtn)
        this.elBtn.disabled = true;
        };
        this.renderSpecifications();
        this.renderHP();
        cb && cb(count)
        


};
    renderHP = () => {
    this.renderHPLife();
        this.renderProgressbarHP();
        
};

    renderHPLife = () => {
        const { elHP, hp: { current, total } } = this;
        elHP.innerText = current + '/' + total;
        
    };

    renderProgressbarHP = () => {
        
        const {elProgressbarHP, id ,hp: { current, total } } = this;
        elProgressbarHP.style.width = (current / total) * 100 + '%';

    };

    renderSpecifications = () => {
        const { elName, elImg, name,img } = this;
        elImg.src = img;
        elName.innerText = name;
    };

    
    
};
    

    export default Pokemon;