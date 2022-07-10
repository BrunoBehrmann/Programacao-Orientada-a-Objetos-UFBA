"use strict";
// classe Laudo
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laudo = void 0;
class Laudo {
    // métodos especiais
    constructor(dataConsulta, conteudo) {
        this.data = dataConsulta;
        this.conteudo = conteudo;
    }
    get getData() {
        return this.data;
    }
    set setData(i) {
        this.data = i;
    }
    get getConteudo() {
        return this.conteudo;
    }
    set setConteudo(i) {
        this.conteudo = i;
    }
}
exports.Laudo = Laudo;
