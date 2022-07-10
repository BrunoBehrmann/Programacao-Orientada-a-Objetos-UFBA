/*
Aqui ficarão os casos de testes a serem avaliados pela professora,
para que ela veja que está tudo rodando bem.

Resumindo:
Na pasta principal ficam (de forma definitiva) apenas os arquivos
módulo (.ts) e o index.
Enquanto que os arquivos (.js) ficam em na subpasta "dist".
Isso na versão definitiva, mas em implementação, vamos nos organizando.

O diagrama e REAME.MD depois de concluídos ficam na subpasta "0. LEIA-ME".
*/


// Exemplo de Polimorfismo com Herança e Sobrescrição de método

// classe abstrata Voo:

// Código do Teste comentado abaixo:

/*abstract class Voo {
    nome: string;


    constructor(nome: string) {
        this.nome = nome
    }
    listarTrechos(): void { }
}

// classe TrechoComum que herda Voo:

class TrechoComum extends Voo {

    constructor(nome: string) {
        super(nome)
    }


    override listarTrechos(): void {
        console.log("*********************")
        console.log("Voo: " + this.nome)
        console.log("[0] Escalas:")
        console.log("[0] Conexões:")
        console.log("*********************")
    }

}

// classe TrechoComEscala que também herda Voo:
class TrechoComEscala extends Voo {
    trechos: Array<TrechoComum> = []

    constructor(nome: string) {
        super(nome)
    }

    set setTrechos(trecho: TrechoComum) {
        this.trechos.push(trecho) // incluindo trecho
    }

    get getTrechos() {
        return this.trechos
    }

    override listarTrechos(): void {
        console.log("")
        console.log("*********************")
        console.log("Voo: " + this.nome)

        console.log("[" + this.getTrechos.length + "] Escalas:")
        for (const i in this.getTrechos) {
            console.log(`${this.getTrechos[i].nome}`)
        }

        console.log("*********************")
    }

}

// criando um método que receberá um parâmetro com Polimorfismo
function detalharVoo(obj: Voo) {
    obj.listarTrechos();
}

// criando um vetor de voos como no diagrama
let voos: Voo[] = [];



// criando voo comum 001

let voo01 = new TrechoComum("001");

// criando voo comum 002

let voo02 = new TrechoComEscala("002");

// colocando trecho 003 dentro do voo2

voo02.setTrechos = new TrechoComum("003");

// colocando trecho 004 dentro do voo2

voo02.setTrechos = new TrechoComum("004");

// colocando os voos 01 e 02 dentro do vetor voo

voos.push(voo01, voo02)

// usando função com Polimorfismo passando um objeto TrechoComum
detalharVoo(voos[0])

// usando função com Polimorfismo passando um objeto TrechoComEscala
detalharVoo(voos[1])*/