"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aplicacao = void 0;
// Classe Aplicação
const CasosDeUso_1 = require("./CasosDeUso");
const Reserva_1 = require("./Reserva");
const TrechoComum_1 = require("./TrechoComum");
class Aplicacao {
    /* Método que gera uma reserva dado
      um passageiro e um conjunto de vôos*/
    gerarReserva(passageiro, voos, taxaReserva, assento = 0) {
        console.log("Gerando reserva para o passageiro: " +
            assento);
        // criando a instância
        let novaReserva = new Reserva_1.Reserva(passageiro.getIdPassageiro, new Date(), true, taxaReserva, []);
        // vinculando voo(s) a reserva
        for (const i in voos) {
            const voo = voos[i];
            novaReserva.addVoo(voos[i]);
            /*avaliando se existe assento
                  a ser associado*/
            // if(assento != 0 && voos[i].constructor.name === "TrechoComum"){
            if (assento != 0 && voo instanceof TrechoComum_1.TrechoComum) {
                const assentoDefinido = voo.setAssento(assento);
                novaReserva.addAssento(assentoDefinido);
            }
        }
        // Vinculando a Reserva ao passageiro
        passageiro.setReserva(novaReserva);
        return novaReserva;
    }
    /* Consultar Voos a depender do que
      for passado como 2º parâmetro:
      1. Buscar voos de um trecho
      2. Buscar voos de um dia
      3. Buscar voos por trecho e dia
      */
    consultarVoos(bancoDeVoos, opcao, valor1, valor2 = "", valor3 = "") {
        let achou = false; // é setada se achou uma ocorrência
        switch (opcao) {
            case 1:
                // Busca voos de um trecho
                // percorre o vetor voo
                for (const i in bancoDeVoos) {
                    if (bancoDeVoos[i].getOrigem() === valor1 &&
                        bancoDeVoos[i].getDestino() === valor2) {
                        achou = true;
                        bancoDeVoos[i].consultar();
                    }
                }
                if (!achou) {
                    console.log("Nenhum voo encontrado.");
                }
                break;
            case 2:
                // Busca voos de um dia
                // percorre o vetor voo
                for (const i in bancoDeVoos) {
                    if (bancoDeVoos[i].getData().toDateString() === valor1) {
                        bancoDeVoos[i].consultar();
                        achou = true;
                    }
                }
                if (!achou) {
                    console.log("Não encontrados.");
                }
                break;
            default:
                //Buscar voos por trecho e dia
                // percorre o vetor voo
                for (const i in bancoDeVoos) {
                    const origemMatch = bancoDeVoos[i].getOrigem() === valor1;
                    const destinoMatch = bancoDeVoos[i].getDestino() === valor2;
                    const dataMatch = bancoDeVoos[i].getData().toDateString() === valor3;
                    if (origemMatch && destinoMatch && dataMatch) {
                        bancoDeVoos[i].consultar();
                        achou = true;
                    }
                }
                if (!achou) {
                    console.log("Não encontrados.");
                }
                break;
        }
    }
    // método para detalhar reserva
    detalharReserva(reserva) {
        console.log("*************************");
        console.log("Reserva: " + reserva.getId.value);
        // Print all assento of getAssentos
        console.log("Assentos: ");
        reserva.getAssento.forEach((assento) => {
            console.log("\t" + assento.getNumero);
        });
        console.log("Data: " + reserva.getData.toLocaleDateString('pt-BR'));
        console.log("Situação: " + reserva.getStatus ? "Ativa" : "Não ativa");
        console.log("Taxa: " + reserva.getTaxa);
        // percorre o vetor de vôos
        for (const i in reserva.getVoos) {
            reserva.getVoos[i].consultar();
        }
        const passageiroFromReserva = CasosDeUso_1.BancoDePassageiros.find((passageiro) => passageiro.getIdPassageiro === reserva.idPassageiro);
        console.log("Passageiro:", passageiroFromReserva === null || passageiroFromReserva === void 0 ? void 0 : passageiroFromReserva.getNome);
        console.log("*************************");
    }
    // método para prorrogar reserva
    prorrogarReserva(reserva, data) {
        reserva.setData = data;
        if (!reserva.getStatus) {
            reserva.setStatus = true;
        }
        console.log("Reserva Prorrogada.");
        console.log("Detalhes:");
        this.detalharReserva(reserva);
    }
}
exports.Aplicacao = Aplicacao;
const aplicacao = new Aplicacao();
const reserva = aplicacao.gerarReserva(CasosDeUso_1.BancoDePassageiros[0], [CasosDeUso_1.BancoDeVoos[0]], 100, 50);
// *********** Alguns testes manuais ***********************
// const voo =   new TrechoComum(
//     new Local(Aeroporto[0], "Salvador", "BA", "Brasil"),
//     new Local(Aeroporto[2], "São Paulo", "SP", "Brasil"),
//     new Date("2022-07-07"),
//     "10:45",
//     "12:45",
//     Aeronave[0],
//     0
//   )
// aplicacao.consultarVoos(BancoDeVoos, 2, new Date('2022-07-07').toDateString());
