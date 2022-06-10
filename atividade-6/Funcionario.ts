// Classe Abstrata Funcionario

export abstract class Funcionario{

    private ID: number = 0;
    private nome: string = "";
    private idade: number = 0;
    private sexo: boolean = false;

    /* Obs.: atributos precisam 
    ser inicializados para quem
    não precisem ser necessáriamente
    serpassados como parâmetros 
    no construtor */

    constructor(ID:number, nome:string, idade:number, sexo:boolean) {
        this.ID = ID;
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    atualizarCadastro() : void{
        console.log("Atualizando Cadastro")
    }

    private set setID(i:number){
        this.ID = i
    }

    private get getID(){
        return this.ID
    }

    private set setNome(i:string){
        this.nome = i
    }

    private get getNome(){
        return this.nome
    }

    private set setIdade(i:number){
        this.idade = i
    }

    private get getIdade(){
        return this.idade
    }

    private set setSexo(i:boolean){
        this.sexo = i
    }

    private get getSexo(){
        return this.sexo
    }
}

/*  
Podemos observar que o comando abaixo
não será possível pois Funcionario
é uma classe abstrata, e por isso
não pode ser instanciada.

const will = new Funcionario()
*/



//module.export = funcionario