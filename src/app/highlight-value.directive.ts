import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[highlightValue]',
  standalone: true
})
export class HighlightValueDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() resultado: number = 0;

  @HostListener("DOMCharacterDataModified") logChange() {
    this.resultado = this.element.nativeElement.innerText;
    if (this.resultado < 0) {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', '#F74F69')
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', '#aef8ae')
    }
  }
    
}

