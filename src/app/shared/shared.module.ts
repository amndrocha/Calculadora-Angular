import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalculadoraComponent,
  ],
  exports: [
    CalculadoraComponent
  ]
})
export class SharedModule { }
