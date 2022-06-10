
// Módulo principal


// importando módulos das Classes (Obs.: aqui não inclui as abstratas):

import { Administrador } from "./Administrador";
import { Assistente } from "./Assistente";
import { Cirurgiao } from "./Cirurgiao";
import { ClinicoGeral } from "./ClinicoGeral";
import { Consultor } from "./Consultor";
import { EnfChefe } from "./EnfChefe";
import { EnfTecnico } from "./EnfTecnico";
import { Medico } from "./Medico";
import { Pediatra } from "./Pediatra";

// instanciando um consultor (que herda da Classe Abstrata Funcionários)
let consultor = new Consultor(1, "Sergio", 40,true);

// imprimindo informações do consultor acima
console.log("Informações do(a)",consultor)

/* instanciando um cirurgião (que herda da Classe Medico)
   Obs.: Medico não pode ser abstrata pois implementamos de
   uma forma tal que uma de suas classes filhas () podem
   instanciá-la em um de seus métodos */
let cirurgiao = new Cirurgiao(2, "Luiza", 35, false, 2);

// imprimindo informações do cirurgião acima
console.log("Informações do(a)",cirurgiao)

// Testando método não sobrescrito na Classe Cirurgião
cirurgiao.atender()

// instanciando um Assistente (que também herda da Classe Abstrata Medico)
let assistente = new Assistente(3, "Luan", 20,true, 1);

// imprimindo informações do assistente acima
console.log("Informações do(a)",assistente)

// Testando método sobrescrito na Classe Assitente
assistente.atender()

// instanciando um EnfChefe (que herda da Classe Abstrata Enfermeiro)
let enfermeiroChefe = new EnfChefe(1212, 'Edvan', 23, true, 'Tarde', 'A', 'Alpha');

// imprimindo informações do EnfChefe acima
console.log(enfermeiroChefe);

// Testando método sobrescrito na Classe EnfChefe
enfermeiroChefe.alterarEnfermaria("Nova A");

// instanciando um EnfTecnico (que também herda da Classe Abstrata Enfermeiro)
let enfermeiroTecnico = new EnfTecnico(1212, 'Daniela', 50, false, 'Manhã', 'B', 'Betha');

// imprimindo informações do EnfTecnico acima
console.log(enfermeiroTecnico);

// Testando método sobrescrito na Classe EnfChefe
enfermeiroTecnico.alterarEnfermaria("Nova B");

//console.log("i = "+i)
