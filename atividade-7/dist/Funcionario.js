"use strict";
// classe abstrata funcionário
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    // métodos especiais
    constructor(nome, salarioHora, horasExtraTrabalhadas, plantonista) {
        /* a variavel salarioExtraMes guardará
        o valor mensal processado pela função registrar da classe SalarioExtra. */
        this.salarioExtraMes = 0;
        this.nome = nome;
        this.salarioHora = salarioHora;
        this.horasExtraTrabalhadas = horasExtraTrabalhadas;
        this.plantonista = plantonista;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(i) {
        this.nome = i;
    }
    get getSalarioHora() {
        return this.salarioHora;
    }
    set setSalarioHora(i) {
        this.salarioHora = i;
    }
    get getHorasExtraTrabalhadas() {
        return this.horasExtraTrabalhadas;
    }
    set setHorasExtraTrabalhadas(i) {
        this.horasExtraTrabalhadas = i;
    }
    get getSalarioExtraMes() {
        return this.salarioExtraMes;
    }
    set setSalarioExtraMes(i) {
        this.salarioExtraMes = i;
    }
    get getPlantonista() {
        return this.plantonista;
    }
    set setPlantonista(i) {
        this.plantonista = i;
    }
    // métodos
    atender(paciente) {
        console.log("O(a) funcionário(a) " + this.getNome + " atendeu o(a) paciente " + paciente.getNome + ".");
    }
}
exports.Funcionario = Funcionario;
