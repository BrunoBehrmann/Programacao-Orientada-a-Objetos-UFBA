"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrechoComEscala = void 0;
const Voo_1 = require("./Voo");
class TrechoComEscala extends Voo_1.Voo {
    // métodos especiais
    constructor(origem, destino, data, horaSaida, horaChegada, aeronave, taxa, ...voos) {
        super(origem, destino, data, horaSaida, horaChegada, aeronave, taxa);
        this.trechos = voos;
    }
    getOrigem() {
        return this.origem.getCidade;
    }
    getDestino() {
        return this.destino.getCidade;
    }
    getDias() {
        return this.dias;
    }
    // métodos com Polimorfismo por herança
    // exibe (código, origem, destino, tipo(Comum,ComEscala, taxa) do voo
    consultar() {
        console.log("**************************************");
        console.log("Vôo: " + this.id);
        console.log("Origem: " + this.origem);
        console.log("Destino: " + this.destino);
        console.log("Data: " + this.data);
        console.log("Taxa: " + this.taxa);
        console.log("Escalas: ");
        // exibindo informações dos trechos que o compõe
        for (const i in this.trechos) {
            this.trechos[i].getOrigem;
        }
        console.log("**************************************");
    }
    // exibe todos os atributos do voo
    detalhar() {
        console.log("**************************************");
        console.log("Vôo: " + this.id);
        console.log("Origem: " + this.origem);
        console.log("Destino: " + this.destino);
        console.log("Data: " + this.data);
        console.log("Taxa Total: " + this.taxa);
        //Exibe os dias
        console.log("Dias: ");
        for (const i in this.dias) {
            console.log(this.dias[i]);
        }
        // Exibe a aeronave
        console.log("Aeronave: " + this.aeronave);
        console.log("Escalas: ");
        // exibindo informações dos trechos que o compõe
        for (const i in this.trechos) {
            this.trechos[i].detalhar;
        }
        console.log("**************************************");
    }
}
exports.TrechoComEscala = TrechoComEscala;
