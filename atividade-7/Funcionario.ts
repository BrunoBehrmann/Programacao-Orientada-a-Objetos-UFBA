// classe abstrata funcionário

import { Paciente } from "./Paciente";

export abstract class Funcionario{

    // atributos

    private nome: string;
    private salarioHora: number;
    private horasExtraTrabalhadas: number;
    
    /* a variavel salarioExtraMes guardará 
    o valor mensal processado pela função registrar da classe SalarioExtra. */
  
    private salarioExtraMes: number = 0;    

    // em true, indica que funcionario é plantonista
    private plantonista: boolean;

    // métodos especiais

    constructor(nome:string, salarioHora: number, horasExtraTrabalhadas: number, plantonista:boolean) {
        this.nome = nome;
        this.salarioHora = salarioHora;
        this.horasExtraTrabalhadas = horasExtraTrabalhadas;
        this.plantonista = plantonista;
    }
    
    get getNome(){
        return this.nome;
    }

    set setNome(i:string){
        this.nome = i;
    }

    get getSalarioHora(){
        return this.salarioHora;
    }

    set setSalarioHora(i:number){
        this.salarioHora = i;
    }

    get getHorasExtraTrabalhadas(){
        return this.horasExtraTrabalhadas;
    }

    set setHorasExtraTrabalhadas(i:number){
        this.horasExtraTrabalhadas = i;
    }

    get getSalarioExtraMes(){
        return this.salarioExtraMes;
    }

    set setSalarioExtraMes(i:number){
        this.salarioExtraMes = i;
    }

    get getPlantonista(){
        return this.plantonista;
    }

    set setPlantonista(i:boolean){
        this.plantonista = i;
    }

    // métodos

    atender( paciente:Paciente ): void{
              
        console.log("O(a) funcionário(a) "+this.getNome+" atendeu o(a) paciente "+paciente.getNome+".")
    }

}