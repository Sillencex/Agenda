import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompromissoHojeComponent } from './Pages/compromisso-hoje/compromisso-hoje.component';
import { CompromissoListaComponent } from './Pages/compromisso-lista/compromisso-lista.component';
import { CompromissoSemanaComponent } from './Pages/compromisso-semana/compromisso-semana.component';

const routes: Routes = [
  { path: '', component: CompromissoHojeComponent },
  { path: 'compromisso-lista', component: CompromissoListaComponent },
  { path: 'compromisso-semana', component: CompromissoSemanaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
