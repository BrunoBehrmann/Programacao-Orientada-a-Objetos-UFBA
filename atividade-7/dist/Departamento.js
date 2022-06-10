"use strict";
// classe Departamento
Object.defineProperty(exports, "__esModule", { value: true });
exports.Departamento = void 0;
class Departamento {
    // métodos especiais
    constructor(nome) {
        this.funcionarios = []; //vetor vazio
        this.nome = nome;
    }
    get getFuncionarios() {
        return this.funcionarios;
    }
    set setFuncionarios(i) {
        this.funcionarios.push(i);
    }
    get getNome() {
        return this.nome;
    }
    set setNome(i) {
        this.nome = i;
    }
    // métodos
    listarFuncionarios() {
        console.log("*******************************************************");
        console.log("Listando funcionários do departamento " + this.getNome + ":");
        for (const i in this.funcionarios) {
            console.log("[" + i + "] " + this.funcionarios[i].getNome + ": " + this.funcionarios[i].constructor.name);
        }
        console.log("*******************************************************");
    }
}
exports.Departamento = Departamento;
