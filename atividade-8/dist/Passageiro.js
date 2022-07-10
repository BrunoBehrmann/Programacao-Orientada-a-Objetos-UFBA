"use strict";
// Classe Passageiro
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passageiro = void 0;
const UUID_1 = require("./UUID");
class Passageiro {
    //métodos especiais
    constructor(nome, status) {
        this.reservas = [];
        this.idPassageiro = new UUID_1.UUID();
        this.nome = nome;
        this.status = status;
    }
    get getIdPassageiro() {
        return this.idPassageiro;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(i) {
        this.nome = i;
    }
    get getReserva() {
        return this.reservas;
    }
    set setId(i) {
        this.reservas.push(i);
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(i) {
        this.status = i;
    }
    setReserva(reserva) {
        this.reservas.push(reserva);
    }
    //
    listarReservas() {
        this.getReserva;
    }
    detalharReserva(i) {
        console.log('*** detalhes da reserva ***');
        console.log('id da reserva: ' + i.getId);
        console.log('id do passageiro: ' + this.getIdPassageiro);
        console.log('data: ' + i.getData);
        console.log('voos: ' + i.getVoos);
        console.log('status: ' + i.getStatus);
        console.log('taxa: ' + i.getTaxa);
        console.log('assento: ' + i.getAssento);
    }
    prorrogarReserva(i, x) {
        i.setData = x;
    }
}
exports.Passageiro = Passageiro;
