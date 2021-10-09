import {Injectable, Optional} from "@angular/core";
//Добавление лог сервиса,
import {LogService} from "./log.service";


// @Injectable({providedIn: 'root'}) делает компонент рутовым пример static  в java
@Injectable()
export class DataService{
  data:string [] = ["Iphone", "Samsunge", "Nokia", "Huawei", "LG", "Motorola"]

  //@Optional Делает сервис опишиональным, тоесть если сервви по какимто причинам отвалисят, програма продолжить работу.
  @Optional()
  logService: LogService;

  constructor(@Optional()logService: LogService) {
    this.logService = logService;
  }

  addDataItems(item:string){
    this.data.push(item);
    this.logService.write("Добавлен item " + item);
  }

  getData():string[]{
    this.logService.write("Получение всех элементов");
    return this.data;
  }
}
