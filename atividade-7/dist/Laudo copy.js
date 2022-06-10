"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atendimento = void 0;
const Medico_1 = require("./Medico");
const Paciente_1 = require("./Paciente");
const Recepcionista_1 = require("./Recepcionista");
class Atendimento {
    constructor(id) {
        this.id = 0;
        this.paciente = new Paciente_1.Paciente(0, '');
        this.recepcionista = new Recepcionista_1.Recepcionista(0, '', 0, false);
        this.medico = new Medico_1.Medico(Math.random() * 100, "", 0, false);
        this.nomeDepartamento = '';
        this.status = false;
        this.tipo = 0;
        this.id = id;
    }
    get getParciente() {
        return this.paciente;
    }
    set setPaciente(i) {
        this.paciente = i;
    }
    get getId() {
        return this.id;
    }
    set setId(i) {
        this.id = i;
    }
    get getNomeDepartamento() {
        return this.nomeDepartamento;
    }
    set setNomeDepartamento(i) {
        this.nomeDepartamento = i;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(i) {
        this.status = i;
    }
    get getTipo() {
        return this.tipo;
    }
    set set(i) {
        this.tipo = i;
    }
    iniciar(r, p, m) {
        this.recepcionista = r;
        this.paciente = p;
        this.medico = m;
    }
    encerrar() {
        //
    }
}
exports.Atendimento = Atendimento;
