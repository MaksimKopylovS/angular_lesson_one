import {
  Directive,
  ElementRef, HostBinding, HostListener, Input,
  Renderer2
} from "@angular/core";

@Directive({
  selector: '[HostBindingNew]'
})

export class HostBindingNewDirective {

  @Input("HostBindingNew") selectedSize = "20px";
  @Input() defaultSize = "16px";

  private fontSize : string;
  private fontWeight = "normal";

  constructor() {
    this.fontSize = this.defaultSize;
  }

  @HostBinding("style.fontSize") get getFrontSize(){
    return this.fontSize;
  }

  @HostBinding("style.fontWeight") get getFontWeight(){
    return this.fontWeight;
  }

  @HostListener("style.cursor") get getCursor(){
    return "ponter";
  }

  @HostListener("mouseenter") onMouseEnter(){
    this.fontWeight = "bold";
    this.fontSize = this.selectedSize;
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.fontWeight = "normal";
    this.fontSize = this.defaultSize;

  }
}
