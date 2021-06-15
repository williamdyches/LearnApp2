import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase',
  template: `
  <input 
    type="text"  
    (input)="logTitle($event)" 
  />

  <div> 
    {{ title | titlecase }}
  </div>`,
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent implements OnInit {
  title: any = "";
  constructor() { 
  }

  ngOnInit(): void {
  }

  logTitle(event: any){
    this.title = event.target.value;
  }
}
