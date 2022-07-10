// classe Departamento

import { Funcionario } from "./Funcionario";

export class Departamento {
    
    //atributos

    private nome: string;
    private funcionarios: Array<Funcionario> = [] //vetor vazio

    // métodos especiais

    constructor(nome: string) {
        this.nome = nome;
    }

    get getFuncionarios() {
        return this.funcionarios;
    }

    set setFuncionarios(i: Funcionario) {
        this.funcionarios.push(i);
    }

    get getNome() {
        return this.nome;
    }

    set setNome(i: string) {
        this.nome = i;
    }

    // métodos
    listarFuncionarios() {
        console.log("Listando funcionários do departamento "+this.getNome+":")

        for (const i in this.funcionarios) {
            console.log("["+i+"] "+this.funcionarios[i].getNome+": "+this.funcionarios[i].constructor.name)
        }
    }
}