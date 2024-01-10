import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightValueDirective } from '../../highlight-value.directive';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, HighlightValueDirective],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  p1: number = 0;
  p2: number = 0;
  resultado: number = 0;

  @Input() operador: string = '+';
  @Output() novoResultado = new EventEmitter();

  getResult() {
    if (this.operador == '+') {
      this.resultado = this.p1 + this.p2;
    }
    if (this.operador == '-') {
      this.resultado = this.p1 - this.p2;
    }
    if (this.operador == '*') {
      this.resultado = this.p1 * this.p2;
    }
    if (this.operador == '/') {
      this.resultado = this.p1 / this.p2;
    }
    
    this.novoResultado.emit({p2: this.p2, resultado: this.resultado});
  }

  ngOnChanges() {
    this.getResult();
  }

}
