import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Directive({
  selector: '[while]'
})

export class WhileDirective{
  templateRef: TemplateRef<any>;
  viewContainer: ViewContainerRef;

  constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
  }

  @Input() set while(condition: boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }
}
