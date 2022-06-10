"use strict";
// Classe Abstrata Medico
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medico = void 0;
const Funcionario_1 = require("./Funcionario");
class Medico extends Funcionario_1.Funcionario {
    // métodos especiais
    constructor(ID, nome, idade, sexo, crm) {
        super(ID, nome, idade, sexo);
        // atributos
        this.crm = 0;
        this.especialidade = "";
        this.crm = crm;
    }
    set setCrm(i) {
        this.crm = i;
    }
    get getCrm() {
        return this.crm;
    }
    // métodos
    atualizarCrm() {
        console.log("Atualizando CRM..");
    }
    /* método(s) que serão sobrescritos*/
    atender() {
        console.log("Atendimento médico em andamento..");
    }
}
exports.Medico = Medico;
