import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {ChildComponent} from "./child.component";
import {DataModule} from "./data/data.module";
import {BoldDirecrive} from "./derective/bold.direcrive";
import {HostListenerDirective} from "./derective/hostListener.directive";
import {HostBindingDirective} from "./derective/hostBinding.directive";
import {HostDirective} from "./derective/host.directive";
import {HostBindingNewDirective} from "./derective/hostBindingNew.directive";
import {WhileDirective} from "./derective/while.directive";
import {DataService} from "./service/data.service";
import {LogService} from "./service/log.service";
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BoldDirecrive,
    HostListenerDirective,
    HostBindingDirective,
    HostDirective,
    HostBindingNewDirective,
    WhileDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {

}
