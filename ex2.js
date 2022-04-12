// crio a classe
class ContaCorrente {
    // crio os atributos da classe
    constructor(numero, saldo, statusEspecial, limite, movimentacoes) {
        this.numero = numero;
        this.saldo = saldo;
        this.statusEspecial = statusEspecial;
        this.limite = limite;
        this.movimentacoes = movimentacoes;
    }
    // crio os métodos da classe
    sacar(valorSacar) {
        // se o valor saque é menor ou igual ao saldo
        if(valorSacar <= this.saldo) {
            this.saldo = this.saldo - valorSacar;
            console.log("Saldo atual: R$" + this.saldo);
            this.movimentacoes++;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
    depositar(valorDepositar) {
        this.saldo = this.saldo + valorDepositar;
        this.movimentacoes++;
        console.log("Saldo atual: R$" + this.saldo);
    }
    solicitarAlmentoLimite() {
        if(this.statusEspecial){
            console.log("Status especial, limite almentado.");
            this.limite += 500;
            console.log("Limite atual: R$" + this.limite);
        }
        else {
            console.log("Você não status especial para que seja feita essa solicitação.");
            console.log("Limite atual: R$" + this.limite);
        }
    }
}
// crio o objeto1
const cc1 = new ContaCorrente('252409', 2000.00, false, 5000.00, 0);
cc1.soli
cc1.sacar(200.90); //Saldo atual: R$1300.09
cc1.sacar(300.05); //Saldo atual: R$1000.04
cc1.depositar(500.00); //Saldo atual: R$1500.04
cc1.solicitarAlmentoLimite(); //Você não status especial para que seja feita essa solicitação.
console.log(cc1); //ContaCorrente {numero: '252409', saldo: 1500.04, statusEspecial: false, limite: 5000, movimentacoes: 3}

const cc2 = new ContaCorrente('123459', 200.00, true, 4000.00, 0);
cc2.depositar(800); //Saldo atual: R$1000
cc2.solicitarAlmentoLimite(); //Status especial, limite almentado. Limite atual: R$4000
cc2.solicitarAlmentoLimite(); //Status especial, limite almentado. Limite atual: R$5000
console.log(cc2); //ContaCorrente {numero: '123459', saldo: 1000, statusEspecial: true, limite: 5000, movimentacoes: 1}