"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IO_1 = require("./IO");
/***************************************************************************/
// vetor de vôos disponíveis do Banco de dadoss(trechos comuns + trechos com escala)
let voos_disponiveis = [];
// vetor de vôos escolhidos pelo passageiro
let voos_escolhidos = [];
// vetor de passageiros
let passageiros = [];
// instanciando e inicializando o módulo do console
const main = new IO_1.Main();
main.run();
