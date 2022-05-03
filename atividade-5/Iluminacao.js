export class Iluminacao{
    
    // Atributos

    #ligado
    #tipo
    #depreciacao
    #intensidade
    #temperaturaCor
    #formato
    #cor
    
    // métodos especiais
    
    constructor(i){
        this.#intensidade = i;
    }

    get getEstado(){
        return this.#ligado;
    }

    get getTipo(){
        return this.#tipo;
    }

    get getDepreciacao(){
        return this.#depreciacao;
    }

    get getIntensidade(){
        return this.#intensidade;
    }

    get getTemperaturaCor(){
        return this.#temperaturaCor;
    }

    get getFormato(){
        return this.#formato;
    }

    get getCor(){
        return this.#cor;
    }

    set setEstado( b ){
        this.#ligado = b;
    }

    set setTipo( i ){
        this.#tipo = i;
    }

    set setDepreciacao( i ){
        this.#depreciacao = i;
    }

    set #setIntensidade( i ){
        this.#intensidade = i;
    }

    set setTemperaturaCor( i ){
        this.#temperaturaCor = i;
    }

    set setFormato( s ){
        this.#formato = s;
    }
    set setCor( s ){
        this.#cor = s;
    }

    // sobreescrevem métodos abstratos

    ligar(){
        this.setEstado = true;
        this.#setIntensidade = 20;
    }

    desligar(){
        this.setEstado = false;
        this.#setIntensidade = 0;
    }

    abrirMenu(){
        if(this.getEstado){
            console.log("Acesa");
            console.log("Intensidade = "+this.getIntensidade);
        }
        else{
            console.log("Apagada");
        }
    }

    fecharMenu(){
        console.log("Encerrando menu Iluminacao...");
    }

    maisIntensidade(){
        if(this.getEstado){
            this.#setIntensidade = this.getIntensidade + 1;
        }
    }

    menosIntensidade(){
        if(this.getEstado){
            this.#setIntensidade = this.getIntensidade - 1;
        }
    }  
}