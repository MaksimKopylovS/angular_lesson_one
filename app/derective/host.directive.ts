import {
  Directive,
  ElementRef, HostBinding,
  Renderer2
} from "@angular/core";

@Directive({
  selector: '[hostHost]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'

  }
})

export class HostDirective{

  element: ElementRef;
  renderer: Renderer2;

  constructor(element: ElementRef, renderer: Renderer2) {
    this.element = element;
    this.renderer = renderer;
  }

  onMouseEnter(){
    this.setFontWeight("bold", "fuchsia")
  }

  onMouseLeave(){
    this.setFontWeight("normal", "beige")
  }

  setFontWeight(shrift: string, background: string){
    this.renderer.setStyle(this.element.nativeElement, "font-weight", shrift);
    this.renderer.setStyle(this.element.nativeElement, "background", background);
  }






}
