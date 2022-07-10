

// Classe Assento

import { Aeroporto,Classe,Aeronave } from "./Enums";

export class Assento{
    
    private classe: String;
    private numero: number;
    private ocupado: boolean = false;

    //métodos especiais
    constructor(classe: String, numero: number){
        this.classe = classe;
        this.numero = numero;
    }

    get getClasse() {
        return this.classe;
    }

    set setClasse(i: String) {
        this.classe = i;
    }

    get getNumero() {
        return this.numero;
    }

    set setNumero(i: number) {
        this.numero = i;
    }

    get getOcupado() {
        return this.ocupado;
    }

    set setOcupado(i: boolean) {
        this.ocupado = i;
    }

}
