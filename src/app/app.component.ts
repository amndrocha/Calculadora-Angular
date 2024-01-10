import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HighlightValueDirective } from './highlight-value.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule, HighlightValueDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';

  operador: string = '+';

  mudaOperador(operador: string) {
    this.operador = operador;
  }

  erro: boolean = false;

  confere(valor: any) {
    if (this.operador == '/' && valor.p2 == 0) {
      this.erro = true;
    } else {
      this.erro = false;
    }
  }
}
