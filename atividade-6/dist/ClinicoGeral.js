"use strict";
// Classe ClinicoGeral
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicoGeral = void 0;
const Medico_1 = require("./Medico");
class ClinicoGeral extends Medico_1.Medico {
    // métodos especiais
    constructor(ID, nome, idade, sexo, crm, turno) {
        super(ID, nome, idade, sexo, crm);
        // atributos
        this.turno = "";
        this.turno = turno;
    }
    set setTurno(i) {
        this.turno = i;
    }
    get getTurno() {
        return this.turno;
    }
    // Métodos
    alterarTurno(v) {
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
    atender() {
        console.log("Atendimento do Clínico Geral em andamento..");
    }
}
exports.ClinicoGeral = ClinicoGeral;
