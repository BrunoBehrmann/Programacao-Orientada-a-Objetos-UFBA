"use strict";
// Classe Consultor
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultor = void 0;
const Funcionario_1 = require("./Funcionario");
class Consultor extends Funcionario_1.Funcionario {
    // métodos especiais
    constructor(ID, nome, idade, sexo) {
        super(ID, nome, idade, sexo);
    }
}
exports.Consultor = Consultor;
