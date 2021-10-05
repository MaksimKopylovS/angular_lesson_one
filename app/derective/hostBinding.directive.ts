import {
  Directive,
  ElementRef, HostBinding, HostListener,
  Renderer2
} from "@angular/core";

@Directive({
  selector: '[hostBind]'
})

export class HostBindingDirective {

  fontWeight = "normal";

  @HostBinding("style.fontWeight") get getFrontWight(){
    return this.fontWeight;
  }

  @HostBinding("style.cursot") get getCursor(){
    return "poiter";
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.fontWeight = "bold"
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.fontWeight = "normal";

  }



}
