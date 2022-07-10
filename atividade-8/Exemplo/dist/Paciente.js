"use strict";
// classe Paciente
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
class Paciente {
    // métodos especiais
    constructor(nome, status, demanda) {
        // vetor  de Laudos
        this.laudos = [];
        this.nome = nome;
        this.espera = status;
        this.demanda = demanda;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(i) {
        this.nome = i;
    }
    // seta a variavel espera
    get getEspera() {
        return this.espera;
    }
    // retorna true se o paciente está em modo de espera
    set setEspera(i) {
        this.espera = i;
    }
    get getDemanda() {
        return this.demanda;
    }
    set setDemanda(i) {
        this.demanda = i;
    }
    get getLaudos() {
        return this.laudos;
    }
    set setLaudos(i) {
        this.laudos.push(i);
    }
    // métodos
    listarLaudos() {
        console.log("Listando Laudos do(a) Paciente " + this.nome + ":");
        for (const i in this.laudos) {
            console.log("[" + i + "] " + "Data: " + this.laudos[i].getData + " - Conteúdo: " + this.laudos[i].getConteudo);
        }
    }
}
exports.Paciente = Paciente;
