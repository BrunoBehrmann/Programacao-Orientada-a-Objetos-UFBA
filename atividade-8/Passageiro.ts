// Classe Passageiro

import { UUID } from "./UUID";
import { Reserva } from "./Reserva";

export class Passageiro{
  
    private idPassageiro: UUID;
    private nome: string;
    private reservas: Array<Reserva> = [];
    private status: boolean;

    //métodos especiais
    constructor(nome: string, status:boolean){
        this.idPassageiro = new UUID()
        this.nome = nome;
        this.status = status;
    }

    get getIdPassageiro() {
        return this.idPassageiro;
    }

    get getNome() {
        return this.nome;
    }

    set setNome(i: string) {
        this.nome = i;
    }

    get getReserva() {
        return this.reservas;
    }

    set setId(i: Reserva) {
        this.reservas.push(i);
    }

    get getStatus() {
        return this.status;
    }

    set setStatus(i: boolean) {
        this.status = i;
    }

    setReserva( reserva: Reserva) {
        this.reservas.push(reserva)
    }

    //
    listarReservas(){
        this.getReserva;
    }
}