import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:Array<object> = [];
  constructor(){  }
  dataFromChild(eventData){
    this.data.push(eventData);
    console.log("From Child to Parent: " + this.data);
  }
}
