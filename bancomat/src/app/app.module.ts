import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EstrattoContoComponent } from './pages/estratto-conto/estratto-conto.component';
import { PrelievoComponent } from './pages/prelievo/prelievo.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContantiComponent } from './component/contanti/contanti.component';
import { AssegniComponent } from './component/assegni/assegni.component';

@NgModule({
  declarations: [
    AppComponent,
    EstrattoContoComponent,
    PrelievoComponent,
    DepositoComponent,
    NavbarComponent,
    ContantiComponent,
    AssegniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
