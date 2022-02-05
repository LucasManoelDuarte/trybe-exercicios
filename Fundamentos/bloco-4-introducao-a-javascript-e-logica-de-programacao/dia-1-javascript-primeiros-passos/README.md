# DIA 1

Nos exercícios de hoje, você vai fazer quinze pequenos programas.

1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

- Adição (a + b)
- Subtração (a - b)
- Multiplicação (a * b)
- Divisão (a / b)
- Módulo (a % b)

2. Faça um programa que retorne o maior de dois números. 

3. Faça um programa que retorne o maior de três números.

4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne `true` se os ângulos representarem os ângulos de um triângulo e `false` , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

- Um ângulo será considerado inválido se não tiver um valor positivo.

6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Exemplo: `bishop` (bispo) -> `diagonals` (diagonais)

7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

- Porcentagem >= 90 -> A
- Porcentagem >= 80 -> B
- Porcentagem >= 70 -> C
- Porcentagem >= 60 -> D
- Porcentagem >= 50 -> E
- Porcentagem < 50 -> F
- O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

8. Escreva um programa que defina três números em constantes e retorne `true` se pelo menos uma das três for par. Caso contrário, ele retorna `false`.

9. Escreva um programa que defina três números em constantes e retorne `true` se pelo menos uma das três for ímpar. Caso contrário, ele retorna `false` .

10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

 - Atente que, sobre o custo do produto, incide um imposto de 20%.
 - Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
	valorCustoTotal = valorCusto + impostoSobreOCusto
	lucro = valorVenda - valorCustoTotal (lucro de um produto)	
	
11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.


