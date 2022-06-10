"use strict";
// Classe Chefe
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnfChefe = void 0;
const Enfermeiro_1 = require("./Enfermeiro");
class EnfChefe extends Enfermeiro_1.Enfermeiro {
    // métodos especiais
    constructor(ID, nome, idade, sexo, turno, enfermaria, equipe) {
        super(ID, nome, idade, sexo, turno, enfermaria);
        // atributos
        this.equipe = "";
        this.equipe = equipe;
    }
    set setEquipe(i) {
        this.equipe = i;
    }
    get getEquipe() {
        return this.equipe;
    }
    // métodos
    alterarEquipe(i) {
        console.log("Equipe alterada para: " + i + ".");
        this.setEquipe = i;
    }
    alterarEnfermaria(x) {
        console.log("Enfermaria '" + this.getEnfermaria + "' alterada através da classe EnfChefe para: " + x + ".");
        this.setEnfermaria = x;
    }
}
exports.EnfChefe = EnfChefe;
