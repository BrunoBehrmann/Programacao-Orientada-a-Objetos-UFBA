"use strict";
// Classe Tecnico
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnfTecnico = void 0;
const Enfermeiro_1 = require("./Enfermeiro");
class EnfTecnico extends Enfermeiro_1.Enfermeiro {
    // métodos especiais
    constructor(ID, nome, idade, sexo, turno, enfermaria, especEnf) {
        super(ID, nome, idade, sexo, turno, enfermaria);
        // atributos
        this.especEnf = "";
        this.especEnf = especEnf;
    }
    set setEspecEnf(i) {
        this.especEnf = i;
    }
    get getEspecEnf() {
        return this.especEnf;
    }
    // métodos
    alterarEspecEnf(i) {
        console.log("Especialidade do enfermeiro alterada para: " + i + ".");
        this.setEspecEnf = i;
    }
}
exports.EnfTecnico = EnfTecnico;
