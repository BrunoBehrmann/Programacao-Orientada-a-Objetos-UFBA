// Classe TrechoComum que herda Voo
import { Assento } from "./Assento";
import { Classe } from "./Enums";
import { Local } from "./Local";
import { Voo } from "./Voo";

export class TrechoComum extends Voo{

    // atributos

    /* contém o id do Trecho com Escala ao quel
    este Trecho comum está associado.
    Inicialmente, ele é instanciado com zero
    para indicar que ele não está associado
    a nenhum outro.*/
    private idTrechoComEscala: number = 0

    // lista de assentos
    protected assentos: Assento[] = []
    
    // métodos especiais
    constructor(origem: Local, destino: Local, data: Date, horaSaida: string, horaChegada: string, aeronave: string, taxa:number){
        super(origem, destino, data, horaSaida, horaChegada, aeronave, taxa)

        // preenche o vetor de assentos
        for (let i = 0; i < 50; i++) {
            this.assentos.push( new Assento( Classe[0] ,Number(i)+1))
        }
    }
    
    override getOrigem():string{
        return this.origem.getCidade;
    }

    override getDestino():string{
        return this.destino.getCidade;
    }

    getAssentos(): Assento[]{
        return this.assentos
    }
    
    // métodos com Polimorfismo por herança
   
    // exibe (código, origem, destino, tipo(Comum,ComEscala, taxa) do voo
    override consultar():void{
        console.log("**************************************")
        console.log("Vôo: "+ this.id.value)
        console.log("Origem: " + this.origem.getAeroporto)
        console.log("Destino: " + this.destino.getAeroporto)
        console.log("Data: " + this.data.toLocaleDateString('pt-BR'))
        console.log("Aeronave: " + this.aeronave)
        console.log("Taxa: " + this.taxa)
        console.log("**************************************")          
    }

    setAssento(assento: number): Assento{
        const currentAssento = this.assentos[assento-1];
        currentAssento.setOcupado = true

        return currentAssento
    }

    // exibe todos os atributos do voo
    override detalhar(): void{
        console.log("**************************************")
        console.log("Vôo: "+ this.id.value)
        console.log("Origem: " + this.origem.getAeroporto)
        console.log("Destino: " + this.destino.getAeroporto)
        console.log("Data: " + this.data.toLocaleDateString('pt-BR'))
        console.log("Taxa: " + this.taxa)
        

        // Exibe a aeronave
        console.log("Aeronave: "+ this.aeronave)  

        //Exibe os assentos
        console.log("Assentos: ")
        for (const i in this.assentos) {
            console.log(`${this.assentos[i].getNumero}: ${this.assentos[i].getOcupado ? 'Ocupado' : 'Livre'}`)
        }

        
        console.log("**************************************")
                
        
    }
}