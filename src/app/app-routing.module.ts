import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';

const routes: Routes = [
  {path:'calculadora' , component:CalculadoraComponent},
  {path:'' , component:CalculadoraComponent},
  {path:'*' , component:CalculadoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
