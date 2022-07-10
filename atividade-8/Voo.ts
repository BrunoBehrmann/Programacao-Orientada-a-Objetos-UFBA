// Classe Abstrata Voo
import { Local } from "./Local";
import { UUID } from "./UUID";

export abstract class  Voo {
    
    // atributos
    protected id: UUID;
    protected origem: Local;
    protected destino: Local;
    protected data: Date;
    protected horaSaida: string;
    protected horaChegada: string;
    protected aeronave: string;
    protected taxa:number;


    // métodos especiais

    constructor(origem: Local, destino: Local, data: Date, horaSaida: string, horaChegada: string, aeronave: string, taxa:number) {
        this.id = new UUID()
        this.origem = origem;
        this.destino = destino;
        this.data = data;
        this.horaSaida = horaSaida;
        this.horaChegada = horaChegada;
        this.aeronave = aeronave
        this.taxa = taxa;
    }

    getId(): string{return this.id.value}
    getOrigem():string{return ""}

    getDestino():string{return ""}

    getData(): Date{return this.data}
    
    // métodos abstratos
    
    // exibe (código, origem, destino, tipo(Comum,ComEscala) do voo
    consultar():void{}

    // exibe todos os atributos do voo
    detalhar(): void{}

}
