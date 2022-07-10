"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
const UUID_1 = require("./UUID");
class Voo {
    // métodos especiais
    constructor(origem, destino, data, horaSaida, horaChegada, aeronave, taxa) {
        this.dias = [];
        this.id = new UUID_1.UUID();
        this.origem = origem;
        this.destino = destino;
        this.data = data;
        this.horaSaida = horaSaida;
        this.horaChegada = horaChegada;
        this.aeronave = aeronave;
        this.taxa = taxa;
    }
    getId() { return this.id.value; }
    getOrigem() { return ""; }
    getDestino() { return ""; }
    getDias() { return [""]; }
    getData() { return this.data; }
    // métodos abstratos
    // exibe (código, origem, destino, tipo(Comum,ComEscala) do voo
    consultar() { }
    // exibe todos os atributos do voo
    detalhar() { }
}
exports.Voo = Voo;
