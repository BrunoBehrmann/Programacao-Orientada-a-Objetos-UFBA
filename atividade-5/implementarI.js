// método que implementa a interface

export function implementarI (obj) {
    
    // definindo variavel para guardar referência para a interface(vetor)
    var _interface;
    
    // verifica se foi passada alguma interface como parâmetro
    if(arguments.length < 2){
        console.log("Não foram passadas interfaces como parâmetro.");
        return;
    }
    
    // arguments.length referência para o número de argumentos passados para a função.
    for(var i = 1; i < arguments.length; i++){
        _interface = arguments[i];

        // O método forEach() executa uma dada função em cada elemento de um array.
        _interface.forEach(function(method) {
            if(typeof obj[method] !== 'function') {
                throw ':O objeto da classe '+obj.constructor.name +' deve implementar o método ' + method;
            }
        });
    }


    console.log("Objeto cumpre o(s) contrato(s) com a(s) interfaces.");
    
}