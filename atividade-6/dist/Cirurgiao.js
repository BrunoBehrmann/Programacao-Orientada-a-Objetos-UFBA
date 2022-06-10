"use strict";
// Classe Cirurgiao
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cirurgiao = void 0;
const Medico_1 = require("./Medico");
class Cirurgiao extends Medico_1.Medico {
    // métodos especiais
    constructor(ID, nome, idade, sexo, crm) {
        super(ID, nome, idade, sexo, crm);
    }
}
exports.Cirurgiao = Cirurgiao;
