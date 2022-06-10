// classe Medico

import { Funcionario } from "./Funcionario"
import { Paciente } from "./Paciente";
import { Laudo } from "./Laudo";

export class Medico extends Funcionario{
    
    // atributos

    private crm: number = Math.random() * 10000;
    
    // métodos especiais

    constructor(nome:string, salarioHora: number, horasExtraTrabalhadas: number,plantonista:boolean) {
        super(nome, salarioHora, horasExtraTrabalhadas, plantonista);
    }

    get getCrm() {
        return this.crm;
    }

    set setCrm(i: number) {
        this.crm = i;
    }

    // métodos

     /*A função atender sobreescreve o da classe funcionário
    pois além de emitir instanciar e incluir um laudo dentro
    de um objeto da classe Cliente, também imprime uma mensagem
    diferente no console*/

    override atender( paciente:Paciente ): void {
        
        // verifica se paciente está em espera
        if( ! (paciente.getEspera) ) {
            console.log("O(a) "+paciente.getNome+" já foi atendido.")
            return;
        }
        
        // demanda é consulta
        if( paciente.getDemanda ) {
            // paciente sai do modo de espera
            paciente.setEspera = false;
            
            // capturando data atual do sistema
            let data = new Date();
            let dia = String(data. getDate()). padStart(2 ,'0');
            let mes = String(data. getMonth() + 1). padStart(2, '0');
            let ano = data. getFullYear();
            let dataAtual = dia + '/' + mes + '/' + ano;
            
            let novoLaudo = new Laudo(dataAtual,"Nenhum conteúdo.");
            // adiciona um novo laudo ao paciente
            paciente.setLaudos = novoLaudo;

            console.log("O(a) médico(a) "+this.getNome+" atendeu o(a) paciente "+paciente.getNome+".");
                      
        }

        else {
            console.log("O paciente "+paciente.getNome+" não pode ser atendido pelo médico "+this.getNome+" por se tratar de demanda admisnistrativa");
        }
               
    }
}