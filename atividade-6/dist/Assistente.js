"use strict";
// Classe Assistente
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assistente = void 0;
const Medico_1 = require("./Medico");
class Assistente extends Medico_1.Medico {
    // métodos especiais
    constructor(ID, nome, idade, sexo, nivel) {
        super(ID, nome, idade, sexo, nivel);
        // atributos
        this.nivel = 0;
        this.nivel = nivel;
    }
    set setNivel(i) {
        this.nivel = i;
    }
    get getNivel() {
        return this.nivel;
    }
    // Métodos
    alterarNivel(v) {
        console.log("Nivel alterado para: " + v + ".");
        this.setNivel = v;
    }
    // método sobrescrito
    atender() {
        console.log("Atendimento do assitente em andamento..");
    }
}
exports.Assistente = Assistente;
