// Classe Administrador

import {Medico} from "./Medico"
import {ClinicoGeral} from "./ClinicoGeral"

export class Administrador extends Medico{
    
    // atributos
    // Cria um array do tipo list vazio
    private listaMedicos: Array<Medico> = []

    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean, crm:number){
        super(ID, nome, idade, sexo, crm);
    }
    
    set setListaMedicos(i:Medico){
        this.listaMedicos.push(i)
    }

    get getListaMedicos(){
        return this.listaMedicos

    }

    
    // métodos
    adicionarMedico(): void {
        
        // guardando os dados do novo médico 
        let ID:number = 2,
            nome:string = "Eduardo", 
            idade:number = 30, 
            sexo:boolean = false, // false = ex.: feminino 
            crm:number = 0;

        console.log("Adiministrador adicionando novo médico..");
        let novoMedico = new Medico(ID,nome,idade,sexo,crm);

        // setando novo médico na lista de médicos
        // Para ex.: Clinico Geral
        this.setListaMedicos = novoMedico
    }

    removerMedico(id : number): void {
        console.log("Adiministrador removendo um médico..");
        // removendo o médico indicado pelo id da lista
        this.getListaMedicos.splice(id)
    }

    alterarEspecialidade(s: string): void {
        console.log("Adiministrador alterando especialidade..");
        this.especialidade = s
    }

    /* método(s) que serão sobrescritos*/
   
    
    /* método(s) que sobrescrevem métodos herdados*/
    /* A Linguagem Typescript sobreescreve de forma 
    automática, ou seja, não precisa da palavra-chave
    '@Override" */
    override atender():void {
        console.log("Atendimento do Administrador em andamento..");
    }
}

