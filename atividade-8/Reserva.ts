// Classe Reserva

import { Assento } from "./Assento";
import { UUID } from "./UUID";
import { Voo } from "./Voo";

export class Reserva{
    
    // atributos
    private id: UUID;
    idPassageiro: UUID;
    private data: Date;
    private voos: Voo[] = [];
    private status: boolean = true; // status = true por default
    private taxa: number;
    private assentos: Assento[];

    addVoo(voo: Voo) {
        this.voos.push(voo)
    }

    removerVoo(voo: Voo) {
        this.voos.splice(this.voos.indexOf(voo))
    }

    // métodos especiais
    constructor(idPassageiro: UUID, data: Date, status: boolean, taxa: number, assentos: Assento[]){
        this.id = new UUID()
        this.idPassageiro = idPassageiro
        this.data = data;
        this.taxa = taxa;
        this.assentos = assentos
    }
     
    get getId() {
        return this.id
    }

    get getVoos(){
        return this.voos
    }

    set setData(date: Date) {
        this.data = date
    }

    get getData() {
        return this.data
    }

    get getStatus() {
        return this.status
    }

    set setStatus(status: boolean) {
        this.status = status
    }
    
    get getTaxa() {
        return this.taxa
    }

    get getAssento() {
        return this.assentos
    }

    addAssento(assento: Assento) {
        this.assentos.push(assento)
    }
}