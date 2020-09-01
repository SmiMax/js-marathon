class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbarHP = document.getElementById(`progressbar-${name}`)
    }    
}

class Pokemon extends Selectors {
    constructor({ name, hp, type,selectors }) {
        super(selectors);
        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;

        this.renderHP();
    };
    
    chengeHP = (count,cb ) => {
    this.hp.current -= count;

    if (this.hp.current <= 0) {
        this.hp.current = 0;
    }
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

    };

    export default Pokemon;