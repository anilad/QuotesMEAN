import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myQuote:object = new Quote;
  // quoteCount:number = 0;

  @Input() quotes:Array<object>;
  @Output() myEvent= new EventEmitter();

  constructor() {   }

  onSubmit(form){
    this.myEvent.emit(this.myQuote)
    this.myQuote = new Quote;
    // this.quoteCount ++;
    form.reset();
  }
  ngOnInit() {
  }

}
