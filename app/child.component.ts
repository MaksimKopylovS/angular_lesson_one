import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Output,
  SimpleChanges, ContentChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit{

  conunterShablon: number = 0;

  @ContentChild("headerContent",{
    static:false
  })
  header: ElementRef|undefined;

  @Input() name: string="Джон";
  @Input() studentName: string = "";
  countS:number = 0;
  @Input()
  set count(count:number){
    if(count<0){
      this.countS = 0;
    }else if (count >100){
      this.countS = 100
    }else {
      this.countS = count;
    }
  }

  get count():number{
    return this.countS;
  }

  @Output() onChanged = new EventEmitter<boolean>();
  change(cunt:boolean){
    this.onChanged.emit(cunt);
  }


  @Input() userName:string = "";
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string){
    this.userName = model;
    this.userNameChange.emit(model);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let propName in changes){
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
    this.log(`onInit`);
  }

  private log (msg:string){
    console.log(msg);
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`);
  }

  incrimentconunterShablon(){
    this.conunterShablon++;
  }

  decrimentconunterShablon(){
    this.conunterShablon--;
  }

  changeContentChild(){
    if(this.header!==undefined){
      console.log(this.header.nativeElement.textContent)
      this.header.nativeElement.textContent = "Пёрт Семенёч";
    }
  }

}
