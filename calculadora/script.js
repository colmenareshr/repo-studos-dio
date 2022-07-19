function calculadora(){
   const operacao = Number(prompt('Escolha uma oparacao:\n 1 - soma (+)\n 2 - Subtracao (-)\n 3 - Multiplicacao (*)\n 4 - Divisao real (/)\n 5 - Divisao Inteira (%)\n 6 - Potenciacao (**)'));

   if (!operacao || operacao >= 7) {
      alert('Erro - operacao invalida');
      calculadora();
   }else {let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira o segundo valor:'));
let resultado;

if (!n1 || !n2) {
   alert('Erro - operacao invalida');
   calculadora();
}else{
   function soma() {
   resultado = n1 + n2;
   alert(`${n1} + ${n2} = ${resultado}`)
   novaOperacao();
}

function subtracao() {
   resultado = n1 - n2;
   alert(`${n1} - ${n2} = ${resultado}`)
   novaOperacao();
}

function multiplicacao() {
   resultado = n1 * n2;
   alert(`${n1} * ${n2} = ${resultado}`)
   novaOperacao();
}

function divisaoReal() {
   resultado = n1 / n2;
   alert(`${n1} / ${n2} = ${resultado}`)
   novaOperacao();
}

function divisaoInteira() {
   resultado = n1 % n2;
   alert(`O resultado da divisao entre ${n1} e ${n2} é igual a ${resultado}`)
   novaOperacao();
}

function poteciacao() {
   resultado = n1 ** n2;
   alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
   novaOperacao();
}

function novaOperacao(){
   let opcao = prompt('Deseja fazer outra operacao?\n 1 - Sim\n 2 - Nao');

   if(opcao == 1){
      calculadora();
   }else if(opcao == 2){
      alert('Ate mais')
   }else{
      alert('Digite uma opcao valida')
      novaOperacao();
   }
}
}

switch (operacao) {
   case 1:
      soma();
      break;
      case 2:
         subtracao();
         break;
         case 3:
            multiplicacao();
            break;
            case 4:
               divisaoReal();
               break;
               case 5:
                  divisaoInteira();
                  break;
                  case 6:
                     poteciacao();
                     break;
}
}

}
calculadora();
