export class Alarme{

    // Atributos

    #ligado;
    #intensidade;
    #altura;
    #tipoAlarme;

    // métodos especiais
    constructor(ligado, intensidade, altura, tipoAlarme) {
        this.#ligado = ligado;
        this.#intensidade = intensidade;
        this.#altura = altura;
        this.#tipoAlarme = tipoAlarme;
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

    get #getTipoAlarme() {
        return this.#tipoAlarme;
    }

    set setTipoAlarme(t) {
        if(this.#getLigado){
            this.#tipoAlarme = t;
        }
    }

    get getAltura(){
        return this.#altura;
    }

    set setAltura(a) {
        if(this.#getLigado){
            if(0 <= a && a <= 100){
                this.#altura = a;
                console.log('-> Altura: ' + this.getAltura);
            }
            else {
                console.log('Fora do limte de altura [0..100]')
                this.#altura = this.getAltura;
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
            console.log('--------- Menu do alarme aberto ---------');
            console.log('Tipo do alarme: ' + this.#getTipoAlarme);        
            console.log('Intensidade da Luz: ' + this.#getIntensidade + '%');
            console.log('Altura alarme: ' + this.getAltura);
            console.log('-----------------------------------------');
        }
    }

    fecharMenu(){
        if(this.#getLigado){
            console.log("Encerrando menu alarme...");
        }
    }

    maisIntensidade(){
        if(this.#getLigado){
            if(this.#getIntensidade + 10 <= 100){
                this.#setIntensidade = this.#getIntensidade + 10;
                console.log('-> Intensidade Luz Alarme: ' + this.#getIntensidade + '%');
            }
        }
    }

    menosIntensidade(){
        if(this.#getLigado){
            if(this.#getIntensidade - 10 >= 0){
                this.#setIntensidade = this.#getIntensidade - 10;
                console.log('-> Intensidade Luz Alarme: ' + this.#getIntensidade + '%');
            }
        }
    }
}