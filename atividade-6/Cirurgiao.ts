// Classe Cirurgiao

import {Medico} from "./Medico"

export class Cirurgiao extends Medico{
    
    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean, crm:number){
        super(ID, nome, idade, sexo, crm);
    }
    
    /*Cirurgião possui apenas atributos
    e métodos herdados */
    
}