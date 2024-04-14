import { Component } from '@angular/core';
import { SaldoService } from '../../services/saldo.service';

@Component({
  selector: 'app-estratto-conto',
  templateUrl: './estratto-conto.component.html',
  styleUrl: './estratto-conto.component.css'
})
export class EstrattoContoComponent {

  constructor(private serviceSaldo : SaldoService){}

  saldo:number = this.serviceSaldo.saldo

}
