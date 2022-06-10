"use strict";
// Classe abstrata Enfermeiro
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enfermeiro = void 0;
const Funcionario_1 = require("./Funcionario");
class Enfermeiro extends Funcionario_1.Funcionario {
    // métodos especiais
    constructor(ID, nome, idade, sexo, turno, enfermaria) {
        super(ID, nome, idade, sexo);
        // atributos
        this.turno = "";
        this.enfermaria = "";
        this.turno = turno;
        this.enfermaria = enfermaria;
    }
    set setTurno(i) {
        this.turno = i;
    }
    get getTurno() {
        return this.turno;
    }
    set setEnfermaria(x) {
        this.enfermaria = x;
    }
    get getEnfermaria() {
        return this.enfermaria;
    }
    // métodos
    alterarEnfermaria(i) {
        console.log("Enfermaria " + this.getEnfermaria + " alterada através da classe Enfermeiro para: " + i + ".");
        this.setEnfermaria = i;
    }
}
exports.Enfermeiro = Enfermeiro;
