import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, NgModel, Validators} from "@angular/forms";
import {ChildComponent} from "./child.component";
import {DataComponent} from "./data/data.component";
import {DataService} from "./service/data.service";
import {LogService} from "./service/log.service";
import {UserHttp} from "./model/userhttp";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./service/UserService";
import {UsersServiceService} from "./service/UsersService.service";
export class Phone{
  constructor(public title: string,
              public price: number,
              public company: string) {
  }
}

export class User{
  constructor(public name: string,
              public email: string,
              public phone: string){

  }
}

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
  styleUrls: ['./app.component.css'],
  providers:[UserService, UsersServiceService]
})


export class AppComponent implements OnInit, OnDestroy, OnChanges{

  text: string = "";
  price: number = 0;
  title: string = "";
  company: string ="";
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
  visibilitys:boolean = true;
  condition:boolean = true;
  masiv:string [] = ["Vasy", "Grisha", "Pety", "Seny", "Evpatiy", "Frokl"]
  countNgSwitch: number = 5;

  @ViewChild("elementTextShablon", {
    static:false
  })
  nameParagraph: ElementRef|undefined;
  isVerdana: boolean = true;
  isSegoe: boolean = true;
  conditionWhile: boolean = true;
  dataServis: DataService;
  itemsDataServis: string[] =[];
  itemDataServis: string = "";

  phones: Phone[] = [];
  phone: Phone = new Phone("", 0, "");
  http: HttpClient;
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

  constructor(dataService: DataService, http: HttpClient, userService: UserService, usersService: UsersServiceService) {
    this.log(`constructor`);
    this.dataServis = dataService;
    this.http = http;
    this.userService = userService;
    this.usersService = usersService;
  }


  //ngOnDestroy() - используется для очистки объектов
  ngOnDestroy(): void {
    this.log(`onOnDestroy`);
  }
  //ngOnInit() Применяется для загрузки данных с сервета
  ngOnInit(): void {
    this.log(`onInit`);
    this.itemsDataServis = this.dataServis.getData()
    //получение данных Через Http
    this.http.get('assets/user.json').subscribe((data:any) => this.userHttp = new UserHttp(data.name, data.age));
    this.userService?.getDataUserHttp().subscribe((data:any) => this.userHttpService = new UserHttp(data.name, data.age));
    this.usersService?.getData().subscribe((data:any)=> this.usersService=data["userList"]);
  }

  addDataServiceItem(item:string){
    this.dataServis.addDataItems(item);
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

  toogle(){
    this.visibilitys = !this.visibilitys;
  }

  toggleCondition(){
    this.condition = !this.condition;
  }

  toogleWhile(){
    this.conditionWhile = !this.conditionWhile;
  }

  addPhones(){
    this.phones.push(new Phone(this.title, this.price, this.company))
  }

  addPhone(){
    this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company))
  }

  addPhoneNgModel(title:NgModel, price: NgModel, comp: NgModel){
    console.log(title)
    console.log(price)
    console.log(comp)
  }

  onTitleChange(){
    if(this.phone.title=="нет")
      this.phone.title = "неизвестно";
  }

  onTitleModelChange(){
    if(this.phone.price== 111) {
      this.phone.price = 100500;
    }
  }

  user: User = new User("", "", "");
  addUser(){
    console.log(this.user);
  }

  nameModel: string = "";
  emailModel: string = "";
  phoneModel: string = "";

  submit(form: NgForm){
    console.log(form);
  }

  nameSubmit: string = "";
  emailSubmit: string = "";
  phoneSubmit: string = "";

  submitSubmit(form: NgForm){
    console.log(form.controls.name.value + " " + form.controls.phone.value + " " + form.controls.email.value);
  }
  //<!--Использование рактивных форм альтернативный подход Reactive Forms-->
  myFormReactive: FormGroup = new FormGroup({
    //в  FormControl первым параметром передаётся Значение по умолчанию, вторым параметром валидатор(проверка)
    "userName": new FormControl("Petrivich", [Validators.required, this.userNameValidator]),
    "userEmail": new FormControl("", [Validators.required, Validators.email]),
    //Добавление масива телефонов
    "userPhone": new FormArray([new FormControl("+7", Validators.required)])
  });

  submitReactive(){
    console.log(this.myFormReactive.controls.userName.value + " " + this.myFormReactive.controls.userPhone.value + " " + this.myFormReactive.controls.userEmail.value);
  }
//  Добовление своего валидатора
  userNameValidator(control: FormControl):{[s:string]:boolean}|null{
    if(control.value === "нет"){
      return {"userName":true}
    }
    return null;
  }
  getFormsControls(): FormArray{
    return this.myFormReactive.controls['userPhone'] as FormArray;
  }
  addPhoneMass(){
    (<FormArray>this.myFormReactive.controls["userPhone"]).push(new FormControl("+7", Validators.required));
  }

  //Альтернативыйн подход по созданию форма

// export class AppComponent {
//
//   myForm : FormGroup;
//   constructor(private formBuilder: FormBuilder){
//
//     this.myForm = formBuilder.group({
//
//       "userName": ["Tom", [Validators.required]],
//       "userEmail": ["", [ Validators.required, Validators.email]],
//       "phones": formBuilder.array([
//         ["+7", Validators.required]
//       ])
//     });
//   }
//   getFormsControls() : FormArray{
//     return this.myForm.controls['phones'] as FormArray;
//   }
//   addPhone(){
//     (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7", Validators.required));
//   }
//   submit(){
//     console.log(this.myForm);
//   }
// }


// <!--HTTP взаимодейатвие с сервером HttpClient и отправка запросов-->
// <!--Нужно в package.json добавить в зависимости @angular/common-->
// <!--в appModule нужно добавить HttpClientModule-->

  userHttp: UserHttp | undefined;
  userService: UserService | undefined;
  userHttpService: UserHttp | undefined;
  usersService: UsersServiceService | undefined;

  getUsetService(){
    console.log("$$$$$$$$$$$$$$$$$$$$!!!!!!!!!!"  +"Имя " + this.userHttpService + "Возраст "+this.userHttpService?.age);
  }

}



