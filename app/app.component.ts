import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {NgModel} from "@angular/forms";
import {ChildComponent} from "./child.component";
import {DataComponent} from "./data/data.component";

class Item {

  purchase: string;
  price: number;
  done: boolean;
  info: string = "";


  constructor(purchase: string, price: number, done?: boolean) {
    this.purchase = purchase;
    this.price = price;
    if (done == null) {
      this.done = false;
    } else {
      this.done = done;
    }

  }

  addInfo(info: string): void {
    this.info = info
  }

  editDone(done: boolean): void {
    this.done = done;
  }

  toString(): void {
    console.log("Name: " + this.purchase)
  }


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy, OnChanges{

  text: string = "";
  price: number = 0;
  name = '';
  age:number = 77;
  info = '';
  id: number = 0;
  mandala: string = "Pedro";
  student: string = "Gena";
  count: number = 0;
  red = true
  blue = "blue"
  isRed = "false"
  clics: number = 0;
  nameUser: string = "Mahony!!!"
  shablonName:string = "Vasuta";
  @ViewChild(ChildComponent, {
    static: false
  })
  private counterShablonComponent: ChildComponent|undefined;
  nameContentChild: string = "nameContentChild";


  @ViewChild("elementTextShablon", {
    static:false
  })
  nameParagraph: ElementRef|undefined;
  isVerdana: boolean = true;
  isSegoe: boolean = true;

  items: Item[] = [
    new Item("Хлеб", 12, true),
    new Item("Масло", 60),
    new Item("Картофель", 22.6),
    new Item("Сыр", 310)
  ];


  addItem(text: string, price: number) {

    if (text == null || text.trim() == "" || price == null)
      return;
    this.items.push(new Item(text, price));
  }

  addComents(id: number, info: string) {
    if (info != null) {
      this.items[id].addInfo(info);
    }
  }

  onChanged(cunt:boolean){
    cunt == true? this.clics++ : this.clics--;
  }

  constructor() {
    this.log(`constructor`);
  }
  //ngOnDestroy() - используется для очистки объектов
  ngOnDestroy(): void {
    this.log(`onOnDestroy`);
  }
  //ngOnInit() Применяется для загрузки данных с сервета
  ngOnInit(): void {
    this.log(`onInit`);
  }

  private log(msg:string){
    console.log(msg);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let propName in changes){
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  incrimentconunterShablon(){
    this.counterShablonComponent?.incrimentconunterShablon();
  }

  decrimentconunterShablon(){
    this.counterShablonComponent?.decrimentconunterShablon();
  }

  change(){
    if(this.nameParagraph!==undefined){
      console.log(this.nameParagraph.nativeElement.textContent)
      this.nameParagraph.nativeElement.textContent = "hell";
    }
  }

}




