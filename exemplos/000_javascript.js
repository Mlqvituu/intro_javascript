// o comando abaixo apresenta uma mensagem na tela
console.log("Olá estou programando em javascript");

/*
   comentário que ocupa mais
   de uma linha
   */

   // criação de variável do tipo texto
   let nome = 'Victor hugo costa da silva';
   // criação de variável do tipo numérico (inteiro)
   let idade = 17;
   // criação de variável do tipo numérico (decimal)
   let altura = 1.67;
   // criação de variável do tipo verdadeiro/falso
   let trabalha = true; // true = verdadeiro  | false = falso
   // exemplos de variável de nome composto 
   let corFavorita = 'azul';
   // exemplo de variável do tipo lista de valores
   let cores_favoritas = ['azul', 'preto', 'vermelho'];
   // exemplo de variável que armazena um objeto
   let endereco ={
       'logradouro'       : 'Rua',
       'nome_logradouro'  : 'brasil',
       'numero'           : '22 A',
       'bairro'           : 'ibirapuera',
       'cidade'           :  'tupã'
   };
   let covid;
   let dengue = null;


console.log('Nome: Victor hugo costa da silva ' + nome);
console.log('Idade: 17 ' + idade);
console.log('Altura: 1.67 ' + altura);
console.log('Trabalha: true' + trabalha);
console.log('Cor favorita: Vermelho ' + corFavorita);
console.log('Cor favoritas: Vermelho;azul,preto '+ cores_favoritas[0] + ', ' + cores_favoritas[1] + ', ' + cores_favoritas[2]);
console.log('Endereço: Ibirapuera ' + endereco.logradouro + ' ' + endereco.nome_logradouro + ', ' + endereco.numero + ' - ' + endereco.bairro + ' ' + ' - ' + endereco.cidade);
console.log('Covid:' + covid);
console.log('Dengue: ' + dengue); 
