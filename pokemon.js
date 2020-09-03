class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbarHP = document.getElementById(`progressbar-${name}`);
        this.elName = document.getElementById(`name-${name}`)
    }    
}

class Pokemon extends Selectors {
    constructor({ name, hp, type,selectors,attacks = [], img }) {
        super(selectors);
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
        
        const {elProgressbarHP, hp: { current, total } } = this;
        elProgressbarHP.style.width = (current / total) * 100 + '%';
        

    };

    renderSpecifications = () => {
        const $img = document.querySelector(".sprite")
        $img.src = this.img;
        const {elName, name } = this;
        elName.innerText = name;
    };
    };

    export default Pokemon;