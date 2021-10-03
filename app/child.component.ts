import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent{
  name="Джордж";
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
  onNameChange(userName: string){
    this.userName = userName;
    this.userNameChange.emit(userName);
  }

}
