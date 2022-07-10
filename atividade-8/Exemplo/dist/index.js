"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Departamento_1 = require("./Departamento");
const Hospital_1 = require("./Hospital");
const Medico_1 = require("./Medico");
const Paciente_1 = require("./Paciente");
const Recepcionista_1 = require("./Recepcionista");
const SalarioExtra_1 = require("./SalarioExtra");
// instancia um hospital
var h1 = new Hospital_1.Hospital('Hospital Sul');
// (1) instancia o departamento Primeiro Depart
var d1 = new Departamento_1.Departamento('Primeiro Depart.');
// Cadastra um departamento no hospital 'Hospital Sul'
/* instancia o funcionário 01 médido plantonista,
que possui 50 de salario hora e trabalhou 10 horas extras */
var f01 = new Medico_1.Medico('João', 50, 10, true); /* assim
se faz o casting para informar que o médico é um funcionário */
/* Insere funcionário f01 no apartamento 'Primeiro Depart.' */
/* instancia o funcionário 02 recepcionista, não plantonista,
que possui 25 de salario hora e trabalhou 10 horas extras */
var f02 = new Recepcionista_1.Recepcionista('Pedro', 25, 10, false);
/* Insere funcionário f01 no apartamento 'Primeiro Depart.' */
/* Lista funcionários do apartamento 'Primeiro Depart.' */
/* instancia  o paciente 01, em status de espera,
com uma demanda médica*/
var p01 = new Paciente_1.Paciente('Maria', true, true);
/* instancia  o paciente 02, em status de espera,
com uma demanda administrativa */
var p02 = new Paciente_1.Paciente('Daniel', true, false);
/* Registra o Salário Extra para o funcionário 01
 e imprime o mesmo no console */
SalarioExtra_1.SalarioExtra.registrar(f01);
console.log("Salario Extra de " + f01.getNome + " é R$ " + f01.getSalarioExtraMes + ".");
/* Registra o Salário Extra para o funcionário 02
e imprime o mesmo no console */
SalarioExtra_1.SalarioExtra.registrar(f02);
console.log("Salario Extra de " + f02.getNome + " é R$ " + f02.getSalarioExtraMes + ".");
// cria uma variavel para guarda o status do paciente
let espera;
/* Faz o funcionário 01 médico atender o paciente 02
onde retornará uma mensagem informando que o paciente
não pode ser atendido pelo médico por se tratar de
demanda admisnistrativa */
f01.atender(p02);
// imprime o status do paciente p02
espera = (p02.getEspera) ? "Em espera" : "Atendido";
console.log(p02.getNome + ": " + espera);
/* Faz o funcionário 01 médico atender o paciente 01
onde além de mudar o status do paciente, vai gerar
um objeto do tipo Laudo, que por sua vez será
uma instancia local do paciente*/
f01.atender(p01);
/* imprime no console o status do paciente 01 */
espera = (p01.getEspera) ? "Em espera" : "Atendido";
console.log(p01.getNome + ": " + espera);
// Listando Laudo da paciente p01
/* Faz o funcionário 02 Recepcionista atender o
paciente 02 em que mudará o status do paciente */
f02.atender(p02);
// imprime no console o status do paciente 02
espera = (p02.getEspera) ? "Em espera" : "Atendido";
console.log(p02.getNome + ": " + espera);
