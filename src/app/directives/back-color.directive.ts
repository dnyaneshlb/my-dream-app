import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackColor]'
})
export class BackColorDirective {

  constructor(private element:ElementRef) {
      this.element.nativeElement.style.color = "yellow";
  }

  @HostListener('click')
  doSomething(){
    alert("Naviagate to home please." + event);
  }

}
