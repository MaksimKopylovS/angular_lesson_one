import {Component} from '@angular/core';

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


export class AppComponent {

  text: string = "";
  price: number = 0;
  name = '';
  info = '';
  id: number = 0;
  mandala: string = "Pedro";

  student: string = "Gena";
  count: number = 0;

  red = true
  blue = "blue"
  isRed = "false"

  clics: number = 0;

  nameUser: string = "Mahony"


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
}




