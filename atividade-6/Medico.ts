// Classe Abstrata Medico

import {Funcionario} from "./Funcionario"

export class Medico extends Funcionario{
    
    // atributos
    crm: number = 0;
    protected especialidade: string = "";

    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean, crm:number){
        super(ID, nome, idade, sexo);
        this.crm = crm;
    }

    private set setCrm(i:number){
        this.crm = i
    }

    private get getCrm(){
        return this.crm
    }

    
    // métodos
    atualizarCrm(): void{
        console.log("Atualizando CRM..");
    }

    /* método(s) que serão sobrescritos*/
    atender():void {
        console.log("Atendimento médico em andamento..");
    }
}