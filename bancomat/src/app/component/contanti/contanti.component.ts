import { Component } from '@angular/core';
import { SaldoService } from '../../services/saldo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contanti',
  templateUrl: './contanti.component.html',
  styleUrl: './contanti.component.css'
})
export class ContantiComponent {

  constructor(private saldoService: SaldoService){}

  saldoContante:number = this.saldoService.saldo;
  mostraNuovoSaldo:boolean = false

  depositaContanti:any = new FormGroup({
    contanti: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
  })


  depositaC(){
   const importoDepositato:any = parseFloat(this.depositaContanti.get('contanti').value);
    this.saldoContante += importoDepositato
    this.saldoService.saldo = this.saldoContante
    this.mostraNuovoSaldo = true
  }

  // depositaC(){
  //   this.saldoService.deposita(this.depositaContanti,this.mostraNuovoSaldo = true, this.saldoService.saldo)
  // }

}
