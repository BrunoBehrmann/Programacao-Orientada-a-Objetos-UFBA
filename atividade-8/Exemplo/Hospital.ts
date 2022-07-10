// classe Hospital

import { Departamento } from "./Departamento";
import { Paciente } from "./Paciente";


export class Hospital {
    
    // atributos
    private id: number = Math.random() * 100;
    private nome: string;
    private departamentos: Array<Departamento> = [];
    private pacientes: Array<Paciente> = [];
    
    // métodos especiais
    constructor( nome: string) {
        this.nome = nome;
    }

    get getId() {
        return this.id;
    }

    set setId(i: number) {
        this.id = i;
    }

    get getNome() {
        return this.nome;
    }

    set setNome(i: string) {
        this.nome = i;
    }

    get getDepartamento() {
        return this.departamentos;
    }

    set setDepartamento(i: Departamento) {
        this.departamentos.push(i);
    }

    get getPaciente() {
        return this.pacientes;
    }

    set setPaciente(i: Paciente){
        this.pacientes.push(i);
    }

    get qtd_departamentos() {
        return this.departamentos.length;
    }
    // retorna quantidade de apartamentos no vetor

    get qtd_pacientes() {
        return this.pacientes.length;
    }
    // retorna quantidade de pacientes no vetor

    // métodos
    cadastrarDepartamento(nome: string) {
        let novoDepartamento = new Departamento(nome);
        this.setDepartamento = novoDepartamento;
        // seta um novo departamento
    }

    cadastrarPaciente(nome: string) {
        let novoPaciente = new Paciente(nome,false,false);
        this.setPaciente = novoPaciente;
        // seta um novo departamento
    }
}