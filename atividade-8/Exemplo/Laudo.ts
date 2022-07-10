// classe Laudo

export class Laudo {
    
    // atributos
    
    private data: string;
    private conteudo: string;
    

    // métodos especiais

    constructor(dataConsulta:string, conteudo: string) {
        this.data = dataConsulta;
        this.conteudo = conteudo;
    }

    get getData() {
        return this.data;
    }

    set setData(i: string) {
        this.data = i;
    }

    get getConteudo() {
        return this.conteudo;
    }

    set setConteudo(i: string){
        this.conteudo = i;
    }
}