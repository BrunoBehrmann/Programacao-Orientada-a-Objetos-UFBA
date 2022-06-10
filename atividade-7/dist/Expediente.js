"use strict";
// classe Expediente
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expediente = void 0;
class Expediente {
    constructor(ID_fun, horaEntrada, horaSaida, turno, entrada, saida) {
        this.ID_fun = ID_fun;
        this.horaEntrada = horaEntrada;
        this.horaSaida = horaSaida;
        this.turno = turno;
        this.entrada = entrada;
        this.saida = saida;
    }
    get getID_fun() {
        return this.ID_fun;
    }
    set setID_fun(i) {
        this.ID_fun = i;
    }
    get getHoraEntrada() {
        return this.horaEntrada;
    }
    set setHoraEntrada(i) {
        this.horaEntrada = i;
    }
    get getHoraSaida() {
        return this.horaSaida;
    }
    set setHoraSaida(i) {
        this.horaSaida = i;
    }
    get getTurno() {
        return this.turno;
    }
    set setTurno(i) {
        this.turno = i;
    }
    get getEntrada() {
        return this.entrada;
    }
    set setEntrada(i) {
        this.entrada = i;
    }
    get getSaida() {
        return this.saida;
    }
    set setSaida(i) {
        this.saida = i;
    }
    alterarTurno(x) {
        //
    }
}
exports.Expediente = Expediente;
