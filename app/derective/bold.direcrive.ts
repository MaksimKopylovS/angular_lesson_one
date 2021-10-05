import {
  Directive,
  ElementRef,
  Renderer2
} from "@angular/core";

@Directive({
  selector: '[bold]'
})

export class BoldDirecrive{

  elementRef: ElementRef;
  renderer: Renderer2;

  constructor( elementRef: ElementRef, renderer: Renderer2) {
    this.elementRef = elementRef;
    // this.elementRef.nativeElement.style.fontWeight = "bold";
    // this.elementRef.nativeElement.style.background = "yellow"

    this.renderer = renderer;
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "blue");
  }

}
