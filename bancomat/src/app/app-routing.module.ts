import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstrattoContoComponent } from './pages/estratto-conto/estratto-conto.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ContantiComponent } from './component/contanti/contanti.component';
import { AssegniComponent } from './component/assegni/assegni.component';
import { PrelievoComponent } from './pages/prelievo/prelievo.component';

const routes: Routes = [

  {path: '',
  redirectTo: 'estratto-conto',
  pathMatch: 'full'

  },
  {
    path: 'estratto-conto',
    component: EstrattoContoComponent
  },
  {
    path: 'deposito',
    component: DepositoComponent,
    children: [
      {
        path: 'contanti',
        component: ContantiComponent
      },
      {
        path: 'assegni',
        component: AssegniComponent
      }
    ]
  },
  {
    path: 'prelievo',
    component: PrelievoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
