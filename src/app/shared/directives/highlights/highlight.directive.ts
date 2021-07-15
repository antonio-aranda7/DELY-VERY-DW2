import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //inyeccion de dependencias
  constructor(
    element: ElementRef
  ) { 
    element.nativeElement.style.backgroundColor = 'red';
  }

}
