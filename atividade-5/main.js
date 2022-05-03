
/*********************** RESUMO DA IMPLEMENTAÇÃO ************************
************************       ATIVIDADE 5       ************************
************** DISCIPLINA: Programação Orientada a Objetos **************
************************* SEMESTRE:   2022.1 ****************************
********************* DOCENTE:    Michele Carvalho **********************
*** DISCENTES:  Bruno de Sousa Behrmann e Reginaldo Silva de Oliveira ***


Em JavaScript, uma linguagem que não é genuinamente Orientada a objetos,
não existe a estrutura formal conhecida como Interface.
Entretanto, podemos implementar as mesmas funcionalidades de uma Interface
de formas diferentes e funcionais através de métodos.  No nosso caso, 
usamos a função "implementarI" que recebe um objeto com um ou mais vetores
e verifica se o primeiro elemento contém as assinaturas das funções 
contidas nos demais vetores passados como parâmetro.
Se nenhum vetor for passado, não há o que avaliar, e retorna uma mensagem
informando que nenhuma interface foi informada.
Se o objeto não conter as assinaturas de todas as funções contidas nos
vetores, a função retorna um erro informando qual método precisa ser 
adicionado.
Se o objeto possuir todas as assinaturas de funções contidas nos
vetores, a função retorna uma mensagem "Objeto cumpre o(s) contrato(s) com a(s) interfaces".
Dentro do contexto de POO discutido e/ou passado em sala de aula,
o primeiro elemento (obj)  passado como parâmetro representa o objeto recém 
criado que será avaliado se cumpre ou não o contrato.
Enquanto que os demais elementos (vetores) passados como parâmetros 
representam as interfaces.
Vale mencionar que no javascript,  um vetor é um tipo especial de objeto.

***************************************************************************/


// importando módulos da interface, função implement e das classes

import { Alarme } from './Alarme.js'
import { ArCondicionado } from './ArCondicionado.js'
import { Iluminacao } from './Iluminacao.js'
import { Televisao } from './Televisao.js'

import { Controlador } from './interface.js'
import { implementarI } from './implementarI.js'
// criando instâncias das classes

var novoAlarme = new Alarme(true, 20, 10, 1),
    novoArcondicionado = new ArCondicionado(true, 22),
    novaIluminacao = new Iluminacao(),
    novaTelevisao = new Televisao(true, 10, 4, false);

// Testando instanciação de objetos e vetor Controlador

console.log(novoAlarme)
console.log(novoArcondicionado)
console.log(novaIluminacao)
console.log(novaTelevisao)
console.log(Controlador)


// avaliando objetos com função implementarI e interface Controlador

// avaliando objeto novoAlarme
    implementarI(novoAlarme,Controlador);

// avaliando objeto novoArcondicionado
    implementarI(novoArcondicionado,Controlador);

// avaliando objeto novaIluminacao
    implementarI(novaIluminacao,Controlador);

// avaliando objeto novaTelevisao
    implementarI(novaTelevisao,Controlador);

