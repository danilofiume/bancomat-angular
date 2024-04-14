import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  constructor() { }

  saldo:number = 5000 

  // deposita(depositaMetodo:any,mostraNuovoSaldo:boolean,saldo:number,nomeFormControlName){
  //   const importoDepositato:number = parseFloat(depositaMetodo.get(nomeFormControlName).value);
  //   saldo += importoDepositato
  //   mostraNuovoSaldo = true
  // }

  // volevo provare a gestire i due metodi con un service ma non ci sono riuscito

  
}
