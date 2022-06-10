// Classe Pediatra

import {Medico} from "./Medico"

export class Pediatra extends Medico{
    
    // atributos
    private idadeAtendida: number = 0;

    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean, crm:number, idadeAtendida: number){
        super(ID, nome, idade, sexo, crm);
        this.idadeAtendida = idadeAtendida;
    }
    
    set setIdadeAtendida(i:number){
        this.idadeAtendida = i
    }

    get getIdadeAtendida(){
        return this.idadeAtendida
    }
    
    // métodos
    MudarIdadeAtendida(): void {
        this.setIdadeAtendida = this.getIdadeAtendida+2;
        console.log("Pediatra aumentando idade atendida em + 2 anos..");
    }

    /* método(s) que serão sobrescritos*/
         
    override atender():void {
        console.log("Atendimento do Pediatra em andamento..");
    }
}