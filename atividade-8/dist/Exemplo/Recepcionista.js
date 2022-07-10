"use strict";
// classe Recepcionista
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recepcionista = void 0;
const Funcionario_1 = require("./Funcionario");
class Recepcionista extends Funcionario_1.Funcionario {
    // esta classe não possui atributos locais
    // métodos especiais
    constructor(nome, salarioHora, horasExtraTrabalhadas, plantonista) {
        super(nome, salarioHora, horasExtraTrabalhadas, plantonista);
    }
    // métodos
    atender(paciente) {
        // verifica se paciente está em espera
        if (!(paciente.getEspera)) {
            console.log("O(a) " + paciente.getNome + " já foi atendido.");
            return;
        }
        // verifica se o paciente está em espera e a demanda é administrativa
        if (!(paciente.getDemanda)) {
            // paciente é atendimento e sai do modo de espera
            paciente.setEspera = false;
            console.log("O(a) Recepcionista " + this.getNome + " atendeu o(a) paciente " + paciente.getNome);
        }
        else {
            console.log("O(a) Recepcionista " + this.getNome + " atendeu o(a) paciente " + paciente.getNome + ".");
            console.log(paciente.getNome + " aguarda consulta médica.");
        }
    }
    cadastrarPaciente() {
        console.log("Recepcionista cadastrando paciente");
    }
}
exports.Recepcionista = Recepcionista;
