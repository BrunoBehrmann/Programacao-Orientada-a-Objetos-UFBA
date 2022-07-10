"use strict";
// Classe Reserva
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
const UUID_1 = require("./UUID");
class Reserva {
    // métodos especiais
    constructor(idPassageiro, data, status, taxa, assentos) {
        this.voos = [];
        this.status = true; // status = true por default
        this.id = new UUID_1.UUID();
        this.idPassageiro = idPassageiro;
        this.data = data;
        this.taxa = taxa;
        this.assentos = assentos;
    }
    addVoo(voo) {
        this.voos.push(voo);
    }
    removerVoo(voo) {
        this.voos.splice(this.voos.indexOf(voo));
    }
    get getId() {
        return this.id;
    }
    get getVoos() {
        return this.voos;
    }
    set setData(date) {
        this.data = date;
    }
    get getData() {
        return this.data;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
    get getTaxa() {
        return this.taxa;
    }
    get getAssento() {
        return this.assentos;
    }
    addAssento(assento) {
        console.log("OOOOOOOOOOOOOOOOOOOI", assento);
        this.assentos.push(assento);
    }
}
exports.Reserva = Reserva;
