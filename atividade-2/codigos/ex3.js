// crio classe
class Produto {
    // crio atributos
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorProduto(){
        if(this.quantidade <= 10) {
            console.log("Valor " + this.nome + "s sem desconto: R$" + (this.quantidade*this.preco));
        }
        else if(10 < this.quantidade && this.quantidade <= 20) {
            console.log("Valor " + this.nome + "s com 10% de desconto: R$" + (this.quantidade*this.preco - (this.quantidade*this.preco)*0.10));
        }
        else if(20 < this.quantidade && this.quantidade <= 50) {
            console.log("Valor " + this.nome + "s com 20% de desconto: R$" + (this.quantidade*this.preco - (this.quantidade*this.preco)*0.20));
        }
        else if(50 < this.quantidade) {
            console.log("Valor " + this.nome + "s com 25% de desconto: R$" + (this.quantidade*this.preco - (this.quantidade*this.preco)*0.25));
        }
    }
}
// crio os objetos (produtos)
const m1 = new Produto("leite", 4, 5);
m1.valorProduto(); //Valor leites sem desconto: R$20

const m2 = new Produto("carne", 50.00, 20);
m2.valorProduto(); //Valor carnes com 10% de desconto: R$900

const m3 = new Produto("ovo", 0.5, 30);
m3.valorProduto(); //Valor ovos com 10% de desconto: R$13.5

const m4 = new Produto("folha", 0.10, 100);
m4.valorProduto(); //Valor folhas com 25% de desconto: R$7.5