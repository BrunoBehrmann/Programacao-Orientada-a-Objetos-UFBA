export class Televisao {
    
    // Atributos
    
    #ligado;
    #intensidade;
    #canal;
    #mudo;

    // métodos
    constructor(ligado, intensidade, canal, mudo) {
        this.#ligado = ligado;
        this.#intensidade = intensidade;
        this.#canal = canal;
        this.#mudo = mudo;
    }
    
    get #getLigado() {
        return this.#ligado;
    }

    set #setLigado(l) {
        this.#ligado = l;
    }

    get #getIntensidade() {
        return this.#intensidade;
    }

    set #setIntensidade(i) {
        this.#intensidade = i;
    }

    get getCanal() {
        return this.#canal;
    }

    set setCanal(t) {
        this.#canal = t;
    }

    get getMudo() {
        return this.#mudo;
    }

    set setMudo(a) {
        this.#mudo = a;
    }

    // muda para o próximo canal
    canalSetaTop() {
        if(this.#getLigado) {
            this.setCanal = this.getCanal + 1;
            console.log('-> Canal: ' + this.getCanal);
        }
    }

    // muda para o canal anterior
    canalSetaBottom() {
        if(this.#getLigado) {
            this.setCanal = this.getCanal - 1;
            console.log('-> Canal: ' + this.getCanal);
        }
    }

    // deixa a televisao SEM o som original ou COM, de acordo com seu status
    mudo() {
        if(this.#getLigado) {
            if(this.getMudo) {
                this.setMudo = false;
            }
            else {
                this.setMudo = true;
                console.log('-MUDO-');
            }
        }
    }

    // sobreescrevem métodos abstratos
    
    ligar(){
        this.#setLigado = true;
    }

    desligar(){
        this.#setLigado = false;
    }

    abrirMenu(){
        if(this.#getLigado){
            console.log('--------- Menu Televisao aberto ---------');
            console.log('Canal: ' + this.getCanal); 
            if(this.getMudo){
                console.log('Volume: 0');
            }   
            else {
                console.log('Volume: ' + this.#getIntensidade);
            }   
            console.log('Mudo: ' + this.getMudo);
            console.log('-----------------------------------------');
        }
    }

    fecharMenu(){
        if(this.#getLigado){
            console.log("-> Encerrando menu televisao...");
        }
    }

    maisIntensidade(){
        if(this.#getLigado){
            if (this.#getIntensidade + 1 <= 100){
                this.#setIntensidade = this.#getIntensidade + 1;
                console.log('-> Volume: ' + this.#getIntensidade);
                if(this.getMudo) {
                    this.setMudo = false;
                }
            }
        }
    }

    menosIntensidade(){
        if(this.#getLigado){
            if(this.#getIntensidade - 1 >= 0){
                this.#setIntensidade = this.#getIntensidade - 1;
                console.log('-> Volume: ' + this.#getIntensidade);
                if(this.getMudo) {
                    this.setMudo = false;
                }
            }
        }
    }
}

