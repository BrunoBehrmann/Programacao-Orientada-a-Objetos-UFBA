// Classe Chefe

import {Enfermeiro} from "./Enfermeiro"

export class EnfChefe extends Enfermeiro{
    
    // atributos
    private equipe: string = "";

    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean, turno:string, enfermaria:string, equipe:string){
        super(ID, nome, idade, sexo, turno, enfermaria);
        this.equipe = equipe;
    }

    private set setEquipe(i:string){
        this.equipe = i;
    }

    private get getEquipe(){
        return this.equipe;
    }
    
    // métodos
    alterarEquipe(i: string): void{
        console.log("Equipe alterada para: " + i + ".");
        this.setEquipe = i;
    }
    
    override alterarEnfermaria(x: string): void{
        console.log("Enfermaria '"+this.getEnfermaria+"' alterada através da classe EnfChefe para: " + x + ".");
        this.setEnfermaria = x;
    }
}