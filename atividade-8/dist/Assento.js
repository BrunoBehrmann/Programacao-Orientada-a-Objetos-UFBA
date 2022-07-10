"use strict";
// Classe Assento
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assento = void 0;
class Assento {
    //métodos especiais
    constructor(classe, numero) {
        this.ocupado = false;
        this.classe = classe;
        this.numero = numero;
    }
    get getClasse() {
        return this.classe;
    }
    set setClasse(i) {
        this.classe = i;
    }
    get getNumero() {
        return this.numero;
    }
    set setNumero(i) {
        this.numero = i;
    }
    get getOcupado() {
        return this.ocupado;
    }
    set setOcupado(i) {
        this.ocupado = i;
    }
}
exports.Assento = Assento;
