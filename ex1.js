// Criação de CLASSE: Pessoa
class Pessoa {
    // Crio uma função para as PROPRIEDADES da classe
    constructor(nome, idade, deitado, emPe) {
        // atributos públicos na instancia da classe: this.variável
        this.nome = nome;
        this.idade = idade;
        this.deitado = deitado;
        this.emPe = emPe;
    }
    // Crio os METODOS
    levantar() {
        // Confiro es está deitado, se sim ativa a função
        if (this.deitado) {
            this.deitado = false;
            this.emPe = true;
            console.log(this.nome + ' levantou.');
        }
        else {
            console.log(this.nome + ' ja está em pé.');
        }
    }
    deitar() {
        if (this.deitado) {
            console.log(this.nome + ' ja está deitado.');
        }
        else {
            this.emPe = false;
            this.deitado = true;
            console.log(this.nome + ' deitou.')
        }
    }
}
// Criação de OBJETO
const p1 = new Pessoa('Joao', 40, true, false);

// Imprimo todas as propriedades do objeto
console.log(p1); // Pessoa {nome: 'Joao', idade: 40, deitado: true, emPe: false}
// Imprimo uma única propriedade
console.log(p1.deitado); // true
// Usar métodos: objeto.metodo();
p1.levantar(); // Joao levantou.
p1.levantar(); // Joao ja está em pé.
p1.deitar(); // Joao deitou.
p1.deitar(); // Joao ja está deitado.

const p2 = new Pessoa('Paulo', 23, false, true);

console.log(p2); // Pessoa {nome: 'Paulo', idade: 23, deitado: false, emPe: true}
p2.deitar(); // Paulo deitou.
p2.levantar(); // Paulo levantou.
console.log(p2.idade); // 23
