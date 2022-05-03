export class Abstracao {
    constructor() {
        if(this.constructor === Abstracao) {
            throw new Error("Não pode instanciar uma classe abstrata!");
        }
    }
}
Abstracao.prototype.ligar = function(){
    throw new Error("Obrigatorio a implementacao do metodo ligar.");
}
Abstracao.prototype.desligar = function(){
    throw new Error("Obrigatorio a implementacao do metodo desligar.");
}