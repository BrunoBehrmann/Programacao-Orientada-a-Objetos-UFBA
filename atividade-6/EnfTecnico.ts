// Classe Tecnico

import {Enfermeiro} from "./Enfermeiro"

export class EnfTecnico extends Enfermeiro{
    
    // atributos
    private especEnf: string = "";

    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean, turno:string, enfermaria:string, especEnf:string){
        super(ID, nome, idade, sexo, turno, enfermaria);
        this.especEnf = especEnf;
    }

    private set setEspecEnf(i:string){
        this.especEnf = i;
    }

    private get getEspecEnf(){
        return this.especEnf;
    }

    
    // métodos
    alterarEspecEnf(i: string): void{
        console.log("Especialidade do enfermeiro alterada para: " + i + ".");
        this.setEspecEnf = i;
    }
}