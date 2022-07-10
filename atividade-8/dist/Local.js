"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = void 0;
// Classe Local
const UUID_1 = require("./UUID");
class Local {
    //métodos especiais
    constructor(aeroporto, cidade, estado, pais) {
        this.idLocal = new UUID_1.UUID();
        this.aeroporto = aeroporto;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
    }
    get getIdLocal() {
        return this.idLocal;
    }
    get getAeroporto() {
        return this.aeroporto;
    }
    set setAeroporto(i) {
        this.aeroporto = i;
    }
    get getCidade() {
        return this.cidade;
    }
    set setCidade(i) {
        this.cidade = i;
    }
    get getEstado() {
        return this.estado;
    }
    set setEstado(i) {
        this.estado = i;
    }
    get getPais() {
        return this.pais;
    }
    set setPais(i) {
        this.pais = i;
    }
}
exports.Local = Local;
