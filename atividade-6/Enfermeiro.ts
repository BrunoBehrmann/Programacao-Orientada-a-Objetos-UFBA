// Classe abstrata Enfermeiro

import {Funcionario} from "./Funcionario"

export abstract class Enfermeiro extends Funcionario{
    
    // atributos
    private turno: string = "";
    protected enfermaria: string = "";

    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean, turno:string, enfermaria:string){
        super(ID, nome, idade, sexo);
        this.turno = turno;
        this.enfermaria = enfermaria;
    }

    set setTurno(i:string){
        this.turno = i;
    }

    get getTurno(){
        return this.turno;
    }

    protected set setEnfermaria(x:string){
        this.enfermaria = x;
    }

    protected get getEnfermaria(){
        return this.enfermaria;
    }

    // métodos

    alterarEnfermaria(i: string): void{
        console.log("Enfermaria " + this.getEnfermaria + " alterada através da classe Enfermeiro para: " + i + ".");
        this.setEnfermaria = i;
    }
}