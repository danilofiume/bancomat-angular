import { Component } from '@angular/core';
import { SaldoService } from '../../services/saldo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prelievo',
  templateUrl: './prelievo.component.html',
  styleUrl: './prelievo.component.css'
})
export class PrelievoComponent {

  constructor(private saldoService: SaldoService){}

  saldo:number = this.saldoService.saldo;
  mostraNuovoSaldo: boolean = false;
  erroreSaldoInsufficiente: boolean = false;

  prelevaForm = new FormGroup({
    prelievo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')],[])
  })

 

  preleva(){
    const importoPrelievo: any = this.prelevaForm.get('prelievo').value
    if (importoPrelievo <= this.saldo) {
      this.saldo -= importoPrelievo;
      this.saldoService.saldo = this.saldo
      this.mostraNuovoSaldo = true; // Mostra il messaggio del nuovo saldo
      this.erroreSaldoInsufficiente = false; // Resettiamo l'eventuale errore precedente
    } else {
      this.erroreSaldoInsufficiente = true; // Mostriamo un messaggio di errore
    }
  }
}
