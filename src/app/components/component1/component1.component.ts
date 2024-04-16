import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnChanges{
  @Input() componentName: any;
  @Input() input1:any;
  @Input() input2:any;
  @Output() input1Emitter:EventEmitter<any> = new EventEmitter();
  @Output() input2Emitter:EventEmitter<any> = new EventEmitter();
  input1Model: any;
  input2Model: any;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['input1']){
      console.log(changes['input1']['currentValue'])
      this.input1Model = changes['input1']['currentValue']
    }

  }

  onInput1Change($event:string){
    this.input1Emitter.emit($event);
    console.log($event)
  }

  onInput2Change($event:string){
    this.input2Emitter.emit($event);
    //console.log($event)
  }

}
