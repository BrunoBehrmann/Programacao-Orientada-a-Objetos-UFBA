"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hospital_1 = require("./Hospital");
const Medico_1 = require("./Medico");
const Recepcionista_1 = require("./Recepcionista");
const SalarioExtra_1 = require("./SalarioExtra");
/* instancia um hospital */
var h1 = new Hospital_1.Hospital(34, 'Hospital Sul');
/* Cadastra um departamento no hospital 'Hospital Sul' */
h1.cadastrarDepartamento('Primeiro Depart.');
/* Informa o nome de departamentos cadastrados */
console.log('Quantidade de departamentos em ' + h1.getNome + ': ' + h1.qtd_departamentos);
/* instancia o funcionário 01 médido plantonista,
que possui 50 de salario hora e trabalhou 10 horas extras */
var f01 = new Medico_1.Medico('João', 50, 10, true); // assim se faz o casting para informar que o médico é um funcionário
/* Insere funcionário f01 no apartamento 'Primeiro Depart.' */
h1.getDepartamento[0].setFuncionarios = f01; // referência para o departamento
/* instancia o funcionário 02 recepcionista, não plantonista,
que possui 25 de salario hora e trabalhou 10 horas extras */
var f02 = new Recepcionista_1.Recepcionista('Pedro', 25, 10, false);
/* Insere funcionário f01 no apartamento 'Primeiro Depart.' */
h1.getDepartamento[0].setFuncionarios = f02;
/* Lista funcionários do apartamento 'Primeiro Depart.' */
h1.getDepartamento[0].listarFuncionarios();
/* instancia  o paciente 01, em status de espera,
com uma demanda médica */
h1.cadastrarPaciente('Maria', true, true);
/* instancia  o paciente 02, em status de espera,
com uma demanda administrativa */
h1.cadastrarPaciente('Daniel', true, false);
/* Registra o Salário Extra para o funcionário 01
 e imprime o mesmo no console */
SalarioExtra_1.SalarioExtra.registrar(h1.getDepartamento[0].getFuncionarios[0]);
console.log("Salario Extra de " + h1.getDepartamento[0].getFuncionarios[0].getNome + " é R$ " + h1.getDepartamento[0].getFuncionarios[0].getSalarioExtraMes + ".");
/* Registra o Salário Extra para o funcionário 02
e imprime o mesmo no console */
SalarioExtra_1.SalarioExtra.registrar(h1.getDepartamento[0].getFuncionarios[1]);
console.log("Salario Extra de " + h1.getDepartamento[0].getFuncionarios[1].getNome + " é R$ " + h1.getDepartamento[0].getFuncionarios[1].getSalarioExtraMes + ".");
/* cria uma variavel para guarda o status do paciente */
let espera;
/* Faz o funcionário 01 médico atender o paciente 02
onde retornará uma mensagem informando que o paciente
não pode ser atendido pelo médico por se tratar de
demanda admisnistrativa */
h1.getDepartamento[0].getFuncionarios[0].atender(h1.getPaciente[1]);
/* imprime o status do paciente p02 */
espera = (h1.getPaciente[1].getEspera) ? "Em espera" : "Atendido(a)";
console.log(h1.getPaciente[1].getNome + ": " + espera);
/* Faz o funcionário 01 médico atender o paciente 01
onde além de mudar o status do paciente, vai gerar
um objeto do tipo Laudo, que por sua vez será
uma instancia local do paciente*/
h1.getDepartamento[0].getFuncionarios[0].atender(h1.getPaciente[0]);
/* imprime no console o status do paciente 01 */
espera = (h1.getPaciente[0].getEspera) ? "Em espera" : "Atendido(a)";
console.log(h1.getPaciente[0].getNome + ": " + espera);
/* Listando Laudo da paciente p01 */
h1.getPaciente[0].listarLaudos();
/* Faz o funcionário 02 Recepcionista atender o
paciente 02 em que mudará o status do paciente */
h1.getDepartamento[0].getFuncionarios[1].atender(h1.getPaciente[1]);
/* imprime no console o status do paciente 02 */
espera = (h1.getPaciente[1].getEspera) ? "Em espera" : "Atendido";
console.log(h1.getPaciente[1].getNome + ": " + espera);
