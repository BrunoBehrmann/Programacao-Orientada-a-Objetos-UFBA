"use strict";
// Classe Pediatra
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pediatra = void 0;
const Medico_1 = require("./Medico");
class Pediatra extends Medico_1.Medico {
    // métodos especiais
    constructor(ID, nome, idade, sexo, crm, idadeAtendida) {
        super(ID, nome, idade, sexo, crm);
        // atributos
        this.idadeAtendida = 0;
        this.idadeAtendida = idadeAtendida;
    }
    set setIdadeAtendida(i) {
        this.idadeAtendida = i;
    }
    get getIdadeAtendida() {
        return this.idadeAtendida;
    }
    // métodos
    MudarIdadeAtendida() {
        this.setIdadeAtendida = this.getIdadeAtendida + 2;
        console.log("Pediatra aumentando idade atendida em + 2 anos..");
    }
    /* método(s) que serão sobrescritos*/
    atender() {
        console.log("Atendimento do Pediatra em andamento..");
    }
}
exports.Pediatra = Pediatra;
