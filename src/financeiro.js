import prompt from 'prompt-sync'
let ler = prompt()

import { exibirMensagem } from "./exibicao.js";




//criei uma função que deposita o saldo
export function depositar(saldo){
    console.clear()
    // apertar a tecla c encerra o progama

     

    let continuar = true
    for(let i = 0;  continuar == true; i++ ){
      console.log('aperte qualquer tecla menos a C se quiser prosseguir: ');
      let input = ler()
      if (input == 'c'){
        console.log('operação canceladada')
        break
      }
      else if(input !== 'c'){ 
        let deposito = Number(ler('Digite o valor a ser depositado : '));
        
        if (deposito >0) {
          saldo += deposito; 
          continuar = false
          return saldo;
        }
        else{ 
          while (deposito <= 0) {
          console.log(`Não é possível depositar um número menor que zero`);
          deposito = Number(ler('Digite o valor a ser depositado: '));}
 //se o depósito for menor ou igual a 0, entrará em um laço de repetição até achar um depósito maior que 0

        }       
    }
  }
}

//criei uma função que saca o saldo
export function sacar(saldo) {
  let continuar = true
  
  for(let i = 0 ; continuar == true ; i++){
      console.clear()
      let input = ler('aperte qualquer tecla menos a C se quiser prosseguir: ')
      if (input == 'c') {
        console.log('operação canceladada')
        break
            // apertar a tecla c encerra o progama

      }
      else if (input!=='c') {
        let saque =Number(ler('quanto você deseja sacar: '))
        
          if(saque > saldo){
       
            console.log('o saque está maior que seu saldo,\noperação cancelada');
            break
            //se o saque for maior que o saldo, entrará em um laço de repetição até achar um saque menor que o saldo
          }else if (saque <= saldo) {
            let novoSaldo = saldo - saque
            return novoSaldo
          }

      }

    }
}


//criei uma função que mostra o saldo atual
export function saldoFinal(saldo ) {
  console.clear()
  let input = ler('aperte qualquer tecla menos a C se quiser prosseguir: ')
  if (input == 'c') {
    console.log('operação cancelada');
        // apertar a tecla c encerra o progama
  }else {
    console.log(`Seu saldo atual é de ${saldo.toFixed(2)}`);
    return saldo.toFixed(2)
  }


}
//criei uma função que simula investimentos baseado em juros compostos
export function simularInvestimento(capitalInicial, tempo,juros ) {
  console.clear()
  let input = ler('aperte qualquer tecla menos a C se quiser prosseguir: ')
  if (input == 'c') {
    console.log('operação cancelada');
        // apertar a tecla c encerra o progama
  }
  else if(input !== 'c'){ 
    let jurosDecimal = juros / 100 + 1;
    let totalFinal = capitalInicial * jurosDecimal ** tempo;
    console.log(`o resultado do investimento foi: ${totalFinal}`);    
  }

}
