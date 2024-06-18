import prompt from "prompt-sync";
let ler = prompt();

import { menu } from "./menu.js";
import {exibirMensagem } from './exibicao.js'
import { depositar,sacar,saldoFinal,simularInvestimento  } from "./financeiro.js";


let Continue = true 
let saldo = 0

do {
    let opcao = menu()
    
    
    if (opcao == 1) {
        let novoSaldo= depositar(saldo)
        saldo = novoSaldo
    }else if (opcao == 2) {
        let novoSaldo = sacar(saldo)
        saldo = novoSaldo
    }
    else if (opcao == 3) {
        let verSaldo= saldoFinal(saldo)
        console.log(verSaldo);
    }
    else if (opcao == 4) {
        let capitalInicial = Number(ler("Informe a capital inicial para simular o juros: ")
          );
        let tempo = Number(ler("Digite os meses de investimento: "));
        let juros = Number(ler("Digite o juros: "));
        let resultado = simularInvestimento(capitalInicial, tempo,juros )
        console.log(resultado);
    }
    else if (opcao == 5) {
        console.log('fim do progama,\nobrigado(a) por confiar em nós');
        break
    }

} while (Continue);