"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoDeReservas = exports.BancoDePassageiros = exports.BancoDeVoos = void 0;
const Enums_1 = require("./Enums");
const Local_1 = require("./Local");
const Passageiro_1 = require("./Passageiro");
const TrechoComum_1 = require("./TrechoComum");
exports.BancoDeVoos = [
    new TrechoComum_1.TrechoComum(new Local_1.Local(Enums_1.Aeroporto[0], "Salvador", "BA", "Brasil"), new Local_1.Local(Enums_1.Aeroporto[1], "São Paulo", "SP", "Brasil"), new Date(2022, 7 - 1, 7), "10:45", "12:45", Enums_1.Aeronave[0], 0),
    new TrechoComum_1.TrechoComum(new Local_1.Local(Enums_1.Aeroporto[0], "Salvador", "BA", "Brasil"), new Local_1.Local(Enums_1.Aeroporto[1], "São Paulo", "SP", "Brasil"), new Date(2022, 7 - 1, 8), "14:45", "16:45", Enums_1.Aeronave[0], 0),
    new TrechoComum_1.TrechoComum(new Local_1.Local(Enums_1.Aeroporto[1], "São Paulo", "SP", "Brasil"), new Local_1.Local(Enums_1.Aeroporto[6], "Brasília", "DF", "Brasil"), new Date(2022, 7 - 1, 8), "17:45", "16:45", Enums_1.Aeronave[0], 0),
    new TrechoComum_1.TrechoComum(new Local_1.Local(Enums_1.Aeroporto[0], "Rio de Janeiro", "RJ", "Brasil"), new Local_1.Local(Enums_1.Aeroporto[4], "São Paulo", "SP", "Brasil"), new Date(2022, 7 - 1, 9), "10:45", "12:45", Enums_1.Aeronave[0], 0),
    new TrechoComum_1.TrechoComum(new Local_1.Local(Enums_1.Aeroporto[0], "Rio de Janeiro", "RJ", "Brasil"), new Local_1.Local(Enums_1.Aeroporto[3], "São Paulo", "SP", "Brasil"), new Date(2022, 7 - 1, 10), "14:45", "16:45", Enums_1.Aeronave[1], 0),
    new TrechoComum_1.TrechoComum(new Local_1.Local(Enums_1.Aeroporto[4], "São Paulo", "SP", "Brasil"), new Local_1.Local(Enums_1.Aeroporto[3], "Jacarepaguá", "RJ", "Brasil"), new Date(2022, 7 - 1, 10), "17:45", "16:45", Enums_1.Aeronave[0], 0),
    new TrechoComum_1.TrechoComum(new Local_1.Local(Enums_1.Aeroporto[4], "São Paulo", "SP", "Brasil"), new Local_1.Local(Enums_1.Aeroporto[3], "Jacarepaguá", "RJ", "Brasil"), new Date(2022, 7 - 1, 11), "10:45", "12:45", Enums_1.Aeronave[0], 0),
    new TrechoComum_1.TrechoComum(new Local_1.Local(Enums_1.Aeroporto[1], "São Paulo", "SP", "Brasil"), new Local_1.Local(Enums_1.Aeroporto[3], "Jacarepaguá", "RJ", "Brasil"), new Date(2022, 7 - 1, 12), "14:45", "16:45", Enums_1.Aeronave[0], 0),
    new TrechoComum_1.TrechoComum(new Local_1.Local(Enums_1.Aeroporto[1], "Rio de Janeiro", "RJ", "Brasil"), new Local_1.Local(Enums_1.Aeroporto[0], "São Paulo", "SP", "Brasil"), new Date(2022, 7 - 1, 12), "17:45", "16:45", Enums_1.Aeronave[0], 0),
];
exports.BancoDePassageiros = [
    new Passageiro_1.Passageiro("Antoniel Sousa", false),
    new Passageiro_1.Passageiro("Bruno", true),
    new Passageiro_1.Passageiro("Edyo", true),
    new Passageiro_1.Passageiro("Reginaldo Silva", false),
];
exports.BancoDeReservas = [];
