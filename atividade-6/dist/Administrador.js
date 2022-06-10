"use strict";
// Classe Administrador
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrador = void 0;
const Medico_1 = require("./Medico");
class Administrador extends Medico_1.Medico {
    // métodos especiais
    constructor(ID, nome, idade, sexo, crm) {
        super(ID, nome, idade, sexo, crm);
        // atributos
        // Cria um array do tipo list vazio
        this.listaMedicos = [];
    }
    set setListaMedicos(i) {
        this.listaMedicos.push(i);
    }
    get getListaMedicos() {
        return this.listaMedicos;
    }
    // métodos
    adicionarMedico() {
        // guardando os dados do novo médico 
        let ID = 2, nome = "Eduardo", idade = 30, sexo = false, // false = ex.: feminino 
        crm = 0;
        console.log("Adiministrador adicionando novo médico..");
        let novoMedico = new Medico_1.Medico(ID, nome, idade, sexo, crm);
        // setando novo médico na lista de médicos
        // Para ex.: Clinico Geral
        this.setListaMedicos = novoMedico;
    }
    removerMedico(id) {
        console.log("Adiministrador removendo um médico..");
        // removendo o médico indicado pelo id da lista
        this.getListaMedicos.splice(id);
    }
    alterarEspecialidade(s) {
        console.log("Adiministrador alterando especialidade..");
        this.especialidade = s;
    }
    /* método(s) que serão sobrescritos*/
    /* método(s) que sobrescrevem métodos herdados*/
    /* A Linguagem Typescript sobreescreve de forma
    automática, ou seja, não precisa da palavra-chave
    '@Override" */
    atender() {
        console.log("Atendimento do Administrador em andamento..");
    }
}
exports.Administrador = Administrador;
