import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() quotes:Array<object>;
  constructor() { }

  up(quote){
    quote.rating ++;
    this.quotes.sort(function(a,b){return parseFloat(b.rating)-parseFloat(a.rating)});
  }
  down(quote){
    quote.rating --;
    this.quotes.sort(function(a,b){return parseFloat(b.rating)-parseFloat(a.rating)});
  }
  delete(idx){
    if(idx == this.quotes.length-1){
      this.quotes.pop()
    }
    else{
      this.quotes[idx]=this.quotes[this.quotes.length-1];
      this.quotes.pop();
    }
    this.quotes.sort(function(a,b){return parseFloat(b.rating)-parseFloat(a.rating)});
  }
  ngOnInit() { }

}
