// Classe TrechoComEscala que também herda Voo
import { Local } from "./Local";
import { TrechoComum } from "./TrechoComum";
import { Voo } from "./Voo";

export class TrechoComEscala extends Voo{

    // atributos
    private trechos: TrechoComum[] // conjunto de trechos comuns

    // métodos especiais

    constructor(origem: Local, destino: Local, data: Date, horaSaida: string, horaChegada: string, aeronave: string, taxa:number, voos: TrechoComum[]) {
        super(origem, destino, data, horaSaida, horaChegada, aeronave, taxa)

        this.trechos = voos
    }

    override getOrigem():string{
        return this.origem.getCidade;
    }

    override getDestino():string{
        return this.destino.getCidade;
    }
    
    // métodos com Polimorfismo por herança
   
       
    // exibe (código, origem, destino, tipo(Comum,ComEscala, taxa) do voo
    override consultar():void{
        console.log("**************************************")
        console.log("Vôo: "+this.id.value)
        console.log("Origem: " + this.origem.getAeroporto)
        console.log("Destino: " + this.destino.getAeroporto)
        console.log("Data: " + this.data.toLocaleDateString('pt-BR'))
        console.log("Aeronave: " + this.aeronave)
        console.log("Taxa: " + this.taxa)
        console.log("Escalas: ")

        // exibindo informações dos trechos que o compõe
        for (const i in this.trechos) {
           console.log("\t" + this.trechos[i].getOrigem() + " - " + this.trechos[i].getDestino())
        }
        console.log("**************************************")
                
          
    }

    // exibe todos os atributos do voo
    override detalhar(): void{
        console.log("**************************************")
        console.log("Vôo: " + this.id)
        console.log("Origem: " + this.origem)
        console.log("Destino: " + this.destino);
        console.log("Data: " + this.data)
        console.log("Taxa Total: " + this.taxa)
        // Exibe a aeronave
        console.log("Aeronave: " + this.aeronave)
       
        console.log("Escalas: ")

        // exibindo informações dos trechos que o compõe
        for (const i in this.trechos) {
           this.trechos[i].detalhar;
        }
        console.log("**************************************")
                
        
    }

    
}
