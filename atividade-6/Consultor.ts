// Classe Consultor

import {Funcionario} from "./Funcionario"

export class Consultor extends Funcionario{

    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean){
        super(ID, nome, idade, sexo);
    }
}