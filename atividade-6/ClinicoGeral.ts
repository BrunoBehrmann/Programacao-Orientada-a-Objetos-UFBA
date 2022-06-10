// Classe ClinicoGeral

import {Medico} from "./Medico"

export class ClinicoGeral extends Medico{
    
    // atributos

    private turno: string = "";

    // métodos especiais
    constructor(ID:number, nome:string, idade:number, sexo:boolean, crm:number, turno:string){
        super(ID, nome, idade, sexo, crm);
        this.turno = turno;
    }

    private set setTurno(i:string){
        this.turno = i;
    }

    private get getTurno(){
        return this.turno;
    }


    // Métodos
    alterarTurno(v: string) {
        console.log("Turno alterado para: " + v + ".");
        this.setTurno = v;
    }

     /* método(s) que serão sobrescritos*/
   
    
    /* método(s) que sobrescrevem métodos herdados*/
    /* Na Linguagem Typescript, existe um atributo no
    arquivo 'tsconfig.json' que, quando ativado, obrigam
    as classes filhas a tenham a palavra chave  'override'
    antes dos métodos que sobrecarregam algum método das 
    classes mães. Ao mesmo tempo que, quando houver um 
    método numa classe filha com o 'override', obrigam
    que a classe herdada também o tenha. Esse é um recurso
    que nos dá mais segurança e organização durante a imple-
    mentação. */
    override atender():void {
        console.log("Atendimento do Clínico Geral em andamento..");
    }
}