import { Component } from '@angular/core';
import { SaldoService } from '../../services/saldo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assegni',
  templateUrl: './assegni.component.html',
  styleUrl: './assegni.component.css'
})
export class AssegniComponent {

  constructor(private saldoService: SaldoService){}

  saldoAssegni: number = this.saldoService.saldo
  mostraNuovoSaldo:boolean = false

  depositaAssegni = new FormGroup({
    assegni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
  })


  depositaA(){
   const importoDepositato:any = parseFloat(this.depositaAssegni.get('assegni').value);
    this.saldoAssegni += importoDepositato
    this.saldoService.saldo = this.saldoAssegni
    this.mostraNuovoSaldo = true
  }

}
