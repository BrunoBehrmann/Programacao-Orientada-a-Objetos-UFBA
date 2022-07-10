"use strict";
// Este arquivo contém o instruções e o módulo de entrada e saída no console que usamos nos casos de teste
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const readline = require("readline");
const Aplicacao_1 = require("./Aplicacao");
const CasosDeUso_1 = require("./CasosDeUso");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const question = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};
class Main {
    constructor() {
        this.aplicacao = new Aplicacao_1.Aplicacao();
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            this.imprimeBoasVindas();
            this.imprimeListaDeAcoes();
            while (true) {
                const acao = (yield question("Digite a acao: "));
                yield this.switchDeAcoes(acao);
                if (acao === "10") {
                    break;
                }
            }
            process.exit(0);
        });
    }
    imprimeBoasVindas() {
        console.log("Iniciando aplicação...");
        console.log(`Olá ${CasosDeUso_1.BancoDePassageiros[1].getNome} bem vindo ao sistema de reservas da AzUFBA`);
        console.log(`No sistema da AzUFBA você pode realizar as seguintes ações:`);
    }
    // Como usuário eu quero saber os voos de um determinado trecho
    // Critério: "possibilidades de viagem de uma cidade ou de um aeroporto para outro"
    buscarVoos(origem, destino) {
        console.log("Buscando voos de ", origem, " para ", destino, "\n");
        this.aplicacao.consultarVoos(CasosDeUso_1.BancoDeVoos, 1, origem, destino);
    }
    // Como usuário eu quero saber os voos de um determinado dia
    // Critério: "possibilidades de viagem de uma cidade ou de um aeroporto para outro"
    buscarVoosPorDia(dia) {
        console.log("Buscando voos para o dia: ", dia);
        const diaTratado = dia.split("/").reverse().map(Number);
        const newDateDiaTratado = new Date(diaTratado[0], diaTratado[1] - 1, diaTratado[2]);
        this.aplicacao.consultarVoos(CasosDeUso_1.BancoDeVoos, 2, newDateDiaTratado.toDateString());
    }
    // Como usuário eu quero buscar voos por trecho e dia
    // Critério: "possibilidades de viagem de uma cidade ou de um aeroporto para outro restrito a determinados dias da semana"
    buscarVoosPorTrechoEDia(origem, destino, dia) {
        console.log("Buscando voos de ", origem, " para ", destino, " no dia ", dia, "\n");
        const diaTratado = dia.split("/").reverse().map(Number);
        const newDateDiaTratado = new Date(diaTratado[0], diaTratado[1] - 1, diaTratado[2]);
        this.aplicacao.consultarVoos(CasosDeUso_1.BancoDeVoos, 3, origem, destino, newDateDiaTratado.toDateString());
    }
    // Como usuário eu gostaria de buscar um voo por código
    // Critério: "horários de chegada ou de saída em determinados vôos"
    buscarVooPorCodigo(codigo) {
        console.log("Buscando voo com código: ", codigo);
        const vooSelecinoado = CasosDeUso_1.BancoDeVoos.find((voo) => voo.getId() === codigo);
        if (!vooSelecinoado) {
            console.log("Voo não encontrado");
            return;
        }
        vooSelecinoado.detalhar();
        return vooSelecinoado;
    }
    // Como usuário administrativo eu quero visualizar todas as reservas realizadas no app
    exibirTodasAsReservas() {
        console.log("Todas as reservas: \n");
        CasosDeUso_1.BancoDeReservas.forEach((reserva) => {
            this.aplicacao.detalharReserva(reserva);
        });
    }
    // Como usuário eu quero reservar um voo
    reservarVoo(codigo, assento) {
        console.log("DEBUG", codigo, assento);
        const codigoAsArray = codigo.trim().split(",");
        console.log("Reservando voo com código: ", codigo, " no assento: ", assento);
        const vooSelecinoado = CasosDeUso_1.BancoDeVoos.filter((voo) => codigoAsArray.includes(voo.getId()));
        if (!vooSelecinoado.length) {
            console.log("Voo não encontrado");
            return;
        }
        const reserva = this.aplicacao.gerarReserva(CasosDeUso_1.BancoDePassageiros[1], vooSelecinoado, 100, Number(assento));
        console.log("Reserva realizada com sucesso");
        console.log(reserva);
        CasosDeUso_1.BancoDeReservas.push(reserva);
    }
    // Como administrador eu quero visualizar todos os clientes
    exibirTodosOsClientes() {
        console.log("Exibindo todos os clientes");
        CasosDeUso_1.BancoDePassageiros.forEach((passageiro) => {
            console.log(passageiro.getIdPassageiro, passageiro.getNome);
        });
    }
    // Como usuário eu quero visualizar uma reserva por código
    visualizarReservaPorCodigo(codigo) {
        console.log("Exibindo reserva com código: ", codigo);
        const findReservaByCode = CasosDeUso_1.BancoDeReservas.find((reserva) => reserva.getId.value === codigo);
        console.log(findReservaByCode);
        return findReservaByCode;
    }
    // Como administrador eu quero prolongar uma reserva
    prolongarReserva(codigoDaReserva, incremento) {
        const reserva = CasosDeUso_1.BancoDeReservas.find((reserva) => reserva.getId.value === codigoDaReserva);
        if (!reserva) {
            console.log("Reserva não encontrada");
            return;
        }
        const dataDaReserva = reserva.getData;
        const newData = new Date(dataDaReserva.getFullYear(), dataDaReserva.getMonth(), dataDaReserva.getDate() + incremento);
        this.aplicacao.prorrogarReserva(reserva, newData);
    }
    imprimeListaDeAcoes() {
        console.log(`      
      1. Buscar voos de um trecho
      2. Buscar voos de um dia
      3. Buscar voos por trecho e dia
      4. Detalhar voo por código
      5. Visualizar Clientes
      6. Reservar Voo
      7. Visualizar Reservas
      8. Prorrogar Reserva
      9. Detalhar Reserva por código
      10. Sair
    - Para imprimir novamente a lista, a qualquer momento digite "Ajuda"
    `);
    }
    switchDeAcoes(acao) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (acao) {
                case "1":
                    const origem = yield question("Digite a cidade de origem: ");
                    const destino = yield question("Digite a cidade de destino: ");
                    this.buscarVoos(origem, destino);
                    break;
                case "2":
                    const dia = yield question("Digite o dia: ");
                    this.buscarVoosPorDia(dia);
                    break;
                case "3":
                    const origem3 = yield question("Digite a cidade de origem: ");
                    const destino3 = yield question("Digite a cidade de destino: ");
                    const dia3 = yield question("Digite o dia: ");
                    this.buscarVoosPorTrechoEDia(origem3, destino3, dia3);
                    break;
                case "4":
                    const codigo = yield question("Digite o código do voo: ");
                    this.buscarVooPorCodigo(codigo);
                    break;
                case "5":
                    this.exibirTodosOsClientes();
                    break;
                case "6":
                    const codigo6 = yield question("Digite o código do voo: ");
                    const assento = yield question("Digite o Assento desejado: ");
                    this.reservarVoo(codigo6, assento);
                    break;
                case "7":
                    this.exibirTodasAsReservas();
                    break;
                case "8":
                    const codigo8 = yield question("Digite o código da reserva: ");
                    const incremento = yield question("Digite o número de dias para prorrogar: ");
                    this.prolongarReserva(codigo8, Number(incremento));
                    break;
                case "9":
                    const codigoReserva = yield question("Digite o código da reserva: ");
                    this.visualizarReservaPorCodigo(codigoReserva);
                    break;
                case "10":
                    console.log("Obrigado, volte sempre");
                    console.log("Saindo do sistema...");
                    break;
                case "Ajuda":
                    console.log("Imprimindo lista de ações...");
                    this.imprimeListaDeAcoes();
                    break;
                default:
                    console.log("Ação inválida");
                    break;
            }
        });
    }
}
exports.Main = Main;
