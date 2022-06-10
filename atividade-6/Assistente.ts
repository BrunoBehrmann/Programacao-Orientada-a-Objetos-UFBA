// Classe Assistente

import {Medico} from "./Medico"

export class Assistente extends Medico{
    
    // atributos
    private nivel: number = 0;

    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean, nivel:number){
        super(ID, nome, idade, sexo, nivel);
        this.nivel = nivel;
    }

    private set setNivel(i:number){
        this.nivel = i;
    }

    private get getNivel(){
        return this.nivel;
    }


    // Métodos
    alterarNivel(v: number): void{
        console.log("Nivel alterado para: " + v + ".");
        this.setNivel = v;
    }

    // método sobrescrito
    override atender(): void {
        console.log("Atendimento do assitente em andamento..");
    }
}