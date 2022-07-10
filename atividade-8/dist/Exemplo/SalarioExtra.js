"use strict";
// classe SalarioExtra
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalarioExtra = void 0;
class SalarioExtra {
    // métodos especiais
    constructor() {
    }
    /*a variavel percentual não usa getter e setter
    pois é uma variavel static */
    // métodos
    static registrar(f) {
        /* Salario extra do mês é igual as horas extras
        trabalhadas multiplicadas por (valor atual do salário
        horas + o valor proporcional ao percentual acrescido) */
        f.setSalarioExtraMes = f.getHorasExtraTrabalhadas * (f.getSalarioHora + (f.getSalarioHora * this.percentual));
        /*Podemos perceber um polimorfismo na função anterior
        pois o Salaŕio Hora de cada subclasse pode ser diferente.*/
    }
}
exports.SalarioExtra = SalarioExtra;
// atributos
// valor da hora extra é 50% maior que a hora normal
SalarioExtra.percentual = 0.5;
