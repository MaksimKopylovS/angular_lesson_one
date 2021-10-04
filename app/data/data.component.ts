import {
  Component
} from '@angular/core';

@Component({
  selector: 'data-comp',
  templateUrl: './data.component.html'
})

export class DataComponent{
    message:string = "Welcom DataModule";
}
