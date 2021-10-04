import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { DataComponent } from './data.component';


@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports:[DataComponent]
})
export class DataModule {

}

