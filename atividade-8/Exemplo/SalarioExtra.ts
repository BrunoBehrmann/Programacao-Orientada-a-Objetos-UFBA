
// classe SalarioExtra

import { Funcionario } from "./Funcionario";

export class SalarioExtra {
    
    // atributos
    // valor da hora extra é 50% maior que a hora normal
    static percentual: number = 0.5;
    

    // métodos especiais
    constructor() {
       
    }

    /*a variavel percentual não usa getter e setter 
    pois é uma variavel static */
    
    // métodos

    static registrar(f:Funcionario): void{
        
        /* Salario extra do mês é igual as horas extras
        trabalhadas multiplicadas por (valor atual do salário
        horas + o valor proporcional ao percentual acrescido) */

        f.setSalarioExtraMes = f.getHorasExtraTrabalhadas * ( f.getSalarioHora + (f.getSalarioHora * this.percentual) );
        
        /*Podemos perceber um polimorfismo na função anterior
        pois o Salaŕio Hora de cada subclasse pode ser diferente.*/
        
    }
    
    
}