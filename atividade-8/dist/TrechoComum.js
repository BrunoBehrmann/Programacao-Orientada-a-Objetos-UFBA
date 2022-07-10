"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrechoComum = void 0;
// Classe TrechoComum que herda Voo
const Assento_1 = require("./Assento");
const Enums_1 = require("./Enums");
const Voo_1 = require("./Voo");
class TrechoComum extends Voo_1.Voo {
    // métodos especiais
    constructor(origem, destino, data, horaSaida, horaChegada, aeronave, taxa) {
        super(origem, destino, data, horaSaida, horaChegada, aeronave, taxa);
        // atributos
        /* contém o id do Trecho com Escala ao quel
        este Trecho comum está associado.
        Inicialmente, ele é instanciado com zero
        para indicar que ele não está associado
        a nenhum outro.*/
        this.idTrechoComEscala = 0;
        // lista de assentos
        this.assentos = [];
        // preenche o vetor de assentos
        for (let i = 0; i < 50; i++) {
            this.assentos.push(new Assento_1.Assento(Enums_1.Classe[0], Number(i) + 1));
        }
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
    getAssentos() {
        return this.assentos;
    }
    // métodos com Polimorfismo por herança
    // exibe (código, origem, destino, tipo(Comum,ComEscala, taxa) do voo
    consultar() {
        console.log("**************************************");
        console.log("Vôo: " + this.id.value);
        console.log("Origem: " + this.origem.getAeroporto);
        console.log("Destino: " + this.destino.getAeroporto);
        console.log("Data: " + this.data.toLocaleDateString('pt-BR'));
        console.log("Taxa: " + this.taxa);
        console.log("**************************************");
    }
    setAssento(assento) {
        const currentAssento = this.assentos[assento - 1];
        currentAssento.setOcupado = true;
        return currentAssento;
    }
    // exibe todos os atributos do voo
    detalhar() {
        console.log("**************************************");
        console.log("Vôo: " + this.id.value);
        console.log("Origem: " + this.origem.getAeroporto);
        console.log("Destino: " + this.destino.getAeroporto);
        console.log("Data: " + this.data.toLocaleDateString('pt-BR'));
        console.log("Taxa: " + this.taxa);
        //Exibe os dias
        console.log("Dias: ");
        for (const i in this.dias) {
            console.log(this.dias[i]);
        }
        // Exibe a aeronave
        console.log("Aeronave: " + this.aeronave);
        //Exibe os assentos
        console.log("Assentos: ");
        for (const i in this.assentos) {
            console.log(`${this.assentos[i].getNumero}: ${this.assentos[i].getOcupado ? 'Ocupado' : 'Livre'}`);
        }
        console.log("**************************************");
    }
}
exports.TrechoComum = TrechoComum;
