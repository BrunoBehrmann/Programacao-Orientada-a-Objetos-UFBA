import { Aeronave, Aeroporto } from "./Enums";

import { Local } from "./Local";
import { Passageiro } from "./Passageiro";
import { Reserva } from "./Reserva";
import { TrechoComEscala } from "./TrechoComEscala";
import { TrechoComum } from "./TrechoComum";

export const BancoDeVoos = [
  new TrechoComum(
    new Local(Aeroporto[0], "Salvador", "BA", "Brasil"),
    new Local(Aeroporto[1], "São Paulo", "SP", "Brasil"),
    new Date(2022, 7 - 1, 7),
    "10:45",
    "12:45",
    Aeronave[2],
    478
  ),
  new TrechoComum(
    new Local(Aeroporto[0], "Salvador", "BA", "Brasil"),
    new Local(Aeroporto[1], "São Paulo", "SP", "Brasil"),
    new Date(2022, 7 - 1, 8),
    "14:45",
    "16:45",
    Aeronave[3],
    330
  ),
  new TrechoComum(
    new Local(Aeroporto[1], "São Paulo", "SP", "Brasil"),
    new Local(Aeroporto[6], "Brasília", "DF", "Brasil"),
    new Date(2022, 7 - 1, 8),
    "17:45",
    "16:45",
    Aeronave[3],
    223
  ),
  new TrechoComEscala(
    new Local(Aeroporto[2], "São Paulo", "SP", "Brasil"),
    new Local(Aeroporto[3], "Rio de Janeiro", "RJ", "Brasil"),
    new Date(2022, 7 - 1, 8),
    "20:00",
    "00:00",
    Aeronave[4],
    1050,
    [
      new TrechoComum(
        new Local(Aeroporto[2], "Rio de Janeiro", "RJ", "Brasil"),
        new Local(Aeroporto[6], "Brasília", "DF", "Brasil"),
        new Date(2022, 7 - 1, 9),
        "20:00",
        "22:00",
        Aeronave[4],
        500
      ),
      new TrechoComum(
        new Local(Aeroporto[6], "Brasília", "DF", "Brasil"),
        new Local(Aeroporto[3], "São Paulo", "SP", "Brasil"),
        new Date(2022, 7 - 1, 9),
        "22:00",
        "00:00",
        Aeronave[1],
        550
      ),
    ]
  ),
  new TrechoComum(
    new Local(Aeroporto[4], "São Paulo", "SP", "Brasil"),
    new Local(Aeroporto[3], "Jacarepaguá", "RJ", "Brasil"),
    new Date(2022, 7 - 1, 10),
    "17:45",
    "16:45",
    Aeronave[1],
    400
  ),
  new TrechoComum(
    new Local(Aeroporto[4], "São Paulo", "SP", "Brasil"),
    new Local(Aeroporto[3], "Jacarepaguá", "RJ", "Brasil"),
    new Date(2022, 7 - 1, 11),
    "10:45",
    "12:45",
    Aeronave[2],
    734
  ),
  new TrechoComum(
    new Local(Aeroporto[1], "São Paulo", "SP", "Brasil"),
    new Local(Aeroporto[3], "Jacarepaguá", "RJ", "Brasil"),
    new Date(2022, 7 - 1, 12),
    "14:45",
    "16:45",
    Aeronave[3],
    785
  ),
  new TrechoComum(
    new Local(Aeroporto[5], "Rio de Janeiro", "RJ", "Brasil"),
    new Local(Aeroporto[1], "São Paulo", "SP", "Brasil"),
    new Date(2022, 7 - 1, 12),
    "17:45",
    "16:45",
    Aeronave[4],
    0
  ),
];

export const BancoDePassageiros = [
  new Passageiro("Antoniel Sousa", false),
  new Passageiro("Bruno", true),
  new Passageiro("Edyo", true),
  new Passageiro("Reginaldo Silva", false),
];

export const BancoDeReservas: Array<Reserva> = [];
