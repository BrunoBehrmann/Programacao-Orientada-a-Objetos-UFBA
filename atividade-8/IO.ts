// Este arquivo contém o instruções e o módulo de entrada e saída no console que usamos nos casos de teste

import readline = require("readline");
import { Aplicacao } from "./Aplicacao";
import { BancoDePassageiros, BancoDeReservas, BancoDeVoos } from "./CasosDeUso";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const question = (question: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

export class Main {
  aplicacao: Aplicacao;
  constructor() {
    this.aplicacao = new Aplicacao();
  }
  async run() {
    this.imprimeBoasVindas();
    this.imprimeListaDeAcoes();

    while (true) {
      const acao = (await question("Digite a acao: ")) as string;
      await this.switchDeAcoes(acao);
      if (acao === "10") {
        break;
      }
    }
    process.exit(0);
  }

  private imprimeBoasVindas() {
    console.log("Iniciando aplicação...");
    console.log(
      `Olá ${BancoDePassageiros[1].getNome} bem vindo ao sistema de reservas da AzUFBA`
    );
    console.log(`No sistema da AzUFBA você pode realizar as seguintes ações:`);
  }

  // Como usuário eu quero saber os voos de um determinado trecho
  // Critério: "possibilidades de viagem de uma cidade ou de um aeroporto para outro"
  buscarVoos(origem: string, destino: string) {
    console.log("Buscando voos de ", origem, " para ", destino, "\n");
    this.aplicacao.consultarVoos(BancoDeVoos, 1, origem, destino);
  }

  // Como usuário eu quero saber os voos de um determinado dia
  // Critério: "possibilidades de viagem de uma cidade ou de um aeroporto para outro"
  buscarVoosPorDia(dia: string) {
    console.log("Buscando voos para o dia: ", dia);
    const diaTratado = dia.split("/").reverse().map(Number);
    const newDateDiaTratado = new Date(diaTratado[0], diaTratado[1] - 1, diaTratado[2]);
    this.aplicacao.consultarVoos(BancoDeVoos, 2, newDateDiaTratado.toDateString());
  }

  // Como usuário eu quero buscar voos por trecho e dia
  // Critério: "possibilidades de viagem de uma cidade ou de um aeroporto para outro restrito a determinados dias da semana"
  buscarVoosPorTrechoEDia(origem: string, destino: string, dia: string) {
    console.log("Buscando voos de ", origem, " para ", destino, " no dia ", dia, "\n");
    const diaTratado = dia.split("/").reverse().map(Number);
    const newDateDiaTratado = new Date(diaTratado[0], diaTratado[1] - 1, diaTratado[2]);
    this.aplicacao.consultarVoos(
      BancoDeVoos,
      3,
      origem,
      destino,
      newDateDiaTratado.toDateString()
    );
  }

  // Como usuário eu gostaria de buscar um voo por código
  // Critério: "horários de chegada ou de saída em determinados vôos"
  buscarVooPorCodigo(codigo: string) {
    console.log("Buscando voo com código: ", codigo);
    const vooSelecinoado = BancoDeVoos.find((voo) => voo.getId() === codigo);
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
    BancoDeReservas.forEach((reserva) => {
      this.aplicacao.detalharReserva(reserva);
    });
  }

  // Como usuário eu quero reservar um voo
  
  reservarVoo(codigo: string, assento: string) {
    const codigoAsArray = codigo.trim().split(",");
    console.log("Reservando voo com código: ", codigo, " no assento: ", assento);
    const vooSelecinoado = BancoDeVoos.filter((voo) =>
      codigoAsArray.includes(voo.getId())
    );
    if (!vooSelecinoado.length) {
      console.log("Voo não encontrado");
      return;
    }
    const reserva = this.aplicacao.gerarReserva(
      BancoDePassageiros[1],
      vooSelecinoado,
      100,
      Number(assento)
    );
    console.log("Reserva realizada com sucesso");
    BancoDeReservas.push(reserva);
  }

  // Como administrador eu quero visualizar todos os clientes
  exibirTodosOsClientes() {
    console.log("Exibindo todos os clientes");
    BancoDePassageiros.forEach((passageiro) => {
      console.log(passageiro.getIdPassageiro, passageiro.getNome);
    });
  }

  // Como usuário eu quero visualizar uma reserva por código
  visualizarReservaPorCodigo(codigo: string) {
    console.log("Exibindo reserva com código: ", codigo);
    const findReservaByCode = BancoDeReservas.find(
      (reserva) => reserva.getId.value === codigo
    );
    console.log(findReservaByCode);
    return findReservaByCode;
  }

  // Como administrador eu quero prolongar uma reserva
  prolongarReserva(codigoDaReserva: string, incremento: number) {
    const reserva = BancoDeReservas.find(
      (reserva) => reserva.getId.value === codigoDaReserva
    );
    if (!reserva) {
      console.log("Reserva não encontrada");
      return;
    }
    const dataDaReserva = reserva.getData;

    const newData = new Date(
      dataDaReserva.getFullYear(),
      dataDaReserva.getMonth(),
      dataDaReserva.getDate() + incremento
    );

    this.aplicacao.prorrogarReserva(reserva, newData );
  }

  private imprimeListaDeAcoes() {
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

  async switchDeAcoes(acao: string) {
    switch (acao) {
      case "1":
        const origem = await question("Digite a cidade de origem: ");
        const destino = await question("Digite a cidade de destino: ");
        this.buscarVoos(origem, destino);
        break;

      case "2":
        const dia = await question("Digite o dia: ");
        this.buscarVoosPorDia(dia);
        break;

      case "3":
        const origem3 = await question("Digite a cidade de origem: ");
        const destino3 = await question("Digite a cidade de destino: ");
        const dia3 = await question("Digite o dia: ");
        this.buscarVoosPorTrechoEDia(origem3, destino3, dia3);
        break;

      case "4":
        const codigo = await question("Digite o código do voo: ");
        this.buscarVooPorCodigo(codigo);
        break;

      case "5":
        this.exibirTodosOsClientes();
        break;

      case "6":
        const codigo6 = await question("Digite o código do voo: ");
        const assento = await question("Digite o Assento desejado: ");
        this.reservarVoo(codigo6, assento);
        break;

      case "7":
        this.exibirTodasAsReservas();
        break;

      case "8":
        const codigo8 = await question("Digite o código da reserva: ");
        const incremento = await question("Digite o número de dias para prorrogar: ");
        this.prolongarReserva(codigo8, Number(incremento));
        break

      case "9":
        const codigoReserva = await question("Digite o código da reserva: ");
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
  }
}
