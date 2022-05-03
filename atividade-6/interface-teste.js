/*
Em JavaScript, uma linguagem que não é genuinamente Orientada a objetos,
não existe a estrutura formal conhecida como Interface.
Entretanto, podemos implementar as mesmas funcionalidades de uma Interface
de formas diferentes e funcionais através de métodos.  No nosso caso, 
usamos a função "implement" que recebe um objeto com um ou mais vetores
e verifica se o primeiro elemento contém as assinaturas das funções 
contidas nos demais vetores passados como parâmetro.
Se nenhum vetor for passado, não há o que avaliar, e retorna uma mensagem
informando que nenhuma interface foi informada.
Se o objeto não conter as assinaturas de todas as funções contidos nos
vetores, a função retorna um erro informando qual método precisa ser 
adicionado.
Se o objeto possuir todas as assinaturas de funções contidas nos
vetores , a função retorna uma mensagem informando que o objeto
Objeto cumpre o(s) contrato(s) com a(s) interfaces.
Dentro do contexto de POO discutido e/ou passado em sala de aula,
o primeiro elemento (obj)  passado como parâmetro representa o objeto recém 
criado que será avaliado se cumpre ou não o contrato.
Enquanto que os demais elementos (vetores) passados como parâmetros 
representam as interfaces.
Vale mencionar que no javascript,  um vetor é um tipo especial de objeto.

*/

// função que valida as implementações das interfaces
// Obs.: "obj"

function implement (obj) {
    
    // verifica se foi passada alguma interface como parâmetro
    if(arguments.length < 2){
        console.log("Não foram passadas interfaces como parâmetro.");
        return
    }
    
    // arguments.length referência para o número de argumentos passados para a função.
    for(var i = 1; i < arguments.length; i++){
        var interface = arguments[i];

        // O método forEach() executa uma dada função em cada elemento de um array.
        interface.forEach(function(method) {
            if(typeof obj[method] !== 'function') {
                throw 'O objeto deve implementar o método ' + method;
            }
        });
    }


    console.log("Objeto cumpre o(s) contrato(s) com a(s) interfaces.");
    
}

// Interfaces:

// 'ISomaESubtracao' traz assinaturas das operações de soma e subtração

let ISomaESubtracao = [
    'add',
    'subtract'
]

// Testes em console
console.log("ISomaESubtracao é do tipo do tipo: "+typeof(ISomaESubtracao));
console.log("add é uma propriedade do tipo: "+typeof(ISomaESubtracao.add));

// 'ImultiplicacaoEDivisao' traz assinaturas das operações de soma e subtração

let ImultiplicacaoEDivisao =[
    'multiply',
    'divide'
]

console.log("IMulDiv é do tipo do tipo: "+typeof(ImultiplicacaoEDivisao));
console.log("multiply é uma propriedade do tipo: "+typeof(ImultiplicacaoEDivisao.multiply));

let obj= {
    add: function() {},
    subtract: function() {},
    multiply: function() {},
    //divide: function() {},
}

console.log("Obj é do tipo do tipo: "+typeof(obj));
console.log("add é uma propriedade do tipo: "+typeof(obj.add));


// Implementa a interface -> avaliado se obj possui todas as assinaturas de funções
let verificador = implement (obj)



console.log('Finished');