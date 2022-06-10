// classe Recepcionista

import { Funcionario } from "./Funcionario"
import { Paciente } from "./Paciente";

export class Recepcionista extends Funcionario{

    // esta classe não possui atributos locais

    // métodos especiais
    
    constructor(nome:string, salarioHora: number, horasExtraTrabalhadas: number,plantonista:boolean) {
        super(nome,salarioHora, horasExtraTrabalhadas,plantonista);
    }

    // métodos
    override atender( paciente:Paciente ): void {
        
        // verifica se paciente está em espera
        if( ! (paciente.getEspera) ){
            console.log("O(a) "+paciente.getNome+" já foi atendido.")
            return;
        }
        
        // verifica se o paciente está em espera e a demanda é administrativa
        if( !(paciente.getDemanda) ){
            // paciente é atendimento e sai do modo de espera
            paciente.setEspera = false;
            console.log("O(a) Recepcionista "+this.getNome+" atendeu o(a) paciente "+paciente.getNome)
        }
        else{
            console.log("O(a) Recepcionista "+this.getNome+" atendeu o(a) paciente "+paciente.getNome+".")
            console.log(paciente.getNome+" aguarda consulta médica.")
        }
        
        
    }
    
    cadastrarPaciente(): void{
        console.log("Recepcionista cadastrando paciente");
    }
}
