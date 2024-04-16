import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  @Input() component2Input: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['component2Input']['currentValue'])
  }
}
