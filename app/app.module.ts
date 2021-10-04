import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import {ChildComponent} from "./child.component";
import {DataModule} from "./data/data.module";


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
