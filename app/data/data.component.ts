import {Component} from '@angular/core';
import {DataService} from "../service/data.service";
import {LogService} from "../service/log.service";


@Component({
  selector: 'data-comp',
  templateUrl: './data.component.html',
})

export class DataComponent {

  message: string = "Welcom DataModule";

  dataServis: DataService;
  itemsDataServis: string[] = [];
  itemDataServis: string = "";

  constructor(dataService: DataService) {

    this.dataServis = dataService;
  }

  ngOnInit(): void {
    this.itemsDataServis = this.dataServis.getData()
  }

  addDataServiceItem(item:string){
    this.dataServis.addDataItems(item);
  }

}
