import prompt from "prompt-sync";
let ler = prompt()
import {exibirMensagem } from './exibicao.js'


export function menu() {
  exibirMensagem(`    escolha uma opção:
      1 - depositar
      2 - sacar
      3 - exibir saldo 
      4 - investimento
      5 - sair/cancelar`)
      
    let opcao = Number(ler())
    return opcao 
    }
  