export class ArCondicionado {
    
    // Atributos

    #ligado;
    #intensidade;
    
    // métodos especiais
    
    constructor(ligado, intensidade) {
        this.#ligado = ligado;
        this.#intensidade = intensidade;
    }
    
    // funções e atributos com "#" são privados
    get #getLigado() {
        return this.#ligado;
    }

    get #getIntensidade() {
        return this.#intensidade;
    }

    set #setLigado(l) {
        this.#ligado = l;
    }

    set #setIntensidade(i) {
        this.#intensidade = i;
    }

    // sobreescrevem métodos abstratos

    ligar(){
        this.#setLigado = true;
    }

    desligar(){
        this.#setLigado = false;
    }

    abrirMenu(){
        if(this.#getLigado) {
            console.log('------- Menu ArCondicionado aberto -------');
            console.log('Status ar-condicionado: ' + this.#getLigado);
            console.log('Intensidade: ' + this.#getIntensidade);

            for(var i = 0; i < this.#getIntensidade;i++){
                console.log("I");
            }
            console.log('-----------------------------------------');
        }
    }

    fecharMenu(){
        if(this.#getLigado) {
            console.log("Encerrando menu ArCondicionado...");
        }
    }

    maisIntensidade(){
        if( this.#getLigado ){
            this.#setIntensidade = this.#getIntensidade + 1;
        }

    }

    menosIntensidade(){
        if( this.#getLigado ){
            this.#setIntensidade = this.#getIntensidade - 1;
        }
    }
}

                