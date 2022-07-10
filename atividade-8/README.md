## atividade-8-poo

## DISCIPLINA: Programação Orientada a Objetos
## SEMESTRE:   2022.1
## DOCENTE:    Michele Carvalho
## DISCENTES:<br>
* Antoniel Magalhaes de Sousa<br>
* Bruno de Sousa Behrmann<br>
* Edyo de Andrade Santos<br>
* Reginaldo Silva de Oliveira<br> 

## Para fins de avaliação
<br>

Considerar apenas os arquivos módulos de extensão (.ts) que estão 
fora da pasta 'dist', pois dentro da mesma encontra-se apenas os 
arquivos pós compilados em (.js) que não contém as estruturas
e sintaxes usadas para representar as mostradas em sala de aula, na 
linguagem Java. Em nossa atividade trouxemos os recursos na Linguagem
Type Script.
Como a aplicação encontra-se modularizada, os principais módulos,
dentre os arquivos com extensão (.ts), são: 
* index.ts : onde se encontra o módulo principal e é responsável por
 instanciar o módulo Main)

* IO.ts : que contém e executa os script que compoem o mini-emulador
que usamos testar os códigos e estruturas que implementamos).

* Aplicacao.ts : que contém uma parte dos relacionamentos de classe
e funções acopladas sob uma classe de mesmo nome. Essa classe
é chamada em algumas funcões do arquivo "IO.ts".

* Voo.ts: arquivo da classe abstrata vôo que contém funções com
Polimorfismo e herança.

<br>

## Para compilar
<br>
Abra o Shell (ao lado do console), digite a instrução abaixo, e 
pressione Enter:

tsc --watch

<br>

## Para executar (testar)
Abra o Shell (ao lado do console), digite a instrução abaixo, e 
pressione Enter:

node dist/index.js
(observe que o teste usa o arquivo 'index.js')
<br>

## Para executar continuamente, digite no Shell:
nodemon dist/NomeDoArquivo.js
<br>
Observação: este recurso não funciona no Replit. Mas funciona bem
na IDE Vscode.


## Descrição das classes

### Aplicação
<br>

A aplicação é uma classe que faz o acoplamento das regras que
definem os objetos e estruturas que atendem as demandas para 
uma determinada companhia aérea.

<br>

### Passageiro
<br>

Para a aplicação, o Passageiro é uma instância de classe
que conteḿ os atributos e métodos necessários para
representar os clientes da Companhia nas regras envolvidas
numa Reserva de passagens aéreas.

<br>

### Voo
<br>

Para a aplicação, é uma classe abstrata que servirá como
molde para os trechos de vôos que pertencem ou que podem
vir a ser incluídas no escolpo.

<br>

### TrechoComum
<br>
É uma classe que herda Vôo, que possui métodos com
polimorfismo e que representa um trecho de vôo que
 não possui subtrechos, sejam eles do tipo
Escala, Conexão ou qualquer um que venha a ser
implementado posteriormente.


<br>

### TrechoComEscala
<br>

É uma classe que herda Vôo, que possui métodos com
polimorfismo e que representa um trecho de vôo que
não possui subtrechos do tipo Escala.

<br>

### Local
<br>

Classe que está contida na classe Voo, onde determina 
o local dos atributos origem e destino.

<br>

### Assento
<br>

Classe que está contida na classe TrechoComum, onde determina 
o assento no array de assentos de TrechoComum.

<br>

### Reserva
<br>

Classe que está contida na classe Passageiro, onde
determina a reserva no array de reservas da classe Passageiro.

<br>

## Aplicação dos pilares de POO

### Abstração
<br>

O pilar de abstração é mais aparente na UML do código, 
onde o cliente tem acesso a Aplicação que é alimentada por
um banco de dados que envia e solicita dados. Através daclasse 
Aplicação  que o cliente consegue realizar diversos métodos, 
como: gerar uma reserva, consultar os vôos disponíveis, 
consultar o detalhamento de uma reserva, prorrogar uma reserva, 
fazer consultas de disponibilidade de vôos, de uma possibilidade 
de viagem, horários e saídas em determinados vôos, disponibilidade 
de determinados assentos em um trecho de vôo, etc.

<br>

### Encapsulamento
<br>

Em todas as classes colocamos os atributos de forma privada 
com seus respectivos getters e setters, onde apenas os métodos
necessários permitiriam o acesso a esses atributos.

<br>

### Herança
<br>

Usa-se o coceito de herança nas classes, Voo, trechoComun 
e trechoComEscala. Onde trechoComun e trechoComEscala são
subclasses da classe Voo.

<br>

### Polimorfismo
<br>

A maior aplicação dos pilares de POO no código foi a de 
polimorfismo. Na classe Aplicação por exemplo, é usado 
o override para sobrescrever os dias, destino e origem, 
já na calsse como um outro exemplo, a classe Local 
está contida na classe Voo, pois, Voo precisa de um 
local para os atribrutos origem e local.

<br>
