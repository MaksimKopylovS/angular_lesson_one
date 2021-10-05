import {
  Directive,
  ElementRef, HostListener,
  Renderer2
} from "@angular/core";

@Directive({
  selector: '[hostListener]'
})

export class HostListenerDirective{

  elementRef: ElementRef;
  renderer: Renderer2;

  constructor( elementRef: ElementRef, renderer: Renderer2) {
    this.elementRef = elementRef;
    // this.elementRef.nativeElement.style.fontWeight = "bold";
    // this.elementRef.nativeElement.style.background = "yellow"

    this.renderer = renderer;
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "body");
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "blue");
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.setFontWeight("bold");
    this.setFontColor("yellow")
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.setFontWeight("normal");
    this.setFontColor("white")
  }

  private setFontWeight(val: string){
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
  }

  private setFontColor(color: string){
    this.renderer.setStyle(this.elementRef.nativeElement, "background", color);
  }

}
