import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  input1:any
  ngOnInit(): void {

  }

  onInput1Emit($event:any){
    console.log($event)
    this.input1=$event;
  }
}
