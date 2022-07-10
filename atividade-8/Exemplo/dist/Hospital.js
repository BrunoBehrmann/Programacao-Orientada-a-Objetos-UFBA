"use strict";
// classe Hospital
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospital = void 0;
const Departamento_1 = require("./Departamento");
const Paciente_1 = require("./Paciente");
class Hospital {
    // métodos especiais
    constructor(nome) {
        // atributos
        this.id = Math.random() * 100;
        this.departamentos = [];
        this.pacientes = [];
        this.nome = nome;
    }
    get getId() {
        return this.id;
    }
    set setId(i) {
        this.id = i;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(i) {
        this.nome = i;
    }
    get getDepartamento() {
        return this.departamentos;
    }
    set setDepartamento(i) {
        this.departamentos.push(i);
    }
    get getPaciente() {
        return this.pacientes;
    }
    set setPaciente(i) {
        this.pacientes.push(i);
    }
    get qtd_departamentos() {
        return this.departamentos.length;
    }
    // retorna quantidade de apartamentos no vetor
    get qtd_pacientes() {
        return this.pacientes.length;
    }
    // retorna quantidade de pacientes no vetor
    // métodos
    cadastrarDepartamento(nome) {
        let novoDepartamento = new Departamento_1.Departamento(nome);
        this.setDepartamento = novoDepartamento;
        // seta um novo departamento
    }
    cadastrarPaciente(nome) {
        let novoPaciente = new Paciente_1.Paciente(nome, false, false);
        this.setPaciente = novoPaciente;
        // seta um novo departamento
    }
}
exports.Hospital = Hospital;
