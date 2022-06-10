// classe Paciente

import { Laudo } from "./Laudo";

export class Paciente {
    
    // atributos
    private nome: string;
    
    // em true indica que paciente está em espera
    private espera: boolean;

    /* Em true indica que demanda é de consulta,
       em false a demanda é administrativa */
    private demanda: boolean;

    // vetor  de Laudos
    private laudos: Array<Laudo> = [];
    
    // métodos especiais
    constructor(nome: string, status:boolean,demanda: boolean) {
        this.nome = nome;
        this.espera = status;
        this.demanda = demanda;
    }

    get getNome() {
        return this.nome;
    }

    set setNome(i: string) {
        this.nome = i;
    }
    
    // seta a variavel espera
    get getEspera() {
        return this.espera;
    }
    // retorna true se o paciente está em modo de espera
    set setEspera(i: boolean) {
        this.espera = i;
    }

    get getDemanda() {
        return this.demanda;
    }

    set setDemanda(i: boolean) {
        this.demanda = i;
    }

    get getLaudos() {
        return this.laudos;
    }

    set setLaudos(i: Laudo) {
        this.laudos.push(i);
    }
    
    // métodos

    listarLaudos(): void{
        console.log("*******************************************************")
        console.log("Listando Laudos do(a) Paciente "+this.nome+":")

        for (const i in this.laudos) {
            console.log("["+i+"] "+"Data: "+this.laudos[i].getData+" - Conteúdo: "+this.laudos[i].getConteudo)
        }
        console.log("*******************************************************")
    }
}