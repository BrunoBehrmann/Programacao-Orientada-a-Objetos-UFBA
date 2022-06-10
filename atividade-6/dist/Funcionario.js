"use strict";
// Classe Abstrata Funcionario
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    /* Obs.: atributos precisam
    ser inicializados para quem
    não precisem ser necessáriamente
    serpassados como parâmetros
    no construtor */
    constructor(ID, nome, idade, sexo) {
        this.ID = 0;
        this.nome = "";
        this.idade = 0;
        this.sexo = false;
        this.ID = ID;
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    atualizarCadastro() {
        console.log("Atualizando Cadastro");
    }
    set setID(i) {
        this.ID = i;
    }
    get getID() {
        return this.ID;
    }
    set setNome(i) {
        this.nome = i;
    }
    get getNome() {
        return this.nome;
    }
    set setIdade(i) {
        this.idade = i;
    }
    get getIdade() {
        return this.idade;
    }
    set setSexo(i) {
        this.sexo = i;
    }
    get getSexo() {
        return this.sexo;
    }
}
exports.Funcionario = Funcionario;
/*
Podemos observar que o comando abaixo
não será possível pois Funcionario
é uma classe abstrata, e por isso
não pode ser instanciada.

const will = new Funcionario()
*/
//module.export = funcionario
